import React  from "react";
import Footercomponent from "../components/Footer/Footer.component";
import Navbarcomponent from '../components/Navbar/Navbar.component'
const BaseHOC=
    (Component)=>
    ({...props})=>{
        return(
            <div>
            <Navbarcomponent/>
                <Component {...props} />
            <Footercomponent/>
            </div>
        )
    };

export default BaseHOC;