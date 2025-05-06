import { useState } from "react";
/* eslint-disable react/react-in-jsx-scope */
export default function Form() {
  const [name, setName] = useState("");
  const [namelist, setNameList] = useState([]);
  function handleChange(event) {
    setName(event.target.value);
  }
  function addtolist() {
    const newlist = namelist.concat({ name });
    setNameList(newlist);
    setName("");
  }
  return (
    <>
      <div className="flex gap-4">
        <input
          className="border border-gray-400 p-2.5 rounded"
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Your Name"
        ></input>
        <button
          onClick={addtolist}
          className="bg-gray-400 hover:bg-blue-600 text-white font-bold rounded mt-2 align-right float-right"
        >
          Submit
        </button>
      </div>
      <ul id="list" className="list-disc list-inside mt-4">
        {namelist.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
