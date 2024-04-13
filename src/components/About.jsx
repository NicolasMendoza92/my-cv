

import { useRouter } from "next/router";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { FaCopy, FaEnvelope } from "react-icons/fa";
import Swal from 'sweetalert2'



const About = () => {

    const router = useRouter();


    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:nicomendoza.92@gmail.com';
    }

    function myFunction() {
        // Get the text field
        var copyText = document.getElementById("myInput");


        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        Swal.fire({
            position: "bottom-end",
            title: "Copy to the clipboard",
            showConfirmButton: false,
            timer: 1500
        });

    }

    return (
        <div data-aos="fade-up" className='about-section'>
            <div className='row'>
                <div className="col-6 justify-content-center">
                    <h2 className='m-2'> About me... </h2>
                    <p className="desc-text">I like the team work and I always give my best in everything I do.  I love sports, playing tennis and I really enjoy watching anime. I enjoy traveling and spending time with my girlfriend and friends. I enjoy listening to music and playing guitar. </p>
                </div>
                <div className="col-6 justify-content-center">
                    <h2 className='m-2'> Contact me </h2>
                    <div className="flex">
                        <input className="input-mail w-100 text-center disabled" type="text" value="nicomendoza.92@gmail.com" id="myInput" />
                    </div>

                    <button onClick={myFunction} className="btn btn-outline-light m-2" title="Copy to clipboard" ><FaCopy /></button>
                    <button onClick={handleClick} className="btn btn-outline-light m-2" title="Send an email" ><FaEnvelope /></button>
                </div>
            </div>
        </div>
    )
}

export default About