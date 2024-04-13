

const Icons = () => {

    const goToAllcot = () => {
        const newWindow = window.open('https://allcottrading.com/');
        if (newWindow) newWindow.opener = null
    }

    const goToInventory = () => {
        const newWindow = window.open('https://allcot-inventary.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goSourceInventory = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92/allcot-inventary');
        if (newWindow) newWindow.opener = null
    }

    const goToCocoMad = () => {
        const newWindow = window.open('https://cocomadbakery.com/');
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="row contenedor-skills p-4">
            <div className="col-12 col-md-6 p-4">
                <h2 className='m-2 text-center '>Programming experience</h2>
                <p className="desc-text">No experience working exclusively as a programmer,but I've done projects for the company I work for and freelance work.</p>
                <br />
                <div className="row">
                    <div className="col-12 col-xl-6 p-2">
                        <div class="card">
                            <div class="card-header">
                                Stock management
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Utility app - Operational page</h5>
                                <p class="card-text"><b>Login as:</b> demo@gmail.com <b>pass:</b> Demo1234</p>
                                <div className="d-flex flex-wrap gap-1 mt-2">
                                    <button onClick={goToInventory} className="btn-seeweb">See web</button>
                                    <button onClick={goSourceInventory} className="btn-code">Source code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 p-2">
                        <div class="card">
                            <div class="card-header">
                            Business page
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Working and active page</h5>
                                <p class="card-text">Wordpress and plug-in</p>
                                <button onClick={goToAllcot} className="btn-seeweb">See web</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='col-12 col-md-6 text-center p-4'>
                <img className="img-fluid w-75" src="images/fullstack_icons.png" />
            </div>
        </div>
    )
}

export default Icons

