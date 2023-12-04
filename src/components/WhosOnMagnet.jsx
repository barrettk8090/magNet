import CreativeTypes from "./creativetypes"
import BusinessTypes from "./BusinessTypes"

function WhosOnMagnet(){

    return(
        <div className="bg-gray-650 pb-4">
            <div className="md:flex md:gitajustify-center">
                <h2 className="py-12 text-6xl">Check out who's using MagNet:</h2>
            </div>

            <div className="grid md:grid-cols-2 ">
                <div className="mx-6 md:mx-12 md:px-8">
                    <h3 className="pb-8 text-6xl font-display">Creatives</h3>
                    <CreativeTypes />
                </div>

                <div className="mx-6 md:mx-12 md:px-8 py-8 md:py-0">
                    <h3 className="pb-8 text-6xl font-display">Businesses</h3>
                    <BusinessTypes/>
                </div>
            
            </div>
        
        </div>
    )
}

export default WhosOnMagnet