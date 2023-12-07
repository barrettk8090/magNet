import ContactForm from "./ContactForm";
import ContactWall from "./ContactWall";
import {useState, useEffect} from 'react';

function ContactPage(){

    const [posts, setPosts] = useState([])
    const [checkUpdate, setCheckUpdate] = useState(true)

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

        function handlePatch(newObj){
          fetch(`http://localhost:3000/contact-posts/${newObj.id}`,{
              method:'PATCH',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify(newObj)
            })
            .then(r=> {
              setCheckUpdate(!checkUpdate)
            })
          }

    return(
        <>
        <ContactForm posts={posts} addContactPost={addContactPost} />
        <ContactWall posts={posts} handlePatch={handlePatch}/>
        </>
    )

}

export default ContactPage