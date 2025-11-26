---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<p class="center">
Welcome to the gallery of my games. Click on their images for more info!
</p>

<div class="game-entry">
  <h2><b>Graffiti Trials</b></h2>
  <a href="{{ site.url }}{% link games/graffiti-trials.md %}">
    <img class="bordered" src="/assets/img/graffiti-trials/time-trial.png">
  </a>
  <a href="{{ site.url }}{% link games/graffiti-trials.md %}">
    <img class="bordered" src="/assets/img/graffiti-trials/friend.png">
  </a>
  <a href="{{ site.url }}{% link games/graffiti-trials.md %}">
    <img class="bordered" src="/assets/img/graffiti-trials/parkour.png">
  </a>
</div>

<div class="game-entry">
  <h2><b>Crabity</b></h2>
  <a href="{{ site.url }}{% link games/crabity.md %}">
    <img class="bordered" src="/assets/img/crabity/co-op.jpg">
  </a>
  <a href="{{ site.url }}{% link games/crabity.md %}">
    <img class="bordered" src="/assets/img/crabity/level-map.jpg">
  </a>
  <a href="{{ site.url }}{% link games/crabity.md %}">
    <img class="bordered" src="/assets/img/crabity/time-trial.jpg">
  </a>
</div>

<div class="game-entry">
  <h2><b>Glass Room</b></h2>
  <a href="{{ site.url }}{% link games/glassrooms.md %}">
    <img class="bordered" src="/assets/img/glass-rooms/chaos.png">
  </a>
  <a href="{{ site.url }}{% link games/glassrooms.md %}">
    <img class="bordered" src="/assets/img/glass-rooms/insane.png">
  </a>
  <a href="{{ site.url }}{% link games/glassrooms.md %}">
    <img class="bordered" src="/assets/img/glass-rooms/loading-underworld.png">
  </a>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const entries = document.querySelectorAll(".game-entry");

  entries.forEach(entry => {
    const imgs = entry.querySelectorAll("img");
    if (imgs.length <= 1) {
      if (imgs.length === 1) {
        imgs[0].style.display = "block"; // Make sure it's visible
      }
      return; // No slideshow needed
    }

    let current = 0;
    imgs.forEach(img => img.style.display = "none");
    imgs[0].style.display = "block";

    const interval = 2000 + Math.random() * 3000; // random between 2-3s 

    setInterval(() => {
      imgs[current].style.display = "none";
      current = (current + 1) % imgs.length;
      imgs[current].style.display = "block";
    }, interval);
  });
});
</script>