import React, {useState, useLayoutEffect} from 'react'

function UserWidthHook(){
    let [{width, height}, setUserWidth] = useState({
        width: 0,
        height: 0
    })

    function handleWindow(){
        setUserWidth({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useLayoutEffect(() => {
        handleWindow()

        window.addEventListener("resize", handleWindow)

        return () => {
            window.removeEventListener("resize", handleWindow)
        }
    }, [])

    return(
        <>
            width is {width}
            height is {height}
        </>
    )
}

export default UserWidthHook