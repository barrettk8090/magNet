import { useState } from 'react';

function ContactPost({post}){

    const [isExpanded, setExpanded] = useState(false)
    const [inputText, setInputText] = useState("")

    const handleExpand = () => {
        setExpanded(!isExpanded);
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    return(
            <div className="bg-sky-950 rounded-lg grid shadow-lg">
                <div className="px-6 py-6">
                    <p className="text-2xl font-extrabold"> {post.title}</p>
                    <p className="pt-8"> "{post.message}"</p>
                    <p className="pt-8">  {post.firstName} {post.lastName} </p>
                    <p>  {post.email}</p>
                </div>
                <div className={`grid grid-cols-1 place-items-end ${isExpanded ? 'expanded' : ''}`}>
                        <button onClick={()=> handleExpand()} className="mr-4 mb-4">{isExpanded ? "X" : "Reply +"}</button>
                        {isExpanded && (
                            <div className="w-full px-4">
                                <form>
                                    <textarea className="rounded-lg resize-none w-full py-1 px-1"
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