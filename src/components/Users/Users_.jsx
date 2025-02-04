import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)} }>Follow</button> }

                </div>
            </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </div>)
    }
    </div>
}

export default Users;

/*
props.setUsers(
    [
        {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg',
            followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg',
            followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Belarus'} },
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg',
            followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Minsk', country: 'Ukraine'} },
    ]
);*/
