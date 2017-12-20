<?php

require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

$page = new \Sleepy\Template('basic');

// Content
$page->bind('header', 'Techi Technology - Our Team');
$page->bind('title', 'Techi Technology - Our Team');
$page->bind('banner', 'Our Team');

$image_data = json_decode(file_get_contents("https://techi.envivent.com/images.json"));
$employee_images = $image_data->employees;

$page->bindStart();

?>

   <main class="our-team">

<?php

foreach ($employee_images as $employee):
   
   ?>

      <article class="card team-image-<?php echo ((int)$employee->id - 1) ?>">
         <a class="card__profile-link" href="<?php echo "employee_bio.php?img=https://techi.envivent.com/employees/" . $employee->full . "&id=" . $employee->id ?>">
            <div class="card__overlay">
               <h2 class="card__overlay--employee-name"></h2>
               <h3 class="card__overlay--employee-title"></h3>
               <p class="card__overlay--job-description"></p>
            </div>
         </a>
         <img class="card__image" src="https://techi.envivent.com/employees/<?php echo $employee->full ?>">
      </article>

   <?php
   
endforeach;

?>
   <article class="card">
      <div class="contact-card">
         <a href="contact.php">
            <h3 class="contact-card__text">Contact Us!</h3>
            <img class="card__image" src="https://techi.envivent.com/employees/<?php echo $employee_images[0]->full ?>">
         </a>
      </div>
   </article>
   </main>

<?php

$page->bindStop('content');

$page->show();
