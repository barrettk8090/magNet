import CreativeTypes from "./CreativeTypes"
import BusinessTypes from "./BusinessTypes"

function WhosOnMagnet(){

    return(
        <div className="bg-black py-28">
            <div className="flex justify-center">
                <h2 className="pb-28 px-6 text-2xl font-medium">Who's On Magnet?</h2>
            </div>

            <div className="grid md:grid-cols-2 ">
                <div className="mx-6 md:mx-2 md:px-8 lg:mx-12">
                    <h3 className="pb-8 text-9xl font-display flex justify-center">Creatives</h3>
                    <CreativeTypes />
                </div>

                <div className="mx-6 md:mx-2 md:px-8 lg:mx-12 py-8 md:py-0">
                    <h3 className="pb-8 text-9xl font-display flex justify-center">Businesses</h3>
                    <BusinessTypes/>
                </div>
            
            </div>
        
        </div>
    )
}

export default WhosOnMagnet