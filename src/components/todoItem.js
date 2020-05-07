import React, { Component } from 'react';

class todoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endpoint: "https://todo-checkpoint-api.herokuapp.com/api/todos/",
            id: props.item._id,
            user: "/oscar"
        }
    }

    updateData=  (id, checked)=> {
        const data = {
                checked: checked,
        }
        fetch(`https://todo-checkpoint-api.herokuapp.com/api/todos/${id}/oscar`, {
            method: 'PATCH', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((json) =>
                console.log(" Registro actualizado con exito: ", json)
            );
            this.props.getPosts();
    }

handleDelete = async () => {
    const url = `${this.state.endpoint}${this.state.id}${this.state.user}`;
    
    const res = await fetch(url, { method: "DELETE" })
        .then((response) => response.json())
        .then((json) =>
            this.setState({
                todos: json,
            })
            
            
        );

    this.props.getPosts()

}

handleChecked = (e)=>{
    this.updateData(this.state.id,e.target.checked);
    // e.target.checked ? e.target.checked=false : e.target.checked=true;
}

toggleAsw = () => {
    if (!this.props.checked) {
        return (<li key={this.state.id} className="ui-state-default border-top">
            <div className="checkbox rounded-top   btn-outline-dark">
                <label>
                    <input onChange={this.handleChecked} type="checkbox" checked={this.props.checked} value="" />{this.props.title}</label>
                <button onClick={this.handleDelete} type="button" className="close" aria-label="Delete">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className='alert alert-secondary'><p>{this.props.description}</p></div>
        </li>)
    } else {
        return (
            <li key={this.state.id} className="ui-state-default border-top">
                <div className="checkbox rounded-top   btn-outline-primary">
                    <label>
                        <input type="checkbox" onChange={this.handleChecked} checked={this.props.checked} value="" />{this.props.title}</label>
                    <button onClick={this.handleDelete} type="button" className="close" aria-label="Delete">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className='alert alert-primary'><p>{this.props.description}</p></div>
            </li>
        )
    }
}

    render() {

        let ans = this.toggleAsw()
        return (<>{ans}</>);
    }
}

export default todoItem;