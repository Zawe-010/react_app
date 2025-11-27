import { useState, useEffect } from "react";

function OnlineStatus() {
    // State to track if the user is online
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        // When the browser goes online
        const handleOnline = () => {
            setIsOnline(true);
        };

        // When the browser goes offline
        const handleOffline = () => {
            setIsOnline(false);
        };

        // Add event listeners
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup function (removes listeners when component unmounts)
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []); // Run once

    return (
        <div style={{ padding: "20px" }}>
            <h2>
                {isOnline ? (
                    <span style={{ color: "green" }}>You are online</span>
                ) : (
                    <span style={{ color: "red" }}>You are offline</span>
                )}
            </h2>
        </div>
    );
}

export default OnlineStatus;
