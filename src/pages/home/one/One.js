import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function One(){
    const [oneList,setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    let navigate = useNavigate();
    // useEffect(()=>{
    //     axios("http://localhost:8080/one").then((res)=> {
    //         setList(res.data);
    //         setDisplayList(res.data);
    //     }).catch(error => {
    //         if (error.response) {
    //             alert("Có lỗi xảy ra")
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         }else if (error.request) {
    //             alert("Server không phản hồi")
    //             console.log(error.request);
    //         }
    //     })
    // })
    const search = (e) => {
        console.log(e.target.value);
        let searchResult = oneList.filter(one => one.field1.toLowerCase().includes(e.target.value));
        setDisplayList(searchResult);
    }

    return(
        <>
            {/*<h1> One List </h1>*/}
            {/*<span>Search</span>*/}
            {/*<input name={"search"} type={"text"} onChange={search}/>*/}
            {/*<br/>*/}
            {/*<table border={1} >*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <td> Stt </td>*/}
            {/*        <td> Field 1 </td>*/}
            {/*        <td> Field 2 </td>*/}
            {/*        <td> Field 3 </td>*/}
            {/*        <td> Field 4 </td>*/}
            {/*        <td> Chi tiết </td>*/}
            {/*    </tr>*/}
            {/*    {displayList.map((object,index)=>{*/}
            {/*        return (*/}
            {/*            <tr key={object.id}>*/}
            {/*                <td> {index + 1}</td>*/}
            {/*                <td> {object.field1}</td>*/}
            {/*                <td> {object.field2}</td>*/}
            {/*                <td> {object.field3}</td>*/}
            {/*                <td> {object.field4}</td>*/}
            {/*                <td> <Link to={`/many/${object.id}`}> Xem </Link> </td>*/}
            {/*            </tr>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            <h1> Dịch vụ cung cấp các chuyến du lịch sai chính tả </h1>
        </>
    )
}