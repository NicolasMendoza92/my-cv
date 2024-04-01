

import { useRouter } from "next/router";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const About = () => {

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

    return (
        <div data-aos="fade-up" className='about-section'>
            <div className='row'> 
                <div className='col-6 justify-content-center'>
                    <h2 className='m-2'> In the professional field </h2>
                    <p className="desc-text">I'm a hard worker industrial engineer able to solve problems in an effective and creative way, I’m passionate about technology, innovation and process optimization. I'm trying every time to make things easier and simpler. I like challenges because they push me to be better and give it all . I like the team work and I always give my best in everything I do.</p>
                </div>

                <div className="col-6 justify-content-center">
                    <h2 className='m-2'> On a personal note... </h2>
                    <p className="desc-text">  I love sports, I play tennis and I like anime a lot. I enjoy traveling and spending time with my girlfriend and friends. I enjoy listening to music and playing guitar. </p>
                    <button type="button" className="btn btn-outline-light m-2" onClick={goToLinkedin} title="Go to Linkedin"> <FaLinkedin /></button>
                    <button type="button" className=" btn btn-outline-light m-2" onClick={goToGit} title="Go to Github"  > <FaGithub /></button>
                </div>
            </div>
        </div>
    )
}

export default About