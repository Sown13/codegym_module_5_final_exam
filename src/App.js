import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Many from "./pages/home/many/Many";
import One from "./pages/home/one/One";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/home/about/About";
import ManyDetail from "./pages/home/many/detail/ManyDetail";
import ManyEdit from "./pages/home/many/detail/ManyEdit";
import ManyCreate from "./pages/home/many/detail/ManyCreate";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <main>
            <Routes>
                <Route path={"/"} element={<Home/>}>
                    <Route path={"/"} element={<About/>}></Route>
                    <Route path={"/many"} element={<Many/>}>
                        <Route path={"/many/:id"} element={<ManyDetail/>}></Route>
                        <Route path={"/many/:id/edit"} element={<ManyEdit/>}></Route>
                        <Route path={"/many/create"} element={<ManyCreate/>}></Route>
                    </Route>
                    <Route path={"/one"} element={<One/>}></Route>
                </Route>
            </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
