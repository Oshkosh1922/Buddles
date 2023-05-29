const playVideoBtn = document.getElementById("play-video-btn");
const backgroundVideo = document.getElementById("background-video");

playVideoBtn.addEventListener("click", () => {
  playVideoBtn.style.display = "none"; // Hide the play button
  backgroundVideo.play(); // Start video playback
});

const generateNumberBtn = document.getElementById("generate-number-btn");
const randomNumberContainer = document.getElementById("random-number-container");
const tweetDialog = document.getElementById("tweetDialog");

generateNumberBtn.addEventListener("click", () => {
  // Hide the Button of Fate
  generateNumberBtn.style.display = "none";

  const randomNum = Math.floor(Math.random() * 10000000) + 1;
  randomNumberContainer.innerHTML = '';

  randomNum.toString().split('').forEach((digit) => {
    const digitBox = document.createElement('span');
    digitBox.classList.add('digit-box');
    digitBox.textContent = digit;
    randomNumberContainer.appendChild(digitBox);
  });

  randomNumberContainer.querySelectorAll('.digit-box').forEach((digitBox) => {
    digitBox.style.color = "#7c1eff";

    // Pop up animation
    digitBox.style.animation = "pop-up 1s ease-in-out forwards";

    // Glowing animation
    setTimeout(() => {
      digitBox.style.animation = "glow 2s ease-in-out infinite";
    }, 1000);
  });

  // Create and configure the Twitter share button
  tweetDialog.innerHTML = `
    <div style="background-color: darkblue; padding: 10px; border-radius: 5px; text-align: center;">
      <p style="font-weight: bold; color: orange; margin: 0;">Please Share your number on Twitter to qualify</p>
    </div>
    <div style="margin-top: 10px;"></div>
    <button id="shareOnTwitterBtn" class="btn btn-primary">Share on Twitter</button>
  `;

  // Center the "Share on Twitter" button
  const shareOnTwitterBtn = document.getElementById("shareOnTwitterBtn");
  shareOnTwitterBtn.style.display = "block";
  shareOnTwitterBtn.style.margin = "0 auto";

  shareOnTwitterBtn.addEventListener("click", () => {
    const tweetText = encodeURIComponent(`Check out buddles available https://magiceden.io/marketplace/buddles --- Visit buddles on twitter https://twitter.com/Buddles_co --- #BuddlesLottery --- My Lottery Number: ${randomNum}`);
    const tweetURL = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetURL, '_blank');
  });
});
