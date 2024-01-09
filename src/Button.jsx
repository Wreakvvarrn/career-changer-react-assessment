import React, { useState, useEffect } from "react";
import { mockEmployees } from "./Home"
import Homeadmin from "./Homeadmin"
import Homeuser from "./Homeuser"

const Button = () => {
    const [employee, setEmployee] = useState([])
    const [sector, setSector] = useState("")
    useEffect(() => {
        setEmployee (mockEmployees)
    }, [])
    return (
        <div>
            <button onClick = {() => setSector("User")}>User Home Sector</button>
            <button onClick = {() => setSector("Admin")}>Admin Home Sector</button>
            {sector === "User" && <Homeuser formEmployee = {employee}/>}
            {sector === "Admin" && <Homeadmin formEmployee = {employee}/>}
        </div>
    )
}

export default Button