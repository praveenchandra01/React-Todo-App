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
            <h6 className="text-center ">Copyright &copy; {year} </h6>
        </footer>
    )
}
