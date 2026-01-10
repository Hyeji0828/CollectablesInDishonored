import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/config";

const Home = () => {
    return(
        <div className="flex flex-col items-center justify-center p-10 min-h-screen">
            <h1 className="text-6xl font-dishonored mb-10">Collectables In Dishonored</h1>

            {/* Dishonored 1 */}
            <div className="flex flex-col items-center m-10">
                <div className="w-lg mb-10 flex justify-center">
                    <img src={`${BASE_URL}/Dishonored_1_logo.png`}/>
                </div>
                     
                <div className= "flex gap-8">
                        <h2 className="text-2xl font-dishonored border border-gray-300 p-10 shadow-lg bg-gray-300 text-white">Coming soon</h2>
                        {/* <h2 className="text-2xl font-dishonored border border-gray-300 p-10 shadow-lg">Coming soon</h2> */}
                </div>
            </div>

            {/* Dishonored 2 */}
            <div className="flex flex-col items-center m-10">
                <div className="w-lg mb-10 flex justify-center ">
                    <img src={`${BASE_URL}/Dishonored_2_logo.png`}/>
                </div>
                
                <div className= "flex gap-8">
                    <Link to="/by-mission" className="">
                        <h2 className="text-2xl font-dishonored border border-gray-300 p-10 shadow-lg">By Missions</h2>
                    </Link>

                    <Link to="/by-type" className="">
                        <h2 className="text-2xl font-dishonored border border-gray-300 p-10 shadow-lg">By Collectable Types</h2>
                    </Link>
                </div>
            </div>

            {/* Dishonored DotO */}
            <div className="flex flex-col items-center m-10">
                <div className="w-lg mb-10 flex justify-center">
                    <img src={`${BASE_URL}/Dishonored_DotO_logo.png`}/>
                </div>
                     
                <div className= "flex gap-8">
                        <h2 className="text-2xl font-dishonored border border-gray-300 p-10 shadow-lg bg-gray-300 text-white">Coming soon</h2>
                        {/* <h2 className="text-2xl font-dishonored border border-gray-300 p-10 shadow-lg">Coming soon</h2> */}
                </div>
            </div>

        </div>
    )
}

export default Home;