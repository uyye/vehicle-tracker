import { useAppDispatch } from "@/app/hooks";
import { setError } from "@/features/auth/authSlice";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogOut = ()=>{
    dispatch(setError(null))
    localStorage.clear()
    navigate('/login')
  }
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#FFD43B] to-white h-[80px] flex items-center justify-between p-4 shadow-md ">
      <h1 className="font-bold">
        <Link to={"/"}>VTracker</Link>
      </h1>
      <div>
        <ul className="flex gap-2 cursor-pointer">
          <li>
            {" "}
            <Link to={"/profile"}> Profile</Link>{" "}
          </li>
          <li onClick={handleLogOut} className="cursor pointer">Logout</li>
        </ul>
      </div>
    </nav>
  );
}
