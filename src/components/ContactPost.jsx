function ContactPost({post}){

    return(
            <div className="bg-sky-950 rounded-lg">
                <div className="px-6 py-6">
                <p className="text-2xl font-extrabold"> {post.title}</p>
                <p className="pt-8"> "{post.message}"</p>
                <p className="pt-8">  {post.firstName} {post.lastName} </p>
                <p>  {post.email}</p>
                <button className="mt-4">Reply →</button>
                </div>
            </div>
            )
    
}

export default ContactPost