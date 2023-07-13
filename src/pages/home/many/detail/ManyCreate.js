import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function ManyCreate(){
    const [oneList, setOneList] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/one").then(
            response => setOneList(response.data)
        ).catch(error => {
            if (error.response) {
                navigate("/")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }, [])
    return (
        <>
            <h1> Thêm Many mới</h1>
            <Formik initialValues={
                {
                    field1: "",
                    field2: "",
                    field3: "",
                    field4: "",
                    one: {
                        oneId : 1
                    }
                }
            } onSubmit={values => {
                if (window.confirm("Bạn có chắc chắn muốn thêm không?")){
                    axios.post(`http://localhost:8080/many/`,values).then(()=>{
                        alert("Thành công")
                        navigate("/many")
                        // window.location.assign("/many");
                    }).catch(error => {
                        alert("Không thành công")
                        if (error.response) {
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        }
                    })
                    console.log(values);
                }}}
                    enableReinitialize={true}>
                <Form>
                    <h2> Nhập thông tin Many mới</h2>
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