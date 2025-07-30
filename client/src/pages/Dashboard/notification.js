import React, { useEffect, useState } from "react";
import Layout from '../../components/shared/Layout/Layout'
import API from "../../services/API";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";


const Notification = () => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    const [address, setAddress] = useState("");

    const getNotification = async (bloodGroup) => {
        try {
            const { data } = await API.get("/admin/get-notification", {
                params: { user_id: user._id } // Send blood group as a query parameter
            });

            console.log(data);


            if (data?.success) {

                //setData(data?.donar);
                setData(data?.donarData);
                console.log(data)


            }

        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        // You may want to fetch initial data on component mount
        getNotification();
    }, []);






    const handleAlertLocation = (id) => {

        data?.map((item) => {
            if (item._id == id) {
                setLatitude(item.location.latitude)
                setLongitude(item.location.longitude)

            }

        })
        getUserCourrentAddress()


    }

    let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";

    let apikey = "d9642466b127494eae7d184963465935";
    let query = `${latitude}, ${longitude}`;
    const getUserCourrentAddress = async () => {


        let apiUrl = `${apiEndpoint}?key=${apikey}&q=${query}&pretty=1`;
        try {

            const res = await fetch(apiUrl);
            const data = await res.json()
            console.log("ansul", data.results[0].formatted)
            setAddress(data.results[0].formatted)
        }

        catch (e) {
            console.log(e);


        };
    };


    console.log("pal", address)


    return (
        <Layout>

            <div>
                <h3 className='sh text-center fs-3  ' style={{ height: "3rem" }}>
                    <i className="fa-solid fa-bell"></i>  !!IMPORTANT-NOTIFICATIONS
                </h3>
                <p>{latitude}</p>
            </div>

            <div className='d-flex flex-wrap  justify-content-center'>
                {
                    data?.map((record) => (
                        <div key={record._id} className=" mt-3 ms-1 " style={{ minHeight: "15px" }}>

                            <div className="card mb-3 ms-3 sh " style={{ minWidth: "50rem" }}>
                                <div className="row g-0">

                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <h5 className="card-title text-center fs-4">Donation Request <i className="fa-solid fa-certificate"></i></h5>
                                            <div className="d-flex justify-content-around ">
                                                <p className="card-text "><i className="fa-solid fa-house-medical"></i> HospitalName : {record.hospitalName}</p>
                                                <p className="card-text ms-4"> <i className="fa-solid fa-phone-volume"></i>  Phone : {record.phone}</p>
                                                <p className="card-text ms-4"> <i className="fa-solid fa-hand-holding-droplet"></i>  BloodGroup : {record.bloodGroup}</p>
                                            </div>
                                            <p className="card-text ms-4"> <i className="fa-solid fa-comment-medical"></i>  Message : {record.message}</p>
                                            <p className="card-text ms-4"> <i className="fa-solid fa-location-dot"></i>  Address : {record.address}</p>
                                            <div className="d-flex justify-content-around">
                                                <p onClick={() => handleAlertLocation(record._id)} className="card-text pointer"><small className="text-muted"><i className="fa-solid fa-location-dot "   ></i>  <Link to="/notification-map" className="text-decoration-none" >
                                                    Get Location
                                                </Link>  </small></p>
                                                <p className="card-text"><small className="text-muted">Last updated {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")} mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))
                }


            </div>
        </Layout>
    )
}

export default Notification