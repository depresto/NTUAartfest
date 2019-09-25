<template>
  <section id="article-page" class="default-bg default-page">
    <Navbar></Navbar>

    <div class="container">
      <div class="title-area">
        <h1>{{news.fields.Name}}</h1>
      </div>

      <div class="main">
        <div class="content">
          <img class="feature" :src="news.fields.Image" alt="">

          <div class="text">
            <div v-html="news.fields.Content"></div>
          </div>
        </div>

        <Sidebar :category="news.fields.Type"></Sidebar>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Article/Sidebar.vue'
export default {
  name: "articlepage",
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    news: function () {
      return this.$store.getters['artists/getNewsByID'](this.$route.params.id);
    },
  }
}
</script>

<style lang="scss">
#article-page {
  position: relative;
  .title-area {
    margin: 40px 0;
    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  .main {
    .content, #article-sidebar {
      display: inline-block;
      vertical-align: top;
    }
    .content {
      width: 70%;
      padding-right: 20px;
      img.feature {
        width: 100%;
      }
      .text {
        width: 100%;
        padding: 40px 0;
        white-space: pre-wrap;
        line-height: 1.5rem;
      }
    }
    #article-sidebar {
      width: 30%;
    }
  }
}
@media screen and (max-width: 768px){
  .title-area {
    text-align: center;
  }
  #article-page {
    .main {
      .content {
        width: auto;
        padding-right: 0;
      }
      #article-sidebar {
        width: auto;
        border: none;
        padding-left: 0;
      }
    }
  }
}
</style>