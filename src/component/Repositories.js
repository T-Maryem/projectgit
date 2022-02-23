import React from "react";
import Repository from "./Repository";
import './Repository.css'
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,
    // eslint-disable-next-line no-unused-vars
    Route,
    
    
  } from "react-router-dom";

const Repositories = ( {user, repos}) => (
  <section className="repositories">
      {
          repos.map((repo) => (
              <Repository key = {repo.id} repo = {repo} user={user} />

           ))
      }
  </section>
  );



export default Repositories;