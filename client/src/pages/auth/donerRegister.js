import React, { useState, useEffect } from 'react';
import Layoutt from '../../components/shared/Layout/Layoutt.js'
import { Country, State, City } from 'country-state-city';
import './registration.css'
import { handleRegister } from "../../services/authService";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Register = () => {

    const { loading, error } = useSelector((state) => state.auth);
    const [role, setRole] = useState("donar");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [idproof, setIdproof] = useState(null)
    const [idprooff, setIdprooff] = useState("")
    const [gender, setGender] = useState("")
    const [aaddress, setAaddress] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [lastdonation, setLastdonation] = useState('');
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [location, setLocation] = useState(null);


    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };



   
    //locaton
    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            error => {
                console.error(error);
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);


    let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";

    let apikey = "d9642466b127494eae7d184963465935";
    let query = `${location?.latitude}, ${location?.longitude}`;
    const getUserCourrentAddress = async () => {


        let apiUrl = `${apiEndpoint}?key=${apikey}&q=${query}&pretty=1`;
        try {

            const res = await fetch(apiUrl);
            const data = await res.json()
            console.log("ansul", data.results[0].formatted)
            setAaddress(data.results[0].formatted)
        }

        catch (e) {
            console.log(e);


        };
    };
    (async () => {
        await getUserCourrentAddress();
    })();
    console.log("pal", aaddress)
   

    return (
        <Layoutt>
            {error && <span>{toast.error(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <div className="container1">
                    <div className="container2">
                        <div className="title">  Register As {role}</div>


                        {location ? (
                            <p>
                               {aaddress}
                            </p>
                        ) : (
                            <p>Loading...</p>
                        )}


                        <div className="content">
                            <form onSubmit={(e) => {

                                return handleRegister(e, name, organisationName, hospitalName, age, country, state, city, bloodGroup, lastdonation, gender, address, email, password, phone, role, location);

                            }}>

                                <div className="d-flex mb-3 mt-4">


                                    <div className="form-check ms-2 rr">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="role"
                                            id="donerRadio"
                                            value={"donar"}
                                            onChange={(e) => setRole(e.target.value)}
                                            defaultChecked
                                        />
                                        <label htmlFor="donerRadio" className="form-check-label">
                                            Donar
                                        </label>
                                    </div>
                                    {/* <div className="form-check ms-2 rr">
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
                                    </div> */}
                                    <div className="form-check ms-2 rr ">
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
                                    <div className="form-check ms-2 rr">
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

                                <div className="user-details">
                                    {(role === "donar" || role === "admin") && (
                                        <>
                                            <div className="input-box">
                                                <span className="details">Name</span>
                                                <input type="text" placeholder="Enter your Name" required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                            </div>

                                            <div className="input-box">
                                                <span className="details">Age</span>
                                                <input type="number" placeholder="Enter your Age" required
                                                    value={age}
                                                    onChange={(e) => setAge(e.target.value)} />
                                            </div>


                                            <div className="input-box">
                                                <span className="details">Blood Group</span>
                                                <select className="" aria-label="Default select example" placeholder="Enter your Blood Group" required
                                                    value={bloodGroup}
                                                    onChange={(e) => setBloodGroup(e.target.value)}>
                                                    <option selected></option>
                                                    <option value={"O Positive"}>O+ve</option>
                                                    <option value={"A Positive"}>A+</option>
                                                    <option value={"B Positive"}>B+</option>
                                                    <option >O-</option>
                                                    <option >A-</option>
                                                    <option >B-</option>
                                                    <option value={"AB Positive"}>AB+</option>
                                                    <option >AB-</option>

                                                </select>

                                            </div>
                                            <div className="input-box">
                                                <span className="details">Last Donation</span>
                                                <input type={'date'} placeholder="If Any"
                                                    value={lastdonation}
                                                    onChange={(e) => setLastdonation(e.target.value)}
                                                />
                                            </div>

                                            <div>
                                                <label className='details'>Gender</label>
                                                <div className="d-flex mb-3 ">


                                                    <div className="form-check ms-2">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="gender"
                                                            id="male"
                                                            value={"male"}
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        <label htmlFor="male" className="form-check-label">
                                                            Male
                                                        </label>
                                                    </div>
                                                    <div className="form-check ms-2">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="gender"
                                                            id="female"
                                                            value={"female"}
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        <label htmlFor="female" className="form-check-label">
                                                            Female
                                                        </label>
                                                    </div>
                                                    <div className="form-check ms-2">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="gender"
                                                            id="other"
                                                            value={"other"}
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        <label htmlFor="other" className="form-check-label">
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )}
                                    {role === "organisation" && (
                                        <div className="input-box">
                                            <span className="details">Organisation Name</span>
                                            <input type="text" placeholder="Enter Organisation Name" required
                                                value={organisationName}
                                                onChange={(e) => setOrganisationName(e.target.value)} />
                                        </div>
                                    )}
                                    {role === "hospital" && (
                                        <div className="input-box">
                                            <span className="details">Hospital Name</span>
                                            <input type="text" placeholder="Enter Hospital Name" required
                                                value={hospitalName}
                                                onChange={(e) => setHospitalName(e.target.value)} />
                                        </div>
                                    )}
                                    <div className="input-box">
                                        <span className="details">Email</span>
                                        <input type="email" placeholder="Enter your email" required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div class="input-box">
                                        <span className="details"> Create Password </span>

                                        <div className='flex'> <input type={showPassword ? "text" : "password"} placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                            <span
                                                type={'button'}
                                                onClick={handleTogglePassword}
                                                style={{ marginLeft: '12px' }}
                                            >
                                                {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>}
                                            </span></div>


                                    </div>
                                    <div className="input-box">
                                        <span className="details">Phone Number</span>
                                        <input type="number" placeholder="Enter your number" required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Address</span>
                                        <input type="text" placeholder="Enter your Address" required
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                   


                                    <div className="input-box">
                                        <span className="details">Country</span>
                                        <select
                                            required
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                        >
                                            <option value="">Country</option>
                                            {Country &&
                                                Country.getAllCountries().map((item) => (
                                                    <option key={item.isoCode} value={item.isoCode}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    {country && (
                                        <div className='input-box'>
                                            <span className="details">State</span>

                                            <select
                                                required
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                            >
                                                <option value="">State</option>
                                                {State &&
                                                    State.getStatesOfCountry(country).map((item) => (
                                                        <option key={item.isoCode} value={item.isoCode}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    )}

                                    {country && state && (
                                        <div className='input-box'>
                                            <span className="details">City</span>
                                            <select
                                                required
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            >
                                                <option value="">City</option>
                                                {City &&
                                                    City.getCitiesOfState(country, state).map((item) => (
                                                        <option key={item.isoCode} value={item.isoCode}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    )}

                                    {/* <div className="input-box">
                                    <span className="details">Id Proof</span>
                                    <input type={'file'} placeholder="Enter any valid Id Proof"
                                        accept='.jpg,.pdf,.jpeg'
                                        value={idproof}
                                        onChange={(e) => setIdproof(e.target.value)}
                                    />
                                </div> */}






                                </div>

                                <div className="button">
                                    <input type="submit" defaultValue="Register" />

                                </div>
                                <p>
                                    ALready Usser Please
                                    <Link to="/login"> Login !</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Layoutt>
    )
}

export default Register;





