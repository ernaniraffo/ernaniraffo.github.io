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
  <div class="slideshow-container">
    <a href="{{ site.url }}{% link games/graffiti-trials.md %}">
      <img class="framed-img slide" src="/assets/img/graffiti-trials/time-trial.png" alt="Time Trial">
    </a>
    <a href="{{ site.url }}{% link games/graffiti-trials.md %}">
      <img class="framed-img slide" src="/assets/img/graffiti-trials/parkour.png" alt="Parkour">
    </a>
    <a href="{{ site.url }}{% link games/graffiti-trials.md %}">
      <img class="framed-img slide" src="/assets/img/graffiti-trials/friend.png" alt="Friend">
    </a>
  </div>
</div>

<div class="game-entry">
  <div class="game-title">Crabity</div>
  <div class="slideshow-container">
    <a href="{{ site.url }}{% link games/crabity.md %}">
      <img class="framed-img slide" src="/assets/img/crabity/co-op.jpg" alt="Co-op">
    </a>
    <a href="{{ site.url }}{% link games/crabity.md %}">
      <img class="framed-img slide" src="/assets/img/crabity/level-map.jpg" alt="Level Map">
    </a>
    <a href="{{ site.url }}{% link games/crabity.md %}">
      <img class="framed-img slide" src="/assets/img/crabity/time-trial.jpg" alt="Time Trial">
    </a>
  </div>
</div>

<div class="game-entry">
  <div class="game-title">Glass Room</div>
  <div class="slideshow-container">
    <a href="{{ site.url }}{% link games/glassrooms.md %}">
      <img class="framed-img slide" src="/assets/img/glass-rooms/peaceful.png" alt="Peaceful">
    </a>
    <a href="{{ site.url }}{% link games/glassrooms.md %}">
      <img class="framed-img slide" src="/assets/img/glass-rooms/insane.png" alt="Insane">
    </a>
    <a href="{{ site.url }}{% link games/glassrooms.md %}">
      <img class="framed-img slide" src="/assets/img/glass-rooms/loading-underworld.png" alt="Loading Underworld">
    </a>
    <a href="{{ site.url }}{% link games/glassrooms.md %}">
      <img class="framed-img slide" src="/assets/img/glass-rooms/chaos.png" alt="Chaos">
    </a>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.slide');
    let index = 0;

    // Set all slides' positions once
    slides.forEach(s => { s.style.position = "absolute"; });

    // Show the first slide immediately
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? "1" : "0";
    });

    // Function to schedule the next slide with a random interval
    function scheduleNextSlide() {
      const interval = 3000 + Math.floor(Math.random() * 2000); // 3-5s per slide
      setTimeout(() => {
        // Move to the next slide
        index = (index + 1) % slides.length;
        slides.forEach((slide, i) => {
          slide.style.opacity = (i === index) ? "1" : "0";
        });

        // Schedule the following slide
        scheduleNextSlide();
      }, interval);
    }

    // Start cycling with a small random initial delay
    const initialDelay = Math.floor(Math.random() * 2000);
    setTimeout(scheduleNextSlide, initialDelay);
  });
});
</script>