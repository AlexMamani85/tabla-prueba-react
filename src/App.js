import DataTable from 'react-data-table-component'
import React from 'react'
import './App.css';

function App() {

  const [users, setUsers] = React.useState([])

  function fetchData(){
    const options = {method: 'GET', mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}};
    
    fetch('https://randomuser.me/api/?page=3&results=45&seed=abc', options)
      .then(response => response.json())
      .then(response => setUsers(response))
      .catch(err => console.error(err));
  }

  fetchData();
  
  // setUsers(fetchData());
  console.log(users);
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
