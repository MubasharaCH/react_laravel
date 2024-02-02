import { Link } from "react-router-dom"

export const SignUp = () => {
    const onSubmit=(e)=>{
        e.preventDefault()
     }
  return (
    <div className="login-signup-form animated fadeInDown">
    
    <div className="form">
    <h1 className="title">SignUp for free</h1>
    <form onSubmit={onSubmit}>
     <input type="email" placeholder="Email" />
     <input type="password"  placeholder="Passworrd" />
     <button className="btn btn-block">Login</button>
     <p className="message">already Registered? <Link to={'/login'}>Sign In</Link></p>
    </form>
    
    </div>
    </div>
  )
}
