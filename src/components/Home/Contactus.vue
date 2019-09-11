<template>
  <div id="contact-us">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>聯絡我們</h1>
    </div>
    
    <div class="container">
      <form class="form" method="post" @mousedown="onFormClick" action="https://docs.google.com/forms/d/e/1FAIpQLSfGYIUdDWx-TeP46fv6XERku8hT1ap1JzfM4t5BKR--t5c0vg/formResponse">
        <div class="input-box">
          <input name="entry.410977413" required type="text" placeholder="姓名">
          <label for="entry.410977413">姓名</label>
        </div>
        <div class="input-box">
          <input name="entry.14291184" type="tel" placeholder="電話">
          <label for="entry.14291184">電話</label>
        </div>
        <div class="input-box">
          <input name="entry.1048412413" required type="email" placeholder="電子郵件">
          <label for="entry.1048412413">電子郵件</label>
        </div>
        <div class="input-box">
          <textarea name="entry.1272583524" required type="text" rows="3" placeholder="訊息"></textarea>
          <label for="entry.1272583524">訊息</label>
        </div>
        <input type="submit" value="送出">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onFormClick: function (e) {
      if (e.stopPropagation) {e.stopPropagation();}
      else {e.cancelBubble=true;}

      return false;
    }
  }
}
</script>

<style lang="scss">
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

  #contact-us {
    padding-bottom: 150px;
    .page-title {
      padding-bottom: 80px;
    }
    .container {
      display: flex;
      justify-content: center;
      .form {
        z-index: 2000;
        width: 300px;
        .input-box {
          position: relative;
          margin-bottom: 20px;

          label {
            position: absolute;
            left: 1px;
            top: 2px;
            // border-top: 1px transparent solid;

            color: transparent;
            font-weight: bold;
            pointer-events: none;
          }
          // label:after {
          //   content: "｜";
          //   color: #000;
          //   animation: blink-animation 1s steps(4, start) infinite;
          //   -webkit-animation: blink-animation 1s steps(4, start) infinite;
          // }
        }
        input, textarea {
          background-color: transparent;
          border-width: 0 0 1px 0;
          border-color: #000;

          width: 100%;
          font-size: 1rem;
          line-height: 1.2rem;

          &::placeholder {
            color: #000;
          }
          &:focus::placeholder {
            color: #666;
          }
          &:focus +label {
            display: none;
          }
        }
        input[type="submit"] {
          border: none;
          text-align: center;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    #contact-us {
      .form {
        width: 80%!important;
      }
    }
  }
</style>