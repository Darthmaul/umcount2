import React from 'react'
import {
  Button,
  View,
  Text
} from 'react-native'
import {observer} from 'mobx-react/native'

@observer
class CounterRow extends React.Component {
  render () {
    let counter = this.props.counter
    return (
      <View>
        <Text>Counter: {counter.count}</Text>
        <Button onPress={counter.increase} title="+1" />
      </View>
    )
  }
}

export default CounterRow