import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

//非受控组件
class Sum extends Component{
    constructor(){
        super();
        this.state = {a:0,b:0,result:0}
    }

    handleChange = (event)=>{
        console.log(this.refs);
        let a = parseInt(this.a.value||0);
        let b = parseInt(this.b.value||0);
        this.result.value = a+b;
    }
    

    render(){
        //ref等于一个函数，表示当元素被挂载到页面中之后会立即
        //调用此函数，并传入渲染后的DOM元素
        return (
            <div onChange={this.handleChange}>
                <input ref={ref=>this.a=ref} type="text"/>+
                <input ref={ref=>this.b=ref} type="text"/>=
                <input ref={ref=>this.result=ref} type="text"/>
            </div>
        )
    }
}

render(<Sum/>,window.app);