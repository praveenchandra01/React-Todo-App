import React from 'react'

export const Footer = () => {
    let year = new Date().getFullYear();
    let Footercss =
    {   
        position :"relative",
        top: "20vh",
        // bottom : "0px",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-1 " style={Footercss}>
            <h4 className="text-center">Copyrigth &copy; {year} </h4>
        </footer>
    )
}
