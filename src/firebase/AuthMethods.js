
import firebaseconfig from './FireBaseIndex'
import firebase from 'firebase'

export const authMethods = {
    // firebase helper methods go here...
    signup: (email, password, setErrors, setToken) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            //make res asynchonous so that we can make grab the token before saving it.
            .then(async res => {
                const token = await Object.entries(res.user)[5][1].b
                //set token to localStorage
                await localStorage.setItem('token', token)
                setToken(token)
                //grab token from local storage and set to state.

            })
            .catch(err => {
                setErrors(prev => ([...prev, err.message]))
            })
    },
    signin: (email, password, setErrors, setToken) => {
        //change from create users to...
        firebase.auth().signInWithEmailAndPassword(email, password)
            //everything is almost exactly the same as the function above
            .then(async res => {
                const token = await Object.entries(res.user)[5][1].b
                const refreshToken = await res.user.refreshToken
                //set token to localStorage
                console.log(res, "login")
                await localStorage.setItem('token', token)
                await localStorage.setItem("refreshToken", refreshToken)


                setToken(window.localStorage.token)
            })
            .catch(err => {
                setErrors(prev => ([...prev, err.message]))
            })
    },
    //no need for email and password
    signout: (setErrors = null, setToken = null) => {
        // signOut is a no argument function
        firebase.auth().signOut().then(res => {
            //remove the token
            localStorage.removeItem('token')
            //set the token back to original state
            setToken(null)
        })
            .catch(err => {
                //there shouldn't every be an error from firebase but just in case
                setErrors != null ? setErrors(prev => ([...prev, err.message])) : null;
                //whether firebase does the trick or not i want my user to do there thing.
                localStorage.removeItem('token')
                setToken != null ? setToken(null) : null
                console.error(err.message)
            })
    },

}