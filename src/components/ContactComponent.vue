<template>
  <div class="contact" id="contact">
    <div class="container">
      <div class="contact-items">
        <h2 class="contact-items__title">LET’s Get in touch</h2>
        <div class="rectangle"></div>
        <div class="contact-cards">
          <div class="contact-cards-item">
            <img src="../assets/location-logo.png" alt="location-logo" />
            <h2>MEET US IN PERSON</h2>
            <p>
              8776 Juniper Street<br />Unit #204<br />Merriweather, Ontorio<br />Canada
            </p>
          </div>
          <div class="contact-cards-item">
            <img src="../assets/message-logo.png" alt="message-logo" />

            <h2>The traditional way</h2>
            <p>
              Email us<br />contact@minimal.com<br />Contact form<br />Scrolldown
            </p>
          </div>
          <div class="contact-cards-item">
            <img src="../assets/heart-logo.png" alt="heart-logo" />
            <h2>Let’s get social</h2>
            <p class="contact-socials">
              <span>
                <icon class="contact-icon" name="facebook"></icon>
                <span>Facebook</span>
              </span>
              <span>
                <icon class="contact-icon" name="twitter"></icon>
                <span>Twitter</span>
              </span>
              <span>
                <icon class="contact-icon" name="linkedIn"></icon>
                <span>Linkedin</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  padding: 70px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/contact-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.contact-items {
  width: 100%;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
}
.contact-items__title {
  color: #333;
  text-align: center;
  font-family: Montserrat;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 156.522% */
  text-transform: uppercase;
}
.contact-cards {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 45px;
}
.contact-cards-item {
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    object-fit: cover;
  }
  h2 {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    text-transform: uppercase;
    margin-top: 26px;
  }
  p {
    color: #212121;
    text-align: center;
    font-family: Vollkorn;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 129.412% */
    margin-top: 20px;
  }
}

.contact-socials {
  width: 100%;
  margin: 10px auto 0px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  color: #212121;
  font-family: Vollkorn;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 117.647% */
  justify-content: center;
  margin-bottom: 10px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.contact-icon {
  font-size: 17px;
  padding-right: 10px;
}
@media (max-width: 776px) {
  .contact-cards {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .contact-cards-item {
    width: 80%;
  }
}
</style>
