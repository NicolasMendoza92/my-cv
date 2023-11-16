import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const goToInventory = () => {
        const newWindow = window.open('https://allcot-inventary.vercel.app/');
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
        const newWindow = window.open('https://ecommerce-front-rust.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const ecommerceAdmin = () => {
        const newWindow = window.open('https://ecommerce-admin-delta-lemon.vercel.app/');
        if (newWindow) newWindow.opener = null
    }

    // col 12 col-md-6  col-lg-4 

    return (
        <div data-aos="fade-up" className="div-projects">
            <h2 className='text-center m-3' style={{ color: 'white' }}>My portfolio </h2>
            <div className='d-flex flex-wrap justify-content-center gap-3'>
                <div className="d-flex justify-content-center">
                    <div onClick={goToCoco} className="card cardo_project" style={{ width: '18rem', height:'18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/cocomad_project_paqpfc.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Ecommerce project</h5>
                            <p className="card-text">MERN Project</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div onClick={ecommerceFront} className="card cardo_project" style={{ width: '18rem', height:'18rem', background: 'white'}}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1691061919/CV/front_ecommerce_xaao8c.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Front ecommerce project</h5>
                            <p className="card-text">Next JS</p>                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div onClick={ecommerceAdmin} className="card cardo_project" style={{ width: '18rem',  height:'18rem', background: 'white'}}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1691061779/CV/admin_ecommerce_z6nhs9.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Adminboard project</h5>
                            <p className="card-text">Next JS</p>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div onClick={goToInventory} className="card cardo_project" style={{ width: '18rem',  height:'18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1700147025/CV/invventory-allco_pjwxgg.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Stock management projects</h5>
                            <p className="card-text">utility app</p>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div onClick={goToRick} className="card cardo_project" style={{ width: '18rem',  height:'18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1684846613/RickMorty/r_m_wallpaper_bukdib.jpg" className="card-img-top cardo" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Rick&Morty project</h5>
                            <p className="card-text">API request</p>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div onClick={goToAllcot} className="card cardo_project" style={{ width: '18rem',  height:'18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/allcot_trading_project_jleivq.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Business page</h5>
                            <p className="card-text">Wordpress</p>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
   
}

export default Projects