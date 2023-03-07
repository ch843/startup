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
  
From HTML/simon assignments this week:
I learned more about svg! To use a qudratic formula to shape the 4 parts of the simon game.
Use span to make certain elements more stylable in the future
Honestly it was super useful to test my knowledge, to see the website and build it myself! It showed what I know and what I need to learn more about (ie. svg)
I feel more confident with buttons, tables, and input boxes now too!

<hr />
<h1>CSS</h1>

<b>Flex</b><br/>
Three values: grow, shrink, basis. So you can override the default (0, 1, auto) and write your own numbers. Think of it as flex: [max] [min] [ideal size];<br />
sup tag means superscript, &reg = keyboard shortcut for circle R<br/>
flex: 1 calc(100vh - 110px); calculates height, 100% of viewport's height minus 110 pixels<br/>
flex: 1; = flex-grow 1, flex-shrink 1, flex-basis 0<br/>
  
<hr />
<h1>JavaScript</h1>
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
  
<b>Promise notes</b>
(1)Promise object: new Promise((resolve, reject) => {}<br/>
(2)2 options: resolve or reject<br/>
(3) 2 outcomes = fulfilled or rejected<br/>
(4) then = when fulfilled, catch = when rejected, finally = always called<br/>
  
<b>Async/Await notes</b>
(this all goes in a function)<br/>
(1) async always returns a promise!!<br/>
(2) fetch = 'api'(3) put "await" in front of fetch, and basically it stalls js until the promise of fetch is resolved<br/>
(4) assign the value of the response to a variable<br/>
(5)then do await and a .json function to get response [.json also returns a promise]<br/>
(6) use .then when returning a async function <br/>
(7) non-blocking, meaning it allows JS to continue on with the code without stopping the program <br/>
(8) with .catch, err is an error object. so you can use the .message method to display the error message
