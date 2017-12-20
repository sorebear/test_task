<?php

   require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

	$page = new \Sleepy\Template('contact');

	// Content
   $page->bind('header', 'Techi Technology - Our Team');
   $page->bind('banner', 'Our Team');

   $image_data = json_decode(file_get_contents("https://techi.envivent.com/images.json"));
   $employee_images = $image_data->employees;
   
   $page->bindStart();
   ?>

      <section class="our-employees">
   
   <?php

   foreach ($employee_images as $employee):
      
      ?>

         <a href="<?php echo "employee_bio.php?picture=" . $employee->full . "&id=" . $employee->id ?>">
            <div class="our-employees__photo-container">
               <img class="our-employees__photo" src="https://techi.envivent.com/employees/<?php echo $employee->full ?>">
            </div>
         </a>

      <?php
      
   endforeach;

   ?>

      </section>
   
   <?php

   $page->bindStop('content');

	$page->show();
