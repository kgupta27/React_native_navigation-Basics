import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

class HomeScreen extends Component {


  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Welcome Screen',
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#00b5ec"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    previousData: '',
    count: 0,
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };


  constructor(props) {
    super(props);
  }

  componentWillMount(previousProps) {
    // this.setState({
    //     email: this.props.navigation.state.params.data.email,
    //     password: this.props.navigation.state.params.data.password,
    // })
    const data = JSON.parse(this.props.navigation.state.params.data)
    console.warn("Data= ", this.props.navigation.state.params.data);
    // this.setState((previousState) => ({previousData:"123"}));
    this.state.previousData = data;
    this.setState({})
    // console.warn("123",this.state.previousData)
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("myKey").then((value) => {
  //     console.warn("Values: ", value);
  //   }).done();
  // }

  onLogOut() {
    AsyncStorage.removeItem("myKey");
    this.props.navigation.navigate('Login');
  }

  requestScreen() {
    this.props.navigation.navigate('HttpRequest',{count:0});
  }

  render() {
    return (
      <View style={styles.container}>
       {/* For conditional Rendering (ngIf) */}
        {/* (this.state.previousData) ? {

        }:
        null */}
        <Text>HomeScreen</Text>
        <Text>Welcome!!</Text><Text>{this.state.count}</Text>
        <Text>Email: </Text><Text>
          {this.state.previousData.email
            ? this.state.previousData.email
            : 'No Value Passed'}
        </Text>
        <Text>Password: </Text><Text>
          {this.state.previousData.password
            ? this.state.previousData.password
            : 'No Value Passed'}
        </Text>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.requestScreen()}>
          <Text>Next Screen</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onLogOut()}>
          <Text>LogOut</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: "white"
  }
});
