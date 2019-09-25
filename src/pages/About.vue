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

      <div v-for="(type, index) in sponsors['types']" :key="index">
        <div class="deco-bg"><h2>{{type}}</h2></div>

        <div class="sponsor-list">
          <div class="sponsor" v-for="(sponsor, index) in sponsors[type]" :key="index">
            <img :src="sponsor['Image']" :alt="sponsor['Name']">
            <div class="sponsor-name">{{sponsor['Name']}}</div>
          </div>
        </div>  
      </div>
    </div>

    <div id="contact-btn" class="container">
      <button type="button" @click="showModal = true">聯絡我們</button>
    </div>

    <transition name="fade">
      <div class="modal" v-if="showModal" @click="showModal = false">
        <div class="modal-container default-bg" @click="clickModal">
          <div class="container">
            <div class="deco-bg"><h1>聯絡我們</h1></div>
          </div>
          <button @click="showModal = false">x</button>
          <Contactus></Contactus>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Contactus from '@/components/About/Contactus.vue'
export default {
  name: "about",
  components: {
    Navbar,
    Contactus
  },
  created() {
    this.$store.dispatch('team/getTeamData');
    this.$store.dispatch('team/getSponsorData');
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    clickModal(e) {
      if (e.stopPropagation) {e.stopPropagation();}
      else {e.cancelBubble=true;}

      return false;
    }
  },
  computed: {
    ...mapState({
      team: state => state.team.team
    }),
    ...mapGetters({
      sponsors: 'team/getSponsors'
    })
  }
}
</script>

<style lang="scss" scoped>
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
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container {
  justify-content: center;
  width: 600px;
  height: 550px;
  background-color: #fff;
  padding: 40px 0;
  border: 2px solid #fff;
  position: relative;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    background-color: transparent;
    border: none;
    color: #fff;
  }
}
#about {
  .container {
    margin-top: 50px;
    margin-bottom: 100px;
    position: relative;
    z-index: 10;
    h1 {
      text-align: center;
      font-size: 2rem;
      margin: 40px 0;
    }
    h2 {
      text-align: center;
      font-size: 1.6rem;
      margin: 30px 0;
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
      justify-content: center;
      padding-bottom: 50px;
      .sponsor {
        width: 30%;
        text-align: center;
        margin-bottom: 20px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        
        img {
          flex: 0 0 auto;
          object-fit: scale-down;
          width: auto;
          max-width: 200px;
          max-height: 150px;
        }
        .sponsor-name {
          margin-top: 5px;
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
  #contact-btn {
    padding: 100px 0 200px 0;
    margin-bottom: 0;
    text-align: center;
    button {
      font-size: 1.5rem;
      background: transparent;
      color: #fff;
      padding: 15px 40px;
      border-radius: 5px;
      border-width: 2px;
      border-color: #fff;
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
          img {
            width: 100%;
          }
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