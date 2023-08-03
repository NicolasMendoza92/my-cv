import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Cursos = () => {

    useEffect (()=>{
        Aos.init({duration:2000})
    },[]);

    const goToGit = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92?tab=repositories');
        if (newWindow) newWindow.opener = null
    }
    const goToCoco = () => {
        const newWindow = window.open('https://coco-mad-react.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goToAllcot = () => {
        const newWindow = window.open('https://allcottrading.com/');
        if (newWindow) newWindow.opener = null
    }
    const goToRick = () => {
        const newWindow = window.open('https://nextjs-demo-jade-pi.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const ecommerceFront = () => {
        const newWindow = window.open('ecommerce-front-rust.vercel.app');
        if (newWindow) newWindow.opener = null
    }
    const ecommerceAdmin = () => {
        const newWindow = window.open('ecommerce-admin-delta-lemon.vercel.app');
        if (newWindow) newWindow.opener = null
    }


    return (
        <div data-aos="fade-up" className="div-projects">
            <h3 className='text-center m-3' style={{ color:'#0d6efd' }}>My Projects </h3>
            <div  className='row'>

                <div className="col-6  col-lg-4 d-flex justify-content-center">
                    <div onClick={goToCoco} className="card bg-dark text-white m-2" style={{ width: '25rem', border: 'none' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/cocomad_project_paqpfc.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="glassCard">
                            <h5 className="card-title">React Project</h5>
                            <p className="card-text">"Ecommerce project"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div onClick={ecommerceFront} className="card bg-dark text-white m-2" style={{ width: '25rem', border: 'none' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1691061919/front_ecommerce_xaao8c.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="glassCard">
                            <h5 className="card-title">Front ecommerce Project</h5>
                            <p className="card-text">Next JS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div onClick={ecommerceAdmin} className="card bg-dark text-white m-2" style={{ width: '25rem', border: 'none' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1691061779/admin_ecommerce_z6nhs9.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="glassCard">
                            <h5 className="card-title">Adminboard Project</h5>
                            <p className="card-text">Next JS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12  col-lg-4 d-flex justify-content-center">
                    <div onClick={goToGit} className="card bg-dark text-white m-2" style={{ width: '25rem', border: 'none' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635719/CV/coding_computer_tga7ki.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="glassCard">
                            <h5 className="card-title">My Projects Portfolio</h5>
                            <p className="card-text">Take a look at my Frontend and Backend projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div onClick={goToAllcot} className="card bg-dark text-white m-2" style={{ width: '25rem', border: 'none' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/allcot_trading_project_jleivq.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="glassCard">
                            <h5 className="card-title">Wordpress Project</h5>
                            <p className="card-text">Business page</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div onClick={goToRick} className="card bg-dark text-white m-2" style={{ width: '25rem', border: 'none' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1684846613/RickMorty/r_m_wallpaper_bukdib.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="glassCard">
                            <h5 className="card-title">Rick&Morty Project</h5>
                            <p className="card-text">API request</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
    ecommerce-front-rust.vercel.app
}

export default Cursos