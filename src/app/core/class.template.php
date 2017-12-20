<?php
namespace Sleepy;

/**
 * Provides templating functionality
 *
 * ## Usage
 *
 * ### PHP file: *index.php*
 *
 * <code>
 *     require_once('include/sleepy.php');
 *
 *     $page = new Template('templates/default.tpl');
 *     $page->bind('title', 'Sleepy Mustache');
 *     $page->bind('header', 'Hello world!');
 *     $page->show();
 * </code>
 *
 * ### Template file: *\app\templates\default.tpl*
 *
 * <code>
 *     <html>
 *         <head>
 *             <title>{{ title }}</title>
 *         </head>
 *         <body>
 *             <h1>{{ header }}</h1>
 *             <p>This page has been viewed {{ hits }} times.</p>
 *         </body>
 *     </html>
 * </code>
 *
 * ## Changelog
 *
 * ### Version 1.7
 * * Updated private prefix (_) for consistency
 * * Updated documentation
 *
 * ### Version 1.6
 * * No longer dependant on Hooks Module
 *
 * @todo add #if
 *
 * @date June 18, 2016
 * @author Jaime A. Rodriguez <hi.i.am.jaime@gmail.com>
 * @version 1.7
 * @license  http://opensource.org/licenses/MIT
 */

class Template {
	/**
	 * The extension for template files
	 *
	 * @var string
	 */
	public $extension = '.tpl';

	/**
	 * The template directory
	 *
	 * @var string
	 */
	public $directory;

	/**
	 * The template file
	 *
	 * @var string
	 * @protected
	 */
	protected $_file;

	/**
	 * The data bound to the template
	 *
	 * @var mixed[]
	 * @protected
	 */
	protected $_data = array();

	/**
	 * The constructor
	 *
	 * @param string $template The name of the template
	 * @param string $basedir  The base directory for template files
	 */
	public function __construct($template='', $basedir='') {
		if (class_exists('\Sleepy\Hook')) {
			\Sleepy\Hook::addAction('template_start');
		}

		// If they didn't pass a basedir then try the default
		if ($basedir == '') {
			if (!defined('DIRBASE')) {
				define('DIRBASE', $_SERVER['DOCUMENT_ROOT'] . '/app');
			}

			$this->directory = DIRBASE . '/templates/';
		} else {
			$this->directory = $basedir;
		}

		if (!empty($template)) {
			$this->setTemplate($template);
		}
	}

	/**
	 * Does the template exist?
	 *
	 * @param  string $file Name of template
	 * @return Bool         True if template exists
	 * @private
	 */
	private function _checkTemplate($file) {
		if (empty($file)) {
			throw new \Exception('Template file has not been set.');
		}

		// Check that the directory is set correctly
		if (!file_exists($this->directory)) {
			throw new \Exception("Template directory '{$this->directory}' does not exists.");
		}

		// Check if the template exists in the directory
		if (!file_exists($this->directory . $file . $this->extension)) {
			throw new \Exception("Template '{$this->directory}{$file}{$this->extension}' does not exist.");
		}

		return true;
	}

	/**
	 * Given a path, the function returns a piece of $arr. For example
	 * 'name.first' will return $arr['name']['first']
	 *
	 * @param  array  $arr  An array to search using the $path
	 * @param  string $path A path representing the dimensions of the array
	 * @return mixed        A sub-array or string
	 * @private
	 */
	private function _assignArrayByPath($arr, $path) {

		$keys = explode('.', $path);

		if (is_array($keys)) {
			foreach ($keys as $key) {
				if (array_key_exists($key, $arr)) {
					$arr = $arr[$key];
				} else {
					return false;
				}
			}
		}

		return $arr;
	}

	/**
	 * Renders the template
	 *
	 * @param  string $template The template to render
	 * @param  array $data      The data bound to the template
	 * @return string           The rendered template
	 * @private
	 */
	private function _render($template, $data) {
		// Process the includes
		if (preg_match('/{{\s*#include\s.*}}/', $template, $include)) {
			$index = trim(str_replace('{{', '', str_replace('}}', '', $include[0])));
			if (file_exists($this->directory . str_replace('#include ', '', $index) . $this->extension)) {
				ob_start();
				include($this->directory . str_replace('#include ', '', $index) . $this->extension);
			} else {
				ob_clean(); // clear buffer in $this->show();
				throw new \Exception($this->directory . str_replace('#include ', '', $index) . $this->extension . ' doesn\'t exist. Cannot include file.');
			}
			$template = str_replace($include[0], $this->_render(ob_get_clean(), $data), $template);

			return $this->_render($template, $data);
		}

		// Process the #each blocks
		if (preg_match_all('/{{\s?#each.+?}}(?:(?>[^{}]+)|(?R))*{{\s?\/each\s?}}/ism', $template, $loops)) {
			// For every #each
			foreach ($loops[0] as $value) {
				// Reset rendered data
				$rendered = '';

				// Stores the values of <for> and <in> into $forin
				preg_match('/{{\s?#each\s(?<for>\w+) in (?<in>.*?)\s?}}/', $value, $forin);

				$forin['in'] = strtolower($forin['in']);

				// Removes the each loop
				$new_template = preg_replace('/{{\s?#each.*?}}/s', '', $value, 1);
				$new_template = preg_replace('/{{\s?\/each\s?}}$/s', '', $new_template, 1);

				// get the array based on the <in>
				$in = $this->_assignArrayByPath($data, $forin['in']);

				// for each changelog
				if (is_array($in[0])) {

					// Allow hooks to edit the data
					if (class_exists('\Sleepy\Hook')) {
						$in = \Sleepy\Hook::addFilter('template_each_array', array($in));
					}

					$iterator = 0;

					foreach ($in as $new_data) {
						$iterator++;

						if (class_exists('\Sleepy\Hook')) {
							$new_data = \Sleepy\Hook::addFilter('template_each', array($new_data));
							$new_data = \Sleepy\Hook::addFilter('template_each_' + $forin['for'], array($new_data));
						}

						$new_data['iterator'] = $iterator;
						$new_data['zebra'] = ($iterator % 2) ? 'odd' : 'even';

						// Make the $new_data match the <for>
						$new_data[$forin['for']] =  $new_data;

						// render the new template
						$rendered = $rendered . $this->_render($new_template, $new_data);
					}
				} else {
					// render the new template
					$rendered = $rendered . $this->_render($new_template, $data);
				}

				$template = str_replace($value, $rendered, $template);
			}
		}

		if (class_exists('\Sleepy\Hook')) {
			$template = \Sleepy\Hook::addFilter('prerender_template', $template);
		}

		// Find all the single placeholders
		preg_match_all('/{{\s?(.*?)(\s.*?)?\s?}}/', $template, $matches);

		// For each replace with a value
		foreach (array_unique($matches[0]) as $index => $placeholder) {
			$key = strtolower($matches[1][$index]);

			$arguments = array(
				$this->_assignArrayByPath($data, $key)
			);

			# We trim so that there are no extra blank arguments
			$arguments = array_merge($arguments, explode(' ', trim($matches[2][$index])));

			$boundData = $arguments;

			if (class_exists('\Sleepy\Hook')) {
				$boundData = \Sleepy\Hook::addFilter('render_placeholder_' . strtolower($key), $boundData);
			}

			// Some filters might take arrays and return only a single value, if
			// hooks are disabled, lets return only this single value
			if (is_array($boundData)) {
				$boundData = $boundData[0];
			}

			$template = str_replace($placeholder, $boundData, $template);
		}

		return $template;
	}

	/**
	 * Parses the template after it's been setup
	 *
	 * @return string The rendered template
	 * @private
	 */
	private function _parseTemplate() {
		$this->_checkTemplate($this->_file);

		// Render template file
		ob_start();
		include($this->directory . $this->_file . $this->extension);
		$template = $this->_render(ob_get_clean(), $this->_data);

		if (class_exists('\Sleepy\Hook')) {
			$template = \Sleepy\Hook::addFilter('render_template_' . $this->_file, $template);
			$template = \Sleepy\Hook::addFilter('render_template', $template);
		}

		return $template;
	}

	/**
	 * Sets the template to use.
	 *
	 * @param [type] $file [description]
	 */
	public function setTemplate($file) {
		if ($this->_checkTemplate($file)) {
			$this->_file = $file;
		}
	}

	/**
	 * Binds data to the template placeholders
	 *
	 * @param  string $placeholder   The template placeholder
	 * @param  mixed  $value         The value that replaced the placeholder
	 */
	public function bind($placeholder, $value) {
		$placeholder = strtolower($placeholder);

		if (!is_array($value)) {
			if (class_exists('\Sleepy\Hook')) {
				$value = \Sleepy\Hook::addFilter('bind_placeholder_' . $placeholder, $value);
			}
		}

		$this->_data[trim($placeholder)] = $value;
	}

	/**
	 * Starts a buffer that will bind data to the template placeholders. The
	 * buffer will capture anything you output until $this->bindStop()
	 */
	public function bindStart() {
		ob_start();
	}

	/**
	 * Stops the buffer that binds data to the template placeholders
	 *
	 * @param  string $placeholder   The template placeholder
	 */
	public function bindStop($placeholder) {
		$content = ob_get_clean();

		if (class_exists('\Sleepy\Hook')) {
			$content = \Sleepy\Hook::addFilter('bind_placeholder_' . $placeholder, $content);
		}

		$this->_data[trim(strtolower($placeholder))] = $content;
	}

	/**
	 * Gets the data for a placeholder
	 *
	 * @param  string $placeholder The placeholder
	 * @return mixed               The data stored in the placeholder
	 */
	public function get($key) {
		$value = $this->_data[$key];

		if (class_exists('\Sleepy\Hook')) {
			\Sleepy\Hook::addFilter('template_get_' . $key, $value);
		}

		return $value;
	}

	/**
	 * Shows the rendered template
	 */
	public function show() {
		echo $this->_parseTemplate();
	}

	/**
	 * Retrieves the rendered template
	 */
	public function retrieve() {
		return $this->_parseTemplate();
	}
}