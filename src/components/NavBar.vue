<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <a class="navbar-link" href="#/User">
        <img src="https://i.imgur.com/WwFWS1D.png" />
      </a>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#/User">
          <img class="navbar-icon home" src="https://i.imgur.com/fBVbYGb.png" />
          <span>首頁</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/User/UserSelf">
          <img
            class="navbar-icon user-self"
            src="https://i.imgur.com/feES0o7.png"
          />
          <span>個人資料</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/Setting">
          <img
            class="navbar-icon setting"
            src="https://i.imgur.com/rottgfT.png"
          />
          <span>設定</span>
        </a>
      </li>
      <li class="nav-item sign-out-bottom">
        <a class="nav-link" href="#/Login">
          <img
            class="navbar-icon sign-out"
            src="https://i.imgur.com/trtoBHw.png"
          />
          <span>登出</span>
        </a>
      </li>
    </ul>
    <button class="navbar-button">推文</button>
  </nav>
</template>

<style lang="scss">
@import "../assets/scss/navbar.scss";
</style>
