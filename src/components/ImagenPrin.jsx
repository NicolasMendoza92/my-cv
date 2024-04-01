
import { useRouter } from "next/router";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";



const ImagenPrin = () => {

    const router = useRouter();

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <div data-aos="fade-up" className='contenedorImg'>
            <div className='d-flex justify-content-center'>
                <h2 className='m-2'>Industrial engineer, Full Stack Developer & Data Scientist. </h2>
            </div>
            <p className="main-text">I love to design and create projects, apps and development work to make tasks easier.</p>
            <div className='d-flex justify-content-center'>
                <div>
                <Image
                    src='/images/avatar.png'
                    alt='avatar'
                    width={200}
                    height={200}
                    className='img-fluid'
                />
                </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
            <Image
                    src='/images/programming.png'
                    alt='programming'
                    width={1200}
                    height={600}
                    className='img-fluid'
                />
            </div>
        </div>
    )
}

export default ImagenPrin