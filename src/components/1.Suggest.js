import React,{Component} from 'react';
import jsonp from 'jsonp';

//默认导入一个类
/**
 * 1.给input绑定值改变事件，当值改变的时候调用对应的监听函数
 * 2.获取到input框中的值，然后调用百度的接口获取数据并修改状态对象中的words属性
 */
export default class Suggest extends Component{
    constructor(){
        super();
        this.state = {
            words:[],
            index:-1 //当前选中的索引
        };
    }

    handleChange = (event)=>{
        let wd = event.target.value;
        //缓存用户输入的关键字
        this.wd = wd;
        jsonp(`http://www.baidu.com/su?wd=${wd}`,{
            param:'cb'
        },(err,data)=>{
            console.log(data);
            this.setState({words:data.s});
        });
    }
    handleKeyDown = (event)=>{
        console.log(event.keyCode);
        let code= event.keyCode;
        //当按下的是向上和向下箭头键的时候
        if(code == 38 || code == 40){
            let index = this.state.index;
            if(code == 38){
                index--;
                if(index == -2){
                    index = this.state.words.length-1;
                }
            }else if(code == 40){
                index++;
                if(index == this.state.words.length){
                    index = -1;
                }
            }
            //修改index，键值都是index，所以简写
            this.setState({index});
        }else if(event.keyCode == 13){
            window.location.href = `https://www.baidu.com/s?wd=${event.target.value}`
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input value={this.state.index==-1?this.wd:this.state.words[this.state.index]} onKeyDown={this.handleKeyDown} type="text" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word,index)=>(
                                            <li key={index} className={"list-group-item "+(index==this.state.index?'active':'')}>{word}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}