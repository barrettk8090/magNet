import CreativeTypes from "./creativetypes"
import BusinessTypes from "./BusinessTypes"

function WhosOnMagnet(){

    return(
        <div className="bg-gray-650 pb-20">
            <h2 className="py-12 text-6xl">Check out who's using MagNet:</h2>

            <div className="md:grid md:grid-cols-2">
                <div className="mx-12 px-8">
                <h3 className="pb-8 text-3xl">Creatives</h3>
                <CreativeTypes />
                </div>

                <div className="mx-12 px-8">
                <h3 className="pb-8 text-3xl">Businesses</h3>
                <BusinessTypes/>
                </div>
            </div>
        
        </div>
    )
}

export default WhosOnMagnet