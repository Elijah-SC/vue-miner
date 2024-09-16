<script setup>
import { AppState } from './AppState.js';

const totalCheese = computed(AppState.totalCheese)

function MineCheese() {
  AppState.totalCheese++
}
</script>

<template>

  <body class="container-fluid bg-dark text-light">
    <h1 class="text-center">Vue Miner</h1>
    <div class="d-flex justify-content-around">
      <img @click="MineCheese" role="button"
        src="https://purepng.com/public/uploads/large/purepng.com-moonmoonastronomical-bodyfifth-largest-natural-satellitenatural-satellitemoon-light-1411527066942eq0mo.png"
        alt="Moon" class="img-fluid moon">
    </div>

    <article class="row justify-content-around">

      <section class="col-6">

        <div class="row text-light  align-items-end">

          <div class="col-4 bg-warning-darker p-3 rounded">
            <h3><i class="mdi mdi-cursor-default-click">+<span></span></i></h3>
          </div>
          <div class="col-4 bg-warning p-3 rounded">
            <h1><i class="mdi mdi-cheese"><span>{{ totalCheese }}</span></i></h1>
          </div>
          <div class="col-4 bg-warning-darker p-3 rounded">
            <h3><i class="mdi mdi-timer">+<span></span></i></h3>
          </div>
        </div>
      </section>

    </article>

    <article class="row bg-warning justify-content-around">

      <section class="col-lg-5 rounded bg-warning-darker m-3 p-3">
        <div class="row">
          <div class="col-6">
            <p>Click Upgrades</p>

            <sub-section class="row justify-content-between">

              <div class="col-2">
                <button class="fw-bold text-light text-start btn btn-info up-btn m-1">
                  50
                </button>

              </div>

              <div class="col-9 text-end">
                <span> Buy Pickaxe +5</span>
              </div>

              <div class="col-2">

                <div class="fw-bold text-light text-start btn btn-info up-btn m-1">300
                </div>

              </div>

              <div class="col-9 text-end">

                <span>Buy Drill + 20</span>

              </div>


            </sub-section>

          </div>


          <div class="col-6">

            <p>Automatic Upgrades</p>
            <sub-section class="row justify-content-between">

              <div class="col-2">
                <div class="fw-bold text-light text-start btn btn-danger up-btn m-1">
                  1000</div>

              </div>

              <div class="col-9 text-end">
                <span> Buy rover +10/3s</span>

              </div>

              <div class="col-2">
                <div class="fw-bold text-light text-start btn btn-danger up-btn m-1">
                  50,000</div>

              </div>

              <div class="col-9 text-end">
                <span>Buy Space Station +100/3s</span>
              </div>
            </sub-section>
          </div>
        </div>
      </section>







      <section class="col-lg-5 rounded bg-warning-darker m-3 p-3">

        <div class="row">
          <div class="col-md-6">
            <p>Click Stats</p>
            <div class="">
              <button>0</button>
              <span class="stats-width">Pickaxe</span> <i class="mdi mdi-arrow-right-bold-box-outline stats-icons"></i>
              <button id="total-pickaxe-bonus" class="btn btn-outline-light m-1 text-end">0</button>
            </div>
            <div class="text-start">
              <button>0</button>
              <span class="stats-width">Drill</span> <i class="mdi mdi-arrow-right-bold-box-outline stats-icons"></i>
              <button id="total-drill-bonus" class="btn btn-outline-light m-1 text-end">0</button>
            </div>
          </div>
          <div class="col-md-6">
            <p>Automatic Stats</p>
            <div class="">
              <button class="btn btn-outline-light m-1">0</button>
              <span class="stats-width">Rover</span> <i class="mdi mdi-timer stats-icons"></i>
              <button id='auto-rover-bonus' class="btn btn-outline-light m-1 text-end">0</button>
            </div>
            <div class="text-start">
              <button class="btn btn-outline-light m-1">0</button>
              <span class="stats-width">Space Station</span> <i class="mdi mdi-timer stats-icons"></i>
              <button class="btn btn-outline-light m-1 text-end">0</button>
            </div>
          </div>
        </div>

      </section>




    </article>
  </body>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

body {
  height: 100vh;
}

.moon {
  height: 500px;
  aspect-ratio: 1/1;
}

.bg-img {
  background-image: url(https://th.bing.com/th/id/R.65ad6cf59c1045f9130e397dee89fb84?rik=%2brmm5JiPucXiPA&pid=ImgRaw&r=0);
  background-size: cover;
  background-position: center;
  min-height: 100vh;

}

.moon-miner {
  font-size: 80px;
  text-shadow: 0px 2px 5px blue;
}

h1,
h2,
h3,
h4,
p {
  margin-bottom: unset;
}

.bg-warning {
  background-color: #FCB707;
}

.bg-warning-darker {
  background-color: #FFCC4A;


}


.stats-width {
  min-width: 4em;
  max-width: 4em;
  display: inline-block;
}

.stats-icons {
  font-size: 20px;
}

.img-moon {
  cursor: pointer;
}

.btn {
  max-width: 5em;
  display: inline-block;
}
</style>
