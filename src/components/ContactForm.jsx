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
        <div className="mt-14">
            <div className="flex justify-center">
            <h1 className= "pt-14 text-9xl font:display ">Contact Us</h1>
            </div>
            <p className="mx-6 md:mx-16 lg:mx-40">Use the form below to leave us a public comment on our wall, and we'll reply directly to you here. </p>
            <form onSubmit={submit}>

                <div className="mt-10 mx-6 md:mx-16 lg:mx-40 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-white">First Name</label>
                        <input className= "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  onChange={(e)=>setFirstName(e.target.value)}></input>
                    </div>
            
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-white">Last Name</label>
                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  onChange={(e)=>setLastName(e.target.value)}></input>
                    </div>


                    <div className="sm:col-span-6">
                        <label className="block text-sm font-medium leading-6 text-white">Email Address</label>
                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>

                    <div className="sm:col-span-6">
                        <label className="block text-sm font-medium leading-6 text-white">Message Title</label>
                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  onChange={(e)=>setMessageTitle(e.target.value)}></input>
                    </div>

                    <div className="sm:col-span-6">
                        <label className="block text-sm font-medium leading-6 text-white">Message</label>
                        <input className="h-36 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Write your message to us here..." onChange={(e)=>setMessage(e.target.value)}></input>
                        
                    </div>
                    <button className="sm:col-span-2 md:col-span-2 lg:col-span-2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm