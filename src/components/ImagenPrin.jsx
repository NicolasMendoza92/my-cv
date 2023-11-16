
import { useRouter } from "next/router";
import { FaLinkedin } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const ImagenPrin = () => {

    const router = useRouter();

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <div data-aos="fade-up" className='contenedorImg'>
            <div className='d-flex justify-content-center'>
                <h2 className='m-2'>Industrial engineer, Front and Back-end Developer & Data Scientist. </h2>
            </div>
            <p className="main-text">I love to design and create projects, apps and development work to make tasks easier.</p>
            <div className='d-flex justify-content-center'>
                <div>
                    <img className="photo-cv" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1700133115/CV/avatar_png_qxfwmf.png" alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <img className="icon-desktop" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1700143622/CV/programming_rqdtbo.png" alt="" />
            </div>
        </div>
    )
}

export default ImagenPrin