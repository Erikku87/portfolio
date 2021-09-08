import Header from './Header'
import stylesPortfolio from '../styles/Portfolio.module.css'
import Image from 'next/image'


const Portfolio = () => {

    
    
    return (
    <div className={stylesPortfolio.portfolioFrame}>    
        <div className={ `${stylesPortfolio.portfolioColor} ${stylesPortfolio.portfolioSize}` }>
            
                    <div className="row">
                        <div className={ `${stylesPortfolio.portfolioItem} col` }>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/octo.jpg`}
                        width={420}
                        height={300}
                        
                        objectFit='contain'
                
                        priority
                        />
                        </div>
                        <div className={ `${stylesPortfolio.portfolioItem} col` }>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/waarderuil.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div className={ `${stylesPortfolio.portfolioItem} col` }>
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
                        <div className={ `${stylesPortfolio.portfolioItem} col` }>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/rumah-afra.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div className={ `${stylesPortfolio.portfolioItem} col` }>
                        <Image
                        alt={`Nothing here`}
                        src={`/images/platysign.jpg`}
                        width={420}
                        height={300}
                        priority
                        />
                        </div>
                        <div className={ `${stylesPortfolio.portfolioItem} col` }>
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
    </div>)
}

export default Portfolio

