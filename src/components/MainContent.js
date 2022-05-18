import desktop from '../assets/desktop.png'
import databiz from '../assets/databiz.svg'
import audiophile from '../assets/audiophile.svg'
import meet from '../assets/meet.svg'
import maker from '../assets/maker.svg'


export default function MainContent() {
    return (
        <section className="main">
            <div className="main-left">
             <div className="remote-work">
                <h1 className="remote-work-header">Make<br/>remote work</h1>
                <p className="paragraph">Get your team in sync, no matter your location.<br/>Streamline processes, create team rituals, and<br/> watch productivity soar.</p>
                <button className="learn-more">Learn More</button>
            </div>
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
