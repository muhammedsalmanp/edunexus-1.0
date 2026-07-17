import Navbar from "../pages/common/ui/Navbar";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default CommonLayout;