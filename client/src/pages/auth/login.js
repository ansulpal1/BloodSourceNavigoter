import React from 'react'
import Layoutt from '../../components/shared/Layout/Layoutt.js'
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import Form from "../../components/shared/Form/Form";
import { toast } from 'react-toastify';

const Login = () => {

    const { loading, error } = useSelector((state) => state.auth);
    return (
        <Layoutt>
            {error && <span>{toast.error(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (


                <div className='container11'>

                    <div className="row g-0 container22">
                        {/* <div className="col-md-2 form-banner ms-5">
                        <img src="" className='login-img' />
                    </div> */}
                        <div className=" form-container input-box rr ">
                            <Form
                                className="details"
                                formTitle={"Login As  "}
                                submitBtn={"Login"}
                                formType={"login"}
                            />
                        </div>
                    </div>
                </div>



            )}

        </Layoutt>
    )
}

export default Login