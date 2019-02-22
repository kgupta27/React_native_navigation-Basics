import{createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginView from './screens/LoginView';
import HttpRequest from './screens/HttpRequest';

const AppStackNavigator = createStackNavigator({
  Login: LoginView,
  HttpRequest: HttpRequest,
  Home: HomeScreen,
}, {
  // This is the default for screens in the stack, so `A` will
  // use this title unless it overrides it
  defaultNavigationOptions: {
    title: 'Welcome'
  }
})

const App = createAppContainer(AppStackNavigator);

export default App;
