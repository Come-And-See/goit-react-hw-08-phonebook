import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRouter = ({ children }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
   
    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} />;
    }

    return children
}
