import React, { useEffect, useRef, useState, useCallback } from 'react'
import { initAgent } from 'clippyjs'
import * as agents from 'clippyjs/agents'
import useClippyStore from '#store/clippy'

const AGENT_NAMES = ['Clippy', 'Bonzi', 'F1', 'Genie', 'Genius', 'Links', 'Merlin', 'Peedy', 'Rocky', 'Rover']

const IDLE_MESSAGES = [
  "It looks like you're not doing anything. Need help?",
  "Still there? I'm here if you need me!",
  "Psst... click on 📎 icon to see what I can do!",
  "I know 97 animations. Want to see one?",
]

const ClippyAssistant = () => {
  const agentRef = useRef(null)
  const idleTimer = useRef(null)
  const { currentAgent, isMuted, isVisible, setCurrentAgent, setIsMuted, setIsVisible } = useClippyStore() 
  const [showMenu, setShowMenu] = useState(false)

  const toggleVisibility = () => {
    const next = !isVisible
    setIsVisible(next);    
  }

  const applyMute = useCallback((agent, muted) => {
    const sounds = agent?._animator?._sounds ?? {}
    Object.values(sounds).forEach(audio => audio.volume = muted ? 0 : 1)
  }, [])

  const toggleMute = () => {
    const next = !isMuted
    setIsMuted(next);
  }

  const resetIdleTimer = useCallback(() => {
    clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(() => {
      const msg = IDLE_MESSAGES[Math.floor(Math.random() * IDLE_MESSAGES.length)]
      if(isVisible)
        agentRef.current?.speak(msg)
    }, 15000)
  }, [isVisible])

  const loadAgent = useCallback(async (agentName) => {
    // Dispose old agent
    if (agentRef.current) {
      agentRef.current.dispose()
      agentRef.current = null
    }

    const agentData = agents[agentName]
    if (!agentData) return

    const agent = await initAgent(agentData)

    applyMute(agent, isMuted)
    
    agentRef.current = agent

    if (isVisible){
      agent.show()
      agent.speak(`Hi! I'm ${agentName}!`)
    }
    
    setCurrentAgent(agentName)
    setShowMenu(false)
    resetIdleTimer()
  }, [isMuted, isVisible])


  // Initial load
  useEffect(() => {

    loadAgent(currentAgent)

    return () => {
      agentRef.current?.dispose()
      clearTimeout(idleTimer.current)
    }
  }, [currentAgent])
  // Reset on mouse move
  useEffect(() => {
    window.addEventListener('mousemove', resetIdleTimer)
    return () => window.removeEventListener('mousemove', resetIdleTimer)
  }, [])

  // Reset on keypress
  useEffect(() => {
    window.addEventListener('keydown', resetIdleTimer)
    return () => window.removeEventListener('keydown', resetIdleTimer)
  }, [])

  // When isVisible changes in store → show/hide
  useEffect(() => {
    if (!agentRef.current) return
    if (isVisible) agentRef.current.show()
    else agentRef.current.hide()
  }, [isVisible])

  // When isMuted changes in store → apply
  useEffect(() => {
    applyMute(agentRef.current, isMuted)
  }, [isMuted])

  const playRandomAnimation = () => {
    const anim = agentRef.current
    if (!anim) return
    resetIdleTimer()
    const animations = anim.animations()
    const random = animations[Math.floor(Math.random() * animations.length)]
    anim.stop()
    anim.speak(`${random}`)
    anim.play(random)
    setShowMenu(false)
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
          fontFamily: 'sans-serif',
        }}
      >
        {showMenu && (
          <div
            className="clippy-menu"
            style={{
              background: '#fff',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              minWidth: '180px',
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#555', padding: '4px 8px' }}>
              🎭 Change Agent
            </div>
            {AGENT_NAMES.map((name) => (
              <button
                key={name}
                onClick={() => loadAgent(name)}
                style={{
                  background: name === currentAgent ? '#e8f0fe' : 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: name === currentAgent ? 'bold' : 'normal',
                  color: '#333',
                  fontSize: '13px',
                }}
              >
                {name === currentAgent ? `✓ ${name}` : name}
              </button>
            ))}

            <hr style={{ margin: '4px 0', border: 'none', borderTop: '1px solid #eee' }} />

            <button
              onClick={playRandomAnimation}
              style={menuBtnStyle}
            >
              🎬 Random Animation
            </button>

            <button
              onClick={() => { 
                agentRef.current?.stop() 
                agentRef.current?.speak(IDLE_MESSAGES[Math.floor(Math.random() * IDLE_MESSAGES.length)]); 
                setShowMenu(false) 
              
              }}
              style={menuBtnStyle}
            >
              💬 Say Something
            </button>

            <button onClick={toggleMute} style={menuBtnStyle}>
              {isMuted ? '🔊 Unmute' : '🔇 Mute'}
            </button>

            <button onClick={toggleVisibility} style={menuBtnStyle}>
              {isVisible ? '👁️ Go Away' : '🙈 Call Me'}
            </button>
          </div>
        )}

        <button
          onClick={() => setShowMenu((p) => !p)}
          title="Clippy Controls"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '2px solid #4a90d9',
            background: '#fff',
            cursor: 'pointer',
            fontSize: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          📎
        </button>
      </div>
    </>
  )
}

const menuBtnStyle = {
  background: 'transparent',
  border: 'none',
  borderRadius: '4px',
  padding: '6px 12px',
  textAlign: 'left',
  cursor: 'pointer',
  color: '#333',
  fontSize: '13px',
  width: '100%',
}

export default ClippyAssistant