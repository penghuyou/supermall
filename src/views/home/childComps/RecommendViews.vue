<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.item" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendViews',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        text-align: center;
        font-size: 16px;
        border-bottom: 5px solid #eee;
    }

    .recommend-item {
        flex: 1;
        margin: 10px 10px 20px 10px;
    }

    .recommend-item a img {
        width: 100%;
        margin-bottom: 10px;
    }
</style>