import React from "react";

function Scroll_bar() {
    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight - window.innerHeight,
            behavior: 'smooth'
        })
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <button onClick={scrollToBottom}>
                Scroll to Bottom
            </button>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>'
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <p>Hii</p>
            <button onClick={scrollToTop}>
                Scroll to Top
            </button>
            
        </div>
    );
}

export default Scroll_bar;
