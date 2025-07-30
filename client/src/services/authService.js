import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";
import { toast } from 'react-toastify'

export const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    try {
        if (!role || !email || !password) {
            return toast.error("Please Privde All Feilds");
        }

        store.dispatch(userLogin({ email, password, role }));
    } catch (error) {
        console.log(error);

    }
};




export const handleRegister = (
    e, name, organisationName, hospitalName, age, country, state, city, bloodGroup, lastdonation, gender, address, email,  password, phone, role, location
) => {
    e.preventDefault();
    try {

        store.dispatch(
            userRegister({
                name, organisationName, hospitalName, age, country, state, city, bloodGroup, lastdonation, gender, address, email, password, phone, role, location
            })
        );
    } catch (error) {
        console.log(error);
    }
};