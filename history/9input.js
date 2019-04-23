import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

class Input extends Component{
    constructor(){
        super();
        this.state = {val:''};
    }

    //每个处理事件对应一个event
    //event.target可以获取DOM对象 input框
    handleChange = (event)=>{
        let val = event.target.value;
        this.setState({val});
    }

    render(){
        return (
            <div>
                <p>{this.state.val}</p>
                <input onChange={this.handleChange} type="text" value={this.state.val}/>
            </div>
        )
    }
}

render(<Input/>,window.app);