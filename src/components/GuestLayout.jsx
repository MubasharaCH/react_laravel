import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"


export const GuestLayout = () => {
    const {user,token}=useStateContext()
    if(token){
        return <Navigate to={'/'}/>
    }
  return (
    <div id="guestLayout">
    <Outlet/>
    </div>
  )
}
