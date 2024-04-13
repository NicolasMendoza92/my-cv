
import { useRouter } from "next/router";
import Aos from "aos";
import { useEffect } from "react";
import { FaFilePdf, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import "aos/dist/aos.css";
import Image from "next/image";



const ImagenPrin = () => {

    const router = useRouter();

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);
    const goToLinkedin = () => {
        const newWindow = window.open('https://www.linkedin.com/in/nicolasmendoza92/');
        if (newWindow) newWindow.opener = null
    }

    const goToGit = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92?tab=repositories');
        if (newWindow) newWindow.opener = null
    }

    const openPDF = () => {
        // URL del PDF cargado previamente
        const pdfURL = '/files/CV_Nicolas_Mendoza.pdf';

        // Abrir el PDF en una nueva pestaña del navegador
        window.open(pdfURL, '_blank');
    };

    return (
        <div data-aos="fade-up" className='contenedorImg'>
            <div className='d-flex justify-content-center'>
                <h2 className='m-2'>Industrial engineer & Full Stack Developer</h2>
            </div>
            <p className="main-text">Hi' Im <b>Nicolas</b> and I love to design and create projects, web apps and development work to make tasks easier.</p>
            <div className='row'>
                <div>
                    <Image
                        src='/images/avatar.png'
                        alt='avatar'
                        width={200}
                        height={200}
                        className='img-fluid'
                    />
                </div>
                <div>
                    <button type="button" className="btn btn-outline-info m-2" onClick={goToLinkedin} title="Go to Linkedin"> <FaLinkedin /></button>
                    <button type="button" className=" btn btn-outline-dark m-2" onClick={goToGit} title="Go to Github"  > <FaGithub /></button>
                    <button type="button" className=" btn btn-outline-danger m-2" onClick={openPDF} title="See CV"  > <FaFilePdf /></button>
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