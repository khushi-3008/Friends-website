Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };

    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };

    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      };

    }
  },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});



const app = new Vue({
  el: '#app'
});

var phoebe_card = document.getElementById('phoebe_card');
	var phoebe_audio = document.getElementById('phoebe_audio');
	phoebe_card.onmouseover= function(){
		phoebe_audio.play();
	}
	phoebe_card.onmouseout= function(){
		phoebe_audio.pause();
	}    

  var monica_card = document.getElementById('monica_card');
	var monica_audio = document.getElementById('monica_audio');
	monica_card.onmouseover= function(){
		monica_audio.play();
	}
	monica_card.onmouseout= function(){
		monica_audio.pause();
	}    

  var rachel_card = document.getElementById('rachel_card');
	var rachel_audio = document.getElementById('rachel_audio');
	rachel_card.onmouseover= function(){
		rachel_audio.play();
	}
	rachel_card.onmouseout= function(){
		rachel_audio.pause();
	}    

  var ross_card = document.getElementById('ross_card');
	var ross_audio = document.getElementById('ross_audio');
	ross_card.onmouseover= function(){
		ross_audio.play();
	}
	ross_card.onmouseout= function(){
		ross_audio.pause();
	} 

  var joey_card = document.getElementById('joey_card');
	var joey_audio = document.getElementById('joey_audio');
	joey_card.onmouseover= function(){
		joey_audio.play();
	}
	joey_card.onmouseout= function(){
		joey_audio.pause();
	} 

  

  var chandler_card = document.getElementById('chandler_card');
	var chandler_audio = document.getElementById('chandler_audio');
	chandler_card.onmouseover= function(){
		chandler_audio.play();
	}
	chandler_card.onmouseout= function(){
		chandler_audio.pause();
	} 

