<?php

   require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

	$page = new \Sleepy\Template('contact');

	// Content
   $page->bind('header', 'Techi Technology - Bio');
   $page->bind('banner', 'Employee Bio');

   $page->bindStart();

   ?>

      <section class="bio">
         <div class="bio__image-container">
            <img class="bio__image" src="https://techi.envivent.com/employees/<?php echo $_GET['picture'] ?>">
         </div>
         <div class="bio__info">
            <h2 class="bio__info__name"><?php if (isset($_GET['name'])) { echo $_GET['name']; } ?></h2>
            <h3 class="bio__info__title"><?php if (isset($_GET['title'])) { echo $_GET['title']; } ?></h3>
            <p class="bio__info__job-description"><?php if (isset($_GET['job-description'])) { echo $_GET['job-description']; } ?> </p>
         </div>
         <div class="bio__back-button">
            <a href="our_team.php">
               <p>Back To Our Team</p>
            </a>
         </div>
      </section>


   <?php

   $page->bindStop('content');

	$page->show();
