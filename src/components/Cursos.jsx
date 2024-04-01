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
                        <img className='card-img-top skills' variant="top" src="images/grad.png" />
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
                        <img className='card-img-top skills' variant="top" src="images/digital.png" />
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
                        <img className='card-img-top skills'src="images/work.png" />
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