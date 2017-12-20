<?php

require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

$page = new \Sleepy\Template('basic');

// Content
$page->bind('header', 'Techi Technology - Contact');
$page->bind('banner', 'Contact Us');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   $message = new \Module\Mailer\Message();
   $fromName = empty($_POST['name']) ? 'Anonymous' : $_POST['name'];
   $fromEmail = empty($_POST['email']) ? 'unknown@unknown.com' : $_POST['email'];
   $messageBody = empty($_POST['message']) ? 'No Message' : $_POST['message'];

   $message->addTo("sbaird@envivent.com");
   $message->addFrom($fromEmail);
   $message->addSubject('New Techi Technology Message - From: ' . $fromName);
   $message->msgText($messageBody);
   $message->send();
}

$page->bindStart();

?>

   <main class="contact">
      <form class="form" action="" method="POST">
         <fieldset>
            <div class="form__group">
               <input class="form__input" type="text" name="name" id="name" placeholder="Your Name" required>
               <label class="form__label" for="name">Your Name</label>
            </div>
            
            <div class="form__group">
               <input class="form__input" type="email" name="email" id="email" placeholder="Your Email" required>
               <label class="form__label" for="email">Your Email</label>
            </div>

            <div class="form__group">
               <textarea rows=1 class="form__input" name="message" id="message" placeholder="Your Message"></textarea required>
               <label class="form__label" for="message">Your Message</label>
            </div>
            

            <button class="form__submit" type="submit">Send</button>
         </fieldset>
      </form>


   </main>

<?php

$page->bindStop('content');

$page->show();
