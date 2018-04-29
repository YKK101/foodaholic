import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
} from 'react-native'
import {
  Button,
  Card,
  CardContent,
  CardCover,
  Divider,
  Title,
  Text,
  Toolbar,
  ToolbarContent,
} from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { MatchParent } from '@components'
import foodList from '../mockData/foodList.json'
import tagList from '../mockData/tagList.json'

class FoodListScreen extends Component {
  renderToolbar = () => {
    return (
      <Toolbar>
        <ToolbarContent title="Foodaholic" />
      </Toolbar>
    )
  }

  renderTag = ({ item }) => {
    const tag = tagList.data.find(tagItem => tagItem.code === item)
    return (
      <Button
        style={StyleSheet.flatten([styles.cardTags, { backgroundColor: tag.color }])}
        icon={
          <Icon
            name="local-offer"
            size={18}
            color="white"
          />
        }
        compact
      >
        <Text style={styles.cardTagsText} >{tag.name}</Text>
      </Button>
    )
  }

  renderTagList = (tagList) => {
    return (
      <CardContent >
        <FlatList
          data={tagList}
          keyExtractor={(_, index) => `tag${index}`}
          renderItem={this.renderTag}
          horizontal
        />
      </CardContent>
    )
  }

  renderItem = ({ item, index}) => {
    return (
      <Card>
        <CardCover source={{ uri: item.image }} />
        <CardContent>
          <Title style={styles.cardTitle} >{ item.name }</Title>
        </CardContent>
        <Divider style={styles.cardDivider} />
        {this.renderTagList(item.tags)}
      </Card>
    )
  }

  render() {
    return (
      <MatchParent>
        {this.renderToolbar()}
        <FlatList
          data={foodList.data}
          keyExtractor={(_, index) => `${index}`}
          renderItem={this.renderItem}
        />
      </MatchParent>
    )
  }
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 18,
  },
  cardDivider: {
    margin: 8,
  },
  cardTags: {
    borderRadius: 20,
  },
  cardTagsText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
})

export default FoodListScreen
