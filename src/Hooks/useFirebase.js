import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()

    // Registation function
    const handleRegistetion = (email, Password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then(result => {
                const user = result.user
                setAuthError("")
                const newUser = { displayName: name, email }
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { });
                history.push("/")
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))

    };

    // console.log('redister', user);
    // Login email password function
    const loginEmailPassword = (email, password, location, history) => {
        console.log(email, password, "errors");
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
                history.push(location)

            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    // SignOut function
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => { })
    }

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


    return {
        user,
        authError,
        isLoading,
        handleRegistetion,
        loginEmailPassword,
        loginByGoogle,
        handleLogout
    }
}

export default useFirebase