import React,{Component} from 'react';
import {render} from 'react-dom';
//import PropTypes from 'prop-types';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//复合组件
class Panel extends Component{

    constructor(){
        super();
        this.state = {color:'black'};
    }
    render(){
        return (
            <div className="panel panel-default">
                <button onClick={()=>this.setState({color:'red'})}>红</button><button onClick={()=>this.setState({color:'green'})}>绿</button>
                <PanelHead color={this.state.color} head={this.props.head}/>
                <PanelBody body={this.props.body}/>
                <PanelFooter footer={this.props.footer}/>
            </div>
        )
    }
}

class PanelHead extends Component{
    render(){
        return <div style={{color:this.props.color}} className="panel-heading">{this.props.head}</div>
    }
}
class PanelBody extends Component{
    render(){
        return <div className="panel-body">{this.props.body}</div>
    }
}
class PanelFooter extends Component{
    render(){
        return <div className="panel-footer">{this.props.footer}</div>
    }
}  
//单向数据流 数据只能从父级组件传给子级组件
render(<Panel head="头" body="体" footer="尾"/>,window.app);