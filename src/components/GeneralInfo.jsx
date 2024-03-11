import { useState } from "react"


function GeneralInfo() {
    const [genInfo, setGenInfo] = useState({firstName: "", lastName: "", email: "", phone: ""})

    const handleInput = (event, field) => {
        setGenInfo({
            ...genInfo,
            [field]: event.target.value
        });
    } 
    return (
        <>
        <h2>General Info</h2>
        <form className="genInfoForm" id="genInfoForm" autoComplete="on">
        <input type="text" id="firstName" onChange={(event) => handleInput(event, "firstName")} placeholder="First Name"/>
        <input type="text" id="lastName" onChange={(event) => handleInput(event, "lastName")} placeholder="Last Name"/>
        <input type="email" id="email" onChange={(event) => handleInput(event, "email")} placeholder="Email"/>
        <input type="tel" id="phone" onChange={(event) => handleInput(event, "phone")} placeholder="Phone"/>
        </form>
        </>
    )

}

export { GeneralInfo }