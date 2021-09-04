import React from "react";
import { UserList } from "./UserList";
import PropTypes from "prop-types";

export const ListView = (props) => {
  if (props && props.data && props.data.length > 0) {
    const userItems = props.data.map((user, index) => (
      <UserList userData={user} key={index} />
    ));
    return (
      <div className="container">
        <div className="row">{userItems}</div>
      </div>
    );
  }
  return <div></div>;
};

ListView.propType = {
  data: PropTypes.array.isRequired,
};

ListView.defaultProps = {
  data: [],
};
