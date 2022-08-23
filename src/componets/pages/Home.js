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
                <button class="hirebtn">Hire me</button>
                <a class="projectsbtn"
                onClick={() => handlePageChange('Work')}>Projects</a>
            </p>
        </div>
        <div class="rightimg">
            <img src={portrait} alt="A self portrait of myself"></img>
        </div>
        </>
    )
}