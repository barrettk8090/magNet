import { useState } from 'react';

function ContactPost({post, handlePatch}){

    const [isExpanded, setExpanded] = useState(false)
    const [inputText, setInputText] = useState("")
    const [reply, setReply] = useState(name)

    const handleExpand = () => {
        setExpanded(!isExpanded);
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    function submit(e){
        e.preventDefault();
        const newReply = {...post}
        newReply.reply = e.target.name.value;
        handlePatch(newReply)
        setReply(e.target.name.value)

    }

    return(
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg grid shadow-lg">
                <div className="px-6 py-6">
                    <p className="text-2xl font-extrabold"> {post.title}</p>
                    <p className="pt-8"> "{post.message}"</p>
                    <p className="pt-8">  {post.firstName} {post.lastName} </p>
                    <p>  {post.email}</p>
                </div>

                {post.reply ? 
                   <div>
                   <label className="text-sm font-bold px-4 py-12">Response:</label>
                    <div className=" mx-4 my-4 bg-white rounded-xl"> 
                        
                        <p className="px-4 py-4 text-black">{post.reply}</p>
                        
                    </div> 
                    </div>: <></>}

                <div className={`grid grid-cols-1 place-items-end ${isExpanded ? 'expanded' : ''}`}>
                        <button onClick={()=> handleExpand()} className="mr-4 mb-4">{isExpanded ? "X" : "Reply +"}</button>
                        {isExpanded && (
                            <div className="w-full px-4">
                                <form onSubmit={submit}>
                                    <textarea name={"name"} className="rounded-lg resize-none w-full py-1 px-1"
                                    value={inputText}
                                    onChange={handleInputChange}
                                    placeholder='Add your response here...'/>
                                    
                                    <button className="my-2 grid grid-cols-1 justify-items-end">Submit Reply</button>
                                </form>
                            </div>
                        )}
                </div>
            </div>
            )
    
}

export default ContactPost