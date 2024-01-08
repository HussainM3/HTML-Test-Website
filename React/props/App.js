import React from 'react';
import Product from './Product'

function App() {
  return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" isCheap = {false} />;
}

// can also call Product component
// function App() {
//     return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
// }

export default App;



// // recieving an eventhandler as prop (as expected)
// import React from 'react';

// function Button(props) {
//   return (
//     // just set the onClick to the talk function (called talk from child js file)
//     <button onClick={props.talk}>  
//       Click me!
//     </button>
//   ); // prop should use naming convention "on_" e.g (onClick)
// }

// export default Button;


// props.children returns everything between opening and closing tags
// e.g look at:
// Example 1
{/* <BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton /> */}
// In Example 1, <BigButton>‘s props.children would equal the text, “I am a child of BigButton.”
// In Example 2, <BigButton>‘s props.children would equal a <LilButton /> component.
// In Example 3, <BigButton>‘s props.children would equal undefined.