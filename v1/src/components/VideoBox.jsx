import './videoBox.scss';

const VideoBox = (props) => {
    const video_id = props.url.substring(30);

    return(
        <div className="video-wrapper" style={{backgroundImage: `url('https://img.youtube.com/vi/${video_id}/mqdefault.jpg')`}}>
            <iframe 
                src={props.url} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default VideoBox;