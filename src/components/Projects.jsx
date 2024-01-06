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
    const goSourceInventory = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/allcot-inventary');
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
    const goToAllcot = () => {
        const newWindow = window.open('https://allcottrading.com/');
        if (newWindow) newWindow.opener = null
    }
    const goToRick = () => {
        const newWindow = window.open('https://nextjs-demo-jade-pi.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceRick = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/Rick-MortyAPIRequest');
        if (newWindow) newWindow.opener = null
    }
    const goToBlog = () => {
        const newWindow = window.open('https://my-first-blog-nextjs-ruby.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceBlog = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/my-blog-nextjs');
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
            <h2 className='text-center m-3' style={{ color: 'white' }}>My projects</h2>
            <div className='d-flex flex-wrap justify-content-center gap-3'>
                <div className="d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/cocomad_project_paqpfc.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Bakery E-commerce</h5>
                            <p className="card-text">MERN Project</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={goToCoco} className="btn btn-primary">See web</button>
                                <button onClick={goSourceCoco} className="btn btn-secondary">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1704380250/link-tree_home_mbbuyd.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Link-Tree clone app</h5>
                            <p className="card-text">Web and Admin site</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={linkTreePage} className="btn btn-primary">See web</button>
                                <button onClick={goSourceLinkTree} className="btn btn-secondary">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1691061919/CV/front_ecommerce_xaao8c.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Tech store E-commerce</h5>
                            <p className="card-text">Next JS - Frontend</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={ecommerceTechFront} className="btn btn-primary">See web</button>
                                <button onClick={goSourceTech} className="btn btn-secondary">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1691061779/CV/admin_ecommerce_z6nhs9.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Tech store adminboard</h5>
                            <p className="card-text">Next JS - Backend</p>
                            <p className="card-note"><b>Login as:</b> admin@gmail.com <b>pass:</b> Admin123</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={ecommerceTechBack} className="btn btn-primary">See web</button>
                                <button onClick={goSourceTechback} className="btn btn-secondary">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1700147025/CV/invventory-allco_pjwxgg.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Stock management </h5>
                            <p className="card-text">Utility app - Operational page</p>
                            <p className="card-note"><b>Login as:</b> demo@gmail.com <b>pass:</b> Demo1234</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={goToInventory} className="btn btn-primary">See web</button>
                                <button onClick={goSourceInventory} className="btn btn-secondary">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1684846613/RickMorty/r_m_wallpaper_bukdib.jpg" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Rick&Morty project</h5>
                            <p className="card-text">API request</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={goToRick} className="btn btn-primary">See web</button>
                                <button onClick={goSourceRick} className="btn btn-secondary">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1703699568/blog_project_shxuiz.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Blog page project</h5>
                            <p className="card-text">Create & edit posts</p>
                            <div className="d-flex flex-wrap gap-1 mt-2">
                                <button onClick={goToBlog} className="btn btn-primary">See web</button>
                                <button onClick={goSourceBlog} className="btn btn-secondary">Source code</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card cardo_project" style={{ width: '18rem', height: '18rem', background: 'white' }}>
                        <img src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/allcot_trading_project_jleivq.png" className="card-img-top cardo" alt="..." />
                        <div className="card-body m-auto">
                            <h5 className="card-title">Business page</h5>
                            <p className="card-text">Wordpress</p>
                            <button onClick={goToAllcot} className="btn btn-primary">See web</button>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )

}

export default Projects