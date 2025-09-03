import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Form from "../Components/Form"
import Packages from "../Components/Packages"
export default function HomePage(){
    return<>
    <div>
        <div className="cutstom-bg">
            <Navbar/>
            <Hero/>
        </div>
        <div className="bg-[#171717] pb-24">
           <Packages/>
            <Form/>
        </div>
       
    </div>

    
    </>
}