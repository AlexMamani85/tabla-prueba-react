import DataTable from 'react-data-table-component'

import './App.css';

function App() {


const data = [
  {
    id: 1,
    name: 'Juan Carlos',
    age: 25
  },
    {
    id: 2,
    name: 'Martina',
    age: 29
  },
    {
    id: 3,
    name: 'Canelaria',
    age: 36
  }
]
const columns = [
  {
  name: 'ID',
  selector: row => row.age
  },
    {
  name: 'NAME',
  selector: row => row.age
  },
    {
  name: 'AGE',
  selector: row => row.age
  },
]

  return (
    <div className="App">
      <DataTable
        columns={columns}
        data={data}
        
      ></DataTable>
    </div>
  );
}

export default App;
