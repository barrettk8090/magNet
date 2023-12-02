import CreativeTypes from "./creativetypes"
import BusinessTypes from "./BusinessTypes"

function WhosOnMagnet(){

    return(
        <div className="bg-red-600 pb-20">
            <h2 className="py-12 text-6xl">Check out who's using MagNet:</h2>

            <h3 className="pb-8 text-3xl">Creatives</h3>
            <CreativeTypes />

            <h3 className="pb-8 text-3xl">Businesses</h3>
            <BusinessTypes/>
        
        </div>
    )
}

export default WhosOnMagnet