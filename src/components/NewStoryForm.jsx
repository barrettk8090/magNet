import {useState} from 'react';

function NewStoryForm({addStoryPost}){

    const [firstName, setFirstName] = useState("");
    const [profImg, setProfImg] = useState("");
    const [bizType, setBizType] = useState("");
    const [workType, setWorkType] = useState("");
    const [storydescrip, setStoryDescrip] = useState("");

    function submit(e){
        e.preventDefault();

        const newStoryPost = {
            firstName: firstName,
            img: profImg,
            type: bizType,
            work: workType,
            description: storydescrip
        }
    addStoryPost(newStoryPost)
    }


    return(
        <>

        <div className="mt-14">
        <div className="flex justify-center">
        <h1 className= "pt-14 pb-6 text-6xl sm:text-9xl font:display ">Add Your Story</h1>
        </div>
        <p className="mx-6 md:mx-16 lg:mx-60">Have a fun magnet story to share, or want to be featured on our page of available artists? Add your information below and see your profile card appear here! </p>
        <form onSubmit={submit}>

            <div className="mt-10 mx-6 md:mx-16 lg:mx-60 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">First Name</label>
                    <input className= "block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setFirstName(e.target.value)}  ></input>
                </div>


                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">Profile Image (URL)</label>
                    <input className="block w-full rounded-md border-0 py-1.5
                    px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setProfImg(e.target.value)}></input>
                </div>

                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">Creative or Business?</label>
                    <input className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  onChange={(e)=>setBizType(e.target.value)}></input>
                </div>

                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">What Type of Work Do You Do?</label>
                    <input className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setWorkType(e.target.value)} ></input>
                </div>

                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">Your Magnet Story</label>
                    <textarea className="h-36 block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setStoryDescrip(e.target.value)} placeholder="Enter your Magnet Story or Profile here..." ></textarea>
                    
                </div>
                <button className="sm:col-span-2 md:col-span-2 lg:col-span-2">Submit</button>
            </div>
        </form>
    </div>
    </>

    )
}

export default NewStoryForm