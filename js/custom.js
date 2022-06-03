
const toggleButton = document.querySelector('.dark-light');
const sideLeftId = document.querySelector('#sideLeft');
const leftSide = document.querySelector('.left-side');


toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

sideLeftId.addEventListener('click', ()=>{
  leftSide.classList.toggle('ch-dn');
  //leftSide.style.setProperty('display', 'none');
});

const allVideos = document.querySelectorAll('.video');

allVideos.forEach((v) => {
 v.addEventListener('mouseover', () => {
  const video = v.querySelector('video');
  video.play();
 });
 v.addEventListener('mouseleave', () => {
  const video = v.querySelector('video');
  video.pause();
 });
});
