import { createContext, useState } from 'react'

export const GameContext = createContext(null)

export const GameContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    const login = () => {
        fetch("/login").then((res) => {
            setIsAuth(true)
            setUserInfo(res.user)
        })
    }

    const logout = () => {
        fetch("/logout").then((res) => {
            setIsAuth(false)
            setUserInfo(null)
        })
    }

    const value = {
        userInfo,
        setUserInfo,
        isAuth,
        setIsAuth,
        login,
        logout
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}