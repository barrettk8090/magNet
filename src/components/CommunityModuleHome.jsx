import CommunityCardHome from "./CommunityCardHome"

function CommunityModuleHome(){


    return (
        <div className="bg-sky-600 pt-20 px-12 lg:mx-2 xl:mx-8">
            <h3 className="pb-12 text-9xl font-display font-medium">Community</h3>

            <CommunityCardHome/>
            <div className="flex justify-center">
                <button className="mt-10 mb-20">See More Connections →</button>
            </div>

        </div>
    )
}

export default CommunityModuleHome