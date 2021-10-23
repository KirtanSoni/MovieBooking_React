import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { loggedIn,userlogout } from "./reduxActions/loginActions";
import { useDispatch } from "react-redux";

export const useAuth = () => {
    const user = localStorage.getItem("user");
    const dispatch=useDispatch();
    const [token, setToken] = useState({ user });
    const [logged, setLogged] = useState(false);
    useEffect(() => {
      axios
        .post("http://localhost:3080/user/authenticate", token)
        .then((res) => {
          if (res.status == 200) {
            setLogged(true);
            dispatch(loggedIn(res.data));
          } else {
            setLogged(false);
            res.data.logged = false;
            dispatch(userlogout());
          }
        })
        .catch((err) => {
          setLogged(false);
        });
    }, [user]);
    return logged;
}