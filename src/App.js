import React from 'react';
import 'bulma/css/bulma.css';

import Signup from './signup/Signup';


// const App = () => {
//   return (
//     <div className= 'App'>
//      <Navbar />
//      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
//      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />   
//      {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
//       <CoolButton isSmall isSuccess>Button 2</CoolButton>    */}
//       <CoolButton />

//     </div>
//   )
// };

const App = () => {
  return ( 
    <div> 
      <Signup /> 
    </div>
)
  
};


export default App;
