---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<p class="center">
Welcome to the gallery of my games. Click on their images for more info!
</p>

<div class="game-entry">
  <div class="game-title">Graffiti Trials</div>
  <a href="{{ site.url }}{% link games/graffiti-trials.md %}">
    <div class="slideshow-container">
      <img class="framed-img slide fade" src="/assets/img/graffiti-trials/time-trial.png" alt="Time Trial">
      <img class="framed-img slide fade" src="/assets/img/graffiti-trials/parkour.png" alt="Parkour">
      <img class="framed-img slide fade" src="/assets/img/graffiti-trials/friend.png" alt="Friend">
    </div>
  </a>
</div>

<div class="game-entry">
  <div class="game-title">Crabity</div>
  <a href="{{ site.url }}{% link games/crabity.md %}">
    <div class="slideshow-container">
      <!-- <img class="framed-img slide fade" src="/assets/img/crabity-1.jpg" alt="Crabity Screenshot 1">
      <img class="framed-img slide fade" src="/assets/img/crabity-2.jpg" alt="Crabity Screenshot 2">
      <img class="framed-img slide fade" src="/assets/img/crabity-3.jpg" alt="Crabity Screenshot 3"> -->
    </div>
  </a>
</div>

<div class="game-entry">
  <div class="game-title">Glass Room</div>
  <a href="{{ site.url }}{% link games/glassrooms.md %}">
    <div class="slideshow-container">
      <img class="framed-img slide fade" src="/assets/img/glass-rooms/peaceful.png" alt="Peaceful">
      <img class="framed-img slide fade" src="/assets/img/glass-rooms/insane.png" alt="Insane">
      <img class="framed-img slide fade" src="/assets/img/glass-rooms/loading-underworld.png" alt="Loading Underworld">
      <img class="framed-img slide fade" src="/assets/img/glass-rooms/chaos.png" alt="Chaos">
    </div>
  </a>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
      slides.forEach(s => { s.style.position = "absolute"; });
      slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? "1" : "0";
      });
      index = (index + 1) % slides.length;
    }

    // Each slideshow has its own interval for independent cycling
    const interval = 3000 + Math.floor(Math.random() * 2000); // 3-5s per slide randomly
    showSlide(); // show the first slide immediately
    setInterval(showSlide, interval);
  });
});
</script>