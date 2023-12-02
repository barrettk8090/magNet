import CommunityCard from "./CommunityCard"

function CommunityModule(){


    return (
        <div className="bg-sky-600">
            <h2 className="py-12 text-6xl">Community</h2>

            <CommunityCard/>
            <CommunityCard />
            <button>See More</button>

        </div>
    )
}

export default CommunityModule