import EditIcon from "./icons/Edit";
import DeleteIcon from "./icons/Delete";
import NewIcon from "./icons/New";
import { useState } from "react";
import AcceptIcon from "./icons/Accept";
import CancelIcon from "./icons/Cancel";

type Mode = "read" | "edit" | "new"

function useAppState() {
  const [state, setState] = useState([
    {
      id: 1,
      name: "andre",
      age: 17,
    },
    {
      id: 2,
      name: "william",
      age: 19,
    },
  ])
  const [mode, setMode] = useState<Mode>("read")

  return {
    state,
    setState,
    mode,
    setMode
  }
}

function App() {
  const { state, setState, mode, setMode } = useAppState()

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>
            <button onClick={() => setMode("new")}>
              <NewIcon />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {state.map((value) => (
          <tr key={value.id}>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>
              <button>
                <EditIcon />
              </button>
              <button>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
        {mode === "new" &&
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <button>
                <AcceptIcon />
              </button>
              <button onClick={() => setMode("read")}>
                <CancelIcon />
              </button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  );
}

export default App;
