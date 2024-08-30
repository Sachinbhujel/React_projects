import {React, useState, useEffect} from "react";

function Search_autocomplete(){
    let [users, setUsers] = useState([]);
    let [query, setQuery] = useState("");

    async function Search_users(){
        let res = await fetch('https://dummyjson.com/users');
        let data = await res.json();
        setUsers(data.users);
    }

    let filterUsers = users.filter((user) => {
        return user.firstName.toLowerCase().includes(query.toLowerCase())
    })

    console.log(filterUsers)

    useEffect(() => {
        Search_users();
    }, [])
    return (
        <>
          <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
          {
            query && (
                <ul>
                    {filterUsers.map((user) => (
                        <li key={user.id}>{user.firstName}</li>
                    ))}
                </ul>
            )
          }
        </>
    )
}

export default Search_autocomplete;