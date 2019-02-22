import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// import { StackActions, NavigationActions } from 'react-navigation';

// const resetAction = StackActions.reset({
//    index: 0,
//    actions: [NavigationActions.navigate({ routeName: 'HttpRequest' })],
// });


class HttpRequest extends Component {
   constructor() {
      super();
      this.state = {
         count: 0
      }
   }


// Dummy API

//   componentWillMount = () => {
//      data = {
//       method: 'GET',
//    }
//      fetch('https://jsonplaceholder.typicode.com/posts/1',data )
//      .then((response) => response.json())
//      .then((responseJson) => {
//         console.log(responseJson);
//         this.setState({
//            data: responseJson
//         })
//      })
//      .catch((error) => {
//         console.error(error);
//      });
//   }

// Cart icon Update

static navigationOptions = ({ navigation }) => {
   return {
      headerRight: (
         // <Button
         //    title={navigation.getParam.count}
         //    color="#00b5ec"
         // />
         <Text>{navigation.state.params.count}</Text>
      ),
   };
};

onIncrement() {
   this.props.navigation.setParams({ count: (++ this.state.count) })
   // console.warn("On Increment: ", this.props.navigation.state.params.count)
}

render() {
   //  this.props.navigation.dispatch(resetAction);
   return (
      <View>
         {/* For the API data */}
         <Text>
            {/* {this.state.data.body} */}
         </Text>
      {/* For Updating cart Icon */}
         <Button
            onPress={() => this.onIncrement()}
            title="+1"
            color="#00b5ec"
         />
      </View>
   )
}
}

export default HttpRequest;