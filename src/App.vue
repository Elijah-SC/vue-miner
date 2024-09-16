<script setup>
import { computed } from "vue";
import { AppState } from './AppState.js';
import { miningService } from "./services/MiningService.js";

const totalCheese = computed(() => AppState.totalCheese)
const minePower = computed(() => AppState.minePower)
const autoMinePower = computed(() => AppState.autoMinePower)

const clickUpgrade = computed(() => AppState.clickUpgrades)

const autoUpgrade = computed(() => AppState.autoUpgrades)

function mineCheese() {
  miningService.mineCheese()
}

function buyClickUpgrade(upgradeName) {
  miningService.buyClickUpgrade(upgradeName)
}

function buyAutoUpgrade(upgradeName) {
  miningService.buyAutoUpgrade(upgradeName)
}

setInterval(miningService.AutoMine, 3000)


</script>

<template>

  <body class="container-fluid bg-dark text-light">
    <h1 class="text-center">Vue Miner</h1>
    <div class="d-flex justify-content-around">
      <img @click="mineCheese" role="button"
        src="https://purepng.com/public/uploads/large/purepng.com-moonmoonastronomical-bodyfifth-largest-natural-satellitenatural-satellitemoon-light-1411527066942eq0mo.png"
        alt="Moon" class="img-fluid moon">
    </div>

    <article class="row justify-content-around">

      <section class="col-6">

        <div class="row text-light  align-items-end">

          <div class="col-4 bg-warning-darker p-3 rounded">
            <h3><i class="mdi mdi-cursor-default-click">+<span>{{ minePower }}</span></i></h3>
          </div>
          <div class="col-4 bg-warning p-3 rounded">
            <h1><i class="mdi mdi-cheese"><span>{{ totalCheese.toFixed(0) }}</span></i></h1>
          </div>
          <div class="col-4 bg-warning-darker p-3 rounded">
            <h3><i class="mdi mdi-timer">+<span>{{ autoMinePower }}</span></i></h3>
          </div>
        </div>
      </section>

    </article>

    <article class="row bg-warning justify-content-around">

      <section class="col-lg-5 rounded bg-warning-darker m-3 p-3">
        <div class="row">
          <div class="col-6">
            <p>Click Upgrades</p>

            <div v-for="upgrade in clickUpgrade" :key="upgrade.name">
              <section class="row justify-content-between">

                <div class="col-2">
                  <button @click="buyClickUpgrade(upgrade.name)"
                    class="fw-bold text-light text-start btn btn-info up-btn m-1">
                    {{ upgrade.price.toFixed(0) }}
                  </button>

                </div>

                <div class="col-9 text-end">
                  <span>+ {{ upgrade.bonus }} {{ upgrade.name }}</span>
                </div>

              </section>
            </div>


          </div>


          <div class="col-6">

            <p>Automatic Upgrades</p>

            <div v-for="upgrade in autoUpgrade" :key="upgrade.name">

              <section class="row justify-content-between">

                <div class="col-2">
                  <div @click="buyAutoUpgrade(upgrade.name)"
                    class="fw-bold text-light text-start btn btn-danger up-btn m-1">
                    {{ upgrade.price.toFixed(0) }}</div>

                </div>

                <div class="col-9 text-end">
                  <span> {{ upgrade.name }} +{{ upgrade.bonus }}/3s</span>

                </div>
              </section>
            </div>

          </div>
        </div>
      </section>







      <section class="col-lg-5 rounded bg-warning-darker m-3 p-3">

        <div class="row">
          <div class="col-md-6">
            <p>Click Stats</p>
            <div class="row">
              <div v-for="upgrade in clickUpgrade" :key="upgrade.name">
                <div class="col-12 d-flex justify-content-between align-items-center">
                  <div class="StatBoxes">{{ upgrade.qty }}</div>
                  <span class="stats-width">{{ upgrade.name }}</span> <i
                    class="mdi mdi-arrow-right-bold-box-outline stats-icons"></i>
                  <div class="StatBoxes m-1 text-end">{{ upgrade.qty * upgrade.bonus }}</div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-6">
            <p>Automatic Stats</p>
            <div class="row">
              <div class="col-12 d-flex justify-content-between align-items-center">
                <div class="StatBoxes m-1">0</div>
                <span class="stats-width">Rover</span> <i class="mdi mdi-timer stats-icons"></i>
                <div class="StatBoxes text-end">0</div>

              </div>

              <div class="text-start col-12 d-flex justify-content-between align-items-center">
                <div class="StatBoxes m-1">0</div>
                <span class="stats-width">Space Station</span> <i class="mdi mdi-timer stats-icons"></i>
                <div class="StatBoxes m-1 text-end">0</div>

              </div>

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

.StatBoxes {
  display: inline;
  border: 1px solid white;
  border-radius: 3px;
  padding: 4px;
  margin: 10px;
}
</style>
