import ContactForm from "./ContactForm";
import ContactWall from "./ContactWall";
import {useState, useEffect} from 'react';

function ContactPage(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/contact-posts")
        .then(r=>r.json())
        .then(data=>setPosts(data))
        }
      ,[])

    return(
        <>
        <ContactForm/>
        <ContactWall posts={posts}/>
        </>
    )

}

export default ContactPage