import Grid from '../Grid/Grid'
import MovieDisplay from '../Movie Display/MovieDisplay'
import React, { useState, useEffect } from "react";
import axios from "axios"

//code not yet working
// export const useAuth = () => {
//     const user = localStorage.getItem("user");
//     const [token, setToken] = useState({ user });
//     const [logged, setLogged] = useState(false);
//     useEffect(() => {
//       axios
//         .post("http://localhost:3080/user/authenticate", token)
//         .then((res) => {
//           if (res.status == 200) {
//             setLogged(true);
          
//           } else {
//             setLogged(false);
//             res.data.logged = false;
        
//           }
//         })
//         .catch((err) => {
//           setLogged(false);
//         });
//     }, [user]);
//     return logged;
//   };

const TwoComponent = () => {
    
    return (
        <div>
            <MovieDisplay/>
            <Grid/>
        </div>
    )
}

export default TwoComponent
