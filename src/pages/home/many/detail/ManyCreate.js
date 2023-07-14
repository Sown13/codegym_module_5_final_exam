import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function ManyCreate(){
    // const [oneList, setOneList] = useState([]);
    let navigate = useNavigate();

    // useEffect(() => {
    //     axios.get("http://localhost:8080/one").then(
    //         response => setOneList(response.data)
    //     ).catch(error => {
    //         if (error.response) {
    //             alert("Server không phản hồi")
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         }else if (error.request) {
    //             alert("Có lỗi xảy ra")
    //             console.log(error.request);
    //         }
    //     })
    // }, [])
    return (
        <>
            <h1> Thêm Tour mới</h1>
            <Formik initialValues={
                {
                    title: "",
                    price: "",
                    description: "",
                }
            } onSubmit={values => {
                if (window.confirm("Bạn có chắc chắn muốn thêm không?")){
                    axios.post(`http://localhost:3000/tuors/`,values).then(()=>{
                        alert("Thành công")
                        // navigate("/many")
                        window.location.assign("/many");
                    }).catch(error => {
                        if (error.response) {
                            alert("Server không phản hồi")
                            navigate("/")
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        }else if (error.request) {
                            alert("Có lỗi xảy ra")
                            navigate("/")
                            console.log(error.request);
                        }
                    })
                    console.log(values);
                }}}
                    enableReinitialize={true}>
                <Form>
                    <h2> Nhập thông tin Tour mới</h2>
                    <h2> Tiêu đề </h2>
                    <Field type={"text"} name={'title'}></Field>
                    <p> Giá </p>
                    <Field type={"number"} name={'price'}></Field>
                    <p> Mô tả </p>
                    <Field as={"textarea"} name={'description'} style={{width: '90%',height:'100px'}} ></Field>
                    {/*<p> field 4 </p>*/}
                    {/*<Field type={"text"} name={'field4'}></Field>*/}
                    {/*<p> one </p>*/}
                    {/*<Field as='select' name={'one.oneId'}>*/}
                    {/*    {oneList.map(one => {*/}
                    {/*            return (*/}
                    {/*                <option key={one.oneId} value={one.oneId}> {one.field1} </option>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    )*/}
                    {/*    }*/}
                    {/*</Field>*/}
                    <br/>
                    <button type={"submit"}> Lưu </button>
                </Form>
            </Formik>
        </>)
}