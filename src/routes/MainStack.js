import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppConfigActions} from '../redux/actions';
import Home from '../screens/Home';
import Users from '../screens/Users';
const Stack = createStackNavigator();
import Logo from '../assets/logo.png';
const MainStack = ({navigation}) => {
  const dispatch = useDispatch();

  const options = {
    title: null,
    cardStyle: {backgroundColor: 'white'},
    headerStyle: {
      backgroundColor: '#073763',
    },
    headerTintColor: '#f0f',
    headerTitle: '',

    headerLeft: () => (
      <TouchableOpacity
        style={{
          width: 256,
          height: 59,
        }}
        onPress={navigation.openDrawer}>
        <Image source={Logo} style={styles.logo} />
        {/* <Icon
          name="view-headline"
          size={30}
          style={{color: '#000', marginRight: 10}}
        /> */}
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => dispatch(AppConfigActions.toggleRightDrawer())}>
        <Icon
          name="view-headline"
          size={30}
          style={{color: '#fff', marginRight: 5}}
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
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
});
export default MainStack;
