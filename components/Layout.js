import Nav from './Nav'
import Footer from './Footer'
import Portfolio from './Portfolio'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Profile from './Profile'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                    <Profile />
                    <br />
                    <Portfolio />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
