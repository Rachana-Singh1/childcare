import ReactPlayer from 'react-player';
import './Video.css';
import Navbar from './Navbar';

const Video = () => {
return (
    <div className="Video">
      <Navbar />
      <h3>Watch informative videos about vaccines for Your child</h3>
      <h4></h4>
      <div className="video-container">
        <ReactPlayer
            url="https://www.youtube.com/watch?v=2wycGN2cHNM"
            controls
            className="ReactPlayer1"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=F3EDggy99v0"
            controls
            className="ReactPlayer1"
          />
        </div>
<h4>More Videos</h4>
      <div className="video-container">
      <ReactPlayer
            url="https://www.youtube.com/watch?v=KbWs3fM8hak"
            controls
            className="ReactPlayer2"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=iEzT624rbw0"
            controls
            className="ReactPlayer1"
          />
          </div>
    </div>
  );
};

export default Video;


