import React, {useState, useEffect} from 'react'
import './App.css'

function Scroll_bar() {
  let [data, setData] = useState([]);
  let [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    let url = "https://dummyjson.com/products";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setData(data.products)
    })
    .catch((error) => console.log("Error fetching data:", error))

    function handleScroll(){
        let scrollTop = document.documentElement.scrollTop;
        let windowHeight = window.innerHeight;
        let docuHeight = document.documentElement.scrollHeight;

        let scroll = (scrollTop / (docuHeight - windowHeight)) * 100
        setScrollWidth(scroll)
    }

    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='main'>
        <div className='scroll_bar'>
            <div className='scroll_bar_div' style={{width : `${scrollWidth}%`}}>

            </div>
        </div>
        {data.map((item, index) => (
            <div key={index}>
                <p>{item.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Scroll_bar