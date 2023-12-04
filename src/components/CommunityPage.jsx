import CommunityCard from "./CommunityCard"

function CommunityPage(){

    return(
        <div className="pt-14">
            <div className="flex justify-center">
            <h1 className= "pt-14 text-9xl font:display ">Community</h1>
            </div>
            <p> We have a vibrant community...</p>
            <CommunityCard/>
        </div>
    )
}

export default CommunityPage