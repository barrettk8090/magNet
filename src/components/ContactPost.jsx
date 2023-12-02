function ContactPost({post}){

    return(
            <div>
                <p>Message Title: {post.title}</p>
                <p> Message: {post.message}</p>
                <p> Poster's Name: {post.firstName} {post.lastName} </p>
                <p> Poster's Email: {post.email}</p>
                <button>Reply →</button>
            </div>
            )
    
}

export default ContactPost