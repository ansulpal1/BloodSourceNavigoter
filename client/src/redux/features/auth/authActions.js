import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from 'react-toastify';


export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post("/auth/login", { role, email, password });
            //store token
            if (data.success) {
                toast.success(data.message,
                );
                localStorage.setItem("token", data.token);
                setTimeout(() => {
                    window.location.replace("/");
                }, 2500);
            }

            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);

            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

//register
export const userRegister = createAsyncThunk(
    "auth/register",
    async (
        {
            name, organisationName, hospitalName, age, country, state, city, bloodGroup, lastdonation, gender, address, email, password, phone, role, location
        },
        { rejectWithValue }
    ) => {
        try {
            const { data } = await API.post("/auth/register", {
                name, organisationName, hospitalName, age, country, state, city, bloodGroup, lastdonation, gender, address, email, password, phone, role, location
            });
            if (data?.success) {
                toast.success(data.message);
                setTimeout(() => {
                    window.location.replace("/login");
                }, 2500);
                // toast.success("User Registerd Successfully");
            }
            toast.error(data.message);
        } catch (error) {

            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);


            } else {
                return rejectWithValue(error.message);

            }
        }
    }
);

//current user
export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async ({ rejectWithValue }) => {
        try {
            const res = await API.get("/auth/current-user");
            if (res.data) {
                return res?.data;
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);