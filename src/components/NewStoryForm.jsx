import {useState} from 'react';

function NewStoryForm(){



    return(
        <>

        <div className="mt-14">
        <div className="flex justify-center">
        <h1 className= "pt-14 text-9xl font:display ">Add Your Story</h1>
        </div>
        <p className="mx-6 md:mx-16 lg:mx-60">Enter your details here to be featured. </p>
        <form >

            <div className="mt-10 mx-6 md:mx-16 lg:mx-60 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">First Name</label>
                    <input className= "block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  ></input>
                </div>


                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">Profile Image (URL)</label>
                    <input className="block w-full rounded-md border-0 py-1.5
                    px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                </div>

                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">Type</label>
                    <input className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  ></input>
                </div>

                <div className="col-span-6">
                    <label className="block text-sm font-medium leading-6 text-white">Your Magnet Story</label>
                    <textarea className="h-36 block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your Magnet Story or Profile here..." ></textarea>
                    
                </div>
                <button className="sm:col-span-2 md:col-span-2 lg:col-span-2">Submit</button>
            </div>
        </form>
    </div>
    </>

    )
}

export default NewStoryForm