import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function Index() {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}