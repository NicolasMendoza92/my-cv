

const Icons = () => {

    return (
        <div className="row contenedor-skills p-4">
            <div className="col-12 col-md-6 p-4">
                <h2 className='m-2 text-center '>Programming skills</h2>
                <p className="desc-text">In my projects I try to use different technologies to be able to have a harmony between the back and the front. Using a neat and clean code</p>
                <br />
                <p className="desc-text">Keeping the basic principles of web design.</p>
                <ul >
                    <li className="desc-text">Color theory</li>
                    <li className="desc-text">Typography and fonts</li>
                    <li className="desc-text">User interface (UI)</li>
                    <li className="desc-text">User Experience (UX)</li>
                </ul>
            </div>
            <div className='col-12 col-md-6 text-center p-4'>
                <img className="img-fluid w-75" src="images/fullstack_icons.png" />
            </div>
        </div>
    )
}

export default Icons

