import Header from './Header'
import stylesPortfolio from '../styles/Portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Modal from "./Modal"




const Portfolio = () => {

    var portfolios = [

        {
            //starts at 0
        "name" : "Octo",
        "Description" : "blablabla ik heb voor Octo gewerkt",
        "URL" : "https://octo.nu"
        },
        {
        "name" : "waarderuil",
        "Description" : "blablabla ik heb voor Octo gewerkt",
        "URL" : "https://octo.nu"
        },
        {
        "name" : "JT Photography",
        "Description" : "blablabla ik heb voor Octo gewerkt",
        "URL" : "https://octo.nu"
        },
        {
        "name" : "Platysign",
        "Description" : "blablabla ik heb voor Octo gewerkt",
        "URL" : "https://octo.nu"
        },
        {
        "name" : "Woordenschat",
        "Description" : "blablabla ik heb voor Octo gewerkt",
        "URL" : "https://octo.nu"
        },
        {
        "name" : "Staggering Design",
        "Description" : "blablabla ik heb voor Octo gewerkt",
        "URL" : "https://octo.nu"
        },
        {
        "name" : "Ninetysix Music",
        "Description" : "blablabla ik heb voor Octo gewerkt",
        "URL" : "https://octo.nu"
        }
    ]

    console.log(portfolios[0].name);

    //let portfolio = cars.find(car => car.color === "red");
    return (
        <>
 
        <div id="portfolioHeader" className={`${stylesPortfolio.portfolioHeader} ${stylesPortfolio.greenglow} ${stylesPortfolio.greenglow2}` }>
            <div className={stylesPortfolio.portfolioHeaderText}><h1>My Projects</h1></div>
            </div>

    <div id="portfolioframe" className={stylesPortfolio.portfolioFrame}>    
        <div className={ `${stylesPortfolio.portfolioColor} ${stylesPortfolio.portfolioSize}` }>
            
                    <div className="row">
                    <div id="1" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(0)}>                   
             
                        <Image
                        alt={`Nothing here`}
                        src={`/images/octo.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                    
                     
                        </div>
                        <div id="2" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(1)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/waarderuil.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div id="3" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(2)}>
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

                        
                        <div id="5" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(3)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/platysign.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div id="6" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(4)}>
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
                    
                                
                    <div id="6" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(5)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/staggeringdesign.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>

                        
                        <div id="4" className={ `${stylesPortfolio.portfolioItem} col` } >
                        <Link href='https://ninetysixmusic.com' passHref>
                        <a target="_blank" rel="noreferrer">
                        <Image
                        alt={`Nothing here`}
                        src={`/images/96.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </a>
                        </Link>
                        </div>
                        <div id="9" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(6)}>
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
            <div className={ `${stylesPortfolio.portfolioColor} ${stylesPortfolio.portfolioSize}` }>
            
                    <div className="row">
                    
                                
                    <div id="6" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(5)}>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/staggeringdesign.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>

                        
                        <div id="4" className={ `${stylesPortfolio.portfolioItem} col` } >
                        <Link href='https://ninetysixmusic.com' passHref>
                        <a target="_blank" rel="noreferrer">
                        <Image
                        alt={`Nothing here`}
                        src={`/images/96.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </a>
                        </Link>
                        </div>
                        <div id="9" className={ `${stylesPortfolio.portfolioItem} col` } onClick={() => portfolioClick(6)}>
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

