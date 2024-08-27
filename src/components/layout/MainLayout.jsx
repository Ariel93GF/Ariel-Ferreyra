import Navbar from "../NavBar/NavBar";


const MainLayout = ({children}) =>{
    return(
        <div>
            <Navbar/>
            {children}
            <div><footer></footer></div>
        </div>
    )
};

export default MainLayout;