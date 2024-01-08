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
