import CommunityCards from "./CommunityCards"
import AddYourStory from "./AddYourStory"
import NewStoryForm from "./NewStoryForm"

function CommunityPage(){

    return(
        <div className="pt-14">
            <h1 className= "pt-14 text-9xl font:display flex justify-center">Community</h1>
            <p className="mx-6 pb-12 text-3xl font-semibold flex justify-center"> See how creatives and businesses are connecting on Magnet</p>
            <CommunityCards/>
            <AddYourStory/>
            <NewStoryForm/>
        </div>
    )
}

export default CommunityPage