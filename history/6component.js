import React from 'react';
import ReactDOM,{render} from 'react-dom';

//React是由React元素、React组件
//1.首字母小写，凡是首字母小写的都会被认为是React元素
//2.组件的2种定义方式，以及区别
//组件的首字母一定是大写字母

//组件定义的第一种方法是函数,参数是属性对象
//{msg: "hello", id: "5"}
//组件的渲染过程
//1.封装数rops对象
//2.调用组件函数，得到返回的React元素
//3.ReactD0Mf把React 元素转成真实的DOM元素并且插入到目标容器内部
let Message = (props)=>{
    console.log(props);
    return <h1>{props.msg}</h1>
}

render(<Message msg="hello" id="5"/>,window.app);