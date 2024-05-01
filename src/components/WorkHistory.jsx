import PropTypes from 'prop-types';


function WorkHistory({workHistList, setWorkHistList}) {

  WorkHistory.propTypes = {
    workHistList: PropTypes.array,
    setWorkHistList: PropTypes.func
  }

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

  const removeJob = (index) => {
    setWorkHistList((prevWorkHistList) => {
      const updatedList = [...prevWorkHistList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  return (
    <>
      <h2>Work History</h2>
      {workHistList.map((workHist, index) => (
        <div className="workForm" key={index}>
            <h3>company {index + 1}</h3>
          <input
            type="text" value={workHist.companyName}
            onChange={(event) => handleInput(event, index, "companyName")}
            placeholder="Company Name"
          />
          <input
            type="text" value={workHist.position}
            onChange={(event) => handleInput(event, index, "position")}
            placeholder="Position"
          />
          <textarea
            cols="30"
            rows="5" value={workHist.responsibilities}
            onChange={(event) => handleInput(event, index, "responsibilities")}
            placeholder="Responsibilities"
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            type="month" name="startDate" id="startDate" value={workHist.date.start}
            onChange={(event) => handleInput(event, index, "date", "start")}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="month" name="endDate" id="endDate" value={workHist.date.end}
            onChange={(event) => handleInput(event, index, "date", "end")}
          />
          <button onClick={() => removeJob(index)}>Remove work</button>
        </div>
      ))}
      <button onClick={addWork}>Add Work</button>
    </>
  );
}

export { WorkHistory };
