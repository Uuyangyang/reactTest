import React from 'react';
import * as filterTypes from './filter-types';

export default class TodoFooter extends React.Component{

    render(){
        return (
            <div className="row">
                <div className="col-xs-3 text-center">
                    {
                        this.props.activeTodoCount>0?<div style={{height:'30px',lineHeight:'30px'}}>
                                <a href="#" style={{textDecoration:'none'}}>待办数量 <span className="badge">{this.props.activeTodoCount}</span></a>
                            </div>:null
                    }     
                </div>
                <div className="col-xs-6 text-center">
                    <button style={{marginLeft:4}} className={`btn ${this.props.filterType==filterTypes.ALL ? 'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(filterTypes.ALL)}>全部</button>
                    <button style={{marginLeft:4}} className={`btn ${this.props.filterType==filterTypes.ACTIVE ? 'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(filterTypes.ACTIVE)}>未完成</button>
                    <button style={{marginLeft:4}} className={`btn ${this.props.filterType==filterTypes.COMPLETED ? 'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-xs-2 text-center">
                    {
                        this.props.completedTodoCount>0?<button className="btn btn-danger btn-sm" onClick={this.props.clearCompleted}>删除已完成</button>:null
                    }
                </div>
            </div>
        )
    }
}