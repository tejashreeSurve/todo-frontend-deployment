import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");


  useEffect(() => {
    axios.get(`${API_URL}/todos`).then((res) => {
      console.log(res.data)
      setList(res.data)
    });
  }, [])
  
  const handleAdd = async () => {
    if (item.length) {
      const res = await axios.post(`${API_URL}/todos`, { title: item });
      setList([...list, res.data]);
      setItem("");
    }
  }

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/todos/${id}`);
    setList(list.filter((item) => item._id !== id));
  }
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 flex flex-col gap-3 items-center bg-blue-200  absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm  p-6">
        <h1 className="font-bold text-2xl justify-self-center"> ToDo List </h1>

        <div className="flex flex-row gap-3 justify-items-start">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={(e)=>handleKeyDown(e)}
            className="bg-white px-4 py-2 rounded-sm border border-blue-700"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-400 disabled:bg-blue-300 disabled:cursor-not-allowed"
            onClick={handleAdd}
            disabled={item.length === 0}
          >
            Add
          </button>
        </div>

        <div className="w-full">
          {list.length ? (
            <ul className="flex flex-col w-full gap-1">
              {list.map((item) => (
                <li key={item._id} className="flex justify-between items-center border border-blue-300 rounded-sm p-2 bg-blue-50">
                  {item.title}
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-400 justify-self-end"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-black text-xl">No items.</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
