import { create } from 'zustand'

const WALLPAPERS = {
  static:[
    { type: 'image', src: '/images/wallpaper.png' },
    { type: 'image', src: '/images/wallpaper2.png' },
    { type: 'image', src: '/images/wallpaper3.jpeg' },
    { type: 'image', src: '/images/wallpaper4.jpeg' },
  ],
  live:[
    { type: 'video', src: '/videos/video_wallpaper1.webm' },
    { type: 'video', src: '/videos/video_wallpaper2.webm' },
    { type: 'video', src: '/videos/video_wallpaper3.webm' },
  ]
}


const useWallpaperStore = create((set) => ({
  wallpaper: WALLPAPERS.static[0],
  isAnimatedTextOn: true,

  setWallpaper: (wp) => {
    if(wp.type === "image"){
      document.body.style.backgroundImage = `url(${wp.src})`
    }else{
      document.body.style.backgroundImage = 'none'
    }
    set({ wallpaper: wp })
  },

  setAnimatedTextVisible: (flag) =>{
    set({isAnimatedTextOn: flag})
  },

  WALLPAPERS,
}))

useWallpaperStore.getState().setWallpaper(WALLPAPERS.static[2])

export default useWallpaperStore