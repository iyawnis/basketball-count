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
  Platform,
  View
} from 'react-native';
import TeamView from './TeamView';
import Button from './Button';

export default class AwesomeProject extends Component {
  constructor() {
    super();
    this.state = {team1: 0, team2: 0}
  }
  incrementScore(num, team) {
    let state = {};
    state[team] = num;
    this.setState(state);
  }
  resetAll() {
    this.setState({
      team1: 0,
      team2: 0
    });
  }
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Basketball Count</Text>
        </View>
        <View style={styles.container}>
          <TeamView text="1"
            onPress={(num) => this.incrementScore(num, 'team1')}
            score={this.state.team1}/>
          <View style={styles.divider}/>
          <TeamView text="2"
            onPress={(num) => this.incrementScore(num, 'team2')}
            score={this.state.team2}/>
        </View>
        <View style={{
          alignItems: 'center'
        }}>
          <Button text="RESET" onPress={()=>{this.resetAll()}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'orange',
    padding: 15,
    flexDirection: 'row'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  divider: {
    width: 1,
    backgroundColor: 'grey'
  },
  outer: {
    flex:1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

