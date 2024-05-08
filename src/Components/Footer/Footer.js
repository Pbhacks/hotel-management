import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  document.addEventListener("DOMContentLoaded", function() {
    const musicContainer = document.getElementById("music-container");
    const playButton = document.getElementById("play");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const audio = document.getElementById("audio");
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progress-container");
    const title = document.getElementById("title");
    const cover = document.getElementById("cover");
  });
  useEffect(() => {
    const musicContainer = document.getElementById("music-container");
    const playButton = document.getElementById("play");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const audio = document.getElementById("audio");
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progress-container");
    const title = document.getElementById("title");
    const cover = document.getElementById("cover");

    const songs = ["hey", "summer", "ukulele"];
    let songIndex = 1;
    
    function getSongTitle(song) {
      return song.charAt(0).toUpperCase() + song.slice(1);
    }

    function loadSong(song) {
      title.innerText = getSongTitle(song);
      audio.src = `https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/music/${song}.mp3?raw=true`;
      cover.src = `https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/images/${song}.jpg?raw=true`;
    }

    function pauseSong() {
      musicContainer.classList.remove("play");
      playButton.querySelector("i").classList.remove("fa-pause");
      playButton.querySelector("i").classList.add("fa-play");
      audio.pause();
    }
    function playSong() {
      musicContainer.classList.add("play");
      playButton.querySelector("i").classList.remove("fa-play");
      playButton.querySelector("i").classList.add("fa-pause");
      audio.play();
    }

    function prevSong() {
      songIndex--;
      if (songIndex < 0) songIndex = songs.length - 1;
      loadSong(songs[songIndex]);
      playSong();
    }

    function nextSong() {
      songIndex++;
      if (songIndex > songs.length - 1) songIndex = 0;
      loadSong(songs[songIndex]);
      playSong();
    }

    function updateProgress(e) {
      const { duration, currentTime } = e.target;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
    }

    function setProgress(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    }

    // Event Listeners
    playButton.addEventListener("click", () => {
      const isPlaying = musicContainer.classList.contains("play");
      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    });

    prevButton.addEventListener("click", prevSong);
    nextButton.addEventListener("click", nextSong);

    audio.addEventListener("timeupdate", updateProgress);
    progressContainer.addEventListener("click", setProgress);

    audio.addEventListener("ended", nextSong);

    // Clean up event listeners
    return () => {
      playButton.removeEventListener("click", () => {});
      prevButton.removeEventListener("click", prevSong);
      nextButton.removeEventListener("click", nextSong);
      audio.removeEventListener("timeupdate", updateProgress);
      progressContainer.removeEventListener("click", setProgress);
      audio.removeEventListener("ended", nextSong);
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logos">
            <a href="#home"><img className="hmt" src="assets/logo.jpg" alt="logo" /></a>
          </div>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="btn">Book Now</button>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers & Packages</a></li>
            <li><a href="#">Room Types & Amenities</a></li>
            <li><a href="#">Customer Reviews & Ratings</a></li>
            <li><a href="#">Travel Tips & Guides</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness & Recreation</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li><a href="#">rcop@info.com</a></li>
          </ul>
          <div className="footer__socials">
            <a href="#"><img src="assets/facebook.png" alt="facebook" /></a>
            <a href="#"><img src="assets/instagram.png" alt="instagram" /></a>
            <a href="#"><img src="assets/youtube.png" alt="youtube" /></a>
            <a href="#"><img src="assets/twitter.png" alt="twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 pbHACKS ~ Dr.Priyant, All rights reserved.
      </div>
      <div className="music-container" id="music-container">
        <div className="music-info">
          <h2 id="title" className="title"></h2>
          <div className="progress-container" id="progress-container">
            <div className="progress" id="progress"></div>
          </div>
        </div>
        <audio
          src="https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/music/summer.mp3?raw=true"
          id="audio"
        ></audio>
        <div className="img-container">
          <img
            src="https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/images/summer.jpg?raw=true"
            alt="music-cover"
            id="cover"
          />
        </div>
        <div className="navigation">
          <button id="prev" className="action-btn">
            <i className="fas fa-backward"></i>
          </button>
          <button id="play" className="action-btn action-btn-big">
            <i className="fas fa-play"></i>
          </button>
          <button id="next" className="action-btn">
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
