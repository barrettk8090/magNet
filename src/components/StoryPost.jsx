function StoryPost({story}){

    return(
        <div className="bg-white rounded-lg grid">
            <div className="px-6 py-6">
                <p className="text-6xl font-extrabold font-display text-black">{story.firstName}</p>
                <img className="rounded-full w-28 mb-4" src={story.img}></img>
                <p className="text-black">Type: {story.type}</p>
                <p className="text-black">Work: {story.work}</p>
                <p className="text-black">Story: {story.description}</p>
            </div>
        </div>
    )
}

export default StoryPost 