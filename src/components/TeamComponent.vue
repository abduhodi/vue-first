<template>
  <div class="team" id="team">
    <div class="container">
      <div class="team-items">
        <h2 class="team-items__title">our team</h2>
        <div class="rectangle"></div>
        <div class="team-cards">
          <div class="team-cards-item">
            <img src="../assets/team-img1.jpg" alt="team1" />
            <div class="team-card-body">
              <h2>Ron Swanson</h2>
              <p>Founder</p>
              <p class="team-socials">
                <icon name="twitter"></icon>
                <icon name="linkedIn"></icon>
                <icon name="mail"></icon>
              </p>
            </div>
          </div>
          <div class="team-cards-item">
            <img src="../assets/team-img2.jpg" alt="team2" />
            <div class="team-card-body">
              <h2>Julia Depish</h2>
              <p>Marketing</p>
              <p class="team-socials">
                <icon name="twitter"></icon>
                <icon name="linkedIn"></icon>
                <icon name="mail"></icon>
              </p>
            </div>
          </div>
          <div class="team-cards-item">
            <img src="../assets/team-img3.jpg" alt="team3" />
            <div class="team-card-body">
              <h2>Danny Devry</h2>
              <p>Designer</p>
              <p class="team-socials">
                <icon name="instagram"></icon>
                <icon name="twitter"></icon>
                <icon name="mail"></icon>
              </p>
            </div>
          </div>
          <div class="team-cards-item">
            <img src="../assets/team-img4.jpg" alt="team4" />
            <div class="team-card-body">
              <h2>Lisa Smith</h2>
              <p>Developer</p>
              <p class="team-socials">
                <icon name="facebook"></icon>
                <icon name="twitter"></icon>
                <icon name="mail"></icon>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.team {
  width: 100%;
  padding: 70px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.team-items {
  width: 100%;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
}
.team-items__title {
  color: #333;
  text-align: center;
  font-family: Montserrat;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 156.522% */
  text-transform: uppercase;
}
.team-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 45px;
}
.team-cards-item {
  width: calc(25% - 15px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s linear;
  img {
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.team-card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  margin-top: 20px;
  h2 {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    text-transform: uppercase;
  }
  p {
    color: #333;
    text-align: center;
    font-family: Vollkorn;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
}
.team-socials {
  width: 100%;
  margin: 10px auto 0px;
  display: flex;
  gap: 20px;
  font-size: 14px;
  justify-content: center;
  margin-bottom: 10px;
}

@media (max-width: 776px) {
  .team-cards-item {
    width: calc(50% - 10px);
  }
}
@media (max-width: 567px) {
  .team-cards-item {
    width: 90%;
    margin: 0px auto;
  }
}
</style>
