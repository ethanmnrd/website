import React, { useState, useEffect } from "react";
import axios from "axios";

export default function User(props) {
  // Setting initial state
  const initialUserState = {
    user: {},
    loading: true
  };

  // Getter and setter for user state
  const [user, setUser] = useState(initialUserState);

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(
        `https://api.github.com/users/${props.match.params.id}`
      );

      setUser(data);
    };

    getUser();
  }, []); // must have [] to prevent useEffect inf loop

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{props.match.params.id}</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.followers}</td>
            <td>{user.public_repos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
