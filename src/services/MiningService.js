import { AppState } from "@/AppState.js"
import Swal from "sweetalert2"

class MiningService {
  buyAutoUpgrade(upgradeName) {

  }
  buyClickUpgrade(upgradeName) {
    const upgrade = AppState.clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    // console.log(`found upgrade`, upgrade)

    if (AppState.totalCheese >= upgrade.price) {
      AppState.totalCheese -= upgrade.price
      AppState.minePower += upgrade.bonus
      upgrade.price += (upgrade.price * .2)
    } else Swal.fire(`You don't have enough Cheese to buy this`)
    console.log(AppState.minePower, AppState.totalCheese)
  }

  mineCheese() {
    AppState.totalCheese += AppState.minePower
  }


}

export const miningService = new MiningService()