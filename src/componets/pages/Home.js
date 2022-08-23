import portrait from '../../assets/selfport-port.png'

export default function Home({ handlePageChange }) {
    return(
        <>
        <div class="headText">
            <h1 >
                Hello! My name is Drew Payton.
            </h1>
            <p class="pweb">
                I am a &nbsp; <div class="webdev">Web Developer</div>
            </p>
            <p>
                <button class="hirebtn" onClick={() => handlePageChange('Contact')}>Hire me</button>
                <a class="projectsbtn" rel="noreferrer"
                onClick={() => handlePageChange('Work')}>Projects</a>
            </p>
        </div>
        <div class="rightimg">
            <img src={portrait} alt="A self portrait of myself"></img>
            <p class="imgText">Hello, I am currently learning and working as a freelance Web Developer and I am always looking for a challenge. I am 
            very passionate about the building blocks for the foundation of a website. That drives me to learn more and more everyday.</p>
        </div>
        </>
    )
}