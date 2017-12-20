<!DOCTYPE html>
<!--[if lt IE 9 ]>	  <html class="ie ie8 {{ urlClass }}" lang="en"> <![endif]-->
<!--[if IE 9 ]>		  <html class="ie ie9 {{ urlClass }}" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="{{ urlClass }}" lang="en"><!--<![endif]-->
<head>
	<!-- META DATA -->
	<meta charset="utf-8">
	<meta name="keywords" content="{{ keywords }}">
	<meta name="description" content="{{ description }}">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{ title }}</title>

	<!-- FRAME BUSTING -->
	<style>html {display:none}</style>
	<script>(self == top) ?	document.documentElement.style.display = 'block' : top.location = self.location;</script>

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="/css/main.css">

	<!-- JAVASCRIPT -->
	<script src="<?= URLBASE ?>js/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
	<script async src="<?= URLBASE ?>js/main.bundle.js"></script>

	<!-- FAVICON -->
	<link rel="apple-touch-icon" href="<?= URLBASE ?>favicon.png">
	<link rel="icon" href="<?= URLBASE ?>favicon.png">
	<!--[if IE]><link rel="shortcut icon" href="<?= URLBASE ?>favicon.ico"><![endif]-->
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="<?= URLBASE ?>favicon.png">

	<!-- SHIV -->
	<!--[if lt IE 9]>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
	<![endif]-->
</head>
<body>
	<div class="wrapper">
		<header class="header">
        <div class="header__logo-container">
			<a href="index.php">
            	<img class="header__logo" src="images/logo.png" alt="techi-technology logo">
			</a>
        </div>
		<input class="header__mobile-menu--checkbox" id="mobile-menu" type="checkbox"></input>
        <label class="header__mobile-menu--label" for="mobile-menu">
			<i class="fa fa-bars header__mobile-menu--icon" aria-hidden="true"></i>
			<i class="fa fa-times header__mobile-menu--icon" aria-hidden="true"></i>
		</label>
        <nav class="header__nav">
            {{ top_nav }}
        </nav>
    </header>
	<section class="banner">
        <img class="banner__image" src="images/banner.png">
        <h1 class="banner__title">{{ banner }}</h1>
    </section>