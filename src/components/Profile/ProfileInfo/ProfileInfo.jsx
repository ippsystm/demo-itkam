import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Loading/Global";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div><img src='/bouts.jpg'></img></div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;