import {useState, useEffect} from 'react'
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
        }
    }

    function handleSubmit(){
        fetchUserNameSearch();
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
                    {userData ? (
                        <div className="userProfile">
                            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`}/>
                            <h2><a href={`https://github.com/${userData.login}`}>{userData.name || userData.login}</a></h2>
                            <p>Followers - {userData.followers}</p>
                            <p>Following - {userData.following}</p>
                        </div>
                    ) : (
                        <p>No user data found</p>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Github_profile_finder;