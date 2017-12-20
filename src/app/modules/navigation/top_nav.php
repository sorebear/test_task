<?php 

namespace Module\TopNav;

function render() {
   $topNavData = '{
      "pages": [
         {
            "title": "Home",
            "link": "index.php"
         },
         {
            "title": "Meet the team",
            "link": "our_team.php"
         },
         {
            "title": "Contact Us",
            "link": "contact.php"
         }
      ]
   }';

   $topNav = new \Module\Navigation\Builder($topNavData);
   return $topNav->show();
}

\Sleepy\Hook::applyFilter(
	'render_placeholder_top_nav',
	'\Module\TopNav\render'
);
