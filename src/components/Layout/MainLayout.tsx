import Header from "./Header";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="container ">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
