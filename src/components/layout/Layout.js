import { Footer } from "../ui/major-components/footer/Footer";
import { Navbar } from "../ui/major-components/nav/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../ui/minor-components/animation-loader/Loader";

function Layout(props) {
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const excludedRoutes = ['/register', '/login', '/reset-password', '/confirm-password'];
        const isExcludedRoute = excludedRoutes.some((route) => location.pathname.startsWith(route));

        setShowLoader(!isExcludedRoute);

        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000); // Set the delay to 2000 milliseconds (2 seconds)

        return () => clearTimeout(timer); // Clear the timer if component unmounts
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            {showLoader ? (
                <Loader >
                    <Outlet />
                </Loader>
            ): <Outlet />}
            <Footer />
        </>
    )
}

export default Layout;
