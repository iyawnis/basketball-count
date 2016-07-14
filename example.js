import React, {
    Component,
} from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    View
} from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listViewData: Array(20).fill('').map((_,i)=>`item #${i}`)
        };
    }
    render() {
        return(
            <View style={styles.container}>
            <ListView
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderSeparator={()=> (<View style={styles.separator} />)}
                renderRow={ data => (
                    <View style={styles.row}>
                        <Text>I'm {data} in a list</Text>
                    </View>
                )}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: 'white'
  },
  separator: {
    height: 0.5,
    backgroundColor: 'green',
  }
});

export default App;