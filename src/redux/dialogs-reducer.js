//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    //newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case UPDATE_NEW_MESSAGE_BODY:{
            //stateCopy.newMessageBody = action.body;
            return {
                ...state,
                newMessageBody: action.body
            };
        }*/
        case SEND_MESSAGE:{
            let body = action.newMessageBody;
            //stateCopy.newMessageBody = '';
            //stateCopy.messages = [...state.messages, {id: 6, message: body}];//работает и без создания нового объекта
            //stateCopy.messages.push({id: 6, message: body});
            return {
                ...state,
                //newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
//export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer;