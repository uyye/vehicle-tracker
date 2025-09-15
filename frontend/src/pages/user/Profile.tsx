import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import image1 from "@/assets/vectezz.jpg";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  fetchDeleteUser,
  fetchUpdateProfile,
  fetcProfile,
} from "@/features/user/userSlice";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function Profile() {
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useAppDispatch();
  const { user, error } = useAppSelector((state) => state.user);
  const [attribute, setAttribute] = useState({
    username: "",
    email: "",
  });

  const handleOpenEdit = () => {
    setOpenEdit((prev) => !prev);
    if (user) {
      setAttribute({
        email: user.email || "",
        username: user.username || "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttribute({
      ...attribute,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      fetchUpdateProfile(Number(user.id), attribute.username, attribute.email)
    );
    if (!error) {
      setOpenEdit((prev) => !prev);
    }
  };

  const handleDeleteUser = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      dispatch(fetchDeleteUser(Number(user.id)));
      Swal.fire({
        title: "Deleted!",
        text: "Your Acount has been deleted.",
        icon: "success",
      });
      localStorage.clear();
      navigate("/login");
    }
  };

  console.log(error);
  useEffect(() => {
    dispatch(fetcProfile());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row gap-2">
        {/* PROFILE */}
        <div className="md:w-[500px] md:h-[400px] w-[400px] h-[400px] shadow-lg bg-white rounded-2xl p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-6 text-3xl bg-amber-200 w-16 h-16 rounded-full flex justify-center items-center">
              {user?.username?.slice(0, 1).toUpperCase()}
            </div>
            <h1 className="text-2xl font-semibold">{user?.username}</h1>

            <ul className="w-[50%] flex flex-col mt-6">
              <li className="border-b p-2">Email: {user?.email}</li>
              <li className="border-b p-2">Role: {user?.role}</li>
            </ul>

            <div className="flex gap-10 mt-10 text-xl">
              <div className="text-red-600 border w-12 h-12 flex justify-center items-center cursor-pointer rounded hover:bg-red-500 hover:text-white duration-500 transition-all">
                <FaTrash onClick={handleDeleteUser} />
              </div>
              <div className="text-blue-600 border w-12 h-12 flex justify-center items-center cursor-pointer rounded hover:bg-blue-500 hover:text-white duration-500 transition-all">
                <FaEdit onClick={handleOpenEdit} />
              </div>
            </div>
          </div>
        </div>

        {/* FORM EDIT */}
        <div className="md:w-[500px] md:h-[400px] w-[400px] h-[400px]  shadow-lg bg-white rounded-2xl p-4">
          <div className="flex flex-col items-center justify-center w-full h- h-full">
            {openEdit ? (
              <form onSubmit={(e) => handleSubmit(e)} className="mt-6 w-full">
                <div className="flex flex-col gap-3 p-4">
                  <h1 className="text-2xl font-semibold text-center">
                    Edit Profil
                  </h1>
                  <div className="text-red-500 text-center">
                    {error !== null && <span> * {error}!</span>}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-[#FFC300]">
                      Username
                    </label>
                    <input
                      name="username"
                      type="text"
                      className="border border-gray-200 p-2 rounded focus:outline-none focus:border-[#FFD43B] focus:ring-[#FFD43B]/50 focus:ring-2"
                      placeholder="Username"
                      value={attribute?.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-[#FFC300]">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="border border-gray-200 p-2 rounded focus:outline-none focus:border-[#FFD43B] focus:ring-[#FFD43B]/50 focus:ring-2"
                      placeholder="Email"
                      value={attribute?.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" flex flex-col gap-2">
                    <button
                      type="submit"
                      className="bg-[#FFC300] p-2 font-bold text-[#ffff] text-lg cursor-pointer hover:shadow-lg transtion-all duration-300"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <img
                src={image1}
                alt=""
                className="object-cover overflow-hidden object-center w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
