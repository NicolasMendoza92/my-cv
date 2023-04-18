import { FaLongArrowAltRight } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import Link from "next/link";

export default function MyCv() {

    const goToAllLink = () => {
        const newWindow = window.open('https://www.linkedin.com/company/allcot-trading/');
        if (newWindow) newWindow.opener = null
    }
    const goToABLink = () => {
        const newWindow = window.open('https://www.linkedin.com/company/ab-inbev/');
        if (newWindow) newWindow.opener = null
    }
    const goToDibaLink = () => {
        const newWindow = window.open('https://www.linkedin.com/company/di-bacco-industria-metal%C3%BArgica/');
        if (newWindow) newWindow.opener = null
    }
    const goToUNT = () => {
        const newWindow = window.open('http://www.unt.edu.ar/');
        if (newWindow) newWindow.opener = null
    }
    const goToRolling = () => {
        const newWindow = window.open('https://www.linkedin.com/company/rollingcode/');
        if (newWindow) newWindow.opener = null
    }
    return (
        <>
            <div className='divider-nav d-flex justify-content-end'>
                <Link href="/">
                    <TbArrowBack className="goback" />
                </Link>
            </div>
            <h3 className='text-center mt-auto divider'>My time line work experience </h3>
            <div className='m-5 text-center d-flex flex-column align-items-center'>
                <div className='d-flex m-3'>
                    <div className='d-flex justify-content-center align-items-center m-2'>
                        <div className='m-2 btn-time'>
                            2021-Now
                        </div>
                        <FaLongArrowAltRight />
                    </div>
                    <div className='card link-empresa' border="primary" style={{ width: '18rem' }} onClick={goToAllLink}>
                        <div className='card-body'>
                            <h3 className='card-title'>ALLCOT Group</h3>
                            <p className='p-2'>Bussiness Develpoment Coordinator</p>
                            <p className='card-text'>
                                Optimization in delivery of daily progress reports
                                Process control and reporting.
                                Optimization in operation procces.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex m-3'>
                    <div className='d-flex justify-content-center align-items-center m-2'>
                        <div className='m-2 btn-time'>
                            2019-2021
                        </div>
                        <FaLongArrowAltRight />
                    </div>
                    <div className='card link-empresa' border="primary" style={{ width: '18rem' }} onClick={goToABLink}>
                        <div className='card-body'>
                            <h3 className='card-title'>Anheuser-Busch InBev</h3>
                            <p className='p-2'>Regional Commercial Analyst</p>
                            <p className='card-text'>
                                Monitoring and improvement of sales volume KPIs.
                                Optimization in delivery of daily progress reports
                                Implementation of sales strategies by channels and volume.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex m-3'>
                    <div className='d-flex justify-content-center align-items-center m-2'>
                        <div className='m-2 btn-time'>
                            2017-2019
                        </div>
                        <FaLongArrowAltRight />
                    </div>
                    <div className='card link-empresa' border="primary" style={{ width: '18rem' }} onClick={goToDibaLink}>
                        <div className='card-body'>
                            <h3 className='card-title'>Metallurgy Di Bacco y Cia</h3>
                            <p className='p-2'>Quality Manager QA</p>
                            <p className='card-text'>
                                In charge of and responsible for the quality sector.
                                ISO 9001 certification and SGC audits.
                                Resolution of incidents and action plans in the event of deviations in customer satisfaction.
                                Implementation of management indicators in conjunction with the commercial area
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-center divider'>My education </h3>
            <div className=' m-3 d-flex justify-content-around'>
                <div className='card link-empresa m-1' border="primary" style={{ width: '18rem' }} onClick={goToUNT}>
                    <div className='card-body'>
                        <h3 className='card-title'>National University of Tucuman</h3>
                        <p className='p-2'>Degree in Industrial Engineer 2014-2019</p>
                        <p className='card-text'>
                            Dedicated to process optimization and oriented to renewable energies.
                        </p>
                    </div>
                </div>
                <div className='card link-empresa m-1' border="primary" style={{ width: '18rem' }} onClick={goToRolling}>
                    <div className='card-body'>
                        <h3 className='card-title'>Rolling Code School</h3>
                        <p className='p-2'>Full Stack Developer 2021</p>
                        <p className='card-text'>
                            Skills needed to be a freelancer in the area.
                        </p>
                    </div>
                </div>
            </div>    
        </>
    )
}

