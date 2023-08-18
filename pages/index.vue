<template>
  <div class="flex items-start 2xl:items-center justify-center text-center h-screen">
    <div class="absolute object-center z-50 p-10 w-full xl:w-3/4 2xl:w-3/5">
      <h1 class="font-sans text-4xl sm:text-5xl font-extrabold mb-6">
        Fabio Borges
      </h1>
      <p class="font-sans text-base sm:text-2xl 2xl:text-xl font-medium leading-relaxed">
         A seasoned professional with 20+ years of experience working with <strong>Product Management, Software Development, and UX/UI Designing</strong> in B2B SaaS companies. Currently is Founder and co-CEO of <a href="https://yayforms.com">Yay! Forms</a>, an AI-powered form and survey builder. Helped one of his companies to expand from <strong>1 to 140+ employees</strong> and reach the <strong>top 3 in its market</strong> in Brazil. Later on, <strong>co-founded <a href="https://www.umbler.com/br">Umbler</a></strong>, a fast-growing on-demand cloud hosting platform that has served <strong>250k+ users</strong> since its launch.
      </p>
      <div class="mt-9 flex gap-5">
        <div class="flex-grow" />
        <a
          href="mailto:fabioborges.net@gmail.com"
          class="button--socialmedia"
          title="fabioborges.net@gmail.com"
        >
          <img src="~/assets/images/iconmonstr-email-13.svg" width="48" height="48">
        </a>
        <a
          href="https://www.linkedin.com/in/fabioborgesnet/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--socialmedia"
          title="Linkedin"
        >
          <img src="~/assets/images/iconmonstr-linkedin-4.svg" width="48" height="48">
        </a>
        <a
          href="https://medium.com/@fabioborgesnet"
          target="_blank"
          rel="noopener noreferrer"
          class="button--socialmedia"
          title="Medium"
        >
          <img src="~/assets/images/iconmonstr-medium-4.svg" width="48" height="48">
        </a>
        <a
          href="https://twitter.com/fabioborgesnet"
          target="_blank"
          rel="noopener noreferrer"
          class="button--socialmedia"
          title="Twitter"
        >
          <img src="~/assets/images/iconmonstr-twitter-4.svg" width="48" height="48">
        </a>
        <div class="flex-grow" />
      </div>
    </div>
    <div class="images">
      <div class="bg-lt hidden lg:block" />
      <div class="bg-lb hidden lg:block" />
      <div class="bg-rt hidden lg:block" />
      <div class="bg-rb hidden lg:block" />
      <div class="optimization hidden 2xl:block" />
      <div class="kanban hidden 2xl:block" />
      <div class="roadmap hidden 2xl:block" />
      <div class="canvas hidden 2xl:block" />
      <div class="chart hidden 2xl:block" />
      <div class="matrix hidden 2xl:block" />
      <div class="burndown hidden 2xl:block" />
      <div class="mountains transform origin-bottom-right scale-50 sm:scale-75 md:scale-100" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.button--socialmedia {
  @apply w-12 h-12 flex-grow-0;
}
.images div {
  @apply absolute z-0 bg-contain bg-no-repeat;
}
.bg-lt {
  background: url('~assets/images/bg-lt.png');
  width: 836px;   /*width: 1393px;*/
  height: 770px;   /*height: 1283px;*/
  left: 0;
  top: 0;
}
.bg-lb {
  background: url('~assets/images/bg-lb.png');
  width: 593px;   /*width: 989px;*/
  height: 786px;   /*height: 1311px;*/
  left: 0;
  bottom: 0;
}
.bg-rt {
  background: url('~assets/images/bg-rt.png');
  width: 989px;   /*width: 1648px;*/
  height: 651px;   /*height: 1085px;*/
  right: 0;
  top: 0;
}
.bg-rb {
  background: url('~assets/images/bg-rb.png');
  width: 326px;   /*width: 543px;*/
  height: 747px;   /*height: 1245px;*/
  right: 0;
  bottom: 50%;
}
.optimization {
  background: url('~assets/images/optimization.png');
  width: 214px; /*width: 356px;*/
  height: 286px; /*height: 476px;*/
  left: 100px;
  top: 30%;
}
.kanban {
  background: url('~assets/images/kanban.png');
  width: 431px; /*width: 719px;*/
  height: 401px; /*height: 668px;*/
  right: 40px;
  top: 40px;
}
.roadmap {
  background: url('~assets/images/roadmap.png');
  width: 407px; /*width: 679px;*/
  height: 247px; /*height: 412px;*/
  left: 40px;
  bottom: 40px;
}
.canvas {
  background: url('~assets/images/canvas.png');
  width: 674px; /*width: 1123px;*/
  height: 338px; /*height: 564px;*/
  left: 40px;
  top: 40px;
}
.chart {
  background: url('~assets/images/chart.png');
  width: 192px; /*width: 320px;*/
  height: 175px; /*height: 292px;*/
  left: 38%;
  top: 40px;
}
.matrix {
  background: url('~assets/images/matrix.png');
  width: 346px; /*width: 577px;*/
  height: 157px; /*height: 262px;*/
  right: 450px;
  top: 40px;
}
/* .burndown {
  background: url('~assets/images/burndown.png');
  width: 320px;
  height: 292px;
  right: 40px;
  top: 50%;
} */
.mountains {
  background: url('~assets/images/mountains.png');
  width: 1140px;
  height: 398px;
  right: 0;
  bottom: 0;
}
</style>
