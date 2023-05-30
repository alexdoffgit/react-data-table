import EditIcon from "./icons/Edit"
import DeleteIcon from "./icons/Delete"
const dummy = [
  {
    id: 1,
    name: "andre",
    age: 17
  },
  {
    id: 2,
    name: "william",
    age: 19
  }
]

function App() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {dummy.map((value) => (<tr key={value.id}>
          <td>{value.name}</td>
          <td>{value.age}</td>
          <td>
            <EditIcon />
            <DeleteIcon />
          </td>
        </tr>))}
      </tbody>
    </table>
  )
}

export default App
