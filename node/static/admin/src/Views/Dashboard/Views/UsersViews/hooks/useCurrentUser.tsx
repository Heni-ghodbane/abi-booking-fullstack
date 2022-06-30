import React, {createContext, useContext, useState} from "react";
import { User } from "../../../../../shared/types";

type ContextType<S> = [S, React.Dispatch<React.SetStateAction<S>>] | null;

const initialState = null;
const UserInfoContext = createContext<ContextType<User>>(null);
UserInfoContext.displayName = "UserInfoContext";

function useCurrentUser() {
    const context = useContext(UserInfoContext);
    if (!context) {
        throw new Error(`useCurrentUser must be used within a UserInfoProvider`);
    }

    const [currentUser, setCurrentUser] = context;

    return {
        currentUser,
        setCurrentUser
    };
}

function UserInfoProvider(props) {
    const user = useState(initialState);
    return <UserInfoContext.Provider value={user} {...props} />;
}

export { UserInfoProvider, useCurrentUser };