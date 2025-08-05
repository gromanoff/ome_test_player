import React, { useRef, useState } from 'react';
import OvenPlayer from 'ovenplayer';

const WebRTCPlayer = () => {
    const containerRef = useRef(null);
    const playerRef = useRef(null);
    const [url, setUrl] = useState('');
    const [password, setPassword] = useState('');

    const handleConnect = () => {
        if (playerRef.current) {
            playerRef.current.destroy();
        }
        const config = {
            sources: [{
                type: 'webrtc',
                file: url,
            }],
            webrtc: {
                reuseConnection: false,
                // пароль, если требуется через кастомный header или query
                ...(password && { custom: { password } }),
            },
            autoStart: true,
            mute: false,
            width: '100%',
            height: '480px',
        };
        playerRef.current = OvenPlayer.create(containerRef.current, config);
    };

    return (
        <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
            <h2>OME WebRTC Test Player</h2>
            <div style={{ marginBottom: '0.5rem' }}>
                <input
                    type="text"
                    placeholder="ws://host:port/app/stream/master"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    style={{ width: '80%', padding: '0.5rem' }}
                />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
                <input
                    type="password"
                    placeholder="Пароль (если нужен)"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ width: '80%', padding: '0.5rem' }}
                />
            </div>
            <button onClick={handleConnect} style={{ padding: '0.5rem 1rem' }}>
                Connect
            </button>
            <div ref={containerRef} style={{ marginTop: '1rem' }}></div>
        </div>
    );
};

export default WebRTCPlayer;
