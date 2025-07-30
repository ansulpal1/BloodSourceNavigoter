import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("donar");


    return (
        <div>

            <form

                onSubmit={(e) => {
                    if (formType === "login")
                        return handleLogin(e, email, password, role);

                }}
            >

                <h1 className="text-center fs-3">{formTitle + role}</h1>
                <hr />


                <div className="d-flex mb-3 ">

                    <div className="form-check ms-2 input-box">
                        <input
                            type="radio"
                            className="form-check-input "
                            name="role"
                            id="donerRadio"
                            value={"donar"}
                            onChange={(e) => setRole(e.target.value)}
                            defaultChecked
                        />
                        <label htmlFor="donerRadio" className="form-check-label details">
                            Donar
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="adminRadio"
                            value={"admin"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="adminRadio" className="form-check-label">
                            Admin
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="hospitalRadio"
                            value={"hospital"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="hospitalRadio" className="form-check-label">
                            Hospital
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="organisationRadio"
                            value={"organisation"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="organisationRadio" className="form-check-label">
                            Organisation
                        </label>
                    </div>
                </div>


                <>
                    <InputType
                        labelText={"Email"}
                        labelFor={"forEmail"}
                        inputType={"email"}
                        name={"email"}
                        value={email}
                        placeholder={"Enter your Email Address"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputType
                        labelText={"Password"}
                        labelFor={"forPassword"}
                        inputType={"password"}
                        name={"password"}
                        placeholder={"Enter your Password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </>




                <div className="d-flex flex-row justify-content-between mt-4">
                    <p>
                        Not registerd yet ? Register
                        <Link to="/register"> Here !</Link>
                    </p>
                    <button className="btn btn-primary" type="submit">
                        {submitBtn}
                    </button></div>

            </form>
        </div>
    );
};

export default Form;