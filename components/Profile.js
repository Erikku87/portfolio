import stylesProfile from '../styles/Profile.module.css'

const Profile = () => {
    return (
        <div className={stylesProfile.profile}>
            <div className={stylesProfile.profilepic}>
            </div>
            <div className={stylesProfile.profileinfo}>
            <ul>
                <li className={stylesProfile.label}>Naam:</li>
                <li>Eric Tjhie</li>
                <li className={stylesProfile.label}>Geboren op:</li>
                <li>13 - 10 - 1987</li>
                <li className={stylesProfile.label}>Telefoon:</li>
                <li>0619049059</li>
                <li className={stylesProfile.label}>E-mail:</li>
                <li>Erikkudesign@gmail.com</li>

            </ul>
            </div>
        </div>
    )
}

export default Profile