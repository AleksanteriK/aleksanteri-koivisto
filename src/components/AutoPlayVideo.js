import { useRef, useEffect } from 'react';

const AutoPlayVideo = ({ src, poster}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      });
    }, options);

    const currentRef = videoRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <video
      poster={poster}
      ref={videoRef}
      src={src}
      muted      
      loop       
      playsInline
      style={{maxWidth: '100%', borderRadius: '1px', border: '1px solid #1f2127'}}
    />
  );
};

export default AutoPlayVideo;