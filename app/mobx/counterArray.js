import {reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

import Counter from './counter.js'

@autobind
class CounterArray {
  @observable counterArray = [];

  addCounter(){
    this.counterArray.push(new Counter())
  }
}

export default CounterArray;