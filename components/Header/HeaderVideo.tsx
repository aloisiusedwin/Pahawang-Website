import React from "react";

interface VideoProps {
  src: string; // Path video
  className?: string; // Tambahan gaya
  loop?: boolean; // Loop video
  autoPlay?: boolean; // Auto-play video
  muted?: boolean; // Mute video
}

const Video: React.FC<VideoProps> = ({
  src,
  className = "object-cover w-full h-[60vh] lg:h-[80vh]",
  loop = true,
  autoPlay = true,
  muted = true,
}) => {
  return (
    <video
      loop={loop}
      autoPlay={autoPlay}
      muted={muted}
      src={src}
      className={className}
    />
  );
};

export default Video;
