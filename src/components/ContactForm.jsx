import {useState} from "react";

function ContactForm({addContactPost}){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [messageTitle, setMessageTitle] = useState("");
    const [message, setMessage] = useState(""); 

    function submit(e){
        e.preventDefault();

        const newContactPost = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message,
            title: messageTitle
        }
    addContactPost(newContactPost)
        console.log(newContactPost)
    
    }

    return (
        <div>
            <h1 className= "text-9xl pt-14 font:display">Contact Us</h1>
            <p>Use the form below to leave us a public comment on our wall, and we'll reply directly to you here. </p>
            <form onSubmit={submit}>
            <input className= ""placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}></input>
            <input placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}></input>
            <input placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="Message Title" onChange={(e)=>setMessageTitle(e.target.value)}></input>
            <input placeholder="Write your message here..." onChange={(e)=>setMessage(e.target.value)}></input>
            <button>Submit Your Message</button>
            </form>
        </div>
    )
}

export default ContactForm