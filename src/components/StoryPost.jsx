function StoryPost({story}){

    return(
        <div className="bg-sky-950 rounded-lg grid">
            <div className="px-6 py-6">
                <p>{story.firstName}</p>
                <img src={story.img}></img>
                <p>Type: {story.type}</p>
                <p>Work: {story.work}</p>
                <p>Story: {story.description}</p>
            </div>
        </div>
    )
}

export default StoryPost 