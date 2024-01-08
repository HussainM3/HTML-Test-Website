import React from 'react';

function Product(props) {
//   if (props.isCheap) // prop doesnt have to be string and displayed
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>
  );
//   else{}
}

export default Product;

// // defining eventhandler in js
// function Example() {
//   function handleEvent() {
//     alert(`I am an event handler.
//       If you see this message,
//       then I have been called.`);
//   }
//   return (
//       <h1 onClick={handleEvent}>
//         Hello world
//       </h1>
//     );
// }





// // sending an event handler:
// import React from 'react';
// import Button from './Button';

// function Talker() { // event listener should use naming convention "handle_" (e.g handleTalk)
//   function talk() {
//     let speech = '';
//     for (let i = 0; i < 10000; i++) {
//       speech += 'blah ';
//     }
//     alert(speech);
// 	}
//   return <Button talk={talk}/>; // after event handler defined, you just set it as the value
// }

// export default Talker;