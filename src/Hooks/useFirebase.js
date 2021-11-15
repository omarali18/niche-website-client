import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth()

    // Registation function
    const handleRegistetion = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user
                setAuthError("")
                // update user enter name
                const newUser = { displayName: name, email }
                setUser(newUser)
                // save database
                saveUsers(email, name, "POST", password, history)
                // update name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { });
                // history.push("/")
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))

    };

    // console.log('redister', user);
    // Login email password function
    const loginEmailPassword = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(location)

                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))


    };
    // Login by google
    const loginByGoogle = (location, history) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setAuthError("")
                saveUsers(user.email, user.displayName, "PUT", user.password, history, location)
                history.push(location)

            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    // observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    useEffect(() => {
        let emailIs = user.email;
        if (emailIs) {

            fetch(`https://blooming-sierra-49140.herokuapp.com/users/${emailIs}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                })
        }

    }, [user.email])

    // SignOut function
    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
            })
            .catch(error => { })
            .finally(() => setIsLoading(false))
    }

    // save user in database
    const saveUsers = (email, displayName, method, Password = "", history, location = "/") => {
        const user = { email, displayName, Password }
        fetch("https://blooming-sierra-49140.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Registration Successfully..!")
                    history.push(location)
                }
            })
    }




    return {
        user,
        admin,
        authError,
        isLoading,
        handleRegistetion,
        loginEmailPassword,
        loginByGoogle,
        handleLogout
    }
}

export default useFirebase