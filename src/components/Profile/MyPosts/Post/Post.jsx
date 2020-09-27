import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return <div>
    <div className={s.item}>
      <img src='https://im0-tub-by.yandex.net/i?id=257a9951b878479d8c4336df0a004c5a&n=13&exp=1' alt=""/>
          {props.message}
          <div>
        <span>like</span>{props.likesCount}
      </div>
    </div>
  </div>
}

export default Post;