import { useReducedMotion } from "framer-motion";
import Navbar from "../NavBar/NavBar";
import { useRef } from "react";


const MainLayout = ({children}) =>{
    const footerDivRef = useRef();

const handleClick =() =>{
    footerDivRef.current.innerHTML = "Footer Content Reference";
    footerDivRef.current.setAttribute = ("class", "footer-new")

}


    return(
        <div>
            <Navbar/>
            {children}
            <div ref={footerDivRef}>footer</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
};

export default MainLayout;