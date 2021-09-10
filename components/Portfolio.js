import Header from './Header'
import stylesPortfolio from '../styles/Portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Modal from "./Modal"




const Portfolio = () => {

    return (
        <>
 
        <div id="portfolioHeader" className={stylesPortfolio.portfolioHeader}>
            <div className={stylesPortfolio.portfolioHeaderText}><h1>My Projects</h1></div>
            </div>

    <div id="portfolioframe" className={stylesPortfolio.portfolioFrame}>    
        <div className={ `${stylesPortfolio.portfolioColor} ${stylesPortfolio.portfolioSize}` }>
            
                    <div className="row">
                    <div id="1" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(1)}>                   
             
                        <Image
                        alt={`Nothing here`}
                        src={`/images/octo.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                    
                     
                        </div>
                        <div id="2" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(2)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/waarderuil.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div id="3" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(3)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/jt.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>

                        <style jsx>{`
                            .row {
                            width:100%;
                            }`}
                        </style>
                    </div>
            </div>
            <div className={ `${stylesPortfolio.portfolioColor} ${stylesPortfolio.portfolioSize}` }>
            
                    <div className="row">
                    
                                
                        <div id="4" className={ `${stylesPortfolio.portfolioItem} col` } >
                        <Link href='https://rumah-afra.com' passHref>
                        <a target="_blank" rel="noreferrer">
                        <Image
                        alt={`Nothing here`}
                        src={`/images/rumah-afra.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </a>
                        </Link>
                        </div>

                        
                        <div id="5" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(4)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/platysign.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div id="6" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(5)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/woordenschat.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>

                        <style jsx>{`
                            .row {
                            width:100%;
                            }`}
                        </style>
                    </div>
            </div>
            <div className={ `${stylesPortfolio.portfolioColor} ${stylesPortfolio.portfolioSize}` }>
            
                    <div className="row">
                    
                                
                        <div id="7" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(6)}>
                        <Link href='https://rumah-afra.com' passHref>
                        <a target="_blank" rel="noreferrer">
                        <Image
                        alt={`Nothing here`}
                        src={`/images/staggeringdesign.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </a>
                        </Link>
                        </div>

                        
                        <div id="8" className={ `${stylesPortfolio.portfolioItem} col` } >
                        <Image
                        alt={`Nothing here`}
                        src={`/images/96.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div id="9" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(7)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/hoornse.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>

                        <style jsx>{`
                            .row {
                            width:100%;
                            }`}
                        </style>
                    </div>
            </div>
    </div>

    </>
    )

}

export async function portfolioClick(portfolio){

//currentPortfolio = this.portfolio;    
//Modal.modalOverlay(currentPortfolio);
alert(portfolio);
}




if (typeof window === 'object') {
    // Check if document is finally loaded
    window.addEventListener("load", function(){
           //alert('Finished loading')

           document.getElementById("portfolioframe").style.opacity = "1";
           document.getElementById("portfolioframe").style.margin = "0px";
           document.getElementById("portfolioHeader").style.opacity = "1";
           
         });
      }





export default Portfolio

