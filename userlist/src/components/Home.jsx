import { Fragment, useEffect, useState } from "react";

import { UserCards } from "./UserCards";
import { Header } from "./Header";
import { Footer } from "./Footer.jsx";
import { User } from "./user";
import React from "react";

export const Home = () => {
  const [data, setData] = useState();
  const [dataCopy, setCopy] = useState();
  const [view, setView] = useState(true);
  const fetchData = () =>
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let userData = response.results.map(
          (user) =>
            new User(
              `${user.name.first} ${user.name.last}`,
              user.email,
              user.dob,
              user.picture
            )
        );
        setData(userData);
        setCopy(userData);
      });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Header title="React Users" />
      <UserCards data={data} />
      <Footer />
    </Fragment>
  );
};
