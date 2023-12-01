import ContactPost from "./ContactPost"

function ContactWall({posts}){

    const displayPosts = posts.map((post)=> {
        return (
            <ContactPost key={post.id} post={post} /> 
        )
    })
    
    return(

        <div>
            {displayPosts}
        </div>
    )
}

export default ContactWall