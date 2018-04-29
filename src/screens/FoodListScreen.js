import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { MatchParent } from '@components'

class FoodListScreen extends Component {
  render() {
    return (
      <MatchParent backgroundColor="#d5d5d5" />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
})

export default FoodListScreen