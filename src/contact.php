<?php

require_once(((@include_once('Webkit/init.php')) ? $docRoot : $_SERVER['DOCUMENT_ROOT']) . '/app/core/sleepy.php');

$page = new \Sleepy\Template('basic');

// Content
$page->bind('header', 'Techi Technology - Contact');
$page->bind('title', 'Techi Technology - Contact');
$page->bind('banner', 'Contact Us');

class messages extends \Module\DB\Record {
   public $table = 'messages';
}

$u = new messages();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      
      $fromName = empty($_POST['txt_sender_name']) ? 'Anonymous' : $_POST['name'];
      $fromEmail = empty($_POST['txt_sender_email']) ? 'unknown@unknown.com' : $_POST['email'];
      $msgText = empty($_POST['txt_message']) ? 'No Message' : $_POST['message'];

      $u->columns['sender_name'] = $fromName;
      $u->columns['sender_email'] = $fromEmail;
      $u->columns['message'] = $msgText;
      $u->save();

      // Mailer
      // $email = new \Module\Mailer\Message();
      // $email->addTo(EMAIL_TO);
      // $email->addFrom($fromEmail);
      // $email->addSubject('New Techi Technology Message - From: ' . $fromName);
      // $email->msgText($msgText);
      // $email->send();

}

$page->bindStart();

?>

      <main class="contact">
            <form class="form" action="" method="POST">

            <?php 

            $u->form(array(
                  'sender_name' => 'Your Name',
                  'sender_email' => 'Your Email',
                  'message' => 'Your Message'
            ), '', true);
            ?>

            </form>
      </main>

<?php

$page->bindStop('content');

// $dbg = new \Module\DB\Grid('messages', 'SELECT * FROM messages');

// $dbg->exclude(array('id'));

// $dbg->sortable(array(
//       'id'
// ));

// $dbg->show();

$page->show();
