import DataTable from 'react-data-table-component'
import React from 'react'
import './App.css';

function App() {

  const [users, setUsers] = React.useState([])

  function fetchData(){
    const options = {method: 'GET', mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}};
    
    fetch('https://randomuser.me/api/?page=3&results=45&seed=abc', options)
      .then(response => response.json())
      .then(response => setUsers(response.results))
      .catch(err => console.error(err));
  }
  const info = React.useRef([]);
  
  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    info.current = users.map((user)=>{
      return {nombre: user.name.first,
              apellido: user.name.last,
              edad: user.dob.age,
              genero: user.gender,
              email: user.email,
              nacionalidad: user.nat,
              foto: user.picture.thumbnail,}
    });

  }, [users]);




  // setUsers(fetchData());
  console.log(users);


  console.log(info);
  console.log(info.current);

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
  name: 'NOMBRE',
  selector: row => row.nombre
  },
    {
  name: 'APELLIDO',
  selector: row => row.apellido
  },
    {
  name: 'EDAD',
  selector: row => row.edad
  },
  {
  name: 'GENERO',
  selector: row => row.genero
  },
    {
  name: 'EMAIL',
  selector: row => row.email
  },
    {
  name: 'NACIONALIDAD',
  selector: row => row.nacionalidad
  },
  {
  name: 'FOTO',
  selector: row => row.foto
  },
  
]

  return (
    <div className="App">
      <DataTable
        columns={columns}
        data={info.current}
        
      ></DataTable>
    </div>
  );
}

export default App;
