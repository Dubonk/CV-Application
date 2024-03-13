
function EducationHistory({educationHist, setEducationHist}) {
    // const [educationHist, setEducationHist] = useState({schoolName: "", study: "", date: ""});

    const handleInput = (event, field) => {
        setEducationHist({
            ...educationHist,
            [field]: event.target.value
        });
    } 

    return (
        <>
        <h2>Education</h2>
        <div className="education">
            <input type="text" onChange={(event) => handleInput(event, "schoolName")} placeholder="School"/>
            <input type="text" onChange={(event) => handleInput(event, "study")} placeholder="Study"/>
            <input type="date" onChange={(event) => handleInput(event, "date")}/>
        </div>
        </>
    )
}

export { EducationHistory }