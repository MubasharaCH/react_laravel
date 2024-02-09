import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from '../axios-client.js'
import { useStateContext } from "../contexts/ContextProvider.jsx";

export const SignUp = () => {
 
  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)

    const onSubmit=(e)=>{

        e.preventDefault()
        const payload = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          password_confirmation: passwordConfirmationRef.current.value,
        }
        axiosClient.post('/signup', payload)
          .then(({data}) => {
            setUser(data.user)
            setToken(data.token);
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
          })
    }
  return (
    <div className="login-signup-form animated fadeInDown">
    
    <div className="form">
    <h1 className="title">SignUp for free</h1>
    {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
    <form onSubmit={onSubmit}>
    <input ref={nameRef} type="text" placeholder="Full Name"/>
     <input ref={emailRef} type="email" placeholder="Email" />
     <input ref={passwordRef} type="password"  placeholder="Passworrd" />
     <input ref={passwordConfirmationRef} type="password"  placeholder=" Confirm Passworrd" />
     <button className="btn btn-block">SignUp</button>
     <p className="message">already Registered? <Link to={'/login'}>Sign In</Link></p>
    </form>
    
    </div>
    </div>
  )
}
