import { Navigate } from 'react-router-dom'
import STORAGE_KEYS from "../../Constants/Storage";

function LoginRequired({ children }) {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_INFO))

    if (user === null || (!user.id && !user.password)) {
        alert('Please log in to access this page!')
        return <Navigate to="/" replace />
    }
    return children
}
export default LoginRequired

