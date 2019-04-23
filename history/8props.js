import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

class Person extends Component{

    constructor(){
        super();
        //为组件增加一个初始的状态 默认值为true
        this.state = {happy:true};
    }

    //默认属性对象
    static defaultProps = {
        name:'shadi'
    }

    //如果定义组件的时候希望传入组件的属性有类型和是否必填的限制
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    }

    handleClick = ()=>{
        this.setState({
            happy:!this.state.happy
        });
    }

    render(){
        let heart = this.state.happy?'开心':'难过';
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>心情：{heart}</p>
                <button onClick={this.handleClick}>改变</button>
            </div>
        )
    }
}

render(<Person name="zfpx" age={12} />,window.app);