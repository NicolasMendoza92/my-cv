import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Cursos = () => {

    useEffect (()=>{
        Aos.init({duration:2000})
    },[]);

    return (
        <div data-aos="fade-up" className="contenedor-divs">
            <div className='row m-4'>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                    <div className='align-items-center' style={{ width: '20rem', border: 'none', background:'none' }}>
                        <img className='card-img-top skills' variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1681743027/CV/education_png_acmh8f.png" />
                        <div className="card-body">
                            <h5 className='card-title'>Professional Achievements</h5>
                            <p className='card-text'>
                                Industrial Engineer &
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                    <div className='card align-items-center' style={{ width: '20rem', border: 'none', background:'none' }}>
                        <img className='card-img-top skills' variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1681742853/CV/digital_skills_kwbjnd.png" />
                        <div className="card-body">
                            <h5 className='card-title'>Digital Skills</h5>
                            <p className='card-text'>
                                Microsoft Office/CRM Manager Apps/SAP/Corel Draw/SketchUp/Visual Studio/Pycharm/ Data analyst/Scrum/Jira/Agile
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                    <div className='card align-items-center' style={{ width: '20rem', border: 'none', background:'none' }}>
                        <img className='card-img-top skills' src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1681742853/CV/working_skills_n0pu5b.png" />
                        <div className="card-body">
                            <h5 className='card-title'>Working Skills</h5>
                            <p className='card-text'>
                                Strategic Thinking and Global Vision/Flexibility and adaptability/Teamwork and proactivity/Multitasking and adaptability to dynamic environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos