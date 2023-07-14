import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ManyDetail() {
    let tuorId = useParams().id;
    const [tuor, setTuor] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${tuorId}`).then(
            response => {
                setTuor(response.data)
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
    }, [tuorId]);

    const handleDelete = () => {
        if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
            axios.delete(`http://localhost:3000/tuors/${tuorId}`).then(
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
            <h1> Chi tiết Tour </h1>
            <h2> Tiêu đề : {tuor.title} </h2>
            <p> Giá : {tuor.price} </p>
            <p> Mô tả : {tuor.description} </p>
            <Link to={`/many/${tuorId}/edit`}><button> Sửa </button></Link>
            <button onClick={handleDelete}> Xóa </button>
            <hr/>
            <Link to={`/many`}> Xem danh sách </Link>
        </>
    )
}