import useWallpaperStore from '#store/wallpaper'

const VideoWallpaper = () => {
  const { wallpaper } = useWallpaperStore()
  if (wallpaper.type !== 'video') return null

  return (
    <video
      key={wallpaper.src}
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >  
    <source src={wallpaper.src} type="video/webm" />
  
    </video>
  )
}

export default VideoWallpaper