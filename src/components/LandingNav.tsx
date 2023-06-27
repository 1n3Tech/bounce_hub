import { useNavigate } from "react-router-dom";

const LandingNav = () => {


    const navigater = useNavigate();

    return (
      <div className="navbar bg-base-100 justify-between w-full">
    <a className="btn btn-ghost normal-case text-xl">Bounce Hub</a>
    <button onClick={() => navigater('/login')} className="btn btn-square btn-ghost">Login</button>
</div>
      )
}

export default LandingNav