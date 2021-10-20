import React, { useContext } from 'react';
import { AuthContext } from "../Contex-Api/AuthProvider"

const useAuth = () => {

    return useContext(AuthContext)
};

export default useAuth;