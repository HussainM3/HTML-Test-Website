import React from 'react';
import { createRoot } from 'react-dom/client';

// - JSX is syntax extension for JavaScript
//     - used with react
//     - syntax extension means not valid javascript (web browsers cant read it)
//     - jsx compiler translates jsx into javascript before it reaches web browser

// example of a JSX element being saved in a variable
const navBar = <nav>I am a nav bar</nav>;

// example of several JSX elements being stored in an object
const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };

// some JSX elements with attributes:
<a href='http://www.example.com'>Welcome to the Web</a>;

const title = (
    <h1 id='title'>
    Introduction to React.js: Part I
    </h1>
);

// JSX expression must have exactly one outermost element
    // This Works:
    // const paragraphs1 = (
    //     <div id="i-am-the-outermost-element">
    //       <p>I am a paragraph.</p>
    //       <p>I, too, am a paragraph.</p>
    //     </div>
    //   );

      
    // This doesn't:
    // const paragraphs2 = (
    //     <p>I am a paragraph.</p> 
    //     <p>I, too, am a paragraph.</p>
    //   );


// Rendering JSX:

//  React relies on two things to render: what content to render and where to place the content
const container = document.getElementById('app')
    // document reoresents webpage
    // getElementById() method of document gets Element representing HTML element with  passed in id (app)

const root = createRoot(container)
    // use createRoot() from react-dom/client library ro create react root
    // represents where to place the content part of React rendering

root.render(<h1>Hello world</h1>)
    // uses render method of root
    // represents what to render part of React rendering
    // can also pass in variable here

// React root's render() method only updates DOM elements that changed:
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
root.render(hello, document.getElementById('app'));

// This won't do anything at all:
root.render(hello, document.getElementById('app'));

// class in html is className in jsx

// Fine in JSX:
// <br />

// NOT FINE AT ALL in JSX:
// <br>

// Add curly braces to treat jsx code like javascript code:
<h1>{2 + 3}</h1>

// common to use vars and object properties to set attributes
const sideLength = "200px";
const panda1 = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
  }; 
  
  const panda2 = (
    <img 
      src={pics.panda} 
      alt="Lazy Panda" />
  );
  
  const owl = (
    <img 
      src={pics.owl} 
      alt="Unimpressed Owl" />
  );
  
  const owlCat = (
    <img 
      src={pics.owlCat} 
      alt="Ghastly Abomination" />
  ); 
  
// event listener created as attributes, and value should be a function (clickAlert)

function clickAlert() {
alert('You clicked this image!');
}

<img onClick={clickAlert} />

// if statements can't be used in jsx but can be in javascript
if (coinToss() == 'heads'){
img = <img src={pics.kitty} />
} else {
img = <img src={pics.doggy} />
};

// can also use ternary conditionals and && operators
    // x ? y : z
    // {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}

// can use .map() to create a list of JSX elements from an array
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>