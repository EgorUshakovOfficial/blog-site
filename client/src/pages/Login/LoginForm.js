import { useContext } from 'react'; 
import { AuthContext } from '../../context/AuthProvider'; 
export default function LoginForm() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin
    } = useContext(AuthContext);

    return (
        <form id="login-form" onSubmit={handleLogin} >
            <div className="field">
                <label for="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value) }
                />
            </div>
            <div className="field">
                <label for="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" id="submit">Log in</button>
        </form>
    )
}