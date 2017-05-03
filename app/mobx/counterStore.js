import Counter from './counter.js'
import CounterArray from './counterArray.js'

let store = {
  counter: new Counter(),
  counterArray: new CounterArray()
}
store.counterArray.addCounter()

export default store