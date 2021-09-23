import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const nav = () => {
    return (
        <nav className={`${navStyles.nav} fixed-top`}>
            <ul>
                <li>
                    <Link href="/" onClick={scrollToTop}><a>Porfolio</a></Link>
                </li>
                {/* <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/'>Samples</Link>
                </li>
                <li>
                    <Link href='/about'>Contact</Link>
                </li> */}

            </ul>
        </nav>


    )
}
// This function will scroll the window to the top 
const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export default nav
