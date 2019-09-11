<template>
  <section id="about" class="default-bg default-page">
    <Navbar></Navbar>

    <div id="concept" class="container">
      <div class="deco-bg"><h1>展演理念</h1></div>

      <div class="description">
        <h2>【限時動態 - 超領域國際展 SNAPS OMNI EXPO】</h2>
        <p>「大臺北藝術節」組成內容是大臺北地區領域最多元，內容最充實的藝術節。且當大家參與超領域的國際大展，展中可以看秀、聽歌、飲味、聞香等全人參與的「限時動態」國際大展；第一次觀眾全人全官能的參與於大型策展展演的每件作品中，台灣首次大型策劃展中，讓觀眾全人總體官能連覺的參與，史上第一次！</p>
        <p>今年以「限時動態」為題的當代藝術雙年展系列，邀請國內外藝術家、藝術團隊與專業機構的傑作，也共同推呈暨時尚又文青的實驗劇場 × 創新服裝秀 × 硬邊搖滾、劇構式音樂演出與講唱會延伸座談、飲食文化講座工作坊系列活動，形構超領域的國際大展。</p>
      </div>
    </div>

    <div id="crew" class="container">
      <div class="deco-bg"><h1>策展團隊</h1></div>

      <div class="team">
        <div class="member" v-for="(member, index) in team" :key="index">
          <div class="member-name deco-bg"><span>{{member.fields.Name}}</span></div>
          <div class="member-description">{{member.fields.Position}}</div>
          <div class="member-img">
            <img :src="member.fields.Image" :alt="member.fields.Name">
          </div>
          <div class="member-job">{{member.fields.Title}}</div>
        </div>
      </div>
    </div>

    <div id="sponsor" class="container">
      <div class="deco-bg"><h1>合作單位</h1></div>

      <div class="main-sponsor">
        <img src="/about/sponsor/ntua.png" alt="">
      </div>
      <div class="sponsor-list">
        <div class="sponsor" v-for="(sponsor_url, index) in sponsor_img_urls" :key="index">
          <img :src="`/about/sponsor/${sponsor_url}`" alt="">
        </div>
      </div>
    </div>

    <div class="container">
      <div class="deco-bg"><h1>聯絡我們</h1></div>
    </div>

    <Contactus></Contactus>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Contactus from '@/components/Home/Contactus.vue'
export default {
  name: "about",
  components: {
    Navbar,
    Contactus
  },
  created() {
    this.$store.dispatch('team/getTeamData');
  },
  computed: mapState({
    team: state => state.team.team
  }),
  data() {
    return {
      sponsor_img_urls: [
        "sponsor1.jpg",
        "sponsor2.png",
        "sponsor3.png",
        "sponsor4.png",
        "sponsor5.png",
        "sponsor6.png",
        "sponsor7.png",
        "sponsor8.png",
        "sponsor9.png",
        "sponsor10.jpg",
        "sponsor11.png",
        "sponsor12.jpg",
        "sponsor13.png",
        "sponsor14.png",
      ],
    }
  },
}
</script>

<style lang="scss">
.deco-bg {
  position: relative;
  > * {
    position: relative;
  }
  &::before {
    content: "";
    display: block;
    width: 180px;
    height: 60px;
    position: absolute;
    top: -7px;
    left: 50%;
    margin-left: -90px;
    background: url(/about/text_bg.png) 0 0 no-repeat;
    background-size: contain;
  }
}
#about {
  .container {
    margin-top: 50px;
    margin-bottom: 100px;
    h1 {
      text-align: center;
      font-size: 2rem;
      margin: 40px 0;
    }
    .description {
      max-width: 600px;
      margin: 0 auto;
      h2 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        text-align: center;
      }
      p {
        font-size: 1rem;
        line-height: 1.3rem;
        margin-bottom: 10px;
      }
    }

    img {
      width: 100%;
    }
    .main-sponsor {
      max-width: 400px;
      margin: 0 auto;
    }
    .sponsor-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .sponsor {
        width: 30%;
        text-align: center;
        margin-bottom: 20px; 
        img {
          width: auto;
          max-width: 100%;
          max-height: 100px;
        }
      }
    }
    .team {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .member {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin-bottom: 40px;
        text-align: center;
        .member-name {
          font-size: 1.8rem;
          font-weight: bold;
        }
        .member-description {
          font-weight: 300;
        }
        .member-name, .member-description, .member-img {
          margin-bottom: 10px;
        }
        .member-img {
          height: 150px;
          img {
            width: auto;
            height: 100%;
          }
        }
      }
    }
  }
  #contact-us {
    padding-bottom: 100px;
    .page-title {
      display: none;
    }
  }
}
@media screen and (max-width: 768px){
  #about {
    .container {
      .description {
        h2 {
          font-size: 1.4rem;
          line-height: 1.7rem;
        }
      }
      .sponsor-list {
        .sponsor {
          width: 50%;
        }
      }
      .team {
        .member {
          width: 100%;
          .left-img {
            text-align: center;
          }
          .right-text {
            padding: 10px 20px;
            text-align: center;
          }
        }
      }
    }
    #contact-us {
      padding-bottom: 50px;
    }
  }
}
</style>