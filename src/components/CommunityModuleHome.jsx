import CommunityCardHome from "./CommunityCardHome"

function CommunityModuleHome(){


    return (
        <div className="bg-gray-650 py-12 px-12 lg:mx-2 xl:mx-8">
            <h3 className="pb-12 text-6xl font-medium">Community</h3>

            <CommunityCardHome/>
            <div className="flex justify-center">
                <button>See More →</button>
            </div>

        </div>
    )
}

export default CommunityModuleHome