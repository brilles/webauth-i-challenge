import React, { useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  useEffect(() => {
    (async function getData() {
      const response = await axios.get(
        'https://users-app1.herokuapp.com/api/users'
      );
      console.log(response);
    })();
  }, []);
  return <p>list</p>;
}
