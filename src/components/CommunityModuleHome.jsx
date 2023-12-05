import CommunityCardHome from "./CommunityCardHome"

function CommunityModuleHome(){


    return (
        <div className="bg-gray-650 py-12 px-12 lg:mx-2 xl:mx-8">
            <h3 className="pb-40 text-9xl font-display font-medium">Community</h3>

            <CommunityCardHome/>
            <div className="flex justify-center">
                <button className="mb-60">See More Connections →</button>
            </div>

        </div>
    )
}

export default CommunityModuleHome