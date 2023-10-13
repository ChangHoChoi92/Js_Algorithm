import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();


// 리듀서 함수
const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        case 'authIsReady':
            return { ...state, user: action.payload, isAuthReady: true }
        default:
            return state
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer,
        {
            user: null,
            isAuthReady: false
        })

    useEffect(() => {
        // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수입니다.
        // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다. 더 이상 유저의 변화를 관찰하지 않도록 하는 함수입니다. 
        // 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지합니다.
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            // if (user) {
            dispatch({ type: 'authIsReady', payload: user })
            // }
        });

        // 클린업 함수로 구독을 취소하도록 만듭니다.
        return () => {
            unsubscribe();
        };
    }, [])

    console.log('context state: ', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }