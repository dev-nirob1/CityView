<template>
  <section id="hero" class="hero relative">
    <div class="container">
      <div class="content">
        <SubTitle class="bg-secondary text-white">Premium Residences</SubTitle>
        <HeroTitle>
    Crafting <span class="text-secondary">Modern Spaces</span><br />
    for Urban Living
        </HeroTitle>
        <BaseParagraph>
          Elevate your lifestyle at Emerald Heights — where architectural brilliance meets natural tranquility.
        </BaseParagraph>
        <a href="#contact" class="btn bg-primary">Schedule A Visit</a>
      </div>
      <div class="image">
        <BaseImage image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
          alt="hero image" />
      </div>
    </div>
  </section>

</template>
<style scoped>
.hero {
  text-align: center;
  color: var(--white-color);
}

.content .sub-title {
  width: fit-content;
  margin: 0 auto;
  padding: .25rem .5rem;
  margin-bottom: .75rem;
  border-radius: .25rem;
}

.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}
.hero .btn:hover {
  background: var(--secondary-color);
}
@media (min-width: 768px) {
  .hero {
    text-align: left;
    background: rgb(from var(--primary-color) r g b / 3%);
    color: var(--dark-color);
  }

  .container {
    justify-content: flex-start;
  }

  .content {
    max-width: 350px;
  }

  .content .sub-title {
    margin: .5rem 0;
  }

  .content p {
    font-size: 1.25rem;
    margin: .75rem 0;
  }

  .image {
    position: absolute;
    top: 0;
    right: 0;
    left: auto;
    width: 55%;
    height: 100%;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
    overflow: hidden;
  }

  .image::after {
    background: none;
  }
}

@media (min-width: 992px) {
  .content {
    max-width: 50%;
  }
}
</style>
