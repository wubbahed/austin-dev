/**
 * @author Ian MacDowell
 */
exports.build = function( content) {
 return [
  '<div id="content" class="container">{content}</div>\n',
  '<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=taco&amp;aq=&amp;sll=30.265684,-97.740104&amp;sspn=0.011435,0.013196&amp;t=h&amp;ie=UTF8&amp;hq=taco&amp;hnear=&amp;ll=30.265684,-97.740104&amp;spn=0.011435,0.013196&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=taco&amp;aq=&amp;sll=30.265684,-97.740104&amp;sspn=0.011435,0.013196&amp;t=h&amp;ie=UTF8&amp;hq=taco&amp;hnear=&amp;ll=30.265684,-97.740104&amp;spn=0.011435,0.013196" style="color:#0000FF;text-align:left">View Larger Map</a></small>'
 
 ].join('\n')
 .replace(/\{content\}/g, content);
}
 