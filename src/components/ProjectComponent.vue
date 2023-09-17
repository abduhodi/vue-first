<template>
  <div class="project" id="project">
    <div class="container">
      <div class="project-items">
        <h2>Recent projects</h2>
        <div class="rectangle"></div>
        <div class="project-cards">
          <div class="project-cards__item">
            <img src="../assets/project-img1.jpg" alt="project1" />
            <div class="project-card-body">
              <h3>woods</h3>
              <p>Photography</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img2.jpg" alt="project2" />
            <div class="project-card-body">
              <h3>path</h3>
              <p>path</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img3.jpg" alt="project3" />
            <div class="project-card-body">
              <h3>darkness</h3>
              <p>Website</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img4.jpg" alt="project4" />
            <div class="project-card-body">
              <h3>waves</h3>
              <p>Photography</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img5.jpg" alt="project5" />
            <div class="project-card-body">
              <h3>drops</h3>
              <p>Website</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img6.jpg" alt="project6" />
            <div class="project-card-body">
              <h3>ocean</h3>
              <p>Website</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img7.jpg" alt="project7" />
            <div class="project-card-body">
              <h3>town</h3>
              <p>Website</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img8.jpg" alt="project8" />
            <div class="project-card-body">
              <h3>mountain</h3>
              <p>Website</p>
            </div>
          </div>
          <div class="project-cards__item">
            <img src="../assets/project-img9.jpg" alt="project9" />
            <div class="project-card-body">
              <h3>camera</h3>
              <p>Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.project {
  width: 100%;
  padding: 70px;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
}
.project-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  h2 {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; /* 156.522% */
    text-transform: uppercase;
  }
}
.rectangle {
  width: 80px;
  height: 2px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.09);
  margin: 0 auto;
}
.project-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
.project-cards__item {
  width: calc(33% - 11px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.2s linear;
  div {
    width: 100%;
    height: 80px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.project-card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  h3 {
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
@media (max-width: 992px) {
  .project-cards__item {
    width: calc(33% - 12px);
  }
}
@media (max-width: 776px) {
  .project-cards__item {
    width: calc(50% - 11px);
    margin: 0 auto;
  }
}
@media (max-width: 567px) {
  .project {
    padding: 0px;
    padding-top: 40px;
  }
  .project-cards__item {
    width: 80%;
    margin: 0 auto;
  }
  .project-cards {
    margin-bottom: 40px;
  }
}
</style>
