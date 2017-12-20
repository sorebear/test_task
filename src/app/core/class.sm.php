<?php
namespace Sleepy;

/**
 * Provides sleepyMUSTACHE core bootstrap functionality
 *
 * ## Usage
 *
 * <code>
 *   \Sleepy\SM::initialize();
 * </code>
 *
 * ## Changelog
 *
 * ### Version 1.1
 * * Updated private previx (_) for consistency
 * * Updated documentation
 * * Added teamsite fixes
 *
 * ### Version 1.0
 * * Initial commit
 *
 * @date July 18, 2016
 * @author Jaime A. Rodriguez <hi.i.am.jaime@gmail.com>
 * @version 1.1
 * @license http://opensource.org/licenses/MIT
 */
class SM {
	private static $_instance;

	public static $is_initialized = false;

	/**
	 * Prevent class from being cloned
	 */
	private function __clone() {}

	/**
	 * The constructor is private to ensure we only have one sleepy_preprocess
	 * and sleepy_postprocess hooks.
	 */
	private function __construct() {
		require_once('class.debug.php');

		// Enable sessions
		session_start();
		
		// Teamsite fixes
		if (@include_once('Webkit/init.php')) {
			define('TEAMSITE', true);
			$_SERVER['DOCUMENT_ROOT'] = $docroot;
		} else {
			$WHG_DB_HOST = "";
			$WHG_DB_USER = "";
			$WHG_DB_PASSWD = "";
			$WHG_DB_REPLDB = "";
		}

		// If we are not setup yet, forward the user to the setup page
		if (@!include_once($_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . 'settings.php')) {
			include_once('settings.php');
		}

		require_once('class.hooks.php');
		require_once('class.template.php');
		require_once('class.router.php');

		ob_start();
		\Sleepy\Hook::addAction('sleepy_preprocess');

		// Send the encoding ahead of time to speed up rendering
		header('Content-Type: text/html; charset=utf-8');
	}

	public function __destruct() {
		echo \Sleepy\Hook::addFilter('sleepy_render', ob_get_clean());
		\Sleepy\Hook::addAction('sleepy_postprocess');
	}

	/**
	 * Initialized the SM class
	 */
	public static function initialize() {
		if (!self::$is_initialized) {
			self::$is_initialized = true;
			self::$_instance = new SM;
		}
	}

	/**
	 * Checks if we are in the live environment
	 * @return boolean True if we are live
	 */
	public static function isLive() {
		return (ENV == 'LIVE');
	}

	/**
	 * Checks if we are in the staging environment
	 * @return boolean True if we are in the staging environment
	 */
	public static function isStage() {
		return (ENV == 'STAGE');
	}

	/**
	 * Checks if we are in the development environment
	 * @return boolean True if we are in in the development environment
	 */
	public static function isDev() {
		return (ENV != 'LIVE' && ENV != 'STAGE');
	}

	/**
	 * Checks if the current site matches a URL
	 * @param  string  $str The URL to match with current site
	 * @return boolean      true if there was a match
	 */
	public static function isENV($str) {
		foreach (explode(',' , $str) as $url) {
			if (stripos($_SERVER['SERVER_NAME'], trim($url)) !== false)
				return true;
		}

		return false;
	}
}