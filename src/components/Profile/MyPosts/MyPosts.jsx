import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";

/*let postsElements = posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>)*/

const MyPosts = React.memo(props => {
    //console.log("RENDER MY POSTS");
    let postsElements = [...props.posts].reverse()
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    //let newPostElement = React.createRef();
    //let onAddPost = () => { props.addPost(); }
    /*let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }*/
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddPostReduxForm onSubmit={onAddPost}/>
        {/*<div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
        <div><button onClick={onAddPost}>Add post</button></div>  */}
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
});

const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea} name="newPostText" placeholder="Enter your post"
                validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostReduxForm  = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;