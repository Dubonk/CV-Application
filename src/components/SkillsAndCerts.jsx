
function SkillsCerts({certs, setCerts}) {
    const handleInput = (event) => {
        setCerts(event.target.value);
    } 

    return (
        
        <div className="certs">
        <h2>Skills And Certifications</h2>
        <label htmlFor="skills">Skills:</label>
        <textarea name="skills" value={certs} onChange={(event) => handleInput(event)} id="skills" cols="30" rows="10" />
        </div>
    )
}

export { SkillsCerts }