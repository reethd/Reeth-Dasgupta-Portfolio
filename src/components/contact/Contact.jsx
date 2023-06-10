import { useState, } from "react";
import "./contact.scss"
import axios from "axios"



export default function Contact() {

const formId ="p03Xdldx"
const formSparkUrl = `https://submit-form.com/${formId}`



const [message, setMessage] = useState(false)
const [formState, setFormState] = useState({
  email: '',
  name: '',
  message: '',
});
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage(true); 
  await postSubmission();
}

const postSubmission = async () => {
  const payload = {
    ...formState
  };

  try {
    await axios.post(formSparkUrl, payload);
    await setFormState({
      email: '',
      name: '',
      message: '',
    });
  }
  catch(error) {
    console.log(error);
  }
}

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contactImg.png"/>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}> 
          <input type="email" placeholder="Email" value={formState.email} onChange={(e)=>setFormState({...formState, email: e.target.value})}/>
          <input type="text" placeholder="Name/Company" value={formState.name} onChange={(e)=>setFormState({...formState, name: e.target.value})}/>
            <textarea placeholder="Message" value={formState.message} onChange={(e)=>setFormState({...formState, message: e.target.value})}></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks for reaching out!</span>}
        </form>
      </div>
    </div>
  )
}
