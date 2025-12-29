import React, { useState } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    console.log(title, details);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className=" mt-5 ml-5 lg:flex gap-20">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex flex-col lg:w-1/2 mr-5 "
      >
        <h1 className=" text-white text-5xl ml-5 font-bold">Add Notes</h1>
        <input
          className=" rounded-lg border-2 border-white-5 w-full ml-5 mt-10 mr-5 px-10 py-10 text-white text-2xl font-semibold h-2"
          type="text"
          placeholder="Enter the Note Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          className=" rounded-lg border-2 border-white-5 h-50 w-full ml-5 mr-5 mt-10 px-10 py-10 items-start text-white text-2xl font-semibold"
          type="text"
          placeholder="Write the details.."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className=" active:scale-95 text-black bg-amber-200 rounded-sm px-4 py-4 w-full m-5 mr-5">
          SUBMIT
        </button>
      </form>

      <div className=" lg:h-200 w-1 bg-white"></div>

      <div className="recent-notes lg:w-1/2">
        <h1 className=" text-white text-5xl ml-5 font-bold">Recent Notes</h1>

        <div className="notes flex flex-wrap gap-5 ml-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="w-60 h-50 bg-white rounded-xl mt-10 p-3 flex flex-col justify-between"
              >
                <div>
                  <h3 className="leading-tight text-xl px-5 py-5 font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight text-m font-semibold px-5 text-gray-600">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
