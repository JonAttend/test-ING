import React, { useEffect, useState } from 'react';
import { Grid } from "gridjs-react";
import { html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import './styles.scss';

const API_URL = 'https://api.github.com/users';

function Exercice2() {

  const [users, setUsers] = useState();

  const getApiData = async () => {
    const response = await fetch(
      API_URL
    ).then((response) => response.json());
  
    // update the state
    setUsers(Object.values(response));
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    console.log('users ', users)
 }, [users]);

  const grid = new Grid({
    data: () => {
      return users.map( user => [
        user.login, 
        user.id, 
        user.type, 
        user.avatar_url, 
        user.followers_url,
        user.following_url
      ])
    },
    columns: [
      "login",
      "id",
      "type",
      { 
        name: 'Avatar',
        formatter: (_, row) => html(`<img src=${(row.cells[3].data)} id="avatar__icon" alt="test" width="48" height="48" />`)
      },
      { 
        name: 'Followers',
        formatter: (_, row) => html(`${row.cells[4].data.length}`) 
        // 
      },
      { 
        name: 'Following',
        formatter: (_, row) => html(`${row.cells[5].data.length}`) 
        // 
      }
    ],
    pagination: {
      enabled: true,
      limit: 15
    },
    //sort: true,
  });

  return users && 
    <div id='wrapper'>
      <Grid {...grid.props} />
    </div>
}

export default Exercice2;
