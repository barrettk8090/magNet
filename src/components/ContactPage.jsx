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

    function addContactPost(newContactPost){
        fetch("http://localhost:3000/contact-posts",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newContactPost)
          })
          .then(r=>r.json())
          .then(data=> setPosts([...posts,data]))
        }

    return(
        <>
        <ContactForm addContactPost={addContactPost}/>
        <ContactWall posts={posts}/>
        </>
    )

}

export default ContactPage