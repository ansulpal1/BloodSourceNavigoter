import React from 'react'
import Layoutt from '../components/shared/Layout/Layoutt.js'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import './home.css'
const Home = () => {
    const { user } = useSelector((state) => state.auth);
    console.log(user)
    return (
        <Layoutt>
            <div className="container ">
                <div className='right text-center'>
                    <h2>BLOOD SOURCE NAVIGATOR</h2>
                    <p className="hide-on-small">
                        Blood donation is a life-saving process that can help save the lives of people in need. Blood banks play a crucial role in maintaining a steady supply of blood for transfusions. The navigation system is a web-based application that manages the process of blood donation from registration to distribution and finding donors in need.
                    </p>
                    {/* <Link to={/register}><button className='btn btn-dark mtt-5'>Get Blood Now</button ></Link> */}
                    <NavLink
                        className="btn btn-dark mtt-5"

                        exact
                        to="/register ">Get Blood Now</NavLink>
                </div>

                <div className='mission  '>
                    <div className='mission-text'>
                        <h2 className='text-h2'>Our Mission</h2>
                        <p className='text-p'>
                            The blood source navigator is a tool that can help in the efficient system of locating and contacting donors, in need who are at a safest and reachable distance from the patient, or anyone in need. blood donations and blood samples . The system can help in maintaining the inventory of blood samples, tracking the donor and recipient details, and other relevant information. The system can also help in ensuring the availability of blood when required and avoiding wastage of blood samples According recent reports India needs around 15 million units of blood each year but manages to collect only 11 million units, leading to a deficit of 4 million units. Tragically, nearly 12,000 individuals die in India every day due to the non-availability of quality blood
                        </p>
                    </div>
                </div>
                <div className='get-blood container'>
                    <h2 className='text-h2'>How Get Blood?</h2>
                    <div className='box0 '>
                        <div className='box'>
                            <div className='box1'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                            </svg>
                            </div>
                            <div className='circle'>
                                <p className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>


                                </p>
                                <p className='circle-p'>Register in the application as a doner,organization or patient</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='box'>
                                <div className='box2'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                                </svg></div>
                                <div className='circle'><p className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg></p>
                                    <p className='circle-p'>Enter the details accordingly and also submit a proof of blood<br /> report as per requirement. </p></div>
                            </div>
                            <div className=''>

                                <img src="/pngwing 1.png" alt="logo" className='container' />
                            </div>
                            <div className='box '>
                                <div className='box3'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-3-circle" viewBox="0 0 16 16">
                                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                                </svg></div>
                                <div className='circle'><p className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg></p>
                                    <p className='circle-p'>Get informayion about services, access donors, and contact information.</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* crousal */}

                <div className='crousel'>

                    <div id="carouselExampleAutoplaying" className="carousel slide mt-5 " data-bs-ride="carousel" >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://mmhrc.in/file/wp-content/uploads/2022/03/blood-donation.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.theweek.in/content/dam/week/news/health/images/2023/6/4/blood-donation.jpg.transform/schema-16x9/image.jpg" alt="..." className="d-block w-60 img " />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.careinsurance.com/upload_master/media/posts/June2020/IQKrrYI3nqo0i9PNqO7W.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </Layoutt >
    )
}

export default Home;