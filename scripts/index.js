import { radioPlayerInit } from "./radioPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

const deactivationPlayer = () => {
  playerBtn.forEach((item) => {
    temp.style.display = "none";
    item.classList.remove("active");

    musicPlayerInit.stop();
    radioPlayerInit.stop();
    videoPlayerInit.stop();

  });
  playerBlock.forEach((item) => {
    item.classList.remove("active");
  });
};

playerBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    deactivationPlayer();
    btn.classList.add("active");
    playerBlock[i].classList.add("active");
  });
});

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();
