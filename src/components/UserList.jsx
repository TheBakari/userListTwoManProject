import React from "react";
import PropTypes from "prop-types";

import './UserList.css'

export const UserList = (props) => {
  if (!props.userData) {
    return (<div>NESTO JKLI</div>);
  }
  const user = props.userData;

  return (
    <div className={`row display ${user.gender === 'female' ? "red lighten-5" : ""}`}>
        <div className={`card-horizontal ${user.gender === 'female' ? "red lighten-5" : ""}`}>
            <div className="card-image col">
                <img src={user.picture.large} className="avatar" alt="user"/>
                
            </div>
            <div className="card-stacked col spanItems">
              <span className="card-title">{user.name}</span>
                <p><i className="material-icons">email</i><span>email: {user.hideEmail()}</span></p>
                <p><i className="material-icons">cake</i>date of birth: {user.formatDate()}</p>
            </div>
        </div>
    </div>
)
};

UserList.propTypes = {
  userData: PropTypes.object.isRequired,
};

UserList.defaultProps = {
  userData: null,
};
