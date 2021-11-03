import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppConfigActions} from '../redux/actions';
import Home from '../screens/Home';
import Users from '../screens/Users';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  const dispatch = useDispatch();

  const options = {
    title: null,
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Icon
          name="view-headline"
          size={30}
          style={{color: '#000', marginRight: 10}}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => dispatch(AppConfigActions.toggleRightDrawer())}>
        <Icon
          name="view-headline"
          size={30}
          style={{color: '#000', marginRight: 5}}
        />
      </TouchableOpacity>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="HomeScreen" component={Home} />
      <Stack.Screen options={options} name="UsersScreen" component={Users} />
    </Stack.Navigator>
  );
};
export default MainStack;
