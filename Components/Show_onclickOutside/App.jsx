import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function Show_onclickOutside() {
    let [showData, setShowData] = useState(false);
    let contentRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (contentRef.current && !contentRef.current.contains(e.target)) {
                setShowData(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showData]);

    return (
        <div>
            {showData ? (
                <div ref={contentRef}>
                    <h3>This is a random context.</h3>
                </div>
            ) : (
                <button onClick={() => setShowData(true)}>Content</button>
            )}
        </div>
    );
}

export default Show_onclickOutside;
