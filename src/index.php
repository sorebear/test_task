<?php
	require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

	$page = new \Sleepy\Template('homepage');

	// SEO
	$page->bind('title', 'Techi Technology');
	$page->bind('description', 'This is the description');
	$page->bind('keywords', 'techi technology, staff');

	// Content
	$page->bind('header', 'Techi Technology - Home');
	$page->bind('banner', 'Meet The Team');
	$page->bind('cards', array(
		array(
			"team-image-0"
		),
		array(
			"team-image-1"
		),
		array(
			"team-image-2"	
		)
	));

	$page->show();
