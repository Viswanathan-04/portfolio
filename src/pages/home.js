import React from "react";
import './home.css';
import "./resume.pdf";
import { FaLongArrowAltDown } from "react-icons/fa";

function Home(){
    return(
        <>
        <section id='homebtn' className='homebtn'>
            <div className="hlbl">
                <text className="h-lbl">Home<hr></hr></text>
            </div>
            <div className='main-home'>
                <div className='home1'>
                    <p className="p1"><span className="hs1">Hello, It's me</span><br></br><span className="hs2">Viswanathan Krishnan</span><br></br>I'm a Data Science<br></br>Enthusiast<br></br>
                    <br></br><a className="more" href="#aboutbtn">Explore more <span><FaLongArrowAltDown className="mbtn"></FaLongArrowAltDown></span></a>
                    <br></br><br></br><a className="res" href={require("./resume.pdf")} download={'resume'}>Download Resume <FaLongArrowAltDown className="mbtn"></FaLongArrowAltDown></a></p>
                </div>
                <div className="home2">
                    <img src="https://th.bing.com/th/id/OIP.R9PIGkm5-MBITBC_1U3zQgHaHa?pid=ImgDet&rs=1" alt="usr"></img>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;