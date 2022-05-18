import desktop from '../assets/desktop.png'
import databiz from '../assets/databiz.svg'
import audiophile from '../assets/audiophile.svg'
import meet from '../assets/meet.svg'
import maker from '../assets/maker.svg'


export default function MainContent() {
    return (
        <section className="main">
            <div className="main-left">
                <h1>Make<br/>remote work</h1>
                <p>Get your team in sync, no matter your location.<br/>Streamline processes, create team rituals, and<br/> watch productivity soar.</p>
                <button className="learn-more">Learn More</button>
            <div className='footer-logos'>
                <img src={databiz} alt="Logo" className="databiz--logo" />    
                <img src={audiophile} alt="Logo" className="audiophile--logo" />  
                <img src={meet} alt="Logo" className="meet--logo" />   
                <img src={maker} alt="Logo" className="maker--logo" />  
            </div>
            </div>
            
            <div className="main-right">
            <img src={desktop} alt="Logo" className="desktop-image" />

            </div>
        </section>
    )
}
