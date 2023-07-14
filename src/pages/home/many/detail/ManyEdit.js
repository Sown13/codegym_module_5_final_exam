import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function ManyEdit(){
    // const [oneList, setOneList] = useState([]);
    let tuorId = useParams().id;
    let navigate = useNavigate();
    const [tuor, setTuor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${tuorId}`).then(
            response => {
                console.log(tuorId)
                setTuor(response.data)
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
    },[tuorId]);

    // useEffect(() => {
    //     axios.get("http://localhost:8080/one").then(
    //         response => setOneList(response.data)
    //     ).catch(error => {
    //         if (error.response) {
    //             alert("Có lỗi xảy ra")
    //             navigate("/")
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         }else if (error.request) {
    //             alert("Server không phản hồi")
    //             navigate("/")
    //             console.log(error.request);
    //         }
    //     })
    // }, [])
    return (
        <>
            <h1> Sửa Many {tuorId}</h1>
            <Formik initialValues={
                {
                    title: tuor.title,
                    price: tuor.price,
                    description: tuor.description,
                }
            } onSubmit={values => {
                if (window.confirm("Bạn có chắc chắn muốn sửa không?")){
                    axios.put(`http://localhost:3000/tuors/${tuorId}`,values).then(()=>{
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
                    <h2> blog id : {tuorId}</h2>
                    <h2> Tiêu đề </h2>
                    <Field type={"text"} name={'title'}></Field>
                    <p> Giá  </p>
                    <Field type={"number"} name={'price'}></Field>
                    <p> Mô tả  </p>
                    <Field as={"textarea"} name={'description'} style={{width: '90%',height:'100px'}}></Field>
                    {/*<p> field 4 </p>*/}
                    {/*<Field type={"text"} name={'field4'}></Field>*/}
                    {/*<p> one </p>*/}
                    {/*<Field as='select' name={'one.oneId'}>*/}
                    {/*    {oneList.map(one => {*/}
                    {/*            return (*/}
                    {/*                    <option key={one.oneId} value={one.oneId}> {one.field1} </option>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    )*/}
                    {/*    }*/}
                    {/*</Field>*/}
                    <br/>
                    <button> Lưu </button>
                </Form>
            </Formik>
        </>)
}