import { useState } from "react";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {

    // 에러 정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    // 여기서는 유저의 상태를 로그아웃으로 업데이트합니다.
    const { dispatch } = useAuthContext();

    const logout = () => {
        setIsPending(true);

        signOut(appAuth).then(() => {

            // 로그아웃 성공!
            dispatch({ type: 'logout' });
            setError(null);
            setIsPending(false);

        }).catch((err) => {
            setError(err.message);
            setIsPending(false)
            console.error(error)
        });
    }

    return { error, isPending, logout }

}