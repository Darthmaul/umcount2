import React from 'react'
import {
  Button,
  View,
  Text
} from 'react-native'
import {observer} from 'mobx-react/native'
var uuid = require('react-native-uuid');


@observer
class CounterRow extends React.Component {
  render () {
    const counter = this.props.counter
    return (
      <View>
        <Text>{counter.count}</Text>
        <Button onPress={counter.increase} title="+1" key={uuid.v4()} />
      </View>
    )
  }
}

export default CounterRow