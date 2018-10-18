import { createStackNavigator } from 'react-navigation';

import Master from '../components/Master';
import Detail from '../components/Detail';

const Navigator = createStackNavigator({
  master: {
    screen: Master,
    navigationOptions: {
      headerTitle: 'My Items'
    }
  },
  detail: {
    screen: Detail
  }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#03a9f4'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  }
});

export default Navigator;