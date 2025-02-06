"use client"

// import { saveLocationAction } from "@/actions/LocationAction";
import React, { useState } from 'react'

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [location, setLocation] = useState<{ latitude?: number; longitude?: number; error?: string } | null>(null);

    // const handleButtonClick = async () => {
    //     setShowPopup(true);

    //     if (!navigator.geolocation) {
    //         console.warn("Geolocation is not supported by this browser.");
    //         console.log("111")
    //         await saveLocationAction({ email: "user@example.com" }); // ✅ Save without location
    //         return;
    //     }

    //     navigator.geolocation.getCurrentPosition(
    //         async (position) => {
    //             const newLocation = {
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //                 email: "user@example.com", // Pass email if needed
    //             };

    //             setLocation(newLocation); // ✅ Update state

    //             try {
    //                 console.log("222")
    //                 await saveLocationAction(newLocation); // ✅ Save with location
    //                 console.log("Location saved successfully!");
    //             } catch (error) {
    //                 console.error("Error saving location:", error);
    //             }
    //         },
    //         async (error) => {
    //             let errorMessage = "Unknown error occurred.";
    //             switch (error.code) {
    //                 case error.PERMISSION_DENIED:
    //                     errorMessage = "Permission denied. Please enable location services.";
    //                     break;
    //                 case error.POSITION_UNAVAILABLE:
    //                     errorMessage = "Location information is unavailable. GPS signal is weak.";
    //                     break;
    //                 case error.TIMEOUT:
    //                     errorMessage = "Location request timed out. Try again.";
    //                     break;
    //             }

    //             console.warn("Location error:", errorMessage);
    //             setLocation({ error: errorMessage });

    //             // ✅ Save even without location
    //             console.log("333")
    //             await saveLocationAction({ email: "user@example.com" });
    //         },
    //         { timeout: 10000 }
    //     );
    // };

    const handleButtonClick = async () => {
        setShowPopup(true);

        let payload = { latitude: 0, longitude: 0, email: "user@example.com" };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    payload = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        email: "user@example.com",
                    };
                    sendLocationToServer(payload);
                },
                async (error) => {
                    console.warn("Location error:", error.message);
                    sendLocationToServer(payload);
                },
                { timeout: 10000 }
            );
        } else {
            sendLocationToServer(payload);
        }
    };

    const sendLocationToServer = async (payload: { email: string; }) => {
        try {
            const response = await fetch("/api/save-location", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error("Failed to save location:", error);
        }
    };

    return (
        <div className='contact'>
            <div className="flex-1 pt-36 padding-x">
                <div className='contact__header'>
                    <h1>
                        contact__header
                    </h1>
                    <h1>
                        Get Contact
                    </h1>
                    <div className="contact__benefit">
                        contact__benefit
                    </div>
                </div>
                <div className="contact__input pt-2">
                    <form>
                        <div className="relative">
                            {/* text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
                            <input type="search" id="search" className="block w-full p-2 text-sm bg-gray-100" placeholder="Email" required />
                            <button type="submit" className='absolute end-0 bottom-0 p-[7px] bg-blue-200'> Submit</button>
                            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
                        </div>
                    </form>
                    {/* <div className="contact__email">
                        <input type="text" />
                        <button type='submit'>signup</button>
                    </div> */}
                    <div className="contact__click">
                        <button type="button" onClick={handleButtonClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Click</button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-2">Your Location</h2>
                        {location ? (
                            location.error ? (
                                <p className="text-red-500">{location.error}</p>
                            ) : (
                                <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
                            )
                        ) : (
                            <p>Fetching location...</p>
                        )}
                        <button onClick={() => setShowPopup(false)} className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg">Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact
