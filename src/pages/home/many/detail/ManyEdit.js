import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function ManyEdit(){
    const [oneList, setOneList] = useState([]);
    let manyId = useParams().id;
    let navigate = useNavigate();
    const [many, setMany] = useState({
        one: {
            oneId: "1"
        }
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/many/${manyId}`).then(
            response => {
                setMany(response.data)
            }
        ).catch(error => {
            if (error.response) {
                alert("Có lỗi xảy ra")
                navigate("/")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }else if (error.request) {
                alert("Server không phản hồi")
                navigate("/")
                console.log(error.request);
            }
        })
    },[manyId]);

    useEffect(() => {
        axios.get("http://localhost:8080/one").then(
            response => setOneList(response.data)
        ).catch(error => {
            if (error.response) {
                alert("Có lỗi xảy ra")
                navigate("/")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }else if (error.request) {
                alert("Server không phản hồi")
                navigate("/")
                console.log(error.request);
            }
        })
    }, [])
    return (
        <>
            <h1> Sửa Many {manyId}</h1>
            <Formik initialValues={
                {
                    field1: many.field1,
                    field2: many.field2,
                    field3: many.field3,
                    field4: many.field4,
                    one: {
                        oneId : many.one && many.one.oneId || 1
                    }
                }
            } onSubmit={values => {
                if (window.confirm("Bạn có chắc chắn muốn sửa không?")){
                    axios.put(`http://localhost:8080/many/${manyId}`,values).then(()=>{
                        alert("Thành công")
                        window.location.assign("/many");
                        // navigate(`/blog/${blogId}`)
                    }).catch(error => {
                        if (error.response) {
                            alert("Có lỗi xảy ra")
                            navigate("/")
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        }else if (error.request) {
                            alert("Server không phản hồi")
                            navigate("/")
                            console.log(error.request);
                        }
                    })
                    console.log(values);
                }}}
                    enableReinitialize={true}>
                <Form>
                    <h2> blog id : {manyId}</h2>
                    <h2> field 1 </h2>
                    <Field type={"text"} name={'field1'}></Field>
                    <p> field 2 </p>
                    <Field type={"text"} name={'field2'}></Field>
                    <p> field 3 </p>
                    <Field type={"text"} name={'field3'}></Field>
                    <p> field 4 </p>
                    <Field type={"text"} name={'field4'}></Field>
                    <p> one </p>
                    <Field as='select' name={'one.oneId'}>
                        {oneList.map(one => {
                                return (
                                        <option key={one.oneId} value={one.oneId}> {one.field1} </option>
                                )
                            }
                        )
                        }
                    </Field>
                    <br/>
                    <button> Lưu </button>
                </Form>
            </Formik>
        </>)
}