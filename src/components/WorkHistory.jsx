
function WorkHistory({workHistList, setWorkHistList}) {
  // const [workHistList, setWorkHistList] = useState([
  //   { companyName: "", position: "", responsibilities: "", date: { start: "", end: "" } }
  // ]);

  const handleInput = (event, index, field, subField) => {
    setWorkHistList((prevWorkHistList) => {
      const updatedList = [...prevWorkHistList];
      const currentItem = updatedList[index];

      const updatedItem = {
        ...currentItem,
        [field]: subField
          ? { ...currentItem[field], [subField]: event.target.value }
          : event.target.value,
      };

      updatedList[index] = updatedItem;
      return updatedList;
    });
  };

  const addWork = () => {
    setWorkHistList((prevWorkHistList) => [
      ...prevWorkHistList,
      { companyName: "", position: "", responsibilities: "", date: { start: "", end: "" } }
    ]);
  };

  return (
    <>
      <h2>Work History</h2>
      {workHistList.map((workHist, index) => (
        <div className="workForm" key={index}>
            <h3 key={index}>company {index + 1}</h3>
          <input
            type="text"
            onChange={(event) => handleInput(event, index, "companyName")}
            placeholder="Company Name"
          />
          <input
            type="text"
            onChange={(event) => handleInput(event, index, "position")}
            placeholder="Position"
          />
          <textarea
            cols="30"
            rows="5"
            onChange={(event) => handleInput(event, index, "responsibilities")}
            placeholder="Responsibilities"
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date" name="startDate" id="startDate"
            onChange={(event) => handleInput(event, index, "date", "start")}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date" name="endDate" id="endDate"
            onChange={(event) => handleInput(event, index, "date", "end")}
          />
        </div>
      ))}
      <button onClick={addWork}>Add Work</button>
    </>
  );
}

export { WorkHistory };
