exports.build = function(title, pagetitle, content) {
 return ['<!doctype html>',
  '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
  
  ' <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '<link href="/assets/css/bootstrap.css" rel="stylesheet"/>',
  '<style>body {padding-top: 60px;}</style> ',
  '<link href="/assets/css/bootstrap-responsive.css" rel="stylesheet"/>\n',
  '<link rel="stylesheet" href="/assets/style.css" />',
  '</head>',
  '<body>',
  
 '<div class="navbar navbar-inverse navbar-fixed-top">',
 '     <div class="navbar-inner">',
  '      <div class="container">',
   '       <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">',
    '        <span class="icon-bar"></span>',
     '       <span class="icon-bar"></span>',
      '      <span class="icon-bar"></span>',
       '   </button>',
     '     <a class="brand" href="#">{pagetitle}</a>',
     '     <div class="nav-collapse collapse">',
     '       <ul class="nav">',
     '         <li class="active"><a href="#">Home</a></li>',
     '         <li><a href="#about">About</a></li>',
      '        <li><a href="#contact">Contact</a></li>',
      '      </ul>',
      '    </div>',
      '  </div>',
     ' </div>',
    '</div>',
  '<div id="content" class="container">{content}</div>\n',
  
  
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
    ' <script src="/assets/js/navigator.js"></script>',

  '</html>'
 ].join('\n')
 .replace(/\{title\}/g, title)
 .replace(/\{pagetitle\}/g, pagetitle)
 .replace(/\{content\}/g, content);
}
 