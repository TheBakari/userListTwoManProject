import { Fragment, useEffect, useState } from "react";

import { UserCards } from "./UserCards";
import { ListView } from "./ListView";
import { Header } from "./Header";
import { Footer } from "./Footer.jsx";
import { User } from "./user";
import React from "react";

import './Home.css'

export const Home = () => {
  const [data, setData] = useState();
  const [prep, setPrep] = useState(false);
  const [dataCopy, setCopy] = useState();
  const [view, setView] = useState(true);
  const [q, setQ] = useState("");
  const female = [];
  const male = [];
  const [searchParam] = useState(["name.first", "name.last"]);
  const changeView = () => {
    setView(!view);
  };

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
              user.picture,
              user.gender
            )
        );
        setData(userData);
        setCopy(userData);
        setTimeout(() => setPrep(true), 1500);
        
      });
  const search = (e) => {
    setQ(e.target.value);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (prep == false) {
    return (
      <Fragment>
        <Header
          changeView={changeView}
          fetchData={fetchData}
          view={view}
          title="React Users"
        />
        <div className="sk-fold">
          <div className="sk-fold-cube"></div>
          <div className="sk-fold-cube"></div>
          <div className="sk-fold-cube"></div>
          <div className="sk-fold-cube"></div>
        </div>

        <Footer />
      </Fragment>
    );
  } 
  
  else if (q !== "") {
    let current;
    let result = [];
    for (let i = 0; i < data.length; i++) {
      current = data[i].name;
      for (let j = 0; j < current.length; j++) {
        
        if (q.toLowerCase() === current[j].toLowerCase()) {
          result.push(data[i]);
          break
        }
        if (q.toLowerCase()  === `${current[j].toLowerCase() }${current[j + 1]}`) {
          result.push(data[i]);
          break
        }
        if (q === `${current[j].toLowerCase() }${current[j + 1]}${current[j + 2]}`) {
          result.push(data[i]);
          break
        }
        
      
      }
    }

    let userCopyData = result.map(
      (user) =>
        new User(
          `${user.name}`,
          user.email,
          user.dob,
          user.picture,
          user.gender
        )
    );
    for (let i=0; i<userCopyData.length; i++){
      if (userCopyData[i].gender === 'female'){
        female.push(userCopyData[i])
      }
      else {
        male.push(userCopyData[i])
      }
    }

  
    return (
      <Fragment>
        <Header
          changeView={changeView}
          fetchData={fetchData}
          view={view}
          title="React Users"
        />
        {console.log(result)}
        <div className="search-wrapper row">
        <form>
        <div className="input-field container">
        
        <i className="material-icons prefix">search</i>
        {console.log('female:' + female.length + "male" + male.length)}
          <input
          auroFocus
            type="search"
            name="search-form"
            id="icon_prefix"
            class="validate"
            value={q}
            onChange={search}
          />
       <label htmlFor="icon_prefix"></label>
        </div>
        </form>
        <div class="row">
    
  </div>
        <div className="container">
      <div className="right">Female: {female.length} Male: {male.length}</div>
      </div>
      </div >
       {userCopyData.length === 0 ? (<div className="container center noData">
            <i className="material-icons large">sentiment_neutral</i>
              <h1>We couldn't find any people matching your search</h1>
            </div> ) : 'l' }
        {view ? (
          <ListView data={userCopyData} />
        ) : (
          <UserCards data={userCopyData} />
        )}
        {console.log(userCopyData)}
        {console.log('female:' + female.length + "male" + male.length)}
        <Footer />
      </Fragment>
    );
  }
else if (data) {
  for (let i=0; i<data.length; i++){
      if (data[i].gender === 'female'){
        female.push(data[i])
      }
      else {
        male.push(data[i])
      }
    }
  }
  return (
    <Fragment>
      <Header
        changeView={changeView}
        fetchData={fetchData}
        view={view}
        title="React Users"
      />
      <div className="search-wrapper row">
        <div className="input-field container">
        
        <i className="material-icons prefix">search</i>
        {console.log('female:' + female.length + "male" + male.length)}
          <input
          autoFocus
            type="search"
            name="search-form"
            id="icon_prefix"
            class="validate"
            value={q}
            onChange={search}
          />
       <label htmlFor="icon_prefix">Search users </label>
        </div>
        <div className="container">
      <div className="right">Female: {female.length} Male: {male.length}</div>
      </div>
      </div>
      
      {view ? <ListView data={data} /> : <UserCards data={data} />}
    {console.log("female" + female.length + " men" + male.length)}
      <Footer />
    </Fragment>
  );
};
