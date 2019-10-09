<template>
  <section id="schedule" class="section">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>時程表</h1>
    </div>

    <transition name="fade">
      <div class="forcast" v-if="event">
        <div
          class="active-img"
          :style="{ 'background-image': 'url(' + bg + ')' }"
        >
        </div>
        <a v-if="link != ''" :href="link" class="btn">前往報名</a>
        <div><h2>{{event}}</h2></div>
        <div v-if="place">地點 {{place}}</div>
        <div v-if="time">時間  {{time}}</div>
        <div v-if="intro" class="intro">{{intro}}</div>
        <div @click="close" class="close">x</div>
      </div>
    </transition>

    <div class="container calendar" @mousedown="onFormClick">
      <FullCalendar v-responsive.sm.xs.md
                    :header="{ 
                      left:   'prev',
                      center: 'title',
                      right:  'next'}"
                    :events="events"
                    @eventClick="eventClick"
                    :plugins="calendarPlugins"
                    defaultView="listMonth"
                    @dayClick="dayClick" 
                    locale="en" 
                    firstDay="1"></FullCalendar>
      <FullCalendar v-responsive.lg.xl 
                    :header="{ 
                      left:   'prev',
                      center: 'title',
                      right:  'next'}"
                    :events="events"
                    @eventClick="eventClick"
                    :plugins="calendarPlugins"
                    defaultView="dayGridMonth"
                    @dayClick="dayClick" 
                    locale="en" 
                    firstDay="1"></FullCalendar>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import FullCalendar from '@fullcalendar/vue'
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  computed: {
    ...mapGetters({
      events: 'artists/getCallendarEvent'
    })
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin, listPlugin ],
      event: '',
      place: '',
      time: '',
      bg: '',
      link: '',
      intro: '',
    };
  },
  extends: {
    components: {
      FullCalendar,
    },
  },
  methods: {
    onFormClick: function (e) {
      if (e.stopPropagation) {e.stopPropagation();}
      else {e.cancelBubble=true;}

      return false;
    },
    eventClick(e) {
      let cur_event = this.events.find(event => event.id == e.event.id);
      this.event =  cur_event.title;
      this.place = cur_event.place;
      this.time = cur_event.time;
      this.bg = cur_event.bg;
      this.link = cur_event.link;
      this.intro = cur_event.intro;
    },
    dayClick() {
      this.event = '';
    },
    close() {
      this.event = null;
    },
    // esc() {
    //   if (event.key === 'Enter') {
    //     console.log('enter key was pressed!');
    //   }
    // },
  },
};
</script>


<style lang="scss">
  #schedule {
    .page-title {
      padding-bottom: 50px;
    }
    .container {
      width: 90%;
      margin: 0 auto;
    }
  }
  .section {
    // height: 600px;
    width: 100%;
    margin-top: 60px;
    position: relative;
  }
  .forcast {
    position: absolute;
    top: 40%;
    width: 400px;
    height: auto;
    min-height: 240px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #E4EDEE;
    z-index: 3;
    text-align: left;
    padding: 20px;
    padding-left: 180px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.18);
    div {
      line-height: 1.5rem;
    }
    .intro {
      white-space: pre-line;
    }
  }
  .active-img {
    width: 140px;
    height: 140px;
    position: absolute;
    left: 20px;
    top: 20px;
    background-size: cover;
    background-position: center center;
  }
  .btn {
    background: #fff;
    padding: 0.4em 0.5em;
    display: inline-block;
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: 120px;
    text-align: center;
    cursor: pointer;
  }
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @media only screen and (max-width: 768px) {
    .forcast {
      width: 320px;
    }
    #schedule {
      .container {
        width: 100%;
        .full-calendar-header .header-center {
          font-size: 1.2rem;
        }
        .full-calendar-header .header-center .prev-month {
          left: 0;
        }
        .full-calendar-header .header-center .next-month {
          right: 0;
        }
      }
    }
  }
</style>

<style lang="scss">
  .purple {
    color: #A40D5E !important;
  }
  .darkgreen {
    color: #00A29A !important;
  }
  .orange {
    color: #F39800 !important;
  }
  .green {
    color: #15AE67 !important;
  }
  .blue {
    color: #056FB8 !important;
  }
  .red {
    color: #C30F23 !important;
  }
  .persian {
    color: #3922DD !important;
  }
  .crete {
    color: #567A29 !important;
  }
  .turmeric {
    color: #CFB94A !important;
  }
  .comp-full-calendar {
    max-width: 1280px !important;
  }
  .more-events {
    z-index: 2 !important;
  }
  .full-calendar-body 
    .dates
      .more-events
        .more-body {
          background: #fff;
        }
</style>