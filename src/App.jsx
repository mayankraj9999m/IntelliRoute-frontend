import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import { GlobalContext } from "./GlobalContext.jsx";
import { getUserNameFromCookie } from "./utilities/cookie.utility.js";
import "./App.css";

function App() {
    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        // Load userName from cookie on mount/reload
        const userName = getUserNameFromCookie();
        if (userName) {
            dispatch({ type: "SET_USER_NAME", payload: userName });
        }
    }, [dispatch]);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
