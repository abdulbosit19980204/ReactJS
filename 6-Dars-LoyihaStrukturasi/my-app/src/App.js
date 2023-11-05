import './App.css';

const Header=()=>{
  const sayHello =(uname)=>{
    return(
      <div>
        <h1>Welcome to {uname}</h1>
        </div>
    )
  }
  return (
      <div>
        {sayHello('Abdulbosit')}
      </div>
  )
}

const Field=()=>{
  return(
    <input type='text' placeholder='new componenet'/>
  )
}

const Button = ()=>{
 const text ='Click'
 return <button>{text} </button>
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Field/> <Button/>
    </div>
    
  );
}

export default App;
