import React from "react"
import  { Redirect } from 'react-router-dom'

export default function Menu(props){

     const logoutClickHandler = () => {

        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("username");
     }
     return (
        <div className="menu-block">
                            <ul>
                                <li><a href="/home" class={props.menulink == 'home' ? "active" : ''}>Club Users</a></li>
                                <li><a href="/events" class={props.menulink == 'events' ? "active" : ''}>Events</a></li>
                                <li><a href="/" onClick={logoutClickHandler}>Logout</a></li>
                             </ul>
                        </div>

     );
}