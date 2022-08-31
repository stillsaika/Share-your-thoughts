import { Routes, Route } from "react-router-dom";
import MapComponent from "./Map";
import MainPage from "./MainPage";
const Tool = () => {
    const handleOne = () => {
   
    }
    return (
        <Routes>
            <Route path="" element={ <MainPage handleOne={handleOne}/>} />
            <Route path="/map" element={<MapComponent />} />
        </Routes>
    )
}

export default Tool