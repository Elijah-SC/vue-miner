import { reactive } from 'vue'
import { ClickUpgrade } from "./models/ClickUpgrade.js"
import { AutoUpgrade } from "./models/AutoUpgrade.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  totalCheese: 50000,
  minePower: 1,
  autoMinePower: 0,


  /** @type {ClickUpgrade[]} */
  clickUpgrades: [
    new ClickUpgrade({ name: `pickaxe`, price: 50, bonus: 5, qty: 0 }),
    new ClickUpgrade({ name: `drill`, price: 200, bonus: 20, qty: 0 })
  ],
  /** @type {AutoUpgrade[]} */
  autoUpgrades: [
    new AutoUpgrade({ name: `rover`, price: 1000, bonus: 10, qty: 0 }),
    new AutoUpgrade({ name: `Station`, price: 50000, bonus: 100, qty: 0 })
  ]

})

