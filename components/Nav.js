import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const nav = () => {
    return (
        <nav className={ `${navStyles.nav} fixed-top` }>
            <ul>
                <li>
                    <Link href='/'><h3>Porfolio</h3></Link>
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

export default nav
