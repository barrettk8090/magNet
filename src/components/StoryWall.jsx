import StoryPost from "./StoryPost"

function StoryWall({stories}){

    const displayStories = stories.map((story) => {
        return (
            <StoryPost key={story.id} story={story}/>
        )
    })

    return (
        <div className="mt-12 pb-12 mx-6 md:mx-16 lg:mx-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
            {displayStories}
        </div>
    )
}

export default StoryWall