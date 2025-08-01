import "./App.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";
import AboutPage from "./Pages/AboutPage";

const App = () =>{
    return<Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/success" element={<Success/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Toaster/>
    </Router>;
};
export default App;