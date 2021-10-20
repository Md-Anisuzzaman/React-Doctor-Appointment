import React from 'react';
import useAuth from '../Hook/useAuth';
import { Route,Redirect, useLocation, useHistory,} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    
   
    return (
       <Route
           {...rest}
           render={({location}) => 
           user.email? (children) :
           (
               <Redirect
               to = {{
                   pathname: "/login",
                   state: {from: location},
               }}
                   
               />
           )
           
           }
       />
    );
};

export default PrivateRoute;