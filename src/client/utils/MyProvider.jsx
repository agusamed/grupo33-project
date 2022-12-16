import { useState } from 'react'
import MyContext from './MyContext'

export default function MyProvider ({children}) {
    //podriamos pasar el estado desde la raiz App.js pero tendriamos que ir pasandolo componente a componente a traves de las props
    //con el contexto cada componente puede directamente obtenerlo
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('userData')))
    return (
        <MyContext.Provider value={{user, setUser}}>{children}</MyContext.Provider>
    )
}