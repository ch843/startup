# startup
Provo is full of individuals looking for fun dates. They want food, but not too expensive. They want a sit down restaurant while still having a casual, fun atmosphere to talk and have fun. Tacos check these boxes. They are simple, versatile, and loved by many. But how do you know which taco restaurant to go to? There are so many options. Let's Talk Tacos is here to help. This idea sparked from a simple date idea: try one taco from five different places and rank them. This app picks a random taco place within a specified mile radius to go and try. The app also displays additional information, such as address, photos, and menu. You can then add the place to your list, and generate another to try as well. After eating at the restuarant, the app prompts you to rank it based on taste, atmosphere, and overall satisfaction. An easy, effective date idea for taco enthusiasts, friends, and couples!<br/>

Key features: taco place generator from (1) location in certain mile radius, (2) certain day, and (3) time (to ensure the restaurant is open), "My List" with taco shops generated previously, rating feature, and global rankings for a specific location (zip code)<br/>

Figma mock-up for start-up site: https://www.figma.com/file/9inwjzlnKq9IMz19VILiLX/Provo-Taconator?node-id=0%3A1&t=zcVpCTbmeK1kjWtb-1<br/>

IP address: http://18.222.239.166/
ssh -i "cassidy-keypair.pem" ubuntu@ec2-18-222-239-166.us-east-2.compute.amazonaws.com<br/>

http://provotaconator.com/<br/>

Bootstrap icons: npm i bootstrap-icons (I downloaded them on Figma)<br/>
Google fonts (options): Manrope, Quicksand, Domine, Lora<br/>
Color palette: https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF<br/>
Font sizing: Page title	96 px, Titles	48-20 px, Text	16 px, Secondary text	14 px, Input	16 px<br/>
Paragraph length: max-width 35em<br/>
color: #DEAB51<br/>
<hr />

<h1>DNS</h1>
point DNS record to another DNS → CNAME<br/>
(also know what A is → points to an IP address)<br/>
subdomain = whole link (ex: cs260.cs.byu.edu) but byu.edu = domain<br/>

<hr /> 
<h1>HTML</h1>
<b>HTML tags</b><br/>
3 main parts of body: header, main, footer<br/>
section aside- section of unrelated content to main html<br/>
p = paragraph<br/>
table= tr is table row, th is table head, td is contents under header<br/>
ol/ul- ordered or unordered list, li is the list items<br/>
div is division<br/>
span<br/>

<b>Input</b>
form=Input container and submission	<form action="form.html" method="post"><br/>
fieldset=Labeled input grouping	<fieldset> ... </fieldset><br/>
input=Multiple types of user input	<input type="" /><br/>
select=Selection dropdown	<select><option>1</option></select><br/>
optgroup=Grouped selection dropdown	<optgroup><option>1</option></optgroup><br/>
option=Selection option	<option selected>option2</option><br/>
textarea=Multiline text input	<textarea></textarea><br/>
label=Individual input label	<label for="range">Range: </label><br/>
output=Output of input	<output for="range">0</output><br/>
meter=Display value with a known range	<meter min="0" max="100" value="50"></meter><br/>
<b>Input types</b><br/>
text Single line textual value<br/>
password Obscured password<br/>
email	Email address<br/>
tel	Telephone number<br/>
url	URL address<br/>
number	Numerical value<br/>
checkbox	Inclusive selection<br/>
radio	Exclusive selection<br/>
range	Range limited number<br/>
date	Year, month, day<br/>
datetime-local	Date and time<br/>
month	Year, month<br/>
week	Week of year<br/>
color	Color<br/>
file	Local file<br/>
submit	button to trigger form submission<br/>
  
  <b>Media</b>
  img= alt, src<br/>
  audio= controls, src<br/>
  video= controls, source, src<br/>
  internam media= svg, canvas<br/>

<hr />
<h1>CSS</h1>
  <b>Selectors</b><br/>
  # is an ID, . is a class<br/>
  <b>Combinators</b><br/>
  You can do div.header (class of header in div)<br/>
  Other examples:<br/>
  Descendant, A list of descendants,	body section,	Any section that is a descendant of a body<br/>
  Child,	A list of direct children,	section > p,	Any p that is a direct child of a section<br/>
  General sibling,	A list of siblings,	p ~ div,	Any p that has a div sibling<br/>
  Adjacent sibling,	A list of adjacent sibling,	p + div,	Any p that has an adjacent div sibling<br/>
  <b>Pseudoselectors</b><br/>
  Example: section:hover<br/>
  
  <b>Commonly used units</b><br/>
  px	The number of pixels<br/>
  pt	The number of points (1/72 of an inch)<br/>
  in	The number of inches<br/>
  cm	The number of centimeters<br/>
  %	A percentage of the parent element<br/>
  em	A multiplier of the width of the letter m in the parent's font<br/>
  rem	A multiplier of the width of the letter m in the root's font<br/>
  ex	A multiplier of the height of the element's font<br/>
  vw	A percentage of the viewport's width<br/>
  vh	A percentage of the viewport's height<br/>
  vmin	A percentage of the viewport's smaller dimension<br/>
  vmax	A percentage of the viewport's larger dimension<br/>
  <br/>
  4 types of color callers: keyword, RGB hex, RBG function, hsl<br/>
  <b>Animation</b>
  @keyframes demo {<br/>
  from {font-size: 0vh;}<br/>
  95% {font-size: 21vh;}<br/>
  to {font-size: 20vh;}}<br/>
  
  <b>Grid</b>
  display: grid or inline-grid<br/>
  grid-template-rows(or columns)<br/>
  fr unit does fraction of grid container<br/>
  also can do grid-auto-rows(or columns)<br/>
  can specificy start and end on rows and cols, num = line nums<br/>
  
<b>Flex</b><br/>
Three values: grow, shrink, basis. So you can override the default (0, 1, auto) and write your own numbers. Think of it as flex: [max] [min] [ideal size];<br />
sup tag means superscript, &reg = keyboard shortcut for circle R<br/>
flex: 1 calc(100vh - 110px); calculates height, 100% of viewport's height minus 110 pixels<br/>
flex: 1; = flex-grow 1, flex-shrink 1, flex-basis 0<br/>
  display: flex<br/>
  flex direction: row (default) row-reverse column column-reverse<br/>
  flex wrap: nowrap (default) wrap wrap-reverse<br/>
  flex flow: flex-direction flex-wrap<br/>
  justify content:(main axis y) flex-start (default) flex-end center space-between space-around space-evenly<br/>
  align items:(cross axis x) flex-start flex-end center baseline stretch (default)<br/>
  align self: (overrides items for 1 item) flex-start flex-end center baseline stretch<br/>
  align content: (Aligns a flex container's lines within the flex container when there is extra space on the cross-axis.) flex-start flex-end center space-between space-around space-evenly stretch (default)<br/>
  order:(order of items) <integer> (... -1, 0 (default), 1, ...)<br/>
  
  <b>Remember</b>content → Pals Before Marriage (padding, border, margin)<br/>
  @import through Google Fonts<br/>
  
<hr />
<h1>JavaScript</h1>
  <b>Function syntax</b>
  function syntax options:<br/>
  function f(x) {}<br/>
  const f = function(){}<br/>
  arrow function syntax<br/>
  
  <b>Array functions</b><br/>
  
  <b>Arrow functions</b><br/>
  () => logic<br/>
  anonymous(parameters) brackets logic<br/>
  can put brackets around logic, if going to be one line<br/>
  
  <b>Regular expressions (letters)</b>
  
<b>DOM Notes</b><br/>
  (1) getElementbyID (or by class or tag name)<br/>
  (2) Can turn HTML collections into arrays with Array.from(variable storing the class or tag)- then can use the forEach func with array<br/>
  (3) document.querySelector - only can select one element<br/>
  (4) querySelectorAll - grabs every element in parameter (can do several elements), returns in collection form<br/>
  (5) text editor- append to a string is +=<br/>
  (6) .innerHTML you can replace it all or append with += '<h tag for example<br/>
  (7) .cloneNode(true) - duplicates node for later use<br/>
  (8) querySelector attached to a DOM traverse function searches only in that scope<br/>
  (9) .addEventListener(any event- W3 schools, call back function- what happens when event happens) OR "onclick" directly into html<br/>
  Things to note (1) (querySelector (so it would be the first element it finds of whatever you specify) and querySelectorAll)<br/>
  (2) textContent sets the child text for an element<br/>
  
<b>Promise notes</b><br/>
(1)Promise object: new Promise((resolve, reject) => {}<br/>
(2)2 options: resolve or reject<br/>
(3) 2 outcomes = fulfilled or rejected<br/>
(4) then = when fulfilled, catch = when rejected, finally = always called<br/>
(5) From review:<br/>
  10000 = 10 seconds<br/>
  try and catch<br/>
  then, error, finally<br/>
  await blocks execution until it happens (await func())<br/>
  
<b>Async/Await notes</b>
(this all goes in a function)<br/>
(1) async always returns a promise!!<br/>
(2) fetch = 'api'(3) put "await" in front of fetch, and basically it stalls js until the promise of fetch is resolved<br/>
(4) assign the value of the response to a variable<br/>
(5)then do await and a .json function to get response [.json also returns a promise]<br/>
(6) use .then when returning a async function <br/>
(7) non-blocking, meaning it allows JS to continue on with the code without stopping the program <br/>
(8) with .catch, err is an error object. so you can use the .message method to display the error message<br/>
  
<hr/>
  <h1>JSON</h1>
  notation- “key value” and index (has to have key value in double quotes and data)<br/>
  ex. {“x”:3}<br/>
  
 <hr/>
  <h1>Command line</h1>
  chmod +x deploy.sh (making executable)<br/>
  sudo deploy.sh<br/>
  ls -la (-la lists details)<br/>
  ssh deploy.sh (ssh-ing into server)<br/>
