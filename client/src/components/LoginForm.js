import useLogin from '../hooks/useLogin'; 
export default function LoginForm() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        onSubmit
    } = useLogin()

    return (
        <form id="login-form" onSubmit={onSubmit} >
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