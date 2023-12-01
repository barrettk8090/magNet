import CreativeTypes from "./creativetypes"
import BusinessTypes from "./BusinessTypes"

function WhosOnMagnet(){

    return(
        <div>
            <h2>Check out who's using MagNet:</h2>

            <h3>Creatives</h3>
            <CreativeTypes />

            <h3>Businesses</h3>
            <BusinessTypes/>
        
        </div>
    )
}

export default WhosOnMagnet