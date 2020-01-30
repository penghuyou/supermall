<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" class="tab-control-item" 
      :key="item.item" 
      :class="{active: currentItem === index}" 
      @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentItem: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentItem = index
        }
    }
}
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        background-color: #fff;
    }

    .tab-control-item {
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
     
    .tab-control-item span {
        padding: 5px;
    }
    .active {
        color: var(--color-high-text);
    }

    .active span {
        border-bottom: 3px solid var(--color-tint);
    }
</style>