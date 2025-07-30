// 

import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const FindDonar = () => {
    const { user } = useSelector((state) => state.auth);

    const [data, setData] = useState([]);
    const [total, setTotal] = useState([]);
    const [bloodGroup, setBloodGroup] = useState("");
    const [location, setLocation] = useState(null);
    const [message, setMessage] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [user_id, setUser_id] = useState('');



    const getDonars = async (bloodGroup) => {
        try {
            const { data } = await API.get("/admin/find-donar-list", {
                params: { bloodGroup } // Send blood group as a query parameter
            });
            setTotal(data?.Toatlcount);
            setMessage(`Need ${bloodGroup} blood  at ${user.hospitalName} Hospital Urgently`);
            setPhone(user.phone);

            console.log(data);
            if (data.Toatlcount == 0) {
                toast.warning(`Donor of ${bloodGroup} is not available`);
            }
            else {
                toast.success(`Donor of ${bloodGroup} find successfuly`);

            }

            if (data?.success) {
                setData(data?.donarData);

            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleGetDonar = () => {
        // Call getDonars function with the selected blood group
        try {
            getDonars(bloodGroup);


        } catch (e) {
            console.log(e);
        }

    };

    useEffect(() => {
        // You may want to fetch initial data on component mount
        getDonars();
    }, []);

    //locaton
    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setHospitalName(user?.hospitalName);
                setAddress(user?.address);

            },
            error => {
                console.error(error);
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);


    ///

    const handleSubmit = async (userId) => {

        try {
            const res = await API.post("/admin/notification",
                { location, bloodGroup, phone, message, user_id: userId, hospitalName, address });

            if (res && res.data.success) {
                toast.success(res.data.message)

            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");


        }
    };

    return (
        <Layout>
            <div className='sh' >
                <h1 className='text-center'> Search Donor</h1>
                <div className="input-box">
                    <span className="details mx-4 fs-4"> Select Blood Group</span>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        placeholder="Enter your Blood Group"
                        required
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}>
                        <option value="">Select</option>
                        <option value={"O Positive"}>O+ve</option>
                        <option value={"A Positive"}>A+</option>
                        <option value={"B Positive"}>B+</option>
                        <option >O-</option>
                        <option >A-</option>
                        <option >B-</option>
                        <option value={"AB Positive"}>AB+</option>
                        <option >AB-</option>

                    </select>
                    <div className="mt-3  mx-3 d-flex justify-content-between">
                        <button className="btn btn-primary mb-2">Available Donors :  {total}</button>
                        <button type="button" className="btn btn-primary mb-2" onClick={handleGetDonar}>
                            Get Donor
                        </button>
                    </div>
                </div>
                {/* Display donor data here */}

            </div>
            <div className="d-flex">
                {/* Display donor data */}
                <div className="d-flex flex-wrap"> {
                    data?.map((record) => (

                        <div key={record._id} className=" mt-3 ms-1 " style={{ minHeight: "15px" }}>

                            <div className="card mb-3 ms-3 s    h " style={{ minWidth: "50rem" }}>
                                <div className="row g-0">

                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <h5 className="card-title text-center fs-4">{record.name} <i className="fa-solid fa-certificate"></i></h5>
                                            <div className="d-flex justify-content-around ">
                                                <p className="card-text "><i className="fa-solid fa-person-half-dress"></i> Gender: {record.gender}</p>
                                                <p className="card-text ms-4"> <i className="fa-solid fa-phone-volume"></i>  Phone : {record.phone}</p>
                                                <p className="card-text ms-4"> <i className="fa-solid fa-hand-holding-droplet"></i>  BloodGroup : {record.bloodGroup}</p>
                                            </div>
                                            <div className="d-flex justify-content-around ">

                                                <p className="card-text ms-4"><i className="fa-solid fa-image-portrait"></i> Age : {record.age}</p>
                                                <p className="card-text ms-4"> <i className="fa-solid fa-landmark-flag"></i>  State : {record.state}</p>
                                                <p className="card-text ms-4"><i class="fa-solid fa-building-flag"></i> City : {record.city}</p>
                                            </div>
                                            <p className="card-text ms-4"><i className="fa-solid fa-envelope"></i> Email : {record.email}</p>
                                            <p className="card-text ms-4"> <i className="fa-solid fa-location-dot"></i>  Address : {record.address}</p>
                                            {/* <div className="d-flex justify-content-around">
                                                <button className="card-text"><small className="text-muted"><i className="fa-solid fa-location-dot"   ></i> Get Location {record.location.latitude} </small></button>
                                                <p className="card-text"><small className="text-muted">Last updated {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")} mins ago</small></p>
                                            </div> */}
                                            <div className="card-body d-flex justify-content-around">
                                                <button to="#" className="btn btn-outline-secondary" onClick={() => handleSubmit(record._id)} style={{ height: "45px" }}><i className="fa-solid fa-bell"></i> Request</button>
                                                <Link to="#" className="btn btn-outline-secondary" style={{ height: "45px" }}>Get Location</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        // <div key={record._id} className=" mt-3 ms-1 " style={{ minHeight: "150px" }}>


                        //     <div className="card sh" style={{ width: '18rem', minHeight: '300px' }}>

                        //         <div className="card-body">
                        //             <div className="card-body d-flex  justify-content-between">
                        //                
                        //                 
                        //             </div>
                        //           
                        //         </div>
                        //         <div className="list-group-item d-flex  justify-content-between">
                        //             <h6 className="card-title">State: {record.state}</h6>
                        //             <h6 className="card-title"> City : {record.city}</h6>
                        //         </div>
                        //         <div className="list-group-item d-flex  justify-content-between">
                        //             
                        //            
                        //         </div>
                        //         <ul className="list-group list-group-flush">
                        //            
                        //             
                        //             {/* <li className="list-group-item">A third item:</li> */}
                        //         </ul>
                        //         <div className="card-body d-flex justify-content-between">
                        //             <button to="#" className="btn btn-outline-secondary" onClick={() => handleSubmit(record._id)} style={{ height: "45px" }}><i className="fa-solid fa-bell"></i> Notify!</button>
                        //             <Link to="#" className="btn btn-outline-secondary" style={{ height: "45px" }}>Get Location</Link>
                        //         </div>
                        //     </div>




                        // </div>
                    ))
                }
                </div>
            </div>
        </Layout>
    );
};

export default FindDonar;


