<template>
  <section class="about">
    <h1 class="heading1">Hey there!</h1>
    <h2 class="heading2">About this site</h2>
    <p class="paragraph">
      This site is my little place on the internet. The name <i class="italics">Nuit</i> means "night" in French. I chose this name because much of my wondering, thinking, and inspiration for building UI happens at night. On this site, you'll find what I'm up to, the things I'm working on, and more. To be honest, I'm not sure what will become of it, but I'll keep at it, adding to it, and seeing where it goes!
    </p>
    <h2 class="heading2">About me</h2>
    <p class="paragraph">
      I'm technically a full-stack engineer, but I lean more toward the frontend. I love building UI, enjoy learning and improving the user experience, and have developed a fascination for building design systems. I work out of Las Vegas, NV, currently working at <a class="link" href="https://slickdeals.net/">Slickdeals</a> as a full-stack engineer. I live with my wife and our little cat, Finn. Outside of coding, I still like to break and build things (engines, bicycles, etc.), but I also love reading, poetry, music, and nature.
    </p>
  </section>
</template>

<style scoped lang="scss">
.about {
  max-width: 600px;
  width: 100%;
  padding: 40px 0;
}

.heading1 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
}

.heading2 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 18px;
}

.paragraph {
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 24px;
}

.paragraph + .paragraph {
  margin-bottom: 16px;
}

.link {
  font-size: 16px;
  font-weight: 400;
  color: rgb(23, 23, 23);
  text-decoration: none;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.1); /* Light background for emphasis */
  padding: 4px 0;

  &:hover {
    text-decoration: underline; /* Add hover effect for links */
  }
}

.italics {
  font-weight: 500;
}

.dark-mode {
  .link {
    color: white;
    background-color: rgba(173, 173, 173, 0.301); /* Light background for emphasis */
  }
}
</style>