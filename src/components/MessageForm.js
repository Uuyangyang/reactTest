import React,{Component} from 'react';
export default class MessageForm extends Component{
    handleSumbit = (event)=>{
        //阻止默认事件
        event.preventDefault();
        //获得用户名的值
        let username = this.username.value;
        //获得内容的值
        let content = this.content.value;
        this.props.addMessage({username,content,createAt:new Date()});
    }

    render(){
        return (
            <form onSubmit={this.handleSumbit}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">用户名</label>
                    <input ref={x=>this.username=x} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label">内容</label>
                    <input ref={x=>this.content=x} type="text" className="form-control"/>      
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">发表</button>
                </div>
            </form>
        )
    }
}
