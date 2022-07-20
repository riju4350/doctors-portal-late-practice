import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }

  return  children;
  
}

export default ProtectedRoute;