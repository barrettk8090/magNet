import CommunityCard from "./CommunityCardHome"

function CommunityPage(){

    return(
        <div className="pt-14">
            <div className="flex justify-center">
            <h1 className= "pt-14 text-9xl font:display ">Community</h1>
            </div>
            <p className="pb-12 text-3xl"> See how creatives and businesses are connecting on Magnet</p>
            <CommunityCard/>
        </div>
    )
}

export default CommunityPage