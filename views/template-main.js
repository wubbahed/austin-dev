exports.build = function(title, pagetitle, content, _extra, logo_path) {
	
 return ['<!doctype html>',
  '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
  ' <meta http-equiv="pragma" content="no-cache" />',
' <meta http-equiv="cache-control" content="no-cache" />',
' <meta http-equiv="expires" content="-1" />',
' <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no">',
' <meta name="apple-mobile-web-app-capable" content="yes" />',
'<meta property="og:title" content="Plan B - R/GA"/>',
'<meta property="og:url" content="http://planb.rga.com"/>',
'<meta name="description" content="Turn up to your SXSW session and it&#39;s a sell out? \nOr maybe 5 minutes in, you realize it&#39;s not what you thought it was?\n Then you need R/GA Austin&#39;s Plan B!\n The web app will serve up a curated selection of sessions and panels based on your location so you can quickly find a back up. \nAt night, the app does the same, but for bars. \nR/GA&#39;s Plan B ensures you make the most of every digital and beer soaked hour of SXSW.">',
'<meta property="og:image" content="http://planb.rga.com/assets/img/touch-icon-ipad-retina.png"/>',
' <link rel="apple-touch-icon" href="assets/img/touch-icon-iphone.png" />',
'<link rel="apple-touch-icon" sizes="72x72" href="assets/img/touch-icon-ipad.png" />',
'<link rel="apple-touch-icon" sizes="114x114" href="assets/img/touch-icon-iphone-retina.png" />',
'<link rel="apple-touch-icon" sizes="144x144" href="assets/img/touch-icon-ipad-retina.png" />',
  '<link href="/assets/css/bootstrap.css" rel="stylesheet"/>',
  '<style>body {padding-top: 60px;}</style> ',
  '<link href="/assets/css/bootstrap-responsive.css" rel="stylesheet"/>\n',
  '<link rel="stylesheet" href="/assets/style.css" />',
  '{extra}',
  '</head>',
  '<body>',
  '<div class="overall-container">',
 '<div class="navbar">',
 '     <div class="navbar-inner">',
 '      <div class="container">',
   			'<div class="top-bar">',
     			'<div class="brand">{pagetitle}</div>',
     			'</div>',
   				'<div id="Stage">',
   					'<div id="logo_holder">',
						'<img id="logo_base" src="assets/img/{logo_path}"/>',
						'<img id="logo_slash" src="assets/img/slash.png"/>',
					'</div>',
				'</div>',
      		'</div>',
   		'</div>',
    '</div>',
  '<div id="content" class="container">{content}</div>\n',
  '</div>',
  
 // ' <script src="/assets/js/jquery.js"></script>',
	//'<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>',
	'  <script src="/assets/js/jquery.js"></script>',
//  '  <script src="/assets/js/bootstrap-transition.js"></script>',
  //	' <script src="/assets/js/bootstrap-modal.js"></script>',
 // '  <script src="/assets/js/bootstrap-dropdown.js"></script>',
 // '  <script src="/assets/js/bootstrap-scrollspy.js"></script>',
 // '  <script src="/assets/js/bootstrap-tab.js"></script>',
  //	'  <script src="/assets/js/bootstrap-tooltip.js"></script>',
 // '  <script src="/assets/js/bootstrap-popover.js"></script>',
 
  	//'  <script src="/assets/js/bootstrap-button.js"></script>', 
	//'  <script src="/assets/js/jquery.color.js"></script>',
  	//'  <script src="/assets/js/jgestures.min.js"></script>',
   // '  <script src="/assets/js/jquery.event.swipe.js"></script>',
   // '  <script src="/assets/js/iscroll-lite.js"></script>',
	'  <script src="/assets/js/jquery.easing.1.3.js"></script>',
  	'  <script src="/assets/js/navigator.js"></script>',
  	'<script type="text/javascript">',

  	'  var _gaq = _gaq || [];',
   	' _gaq.push(["_setAccount", "UA-39113254-1"]);',
   	' _gaq.push(["_trackPageview"]);',

  	'  (function() {',
  	'    var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;',
   	'   ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";',
   	'   var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);',
  	'  })();',

  	'</script>',
//'  <script src="/assets/js/planb_edgePreload.js"></script>',
  '</html>'
 ].join('\n')
 .replace(/\{title\}/g, title)
 .replace(/\{pagetitle\}/g, pagetitle)
 .replace(/\{content\}/g, content)
 .replace(/\{extra\}/g, _extra)
 .replace(/\{logo_path}/g, logo_path);
}
 