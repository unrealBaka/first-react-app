import React from "react";
import userDialogStyle from "./DialogUsers.module.css";
import {NavLink} from "react-router-dom";

const DialogUsers = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className="dialog">
            <NavLink to={path} activeClassName={userDialogStyle.active}> {props.name} </NavLink>
        </div>

    );
}

export default DialogUsers;