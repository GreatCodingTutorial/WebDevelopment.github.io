import React, {useEffect,useRef} from 'react';
import pdf from '../pdf/resume.pdf';
import Typed from "typed.js";

const Home =() => {
    const typedRef = useRef(null)
    useEffect(()=>{

        const options ={
            strings:["Welcome to my profile","My Name is Mukta Kashid","I'm Full Stack Developer",
            "React Js Developer","Website Developer(Python)"],
            typeSpeed:50,
            backSpeed:50,
            loop:true
        }

        const typed = new Typed(typedRef.current,options)

        return () => {
            typed.destroy()
        }
    },[])
    return(
        <>
        <div className="container home" id="home">
            <div className="left">
                <h1 ref={typedRef}>

                </h1>

                <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">
                    Download Resume
                </a>
            </div>
            <div className="right">
                <div className="img">
                    <img src="/images/Rk P.png" alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;