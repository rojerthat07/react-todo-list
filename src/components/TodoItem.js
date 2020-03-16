import React, { Component } from 'react';
import PropTypes from 'prop-types';;

export class TodoItem extends Component {


    getStyle = () => {
       
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props);
    }

    render() {
        return (
            <div style={this.getStyle()}>
             
        <p>   <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />{' '}{this.props.todo.title}
        <button onClick={this.props.delTodo.bind(this,this.props.todo.id)} style={btnStyle}>x</button>
        </p> 
            </div>
        )
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}


export default TodoItem
