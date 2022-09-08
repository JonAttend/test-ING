import React, { useEffect, useState } from 'react';
import { Grid } from "gridjs-react";
import './styles.scss';

const API_URL = 'https://api.github.com/users';

function Exercice2() {

  const [users, setUsers] = useState();

  const getApiData = async () => {
    const response = await fetch(
      API_URL
    ).then((response) => response.json());
  
    // update the state
    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    if (users) {
      const test = users;
      const test2 = Object.values(test)
      console.log('test ', test2)
    }
  }, [users]);

  return users && <Grid
          data={[users]}
          columns={["login"]}
          pagination={{
            limit: 5,
        }}
    />;
}

export default Exercice2;
