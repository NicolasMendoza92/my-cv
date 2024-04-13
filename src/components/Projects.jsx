import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const goToOnePageApp= () => {
        const newWindow = window.open('https://appointment-management.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceOnePageApp = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/gestion-de-turnos');
        if (newWindow) newWindow.opener = null
    }

    const goToKanban = () => {
        const newWindow = window.open('https://kanban-app-rho-blue.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceKanban = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/kanban-app');
        if (newWindow) newWindow.opener = null
    }

    const linkTreePage = () => {
        const newWindow = window.open('https://link-tree-clone-cyan.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceLinkTree = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/LinkTree-Clone');
        if (newWindow) newWindow.opener = null
    }
    const goToCoco = () => {
        const newWindow = window.open('https://coco-mad-react.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceCoco = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/CocoMad-React');
        if (newWindow) newWindow.opener = null
    }

    const ecommerceTechFront = () => {
        const newWindow = window.open('https://ecommerce-front-rust.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceTech = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/ecommerce-front');
        if (newWindow) newWindow.opener = null
    }
    const ecommerceTechBack = () => {
        const newWindow = window.open('https://ecommerce-admin-delta-lemon.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceTechback = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/ecommerce-admin');
        if (newWindow) newWindow.opener = null
    }

    // col 12 col-md-6  col-lg-4 

    return (
        <div data-aos="fade-up" className="div-projects">
            <h2 className='text-center m-3' style={{ color: 'white' }}>My main projects</h2>
            <div className='d-flex flex-wrap justify-content-center gap-3'>
                <div className="d-flex justify-content-center">
                    <div className="card " style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="images/cocomad.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <h5 className="card-title">Bakery E-commerce</h5>
                            <p className="card-text">MERN Project</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={goToCoco} className="btn-seeweb">See web</button>
                                <button onClick={goSourceCoco} className="btn-code">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card " style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="images/appoinment.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body d-flex flex-column align-items-center justify-content-between ">
                            <h5 className="card-title">OnePage Appointment</h5>
                            <p className="card-text">JS CSS React</p>
                            <p className="card-note"><b>Login as admin with the route:"/admin"</b> admin@gmail.com <b>pass:</b> Admin*2024</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={goToOnePageApp} className="btn-seeweb">See web</button>
                                <button onClick={goSourceOnePageApp} className="btn-code">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="card " style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="images/ecommerce.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <h5 className="card-title">Tech store E-commerce</h5>
                            <p className="card-text">Next JS - Frontend</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={ecommerceTechFront} className="btn-seeweb">See web</button>
                                <button onClick={goSourceTech} className="btn-code">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card " style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="images/dashboardadmin.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <h5 className="card-title">Tech store adminboard</h5>
                            <p className="card-text">Next JS - Backend</p>
                            <p className="card-note"><b>Login as:</b> admin@gmail.com <b>pass:</b> Admin123</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={ecommerceTechBack} className="btn-seeweb">See web</button>
                                <button onClick={goSourceTechback} className="btn-code">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="card " style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="images/kanban.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <h5 className="card-title">Kanban app</h5>
                            <p className="card-text">TS and Liveblocks - trello board</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={goToKanban} className="btn-seeweb">See web</button>
                                <button onClick={goSourceKanban} className="btn-code">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="card " style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="images/linktree.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body d-flex flex-column align-items-center justify-content-between">
                            <h5 className="card-title">Link-Tree clone app</h5>
                            <p className="card-text">Web and Admin site</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={linkTreePage} className="btn-seeweb">See web</button>
                                <button onClick={goSourceLinkTree} className="btn-code">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div >
        </div>
    )

}

export default Projects