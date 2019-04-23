import React, { Component } from 'react';
import TodoItem from './TodoItem';

//定义一个react组件
class TodoList extends Component {

  //构造函数
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
    //this.state.list.push('hello');
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
    //console.log(e.target.value);
  }

  // handleItemClick(index){
  //   const list = [...this.state.list];
  //   list.splice(index,1);
  //   this.setState({list})
  //   // this.setState({
  //   //   list: list 键值名称相同时，可省略
  //   // })
  //   //console.log(index);
  // }

  handleDelete(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({list})
    //console.log(index);
  }

  getTodoItems(){
    return (
      //map()是对数组做循环，数组的每一项都会进入item中
      this.state.list.map((item,index) => {
        return (
          <TodoItem 
            delete={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
          />
        )
      })
    )
  }

  //组件里必须有一个render()函数，return负责显示内容
  render() {
    return (
      //jsx语法
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </div>  
    );
  }
}
//导出组件之后，在其他地方才可以导入
export default TodoList;
