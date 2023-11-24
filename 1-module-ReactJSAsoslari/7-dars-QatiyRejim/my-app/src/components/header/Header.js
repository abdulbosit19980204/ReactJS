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
  
export default Header