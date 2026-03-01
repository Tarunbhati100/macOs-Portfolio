import useClippyStore from '#store/clippy'
import usePreferencesStore from '#store/wallpaper'
import { WindowHeader } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import React, { useState } from 'react'

const SECTIONS = ['Wallpaper', 'Clippy']
const AGENT_NAMES = ['Clippy', 'Bonzi', 'F1', 'Genie', 'Genius', 'Links', 'Merlin', 'Peedy', 'Rocky', 'Rover']

const Preferences = () => {
  const [activeSection, setActiveSection] = useState('Wallpaper')
  const { wallpaper, setWallpaper, WALLPAPERS, isAnimatedTextOn, setAnimatedTextVisible } = usePreferencesStore()
  const { currentAgent, isMuted, isVisible, setCurrentAgent, setIsMuted, setIsVisible } = useClippyStore()

  return (
    <>
      <WindowHeader id="preferences">
        <h2>Preferences</h2>
      </WindowHeader>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-36 shrink-0 border-r border-gray-200 bg-gray-100 p-2 flex flex-col gap-0.5">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`rounded-md px-3 py-2 text-left text-sm cursor-pointer border-none
                ${activeSection === section
                  ? 'bg-blue-100 font-semibold text-blue-700'
                  : 'bg-transparent font-normal text-gray-700'
                }`}
            >
              {section === 'Wallpaper' ? '🖼️' : '📎'} {section}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="h-100 w-100 flex-1 p-4 overflow-y-auto bg-white">

          {activeSection === 'Wallpaper' && (
            <div>
              
                <p className="text-xs text-gray-500 mb-3">Choose a wallpaper</p>

                {/* Static */}
                <p className="text-xs text-gray-500 mb-2">Static</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                {WALLPAPERS.static.map((wp) => (
                    <div
                    key={wp.src}
                    onClick={() => setWallpaper(wp)}
                    className={`cursor-pointer rounded-md overflow-hidden transition-all
                        ${wallpaper.src === wp.src ? 'ring-2 ring-blue-400 ring-offset-1' : 'ring-2 ring-transparent'}`}
                    >
                    <img src={wp.src} alt={wp.src} loading="lazy" className="w-full h-16 object-cover block" />
                    </div>
                ))}
                </div>

                {/* Live */}
                <p className="text-xs text-gray-500 mb-2">Live</p>
                <div className="grid grid-cols-3 gap-2">
                {WALLPAPERS.live.map((wp) => (
                    <div
                    key={wp.src}
                    onClick={() => setWallpaper(wp)}
                    className={`cursor-pointer rounded-md overflow-hidden relative transition-all
                        ${wallpaper.src === wp.src ? 'ring-2 ring-blue-400 ring-offset-1' : 'ring-2 ring-transparent'}`}
                    >
                    <video src={wp.src} muted className="w-full h-16 object-cover block" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <span className="text-white text-lg">▶</span>
                    </div>
                    </div>
                ))}
                </div>    

                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-700 font-medium">Animated Text</p>
                        <p className="text-xs text-gray-400">Show animated text on desktop</p>
                    </div>
                    <button
                        onClick={() => setAnimatedTextVisible(!isAnimatedTextOn)}
                        className={`w-10 h-6 rounded-full transition-colors relative ${
                        isAnimatedTextOn ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    >
                        <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                        isAnimatedTextOn ? 'left-4' : 'left-0.5'
                        }`}/>
                    </button>
                </div>

            </div>
          )}

          {activeSection === 'Clippy' && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-2">Choose an agent</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {AGENT_NAMES.map((name) => (
                    <button
                      key={name}
                      onClick={() => setCurrentAgent(name)}
                      className={`rounded-md px-3 py-2 text-left text-sm cursor-pointer border transition-all
                        ${currentAgent === name
                          ? 'bg-blue-100 border-blue-300 font-semibold text-blue-700'
                          : 'bg-gray-50 border-gray-200 font-normal text-gray-700'
                        }`}
                    >
                      {currentAgent === name ? `✓ ${name}` : name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-xs text-gray-500">Controls</p>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-left cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {isMuted ? '🔊 Unmute Sounds' : '🔇 Mute Sounds'}
                </button>
                <button
                  onClick={() => setIsVisible(!isVisible)}
                  className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-left cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {isVisible ? '🙈 Hide Clippy' : '👁️ Show Clippy'}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

const PreferencesWindow = WindowWrapper(Preferences, "preferences")
export default PreferencesWindow