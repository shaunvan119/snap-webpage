import desktop from '../assets/desktop.png'



export default function MainContent() {
    return (
        <section className="main">
            <div className="main-left">
                <h1>Make<br/>remote work</h1>
                <p>Get your team in sync, no matter your location.<br/>Streamline processes, create team rituals, and<br/> watch productivity soar.</p>
                <button>Learn More</button>
            </div>
            <div className="main-right">
            <img src={desktop} alt="Logo" className="desktop-image" />

            </div>
        </section>
    )
}
