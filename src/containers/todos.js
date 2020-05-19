import React, { Component } from "react";
import TodoItem from '../components/TodoItem'
import Loader from '../components/Loader'
import "./todos.css"
import { connect } from 'react-redux'
import { getTodos, postTodos } from '../redux/actions'



class Todos extends Component {
    state = {}
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         todos: []
    //     }

    //     this.handleRenderTodos = this.handleRenderTodos.bind(this)
    //     this.handleChange = this.handleChange.bind(this)
    //     this.sendData = this.sendData.bind(this)
    // }


    componentDidMount() {
        this.props.getTodosRedux()
        // console.log("this.props.getTodosRedux: ",this.props.getTodosRedux())
        // console.log("this.props.todos: ",this.props.todos)
    }

    // getPosts = () => {
    //     fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/oscar", { method: "GET" })
    //         .then((response) => response.json())
    //         .then((json) =>
    //             this.setState({
    //                 todos: json,
    //             })
    //         );

    // };

    handleRenderTodos = () => {
        const {todos} = this.props;
        if (!todos.length) return;
        const listOfTodos = todos.reverse().map((item) => (
            <>
            {!item.checked && <TodoItem key={item._id} item={item} title={item.title} description={item.description} checked={item.checked} />}
            </>
            ));
        return listOfTodos;
    }

    handleRenderCompletes = () => {
        const {todos} = this.props;
        if (!todos.length) return;
        const listOfTodos = todos.reverse().map((item) => (
            <>
                {item.checked && <TodoItem getPosts={this.getPosts} key={item._id} item={item} title={item.title} description={item.description} checked={item.checked} />}
            </>
        ));
        return listOfTodos;
    }

    handleChange(e) {

        this.setState({
            [e.target.id]: e.target.value
        })

        // console.log(this.state)
    }


    sendData = async (e) => {
        const data = {
            title: this.state.title,
            checked: false,
            description: this.state.description,
        }
        await fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/oscar", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((json) =>
                // conso+le.log(" Registro agregado con exito: ", json)
                this.props.getTodosRedux()
            );
    }

    render() {

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Agregar Tarea</h1>

                            <hr></hr>
                            <input type="text" id="title" onChange={this.handleChange.bind(this)} className="form-control add-todo" placeholder="Titulo:"></input>
                            <input type="text" id="description" onChange={this.handleChange.bind(this)} className="form-control add-todo" placeholder="Descripciòn:"></input>
                            <button id="checkAll" onClick={this.sendData} className="btn btn-primary mt-3">Enviar</button> <button id="checkAll" onClick={this.getPosts} className="btn btn-primary mt-3">Buscar</button>
                        </div>
                        <div className="col-md-4">
                            <div className="not-done">
                                <h1>Pendientes</h1>
                                <hr></hr>

                                <ul id="sortable" className="list-unstyled">
                                    <Loader>
                                    {this.handleRenderTodos()}
                                    </Loader>
                                    {/* {this.props.getTodosRedux()} */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <h1>Completados</h1>
                                <hr></hr>
                                <ul id="done-items" className="list-unstyled">
                                    <Loader>
                                    {this.handleRenderCompletes()}
                                    </Loader>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        isLoading: state.isLoading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        getTodosRedux: () => dispatch(getTodos()),
        postTodosRedux: () => dispatch(postTodos())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);