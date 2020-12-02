import React, {useContext} from 'react'
import SignInChild from '../components/SignInx.jsx'
import { firebaseAuth } from '../Provider/AuthProvider'
const SignIn = () => {
    const { token } = useContext(firebaseAuth)
    return (
        <div>
            <SignInChild token={token} />
        </div>
    );
};

export default SignIn;

