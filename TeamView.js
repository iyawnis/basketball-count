/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './Button';

export default class TeamView extends Component {

  incrementScore(num) {
    let newScore = num + this.props.score;
    this.props.onPress(newScore);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.teamName}> Team {this.props.text}</Text>
        <Text style={styles.score}>{this.props.score}</Text>
          <Button text="+3 POINTS" onPress={() => this.incrementScore(3)}/>
        <Button text="+2 POINTS"onPress={() => this.incrementScore(2)}/>
        <Button text="FREE THROW" onPress={() => this.incrementScore(1) }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  teamName: {
    padding: 5,
  },
  counter: {
    padding: 5,
  }
});