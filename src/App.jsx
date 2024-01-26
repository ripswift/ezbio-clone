import React, { useState, useEffect } from 'react';
import './App.css';
import pfp from './images/pfp.jpg';
import view from './images/viewW.svg';
import twitter from './images/x.png';
import insta from './images/insta.png';
import yt from './images/yt.png';
import discord from './images/discord.png';
import cover from './images/cover.png';
import wokeup from './song/wokeup.mp3';
import bg from './videos/bg.mp4';
import git from './images/git2.png';
function App() {
  const [viewCount, setViewCount] = useState(2852);
  const [currentTime, setCurrentTime] = useState(0);
  const maxTime = 128;
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isOverlayClicked, setIsOverlayClicked] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [cssLabel, setCssLabel] = useState('Copy BTC Address');
  const [cssLabel1, setCssLabel1] = useState('Copy LTC Address');
  useEffect(() => {
    fetch('/increment-view')
      .then(response => response.json())
      .then(data => setViewCount(data.viewCount))
      .catch(error => console.error('Error:', error));
  }, []);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return formattedTime;
  }

  useEffect(() => {
    const audioElement = document.getElementById('audio');

    if (!isPlaying && isOverlayClicked) {
      audioPlay();
      setIsPlaying(true);
    }

    const interval = setInterval(() => {
      const elapsedTime = Math.round(audioElement.currentTime);
      setCurrentTime(elapsedTime);

      if (elapsedTime >= maxTime) {
        audioElement.currentTime = 0;
        setCurrentTime(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, isOverlayClicked, maxTime]);

  const handleCopyAddress = (address, label) => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopyStatus('Copied');
        setCssLabel('Copied');
        setTimeout(() => {
          setCopyStatus('');
          setCssLabel('Copy BTC Address');
        }, 2000);
      })
      .catch(error => console.error('Error copying address to clipboard:', error));
  };
  
  const handleCopyAddress1 = (address, label) => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopyStatus('Copied');
        setCssLabel1('Copied');
        setTimeout(() => {
          setCopyStatus('');
          setCssLabel1('Copy LTC Address');
        }, 2000);
      })
      .catch(error => console.error('Error copying address to clipboard:', error));
  };
  
  

  function audioPlay() {
    var audio = document.getElementById('audio');
    audio.volume = 0.5;
    audio.play();
  }

  const handlePlayPause = () => {
    const audioElement = document.getElementById('audio');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    setIsOverlayClicked(true);
    audioPlay();
  };

  return (
    
    
    <div className='app-container'>
        {}
    <video autoPlay loop muted className='video-background'>
      <source src={bg} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
      

      
      
      {}
      {showOverlay && (
        <div className='overlay' onClick={handleOverlayClick}>
          <p1 className='click'>Click Anywhere</p1>
        </div>
      )}

      <div className='main-container'>
        <img src={view} className='view' alt="View Icon" />
        <p1 className='num'>{viewCount}</p1>
        <img src={pfp} className='pfp' alt="Profile Picture" />
        <h1 className='name'>shadow</h1>
        <h1 className='bio'>This User has no Description.</h1>

        <div className='links'>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className='link1' alt="Twitter" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={git} className='link2' alt="GitHub" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} className='link3' alt="Instagram" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={yt} className='link4' alt="YouTube" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discord} className='link5' alt="Discord" />
          </a>
        </div>
        <div className='div1'></div>

        <div className='song'>
          <div className='progress-bar-container'>
            <div className='progress-bar' style={{ width: `${(currentTime / maxTime) * 100}%` }} />
          </div>

          <a href='https://open.spotify.com/track/3jM9VzF2d1AMUyTD8sTmPu?si=0276064ed0814fdf&nd=1&dlsi=f95a64e213a049ce' target='_blank' rel='noopener noreferrer'>
          <img src={cover} className='songcover' alt='' />
          </a>

       

        

          <div className='songinfo'>
            <p1 className='songtitle'>Wokeup</p1>
            <p1 className='artist'>by Kankan</p1>
            <p1 className='album' href>on Wokeup</p1>
          </div>
          <div className='time-label'>
            {formatTime(currentTime)} / {formatTime(maxTime)}
          </div>

          {}
          <audio id='audio' src={wokeup} />
        </div>

        <div className='div2'></div>

        <button
  className='button2'
  onClick={() => handleCopyAddress1('ltc1qwu5kth29x3ev63fuex4ln873kdwdxdnvw0fvdq', 'LTC Address')}
  data-label={cssLabel1}
>
  LTC
</button>

<button
  className='button1'
  onClick={() => handleCopyAddress('bc1qmdde26zln58kprcz2fxf7980ad9jfnpxa7ev4p', 'BTC Address')}
  data-label={cssLabel}
>
  BTC
</button>




      </div>
    </div>
  );
}

export default App;
