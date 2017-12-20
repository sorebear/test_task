<?php

   require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

	$page = new \Sleepy\Template('contact');

	// Content
   $page->bind('header', 'Techi Technology - Contact');
   $page->bind('banner', 'Contact Us');


	$page->show();
