import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, remove } from './action';

function App() {
  const [data, setdata] = useState({
    name: '', email: '', contact: '', password: ''
  })
  const [todo , settodo] = useState(false)

  const dispatch = useDispatch()
  const getdata = useSelector((state) => state.Userdata)

  // console.log('getdata', getdata.val);
  

  function handleinfo(i) {
    // console.log(i.target.name);
    setdata({ ...data, [i.target.name]: i.target.value })
  }


  return (
    <div className="App">
      {/* <h1>{getdata}</h1> */}
    
      <center>
        {/* <form method='post' onSubmit={submit}> */}
        <table>
          <tbody>
            <tr>
              <td>name:</td>
              <td><input type="text" name='name' value={data.name} onChange={handleinfo} /></td>
            </tr>
            <tr>
              <td>email:</td>
              <td><input type="text" name='email' value={data.email} onChange={handleinfo} /></td>
            </tr>
            <tr>
              <td>password:</td>
              <td><input type="text" name='password' value={data.password} onChange={handleinfo} /></td>
            </tr>
            <tr>
              <td>contact:</td>
              <td><input type="text" name='contact' value={data.contact} onChange={handleinfo} /></td>
            </tr>
            <tr>
              {/* <td colSpan={2} align='center'><input type="submit" value='submit' /> */}
              <td colSpan={2} align='center'><button onClick={() => { dispatch(adddata(data)) }}>submit</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>password</td>
            <td>contact</td>
            <td>delete</td>
            <td>edit</td>
          </tr>
          {
            // (getdata.length!==0) &&
          getdata.val.map((i , index)=>{
            return(
              <>
            <tr>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>
              <td>{i.contact}</td>
              <td><button  onClick={()=> {dispatch(remove(index))}}>remove</button></td>
              <td>edit</td>
            </tr>
              </>
            )
          })
        }
         
        </table>

        {/* {
          getdata.data.map((i)=>{
            return(
              <>
              <p>{i.name}</p>
              </>
            )
          })
        } */}
    
      </center>
    </div>
  );
}

export default App;
