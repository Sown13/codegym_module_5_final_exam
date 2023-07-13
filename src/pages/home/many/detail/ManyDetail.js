import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ManyDetail() {
    let manyId = useParams().id;
    const [many, setMany] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/many/${manyId}`).then(
            response => {
                setMany(response.data)
            }
        ).catch(error => {
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
    }, [manyId]);

    const handleDelete = () => {
        if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
            axios.delete(`http://localhost:8080/many/${manyId}`).then(
                () => {
                    alert("Xóa thành công");
                    window.location.assign("/many");
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
        }
    }
    return (
        <>
            <h1> Chi tiết Many </h1>
            <p> field 1 : {many.field1} </p>
            <p> field 2 : {many.field2} </p>
            <p> field 3 : {many.field3} </p>
            <p> field 4 : {many.field4} </p>
            <Link to={`/many/${manyId}/edit`}><button> Sửa </button></Link>
            <button onClick={handleDelete}> Xóa </button>
        </>
    )
}