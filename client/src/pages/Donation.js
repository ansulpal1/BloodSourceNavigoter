import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/shared/Layout/Layout";
import API from "../services/API";
import { useSelector } from "react-redux";

const Donation = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.post("/inventory/get-inventory-hospital", {
                filters: {
                    inventoryType: "in",
                    donar: user?._id,
                },
            });
            if (data?.success) {
                setData(data?.inventory);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);

    return (
        <Layout>
            <div className="container  sh">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Inventory TYpe</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Email</th>
                            <th scope="col">Organisation</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.bloodGroup}</td>
                                <td>{record.inventoryType}</td>
                                <td>{record.quantity}</td>
                                <td>{record.email}</td>
                                <td>{record.organisation?.organisationName || record.organisation?.hospitalName
                                }</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Donation;