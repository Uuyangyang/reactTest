import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

class Sum extends Component{
    constructor(){
        super();
        this.state = {a:0,b:0,result:0}
    }

    handleChangeA = (event)=>{
        this.setState({
            a:parseInt(event.target.value),
            result:parseInt(event.target.value)+this.state.b
        });
    }

    handleChangeB = (event)=>{
        this.setState({
            b:parseInt(event.target.value),
            result:parseInt(event.target.value)+this.state.a
        });
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.a} onChange={this.handleChangeA}/>+
                <input type="text" value={this.state.b} onChange={this.handleChangeB}/>=
                <input type="text" value={this.state.result}/>
            </div>
        )
    }
}

render(<Sum/>,window.app);