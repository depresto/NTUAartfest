<template>
  <div class="article-list">
    <ul>
      <h3 v-if="type == 'latest'">最新消息</h3>
      <h3 v-if="type == 'related'">相關文章</h3>

      <li v-for="(item, index) in news_list" :key="index">
        <router-link :to="{ name: 'articlepage', params: { id: item.id } }">
          <div class="title">{{item.fields.Name}}</div>
          <div class="description">
            <div v-html="item.fields.Content"></div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['type', 'category'],
  computed: {
    news_list: function () {
      if (this.type == 'latest') {
        return this.$store.getters['artists/getNewsByType'](undefined);
      } else {
        return this.$store.getters['artists/getNewsByType'](this.category);
      }
    }
  }
}
</script>

<style lang="scss">
.article-list {
  margin-bottom: 50px;
  position: relative;
  ul {
    h3 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 30px;
    }
    li {
      margin-bottom: 25px;
      .title {
        font-size: 1.3rem;
        margin-bottom: 10px;
      }
      .description {
        opacity: 0.8;
        line-height: 1.3rem;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>