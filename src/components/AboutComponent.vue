<template>
  <div class="about" id="about">
    <div class="top">
      <div class="container">
        <h1>Making brands stand out</h1>
        <h1>is our obsession</h1>
        <div class="rectangle"></div>
        <p>Let us help your brand stand out.</p>
        <img src="../assets/cross-img.png" alt="" />
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <p>
          Minimalist is a full-service digital creative agency located in
          Ontorio Canada. We focus on design, consulting, technology, and
          photography. We’ve been building unique digital products, platforms,
          and experiences for the past 6 years. Let us help your company grow.
        </p>
        <button>Get in Touch</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 600px;
}
.top {
  width: 100%;
  height: 391px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("../assets/home-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  .container {
    h1 {
      color: #fff;
      text-align: center;
      font-family: Montserrat;
      font-size: 43px;
      font-style: normal;
      font-weight: 400;
      line-height: 55px; /* 127.907% */
      text-transform: uppercase;
    }
    p {
      color: rgba(255, 255, 255, 0.81);
      text-align: center;
      font-family: Vollkorn;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 133.333% */
      margin-top: 25px;
    }
    img {
      position: absolute;
      bottom: -26px;
      left: calc(50% - 26px);
      width: 52px;
      height: 52px;
      flex-shrink: 0;
    }
    .rectangle {
      width: 80px;
      height: 2px;
      flex-shrink: 0;
      background: #fff;
      margin: 0px auto;
      margin-top: 28px;
    }
  }
}
.bottom {
  width: 100%;
  height: 289px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fefec9;
  .container {
    p {
      color: #47474f;
      text-align: center;
      font-family: Vollkorn;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 138.889% */
    }
    button {
      color: #47474f;
      text-align: center;
      font-family: Vollkorn;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
      padding: 15px 35px;
      background: transparent;
      border: 1px solid #47474f;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      margin-top: 40px;
    }
  }
}
@media (max-width: 992px) {
  .top .container h1 {
    font-size: 36px;
    width: 80%;
    margin: 0 auto;
  }
}
@media (max-width: 776px) {
  .top .container h1 {
    font-size: 32px;
    width: 70%;
    margin: 0 auto;
  }
}
@media (max-width: 567px) {
  .top .container h1 {
    font-size: 20px;
    width: 70%;
    margin: 0 auto;
  }
  .bottom .container p {
    font-size: 16px;
    margin-top: 50px;
  }
  .bottom .container button {
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
</style>
