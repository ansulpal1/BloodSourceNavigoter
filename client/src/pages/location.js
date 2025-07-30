import React, { useState, useEffect } from 'react';
import { donerRegister } from '../pages/auth/donerRegister.js';
const LiveLocationTracker = () => {
    const [location, setLocation] = useState(null);

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

    return (
        <div>
            <h2>Live Location:</h2>
            {location ? (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            ) : (
                <p>Loading...</p>
            )}
            <donerRegister location={location} />
        </div>
    );
};

export default LiveLocationTracker;
