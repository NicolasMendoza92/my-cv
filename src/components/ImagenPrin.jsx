
import { useRouter } from "next/router";
import { FaLinkedin} from 'react-icons/fa';
import { FaNewspaper} from 'react-icons/fa';
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const ImagenPrin = () => {

    const router = useRouter();

    useEffect (()=>{
        Aos.init({duration:1500})
    },[]);

    const goToLinkedin = () => {
        const newWindow = window.open('https://www.linkedin.com/in/nicolasmendoza92/');
        if (newWindow) newWindow.opener = null
    }
    return (
        <div data-aos="fade-up" className='contenedorImg'>
            <div className='row'>
                <div className='col-12 col-md-6 m-auto'>
                    <h2 className='m-2'> About Me</h2>
                    <p className="main-text">I'm a hard worker industrial engineer able to solve problems in an effective and creative way, I’m passionate about technology, innovation and process optimization. I'm trying every time to make things easier and simpler. I like challenges because they push me to be better and give it all . I like the team work and I always give my best in everything I do.</p>
                    <button type="button" className="btn btn-primary m-2" onClick={goToLinkedin} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go to Linkedin"> <FaLinkedin/></button>
                    <button type="button" className=" btn btn-primary m-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go to my CV" onClick={()=> router.push("/myCv")} > <FaNewspaper/></button>
                </div>
                <div className='col-12 col-md-6'>
                    <div className="d-flex justify-content-center">
                        <img className="photo-cv" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669301208/CV/Foto_Web_redondeada_tbvum3.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImagenPrin