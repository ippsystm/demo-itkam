import React from "react";
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    //let newMessageBody = state.newMessageBody;
    //let newMessageElement = React.createRef();
    //let addMessage = () => { alert(newMessageElement.current.value) }
    /*let onSendMessageClick = () => { props.sendMessage(); }*/
    /*let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }*/
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth) return <Redirect to={"/login"} />;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                {/*<div><textarea value={newMessageBody} onChange={onNewMessageChange}placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>*/}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength20 = maxLengthCreator(20);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newMessageBody"
                       validate={[required, maxLength20]}
                       placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageReduxForm  = reduxForm({
    form: 'dialogAddMessageForm' // a unique name for the form
})(AddMessageForm)

export default Dialogs;