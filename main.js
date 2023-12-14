      // HTML elements
      var audioElement = document.getElementById("audio");
      var autoplayButton = document.getElementById("autoplay");
      var playButton = document.getElementById("play");
      var pauseButton = document.getElementById("pause");
      var stopButton = document.getElementById("stop");
      var muteButton = document.getElementById("mute");
      var previousButton = document.getElementById("previous");
      console.log("🚀 ~ file: index.html:64 ~ previousButton:", previousButton);
      var nextButton = document.getElementById("next");
      console.log("🚀 ~ file: index.html:65 ~ nextButton:", nextButton);

      var rangeVolumeInput = document.getElementById("rangeVolume");
      var rangeTimeInput = document.getElementById("rangeTime");

      var imageElement = document.getElementById("image");
      var trackNameElement = document.getElementById("trackName");
      var artistNameElement = document.getElementById("artistName");

      // Variables
      var trackArray = [
        {
          name: "لا تبكي يا صغيري",
          artist: "رشا رزق",
          img: "./images/لا_تبكي_ياصغيري.png",
          songUrl: "./resources/1.mp3",
        },
        {
          name: "ﺍﻟﺤﺪﻳﻘﺔ ﺍﻟﺴﺮﻳﺔ",
          artist: "هاله الصباغ",
          img: "./images/الحديقة_السرية.png",
          songUrl: "./resources/2.mp3",
        },
        {
          name: "أنتِ الأمان",
          artist: "مينا نور الدين",
          img: "./images/انت_الامان.png",
          songUrl: "./resources/3.mp3",
        },
        {
          name: "عهد الأصدقاء",
          artist: "رشا رزق",
          img: "./images/عهد_الاصدقاء.png",
          songUrl: "./resources/4.mp3",
        },
      ];
      var currentTrack = 0;
      // Initialization
      initialization();

      // Functions
      function initialization() {
        console.log(localStorage.getItem("currentTrack"));
        if (localStorage.getItem("currentTrack") !== null) {
          currentTrack = localStorage.getItem("currentTrack");
        }

        trackNameElement.innerHTML = trackArray[currentTrack].name;
        artistNameElement.innerHTML = trackArray[currentTrack].artist;
        imageElement.setAttribute("src", trackArray[currentTrack].img);
        audioElement.setAttribute("src", trackArray[currentTrack].songUrl);
        if (currentTrack == trackArray.length - 1) nextButton.disabled = true;
        else nextButton.disabled = false;
        if (currentTrack == 0) previousButton.disabled = true;
        else previousButton.disabled = false;
        audioElement.volume = 0.1;
        playAudio();
      }

      function nextAudio() {
        currentTrack++;
        localStorage.setItem("currentTrack", currentTrack);
        initialization();
        console.log(currentTrack);
      }
      function previousAudio() {
        currentTrack--;
        localStorage.setItem("currentTrack", currentTrack);
        initialization();
        console.log(currentTrack);
      }

      function playAudio() {
        audioElement.play();
      }
      function stopAudio() {
        audioElement.load();
        audioElement.pause();
      }
      function pauseAudio() {
        audioElement.pause();
      }
      function autoplayAudio() {
        audioElement.setAttribute("autoplay", "autoplay");
      }
      function muteAudio() {
        audioElement.muted = !audioElement.muted;
      }

      function volumeRangeAudio() {
        audioElement.volume = rangeVolumeInput.value;
      }
      function timeRangeAudio() {
        audioElement.currentTime = rangeTimeInput.value;
      }

      // Events
      autoplayButton.onclick = autoplayAudio;
      playButton.onclick = playAudio;
      pauseButton.onclick = pauseAudio;
      stopButton.onclick = stopAudio;
      muteButton.onclick = muteAudio;
      rangeVolumeInput.oninput = volumeRangeAudio;
      rangeTimeInput.oninput = timeRangeAudio;

      audioElement.addEventListener("durationchange", function () {
        rangeTimeInput.max = audioElement.duration;
      });

      audioElement.addEventListener("timeupdate", function () {
        rangeTimeInput.value = audioElement.currentTime;
      });

      audioElement.addEventListener("volumechange", function () {
        rangeVolumeInput.value = audioElement.volume;
      });

      nextButton.onclick = nextAudio;
      previousButton.onclick = previousAudio;
