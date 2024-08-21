import React, {useState} from 'react'
import './App.css'
import QRCode from 'react-qr-code'

function Qr_generator() {
  let [qrCode, setQrCode] = useState('');
  let [input, setInput] = useState('');

  function handleClick(){
    setQrCode(input);
    setInput('');
  }
  return (
    <div className='main'>
      <div className='input_div'>
        <input type="text" placeholder='Enter text' onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>
        <QRCode id="qr_code_img" size={200}  value={qrCode}/>
      </div>
    </div>
  )
}

export default Qr_generator