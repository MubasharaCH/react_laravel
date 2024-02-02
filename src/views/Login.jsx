import { Link } from "react-router-dom"


export const Login = () => {

 const onSubmit=(e)=>{
    e.preventDefault()
 }

  return (
    <div className="login-signup-form animated fadeInDown">
    
    <div className="form">
    <h1 className="title">Login into your account</h1>
    <form onSubmit={onSubmit}>
     <input type="email" placeholder="Email" />
     <input type="password"  placeholder="Passworrd" />
     <button className="btn btn-block">Login</button>
     <p className="message">Not Registered? <Link to={'/signup'}>Create an account</Link></p>
    </form>
    
    </div>
    </div>
  )
}
