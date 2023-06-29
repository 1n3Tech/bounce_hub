import { signOut } from "firebase/auth"
import { auth } from "../firebase/config";

const navbar = () => {
  const handleLogout = async () => {
    try{
      await signOut(auth)
    }catch(error) {
      console.log(error.message);
    }
  }
  
  return (
    <div className="navbar bg-base-100 justify-between w-full">
  <a className="btn btn-ghost normal-case text-xl">BounceHub</a>
  <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
</div>
  )
}

export default navbar