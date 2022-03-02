import './BackgroundVid.css';
import video from './CityOfTears.mp4';

function BackgroundVid() {
    return (
        <>
            <div class='header-video container'>
                <div class='video-container'>
                    <video autoPlay loop muted>
                        <source src={video} />
                    </video>
                </div>
            </div>
        </>
    );
}

export default BackgroundVid;