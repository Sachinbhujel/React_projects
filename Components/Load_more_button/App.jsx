import React, {useState, useEffect} from 'react'
import './App.css';

function Load_more_button() {
    let [itemData, setItemData] = useState([]);
    const [itemNum, setItemNum] = useState(1);

    let url = `https://fakestoreapi.com/products/${itemNum}`;
    async function fetchUrl(){
        try{
            let response = await fetch(url);
            let data = await response.json();
            setItemData(prevData => [...prevData, data]);
        } catch (error){
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchUrl();
    }, [itemNum]);

  return (
    <div className='main'>
        {itemData.map((item, index) => (
                <div key={item.id} className='item_div'>
                    <h1>ID: {item.id}</h1>
                    <h3>Title: {item.title}</h3>
                    <span className='item_price'>Price: ${item.price}</span>
                    <p>Description: {item.description}</p>
                </div>
            ))}    
            <button onClick={() => setItemNum(prevNum => prevNum + 1)}>Load More</button>
    </div>
  )
}

export default Load_more_button
