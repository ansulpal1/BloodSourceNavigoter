// import React from 'react'
// import Layout from '../../components/shared/Layout/Layout'
// import { GoogleMap, useJsApiLoader as Loder, Marker } from '@react-google-maps/api';
// const containerStyle = {
//     width: '100%',
//     height: '100vh'
// };
// const center1 = {
//     lat: 30.8568,
//     lng: 75.8572,
// }
// const center = {
//     lat: 30.8568,
//     lng: 75.8572,
// };
// const map = () => {


//     const { isLoaded } = Loder({
//         id: 'google-map-script',
//         googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
//     })
//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}

//             zoom={10}

//         >

//             <Marker position={center} />
//             <Marker position={center1} />
//         </GoogleMap>
//     ) : <></>
// }

// export default map

import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
    useJsApiLoader as Loder,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from "@react-google-maps/api";

const center = {
    lat: 30.8568,
    lng: 75.8572,
};

function Mpp() {
    
    const { isLoaded } = Loder({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    });

    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);

    const originRef = useRef();
    const destiantionRef = useRef();

    async function calculateRoute() {
        if (originRef.current.value === "" || destiantionRef.current.value === "") {
            return;
        }
        const directionsService = new window.google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            travelMode: window.google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
    }

    function clearRoute() {
        setDirectionsResponse(null);
        originRef.current.value = "";
        destiantionRef.current.value = "";
    }

    return isLoaded ? (
        <>
            <div className="searchbox g-0">
                <div className="row">
                    <div className="col-lg-4">
                        <Autocomplete>
                            <input
                                type="text"
                                name="Origin"
                                className="form-control"
                                placeholder="Origin"
                                ref={originRef}
                            />
                        </Autocomplete>
                    </div>
                    <div className="col-lg-4">
                        <Autocomplete>
                            <input
                                type="text"
                                name="Destication"
                                className="form-control"
                                placeholder="Destination"
                                ref={destiantionRef}
                            />
                        </Autocomplete>
                    </div>
                    <div className="col-lg-2">
                        <button
                            type="submit"
                            name="submit"
                            className="btn11 btn-primary"
                            onClick={calculateRoute}
                        >
                            Search
                        </button>
                    </div>
                    <div className="col-lg-2">
                        <button
                            type="submit"
                            name="clear"
                            className="btn11 btn-danger"
                            onClick={clearRoute}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
            <GoogleMap
            className="g-0"
                center={center}
                zoom={12}
                mapContainerStyle={{ width: "100%", height: "100vh" }}

                onLoad={(map) => setMap(map)}
            >
                <Marker position={center} />
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>
        </>
    ) : (
        <></>
    );
}

export default Mpp;

