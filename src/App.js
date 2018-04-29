import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { FoodListScreen } from '@screens'
import theme from './constants/theme'

class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme} >
        <FoodListScreen />
      </PaperProvider>
    )
  }
}

export default App
