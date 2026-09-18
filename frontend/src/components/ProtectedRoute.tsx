import { Navigate } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';

export function ProtectedRoute({ children }: { children: JSX.Element }) {
const token = localStorage.getItem('ironfit_token');

if (!token) {
    return <Navigate to="/login" replace />;
}

return children;
}