import React from 'react';
import '../App.css';
import CommonBanner from './CommonBanner';
// import { useForm } from 'react-hook-form'; // npm

// with redux form 
// import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
// import store from "./ContactForm/store";
// import showResults from "./ContactForm/showResults";
// import SyncValidationForm from "./ContactForm/SyncValidationForm";
// redux form END 


function Contact() {
  // const { register, handleSubmit, errors } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  return (
    <div className="App common">
      <CommonBanner   
      heading="Navbar example"  
      content="This example is a quick exercise to illustrate how fixed to top navbar works.
       As you scroll, it will remain fixed to the top of your browser’s viewport."
       linkBtn="/contact"
       buttonName="Contact Us"
       image="https://designoweb.com/wp-content/themes/designowebchild/img/service
       /banner_backimg.svg"/>
 {/* <Provider store={store}> */}
 {/* https://redux-form.com/8.2.2/docs/migrationguide.md/ */}
 {/* https://codesandbox.io/s/pQj03w7Y6?file=/index.js:348-562 */}
    {/* <div style={{ padding: 15 }}>
      <h2>Synchronous Validation</h2>
      <SyncValidationForm onSubmit={showResults} />
      <Values form="syncValidation" />
    </div>
  </Provider> */}
    </div>
  );
}

export default Contact;