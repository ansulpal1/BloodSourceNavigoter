import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout.js";
import Modal from "../components/shared/modal/Modal.js";
import API from "../services/API.js";
import moment from "moment";

const HomePage = () => {
    const { loading, error, user, role } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    //get function
    const getBloodRecords = async () => {
        try {
            const { data } = await API.get("/inventory/get-inventory");
            if (data?.success) {
                setData(data?.inventory);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodRecords();
    }, []);
    return (
        <Layout>
            {user?.role === "admin" && navigate("/admin")}
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="container mx-3  ">
                        {(role != "donar") && (<h4
                            className=" "
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            style={{ cursor: "pointer" }}
                        >
                            <i className="fa-solid fa-plus text-success py-4"></i>
                            Add Inventory
                        </h4>)}
                        <table className="table sh ">
                            <thead>
                                <tr>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Inventory Type</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Email</th>

                                    <th scope="col">Time & Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((record) => (
                                    <tr key={record._id}>
                                        <td>{record.bloodGroup}</td>
                                        <td>{record.inventoryType}</td>
                                        <td>{record.quantity} (ML)</td>
                                        <td>{record.email}</td>

                                        <td>
                                            {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Modal />
                    </div>
                </>
            )}
        </Layout>
    );
};

export default HomePage;