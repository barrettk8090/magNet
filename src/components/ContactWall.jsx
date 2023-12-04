import ContactPost from "./ContactPost"

function ContactWall({posts}){

    const displayPosts = posts.map((post)=> {
        return (
            <ContactPost key={post.id} post={post} /> 
        )
    })
    
    return(

        <div className="mt-10 mx-6 md:mx-16 lg:mx-40 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            {displayPosts}
        </div>
    )
}

export default ContactWall