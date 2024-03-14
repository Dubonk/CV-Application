function GeneralInfo({ genInfo, setGenInfo }) {

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
            <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={genInfo.firstName} onChange={(event) => handleInput(event, "firstName")} placeholder="First Name"/>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={genInfo.lastName} onChange={(event) => handleInput(event, "lastName")} placeholder="Last Name"/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={genInfo.email} onChange={(event) => handleInput(event, "email")} placeholder="Email"/>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={genInfo.phone} onChange={(event) => handleInput(event, "phone")} placeholder="Phone"/>
        </form>
        </>
    )

}

export { GeneralInfo };