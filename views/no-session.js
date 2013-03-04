/**
 * @author Ian MacDowell
 */
exports.build = function(title, content, pagetitle) {
	
 return ['<!doctype html>',
  '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
  ' <meta http-equiv="pragma" content="no-cache" />',
' <meta http-equiv="cache-control" content="no-cache" />',
' <meta http-equiv="expires" content="-1" />',
  ' <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no">',
' <meta name="apple-mobile-web-app-capable" content="yes" />',
' <link rel="apple-touch-icon" href="touch-icon-iphone.png" />',

'<link rel="apple-touch-icon" sizes="72x72" href="assets/img/touch-icon-ipad.png" />',
'<link rel="apple-touch-icon" sizes="114x114" href="assets/img/touch-icon-iphone-retina.png" />',
'<link rel="apple-touch-icon" sizes="144x144" href="assets/img/touch-icon-ipad-retina.png" />',
  '<link href="/assets/css/bootstrap.css" rel="stylesheet"/>',
  '<style>body {padding-top: 60px;}</style> ',
  '<link href="/assets/css/bootstrap-responsive.css" rel="stylesheet"/>\n',
  '<link rel="stylesheet" href="/assets/style.css" />',
  '<link rel="stylesheet" href="/assets/css/preload.css" />',
 
  '</head>',
  '<body>',
  '<div class="overall-container">',
 '<div class="navbar">',
 '     <div class="navbar-inner">',
 '      <div class="container">',
   			'<div class="top-bar">',
     			
     			'</div>',
   				'<div id="Stage">',
   					'<div id="logo_holder">',
						'<img id="logo_base" src="assets/img/planb_logo.png"/>',
						'<img id="logo_slash" src="assets/img/slash.png"/>',
					'</div>',
					  '<div id="content" class="container">{content}</div>\n',
				'</div>',
			'<div class="brand">{pagetitle}</div>',
      		'</div>',
      			
   		'</div>',
    '</div>',
  
  '</div>',
  
 // ' <script src="/assets/js/jquery.js"></script>',
	//'<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>',
	'  <script src="/assets/js/jquery.js"></script>',
//  '  <script src="/assets/js/bootstrap-transition.js"></script>',
  	' <script src="/assets/js/bootstrap-modal.js"></script>',
 // '  <script src="/assets/js/bootstrap-dropdown.js"></script>',
 // '  <script src="/assets/js/bootstrap-scrollspy.js"></script>',
 // '  <script src="/assets/js/bootstrap-tab.js"></script>',
  	'  <script src="/assets/js/bootstrap-tooltip.js"></script>',
 // '  <script src="/assets/js/bootstrap-popover.js"></script>',
  	'  <script src="/assets/js/bootstrap-button.js"></script>', 
	'  <script src="/assets/js/jquery.color.js"></script>',
  	'  <script src="/assets/js/jquery.event.move.js"></script>',
    '  <script src="/assets/js/jquery.event.swipe.js"></script>',
	'  <script src="/assets/js/jquery.easing.1.3.js"></script>',
  	//'  <script src="/assets/js/navigator.js"></script>',
//'  <script src="/assets/js/planb_edgePreload.js"></script>',
  '</html>'
 ].join('\n')
 .replace(/\{title\}/g, title)
 
 .replace(/\{content\}/g, content)
  .replace(/\{pagetitle\}/g, pagetitle)
 
}
 