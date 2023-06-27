import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    }catch(error){
      setError(error.message)
    }
    
  };
  
  return <form onSubmit={handleSubmit}>
    {error && error}
<div className="hero min-h-screen bg-base-200 w-full">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
    <div className="text-center lg:text-left w-full justify-between">
      <h1 className="text-5xl font-bold">Bounce Hub!</h1>
      <p className="py-6">Welcome to Bounce Hub</p>
    </div>
    <div className="card sm:w-[50rem] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="text"
           value={email} 
           onChange={(e) =>setEmail(e.target.value)} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="text" 
          value={password} 
          onChange={(e) =>setPassword(e.target.value)} placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>

  </form>
}

export default Login