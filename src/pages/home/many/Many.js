import "./Many.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Outlet, useNavigate} from "react-router-dom";

export default function Many() {
    const [tuorList, setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios("http://localhost:3000/tuors").then((res) => {
            setList(res.data);
            setDisplayList(res.data);
        }).catch(error => {
            if (error.response) {
                alert("Có lỗi xảy ra")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }else if (error.request) {
                alert("Server không phản hồi")
                console.log(error.request);
            }
        })
    },[])
    const search = (e) => {
        console.log(e.target.value);
        let searchResult = tuorList.filter(tuor => tuor.title.toLowerCase().includes(e.target.value) ||
            tuor.description.toLowerCase().includes(e.target.value));
        console.log(searchResult);
        setDisplayList(searchResult);
    }

    return (
        <>
            <div id={"left"}>
                <h1> Many List </h1>
                <span>Tìm kiếm</span>
                <input style={{width: '50%'}} name={"search"} type={"text"} onChange={search}/>
                <br/>
                <Link to={"/many/create"}>
                    <button> Thêm mới</button>
                </Link>
                <table border={1} style={{width: '100%', tableLayout: 'fixed'}}>
                    <tbody>
                    <tr>
                        <td style={{width: '3%'}}> Stt</td>
                        <td style={{width: '15%'}}> Tiêu đề </td>
                        <td style={{width: '10%'}}> Giá </td>
                        <td> Mô tả</td>
                        <td style={{width: '5%'}}> Chi tiết</td>
                    </tr>
                    {displayList.map((tour, index) => {
                        return (
                            <tr key={tour.id}>
                                <td style={{wordWrap: 'break-word'}}> {index + 1}</td>
                                <td style={{wordWrap: 'break-word'}}> {tour.title}</td>
                                <td style={{wordWrap: 'break-word'}}> {tour.price}</td>
                                <td style={{wordWrap: 'break-word'}}> {tour.description}</td>
                                <td><Link to={`/many/${tour.id}`}> Xem </Link></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div id={"right"}>
                <div id={"fixed"}>
                <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}