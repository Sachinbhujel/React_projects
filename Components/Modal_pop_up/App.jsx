import {React, useState} from 'react'
import './App.css';

function Modal_pop_up(){
    let [modalShow, setModalShow] = useState(false);

    function handleClick(){
        setModalShow(!modalShow);
    }

    function handleClickClose(){
        setModalShow(false);
    }

    return(
        <>
            <div className="main">
                {modalShow === true ? 
                <div className="modal_div">
                    <h1>Modal</h1>
                    <p onClick={handleClickClose}>Close</p>
                </div> : null}
                {modalShow === false ? <button onClick={handleClick}>Click</button> : null}
            </div>
        </>
    );
}

export default Modal_pop_up