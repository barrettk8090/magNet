import CommunityCardHome from "./CommunityCardHome"

function CommunityModuleHome(){


    return (
        <div className="bg-gray-650">
            <h2 className="py-12 px-6 text-6xl font-medium">Community</h2>

            <CommunityCardHome/>
            <div className="flex justify-center">
                <button>See More →</button>
            </div>

        </div>
    )
}

export default CommunityModuleHome