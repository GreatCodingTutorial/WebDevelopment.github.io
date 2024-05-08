import React from 'react';

const Project =() => {
    return(
        <>
       <div className="container project my-5 mx-3" id="project">
        <h1>PROJECT</h1>
            <div className="row d-flex justify-content-center align-content-center">
        <div className="card w-25 shadow-lg float-left bg-dark text-light"
            data-aos="flip-right"
            data-aos-duration="1000"
        >
            <div className="card-header p-0 d-flex justify-content-center"
                 data-aos="flip-right"
                 data-aos-duration="1000"
            >
                <img src="/images/project1.png" className="img d-flex justify-content-center align-content-center" width="100%;" height="120%"/>
            </div>
            <div className="card-body mt-5 text-center"
                 data-aos="flip-right"
                 data-aos-duration="1000"
            >
                <h3 className="text-center text-danger text-uppercase">React A2Z Website</h3>
                <p className="text-justify font-weight-bold">This is a project made with complete React js.</p>
            </div>
            <div className="card-footer text-center"
                 data-aos="flip-right"
                 data-aos-duration="1000"
            >
                <button className="btn btn-primary mx-3">Demo</button>
                <button className="btn btn-warning">Code</button>
            </div>
        </div>
        
        <div className="card w-25 shadow-lg float-left bg-dark text-light"
             data-aos="flip-right"
             data-aos-duration="1000"
        >
            <div className="card-header p-0 d-flex justify-content-center">
                <img src="/images/project2.png" className="img d-flex justify-content-center align-content-center" width="100%;" height="140%"/>
            </div>
            <div className="card-body mt-5 text-center">
                <h3 className="text-center text-danger text-uppercase">Javascript Calculator</h3>
                <p className="text-justify font-weight-bold">This is a project made with complete Javascript.</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary mx-3">Demo</button>
                <button className="btn btn-warning">Code</button>
            </div>
        </div>

        <div className="card w-25 shadow-lg float-left bg-dark text-light"
             data-aos="flip-right"
             data-aos-duration="1000"
        >
            <div className="card-header p-0 d-flex justify-content-center">
                <img src="/images/project3.png" className="img d-flex justify-content-center align-content-center" width="100%;" height="138%"/>
            </div>
            <div className="card-body mt-5 text-center">
                <h3 className="text-center text-danger text-uppercase">Frontend Hospital Management Website</h3>
                <p className="text-justify font-weight-bold">This is a project made with complete Bootstrap,html,css</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary mx-3">Demo</button>
                <button className="btn btn-warning">Code</button>
            </div>
        </div>
        </div>
        </div>
    </>
    )
}
export default Project;