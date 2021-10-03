import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Image from "next/image";

const nav = () => {
    return (
        <>
        <div className={navStyles.fakenav}></div>
        <nav className={`${navStyles.nav} fixed-top`}>
            
            <ul>
                <li>
                <div className={navStyles.navimg}>

                <Image
                  src="/images/ed_logo.png"
                  width="40px"
                  height="40px"
                  alt="404"
                  
                />
               </div>
                </li>
                <li>
                    <Link href="/" onClick={scrollToTop}>Erikku</Link>
                </li>
                <li>
                <Link href="/" onClick={scrollToTop}>
                <div className={navStyles.design}>Design</div>
                </Link>
                
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


            </>
    )
}
// This function will scroll the window to the top 
const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export default nav
