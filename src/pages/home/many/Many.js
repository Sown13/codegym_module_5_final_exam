import "./Many.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Outlet, useNavigate} from "react-router-dom";

export default function Many() {
    const [manyList, setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios("http://localhost:8080/many").then((res) => {
            setList(res.data);
            setDisplayList(res.data);
        }).catch(error => {
            if (error.response) {
                navigate("/")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    })
    const search = (e) => {
        console.log(e.target.value);
        let searchResult = manyList.filter(many => many.field1.toLowerCase().includes(e.target.value));
        setDisplayList(searchResult);
    }

    return (
        <>
            <div id={"left"}>
                <h1> Many List </h1>
                <span>Search</span>
                <input name={"search"} type={"text"} onChange={search}/>
                <br/>
                <Link to={"/many/create"}>
                    <button> Thêm mới</button>
                </Link>
                <table border={1}>
                    <tbody>
                    <tr>
                        <td> Stt</td>
                        <td> Field 1</td>
                        <td> Field 2</td>
                        <td> Field 3</td>
                        <td> Field 4</td>
                        <td> One</td>
                        <td> Chi tiết</td>
                    </tr>
                    {displayList.map((object, index) => {
                        return (
                            <tr key={object.id}>
                                <td> {index + 1}</td>
                                <td> {object.field1}</td>
                                <td> {object.field2}</td>
                                <td> {object.field3}</td>
                                <td> {object.field4}</td>
                                <td> {object.one && object.one.name}</td>
                                <td><Link to={`/many/${object.id}`}> Xem </Link></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div id={"right"}>
                <Outlet></Outlet>
            </div>
        </>
    )
}