import React, {useState, useEffect} from 'react'
import './App.css'

function Github_profile_finder(){
    let [userName, setUserName] = useState("sachinbhujel");
    let [userData, setUserData] = useState(null);

    async function fetchUserNameSearch(){
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            if (!res.ok) {
                throw new Error('User not found');
            }
            const data = await res.json();
            setUserData(data);
        } catch (error) {
            setUserData(null);
            alert(error.message);
        }
    }

    function handleSubmit(){
        fetchUserNameSearch()
    }

    useEffect(() => {
        fetchUserNameSearch();
    }, [])

    return(
        <>
        <div className="main">
            <div className="app">
                <div className="user_find_div">
                    <input type="text" placeholder="Enter your userid" onChange={(e) => setUserName(e.target.value)}/>
                    <button onClick={handleSubmit}>Search</button>
                </div>
                <div className="showProfile">
                    {userData && (
                        <div className="userProfile">
                            <img src={userData.avatar_url}/>
                            <h2><a href={`https://github.com${login}`}>{userData.name}</a></h2>
                            <p>Followers - {userData.followers}</p>
                            <p>Following - {userData.following}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Github_profile_finder;