import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../pages/common/ui/Navbar";
import Login from "../pages/common/auth/Login";
import CommonLayout from "../layouts/CommonLayout";
import HomePage from "../pages/UI/HomePage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CommonLayout/>} >
                   <Route index element={<HomePage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;