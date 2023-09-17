<template>
  <div class="header">
    <div class="container">
      <nav class="nav-items">
        <div class="nav-item">
          <div class="nav-item-logo">
            <img src="../assets/logo.png" alt="logo" />
            <h2>minimal</h2>
          </div>
        </div>
        <div class="nav-item">
          <ul class="nav-item-list">
            <li><a href="#process">process</a></li>
            <li><a href="#project">projects</a></li>
            <li><a href="#team">team</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 18px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-items {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.nav-item {
  display: flex;
  align-items: center;
}
.nav-item-logo {
  display: flex;
  align-items: center;
  gap: 18px;
  cursor: pointer;
  img {
    width: 65px;
    height: 70px;
  }
  h2 {
    color: #333;
    font-family: Oswald;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px; /* 172.727% */
    text-transform: uppercase;
  }
}
.nav-item-list {
  display: flex;
  justify-content: space-between;
  gap: 34px;
  padding-left: 34px;
  li a {
    color: #404040;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    text-transform: uppercase;
    transition: all 0.3s linear;
    &:hover {
      color: orange;
    }
  }
}

@media (max-width: 567px) {
  .header {
    width: 100%;
  }
  .nav-item-logo {
    display: none;
  }
  .nav-items {
    justify-content: center;
    width: 100%;
  }
  .nav-item-list {
    padding: 0px;
    width: 100%;
    gap: 20px;
  }
}
</style>
