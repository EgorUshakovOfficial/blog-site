import useRegister from '../hooks/useRegister'; 
export default function RegistrationForm() {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        onSubmit
    } = useRegister()

    return (
        <form id="registration-form" onSubmit={onSubmit} >
            <div className="name">
                <div className="field">
                    <label for="first-name">First name</label>
                    <input
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label for="last-name">Last name</label>
                    <input
                        type="text"
                        id="last-name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <label for="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="field">
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" id="submit">Submit</button>
        </form>
    )
}