import {useEffect, useState} from "react";
import Home from "./pages/Home";
import SyncLoader from "react-spinners/SyncLoader";
import {FcCdLogo} from "react-icons/fc";

// const override = {
//     // display: "block",
//     // margin: "0 auto",
//     // borderColor: "red",
//     // background: "#1A1A1A"

// };

function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    return (
        <div className="flex justify-center items-center h-screen ">
            {
            loading ? <>
                <div className="bg-[#1A1A1A] w-full h-full flex flex-col gap-10 justify-center items-center">
                    <div className="text-7xl">
                        <FcCdLogo/></div>
                    <SyncLoader color={"#4389e0"}
                        loading={loading}
                        // cssOverride={override}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"/>
                </div>
            </> : <>
                <Home/>
            </>
        } </div>
    );
}

export default App;
