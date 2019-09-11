<template>
  <div class="article-list">
    <ul>
      <h3 v-if="type == 'latest'">最新消息</h3>
      <h3 v-if="type == 'related'">相關文章</h3>

      <li>
        <router-link to="">
          <div class="title">愛與被愛策展</div>
          <div class="description">我會正走包票呢。文大一地個就爸在以是十可定，式好直氣再爭。邊時理開土了名的汽的是！甚月師：自少代任我要臺現行英的保不鄉花出。史生賽送看和！都在意但然走式發腦雙已下說長最，不常住。</div>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <div class="title">愛與被愛策展</div>
          <div class="description">我會正走包票呢。文大一地個就爸在以是十可定，式好直氣再爭。邊時理開土了名的汽的是！甚月師：自少代任我要臺現行英的保不鄉花出。史生賽送看和！都在意但然走式發腦雙已下說長最，不常住。</div>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <div class="title">愛與被愛策展</div>
          <div class="description">我會正走包票呢。文大一地個就爸在以是十可定，式好直氣再爭。邊時理開土了名的汽的是！甚月師：自少代任我要臺現行英的保不鄉花出。史生賽送看和！都在意但然走式發腦雙已下說長最，不常住。</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style lang="scss">
.article-list {
  margin-bottom: 50px;
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