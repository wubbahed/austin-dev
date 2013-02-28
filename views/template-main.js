exports.build = function(title, pagetitle, content, _extra) {
 return ['<!doctype html>',
  '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
  
  ' <meta name="viewport" content="width=device-width, initial-scale=1.0">',
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
   				'<div id="Stage" class="EDGE-41346455">',
				'</div>',
      		'</div>',
   		'</div>',
    '</div>',
  '<div id="content" class="container">{content}</div>\n',
  '</div>',
  
  ' <script src="/assets/js/jquery.js"></script>',
 
  '  <script src="/assets/js/bootstrap-transition.js"></script>',
  ' <script src="/assets/js/bootstrap-modal.js"></script>',
  '  <script src="/assets/js/bootstrap-dropdown.js"></script>',
  '  <script src="/assets/js/bootstrap-scrollspy.js"></script>',
  '  <script src="/assets/js/bootstrap-tab.js"></script>',
  '  <script src="/assets/js/bootstrap-tooltip.js"></script>',
  '  <script src="/assets/js/bootstrap-popover.js"></script>',
  '  <script src="/assets/js/bootstrap-button.js"></script>', 
  '  <script src="/assets/js/bootstrap-collapse.js"></script>',
//  ' <script src="/assets/js/planb_edge.js"></script>',
 // ' <script src="/assets/js/planb_edgeActions.js"></script>',
 ' <script src="/assets/js/planb_edgePreload.js"></script>',
  ' <script src="/assets/js/navigator.js"></script>',

  '</html>'
 ].join('\n')
 .replace(/\{title\}/g, title)
 .replace(/\{pagetitle\}/g, pagetitle)
 .replace(/\{content\}/g, content)
 .replace(/\{extra\}/g, _extra);
}
 