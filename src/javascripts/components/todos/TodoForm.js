import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';

class TodoForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            errrorMsg: '',
            form: this.props.todo,
            successMsg: '',
            todo: this.props.todo
        };
        this.formReset = this.formReset.bind( this );
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
        this.validator = new SimpleReactValidator( { autoForceUpdate: this } );
    }

    handleChange( event ) {
        const { name, value } = event.target;
        const { form } = this.state;
        form[ name ] = value
        this.setState( { form } );
    }

    UNSAFE_componentWillReceiveProps( nextProps ) {
        if( nextProps.todo !== this.state.todo ){
            this.setState( { form:nextProps.todo } );
        }
    }

    handleSubmit( e ) {
        e.preventDefault();
        const thisVal = this;
        if ( this.validator.allValid() ) {
            const result = this.props.onAddTodo( this.state.form );
            result.then( ( res ) => {
                if( res.id ){
                    const successMsg = 'Your todo changes saved succesfully.';
                    thisVal.setState( { successMsg, form: { title: '', discription: '' } } );
                }else{
                    const errrorMsg = 'Something went wrong, please try later.';
                    thisVal.setState( { errrorMsg } );
                }
            } );
        } else {
            this.validator.showMessages();
        }
    }

    formReset( e ){
        e.preventDefault();
        this.setState( { form: { title: '', discription: '' } } );
    }

    render() {
        return (
            <div className="post-container">
                <h1 className = "post_heading">Add Todo</h1>
                <form className="form">
                    <input
                        name="title"
                        onChange={ this.handleChange }
                        placeholder="Enter Todo Title"
                        type="text"
                        value = { ( this.state.form && this.state.form.title ) ? this.state.form.title : '' }
                    /><br />
                    <label className="error title_error">
                        {this.validator.message( 'title', this.state.form.title, 'required|alpha_space|max:50,string' )}
                    </label>
                    <br />
                    <textarea
                        cols="28"
                        name = "discription"
                        onChange={ this.handleChange }
                        placeholder="Enter Todo"
                        rows="5"
                        value = { ( this.state.form && this.state.form.discription ) ? this.state.form.discription : '' }
                    /><br />
                    <label className="error discription_error">
                        {this.validator.message( 'discription', this.state.form.discription, 'required|alpha_space|min:3,string' )}
                    </label>
                    <label className="error final_error">{ this.state.errrorMsg }</label>
                    <label className="success">{ this.state.successMsg }</label>
                    <div>
                        <button
                            className = "button reset"
                            onClick = { this.formReset }
                        >Reset</button>

                        <button
                            className = "button submit"
                            onClick = { this.handleSubmit }
                        >Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default TodoForm;

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}
