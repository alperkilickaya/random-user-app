import React, { useState, useEffect } from 'react';
import Email from '../svg/Email'
import Location from '../svg/Location'
import Phone from '../svg/Phone'
import './Card.css';
import axios from 'axios';

const Card = () => {

    const [user, setUser] = useState(false);

    const getRandomUser = () => {
        axios.get("https://randomuser.me/api/")
        .then(response=> setUser(response.data.results[0]))
    }
    
    useEffect(()=>{
        getRandomUser()
    },[])


    return(
        <div className="container">
            <div className="card">
                <div className="image-title-box">
                    <img src={user.picture?.large} alt="" />
                    <p>{user.name?.title} {user.name?.first} {user.name?.last}</p>
                </div>
                <div className="user-email">
                    <Email className="img"/>
                    <p className="info">{user.email}</p>
                </div>
                <div className="user-phone">
                    <Phone className="img"/>
                    <p className="info">{user.phone}</p>
                </div>
                <div className="user-location">
                    <Location className="img"/>
                    <p className="info">{user.location?.city}/{user.location?.country}</p>
                </div>
                <div className="user-register">
                    <p className="info">Age : {user.dob?.age}</p>
                    <p className="info">Register Date: {user.registered?.date.slice(0,10)}</p>
                </div>
            </div>
            <div>
                    <button className="button" onClick={getRandomUser}>Random User</button>
            </div>
        </div>
    )
}

export default Card;