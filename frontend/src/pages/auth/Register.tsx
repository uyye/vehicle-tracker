import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchRegister, setError } from "@/features/auth/authSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);
  const [attribute, setAttribute] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttribute({
      ...attribute,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      fetchRegister(attribute.username, attribute.email, attribute.password)
    );

    useEffect(() => {
    if (error === null) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Registration successfully",
      });
      navigate("/login");
    }
  }, [error, navigate]);
  };

  useEffect(() => {
    dispatch(setError(null));
  }, [dispatch]);
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] shadow-lg p-4 flex flex-col">
        <h1 className="text-[#FFC300] text-2xl text-center font-bold">
          VTracker
        </h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#FFC300]">
                  Username
                  {Array.isArray(error) &&
                    error.map(
                      (err, i) =>
                        err === "Username is required" && (
                          <span key={i} className="text-red-500">
                            {" "}
                            * {err}!
                          </span>
                        )
                    )}
                </label>
                <input
                  type="text"
                  className="border border-gray-200 p-2 rounded focus:outline-none focus:border-[#FFD43B] focus:ring-[#FFD43B]/50 focus:ring-2"
                  placeholder="Username"
                  name="username"
                  value={attribute.username}
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#FFC300]">
                  Email
                  {Array.isArray(error) &&
                    error.map((err, i) =>
                      err === "Email is required" ||
                      "email must be unique" ||
                      "Invalid email format" ? (
                        <span key={i} className="text-red-500">
                          {" "}
                          * {err}!
                        </span>
                      ) : (
                        ""
                      )
                    )}
                </label>
                <input
                  type="email"
                  className="border border-gray-200 p-2 rounded focus:outline-none focus:border-[#FFD43B] focus:ring-[#FFD43B]/50 focus:ring-2"
                  placeholder="Email"
                  name="email"
                  value={attribute.email}
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#FFC300]">
                  Password
                  {Array.isArray(error) &&
                    error.map(
                      (err, i) =>
                        err === "Password is required" && (
                          <span key={i} className="text-red-500">
                            {" "}
                            * {err}!
                          </span>
                        )
                    )}
                </label>
                <input
                  type="password"
                  className="border border-gray-200 p-2 rounded  focus:outline-none focus:border-[#FFD43B] focus:ring-[#FFD43B]/50 focus:ring-2 "
                  placeholder="Password"
                  name="password"
                  value={attribute.password}
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div className=" flex flex-col gap-2">
                <button
                  type="submit"
                  className="bg-[#FFC300] p-2 font-bold text-[#ffff] text-lg cursor-pointer hover:shadow-lg transtion-all duration-300"
                >
                  Daftar
                </button>
                <p className="text-center text-[#555555]">
                  Sudah punya akun?{" "}
                  <span className="text-[#FFC300]">
                    <Link to={"/login"}>Login sekarang</Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
