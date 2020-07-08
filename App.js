import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 150, backgroundColor: 'green', width: 300, height: 40, marginLeft: 50 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>
            Testing2
         </Text>
        </TouchableOpacity>
      </View>
    );
  };
}
export default App;
