<?php

   require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

	$page = new \Sleepy\Template('basic');

	// Content
   $page->bind('header', 'Techi Technology - Bio');
   $page->bind('title', 'Techi Technology - ' . !isset($_GET['name']) ? 'Unknown' : $_GET['name'] . '\'s Bio');
   $page->bind('banner', 'Employee Bio');

   $page->bindStart();

   ?>

      <section class="bio">
         <div class="bio__image-container">
            <img class="bio__image" src="<?php if (isset($_GET['img'])) { echo $_GET['img']; } ?>">
         </div>
         <div class="bio__info">
            <h2 class="bio__info--employee-name"><?php if (isset($_GET['name'])) { echo $_GET['name']; } ?></h2>
            <h3 class="bio__info--employee-title"><?php if (isset($_GET['title'])) { echo $_GET['title']; } ?></h3>
            <p class="bio__info--job-description"><?php if (isset($_GET['job-des'])) { echo $_GET['job-des']; } ?> </p>
         </div>
         <div class="bio__back-button">
            <ul>   
               <a href="our_team.php">
                  <li>Back To Our Team</li>
               </a>  
            </ul>
         </div>
      </section>


   <?php

   $page->bindStop('content');

	$page->show();
