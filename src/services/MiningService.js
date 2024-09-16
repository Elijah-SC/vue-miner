import { AppState } from "@/AppState.js"

class MiningService {
  buyAutoUpgrade(upgradeName) {

  }
  buyClickUpgrade(upgradeName) {
    const upgrade = AppState.clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    // console.log(`found upgrade`, upgrade)
  }

  mineCheese() {
    AppState.totalCheese += AppState.minePower
  }


}

export const miningService = new MiningService()