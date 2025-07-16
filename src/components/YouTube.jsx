import React from 'react';
import '../stylesheets/YouTube.css'

function YouTube({ videoId, title = 'YouTube video player' }) {
  // Construye la URL de incrustación de YouTube
  const embedUrl = `http://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container" style={{
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%', /* 16:9 Aspect Ratio (9 / 16 = 0.5625) */
      height: 0,
      overflow: 'hidden',
      maxWidth: '100%',
      background: '#000'
    }}>
      <iframe
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      ></iframe>
    </div>
  );
}

export default YouTube;