# startup
Provo is full of individuals looking for fun dates. They want food, but not too expensive. They want a sit down restaurant while still having a casual, fun atmosphere to talk and have fun. Tacos check these boxes. They are simple, versatile, and loved by many. But how do you know which taco restaurant to go to? There are so many options. Let's Talk Tacos is here to help. This idea sparked from a simple date idea: try one taco from five different places and rank them. This app picks a random taco place within a specified mile radius to go and try. The app also displays additional information, such as address, photos, and menu. You can then add the place to your list, and generate another to try as well. After eating at the restuarant, the app prompts you to rank it based on taste, atmosphere, and overall satisfaction. An easy, effective date idea for taco enthusiasts, friends, and couples!

Key features: taco place generator from (1) location in certain mile radius, (2) certain day, and (3) time (to ensure the restaurant is open), "My List" with taco shops generated previously, rating feature, and global rankings for a specific location (zip code)

Figma mock-up for start-up site: https://www.figma.com/file/9inwjzlnKq9IMz19VILiLX/Provo-Taconator?node-id=0%3A1&t=zcVpCTbmeK1kjWtb-1

IP address: http://18.222.239.166/
ssh -i "cassidy-keypair.pem" ubuntu@ec2-18-222-239-166.us-east-2.compute.amazonaws.com

http://provotaconator.com/

Bootstrap icons: npm i bootstrap-icons (I downloaded them on Figma)
  
Google fonts (options): Manrope, Quicksand, Domine, Lora
  
Color palette: https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF
  
Font sizing: Page title	96 px, Titles	48-20 px, Text	16 px, Secondary text	14 px, Input	16 px
  
Paragraph length: max-width 35em

color: #DEAB51

<hr />
  
From HTML/simon assignments this week:
I learned more about svg! To use a qudratic formula to shape the 4 parts of the simon game.
Use span to make certain elements more stylable in the future
Honestly it was super useful to test my knowledge, to see the website and build it myself! It showed what I know and what I need to learn more about (ie. svg)
I feel more confident with buttons, tables, and input boxes now too!

<hr />

From CSS assignments this week:
flex has three values: grow, shrink, basis. So you can override the default (0, 1, auto) and write your own numbers. Think of it as flex: [max] [min] [ideal size];
<sup> means superscript, &reg = keyboard shortcut for circle R
flex: 1 calc(100vh - 110px); calculates height, 100% of viewport's height minus 110 pixels
flex: 1; = flex-grow 1, flex-shrink 1, flex-basis 0
  
<hr />

JavaScript DOM Notes
  (1) getElementbyID (or by class or tag name)
  (2) Can turn HTML collections into arrays with Array.from(variable storing the class or tag)- then can use the forEach func with array
  (3) document.querySelector - only can select one element
  (4) querySelectorAll - grabs every element in parameter (can do several elements), returns in collection form
  (5) text editor- append to a string is +=
  (6) .innerHTML you can replace it all or append with += '<h tag for example
  (7) .cloneNode(true) - duplicates node for later use
  (8) querySelector attached to a DOM traverse function searches only in that scope
  (9) .addEventListener(any event- W3 schools, call back function- what happens when event happens) OR "onclick" directly into html
  
JavaScript Promise notes
(1)Promise object: new Promise((resolve, reject) => {}
(2)2 options: resolve or reject
(3) 2 outcomes = fulfilled or rejected
(4) then = when fulfilled, catch = when rejected, finally = always called
  
JavaScript Async/Await notes
(this all goes in a function) (1) async always returns a promise!! (2) fetch = 'api'(3) put "await" in front of fetch, and basically it stalls js until the promise of fetch is resolved (4) assign the value of the response to a variable (5)then do await and a .json function to get response [.json also returns a promise] (6) use .then when returning a async function (7) non-blocking, meaning it allows JS to continue on with the code without stopping the program (7) with .catch, err is an error object. so you can use the .message method to display the error message (9)
