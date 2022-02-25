<template>
  <div class="AdminMainList">
    <div>
      <h6 class="m-3">推文清單</h6>
      <div class="cards" v-for="card in adminMainList" :key="card.id">
        <div class="avatar">
          <img :src="card.avatar" alt="">
        </div>
        <div class="card-content">
          <p>
            {{card.name}} <a href=""><span>@{{card.account}}・{{card.createdAt}}</span></a>
          </p>
          <p>{{card.description}}</p>
        </div>
        <button class="card-button">
          <img :src="icom">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMainList',
  data() {
    return {
      adminMainList: [
        {
          id: 1,
          avatar: 'https://fakeimg.pl/300/',
          account: 'apple',
          name: 'Apple',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
          UserId: 1,
          updatedAt: "3小時",
          createdAt: "3小時"
        },
        {
          id: 2,
          avatar: 'https://fakeimg.pl/300/',
          account: 'apple',
          name: 'Apple',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
          UserId: 2,
          updatedAt: "3小時",
          createdAt: "3小時"
        },
        {
          id: 3,
          avatar: 'https://fakeimg.pl/300/',
          account: 'apple',
          name: 'Apple',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
          UserId: 3,
          updatedAt: "3小時",
          createdAt: "3小時"
        }
      ],
      icom: 'https://i.imgur.com/WilghMR.png'
    }
  }
}
</script>

<style scoped>
  .AdminMainList {
    width: 65%;
    border-left: 1px solid #E6ECF0;
    border-right: 1px solid #E6ECF0;
    margin-right: 10px;
    /* background-color: rgb(238, 236, 234); */
    flex-grow: 1;
  }
  h6 {
    font-weight: 700;
  }
  .cards {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 80px;
    border-top: 1px solid #E6ECF0;
  }
  .avatar {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50%;
  }
  .card-content {
    margin-left: 10px;
  }
  .card-button {
    position: absolute;
    top: 10px;
    right: 5px;
    width: 50px;
  }
</style>