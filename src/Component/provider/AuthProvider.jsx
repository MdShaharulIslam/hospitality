import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
const [loading, setLoading]=useState(true);

    const auth = getAuth(app);
    const createUser = (email, password) => {
      
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        
    
        return () => unsubscribe();
    }, [auth]);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    };     

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;
