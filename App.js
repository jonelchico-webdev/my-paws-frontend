import React from "react";
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SplashScreen from './src/screens/SplashScreen';
import MainSignInSreen from './src/screens/MainSignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from "./src/screens/SignInScreen";
import TermsOfServicesScreen from './src/screens/TermsOfServicesScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import theme from './src/theme';
import { ThemeProvider } from 'react-native-elements';
import CustomHeader from './src/components/common/CustomHeader';

import CustomHeaderWithoutPet from './src/components/common/CustomHeaderWithoutPet';

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import HomeScreen from './src/screens/WithoutPetSelectedScreen/HomeScreen';
import AddPetScreen from './src/screens/AddPetScreen';

import MessageScreen from './src/screens/WithoutPetSelectedScreen/MessageScreen';
import ExploreScreen from './src/screens/WithoutPetSelectedScreen/ExploreScreen';
import AccountScreen from './src/screens/WithoutPetSelectedScreen/AccountScreen';

import PawIcon from './src/assets/icons/bottomNavs/PawIcon';
import PawActiveIcon from './src/assets/icons/bottomNavs/PawActiveIcon';
import MessageIcon from './src/assets/icons/bottomNavs/MessageIcon';
import MessageActiveIcon from './src/assets/icons/bottomNavs/MessageActiveIcon';
import ExploreIcon from './src/assets/icons/bottomNavs/ExploreIcon';
import ExploreActiveIcon from './src/assets/icons/bottomNavs/ExploreActiveIcon';
import UserIcon from './src/assets/icons/bottomNavs/UserIcon';
import UserActiveIcon from './src/assets/icons/bottomNavs/UserActiveIcon';

const bottomNavigatorConfigs = {
  // initialRouteName: "Home",
  tabBarOptions: {
    style: { height: 60 }
  },
};

const homeFlow = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => <CustomHeaderWithoutPet />
      }
    },
  },
  {
    navigationOptions: {
      tabBarLabel: () => null,
      tabBarIcon: ({ focused }: any) =>
        focused ? <PawActiveIcon /> : <PawIcon />,
    }
  },
)

const messageFlow = createStackNavigator(
  {
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        header: () => <CustomHeaderWithoutPet />
      }
    },
  },
  {
    navigationOptions: {
      tabBarLabel: () => null,
      tabBarIcon: ({ focused }: any) =>
        focused ? <MessageActiveIcon /> : <MessageIcon />
    }
  },
)


const exploreFlow = createStackNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        header: () => <CustomHeaderWithoutPet />
      }
    },
  },
  {
    navigationOptions: {
      tabBarLabel: () => null,
      tabBarIcon: ({ focused }: any) =>
        focused ? <ExploreActiveIcon /> : <ExploreIcon />
    }
  },
)



const mainWithoutPetFlow = createBottomTabNavigator(
  {
    homeFlow,
    messageFlow,
    exploreFlow,
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }: any) =>
          focused ? <UserActiveIcon /> : <UserIcon />,

      }
    }
  },
  // {
  //   navigationOptions: {
  //     header: () => <CustomHeaderWithoutPet />
  //   }
  // },
  bottomNavigatorConfigs,
)

const switchNavigator = createSwitchNavigator(
  {
    // Splash: SplashScreen,
    ResolveAuth: ResolveAuthScreen,
    signinFLow: createStackNavigator({
      MainSignIn: MainSignInSreen,
      SignUp: SignUpScreen,
      SignIn: SignInScreen,
      TermsOfServices: {
        screen: TermsOfServicesScreen,
        navigationOptions: {
          header: () => <CustomHeader />
        }
      },
      PrivacyPolicy: {
        screen: PrivacyPolicyScreen,
        navigationOptions: {
          header: () => <CustomHeader />
        }
      },
    }),
    // mainFlow: createStackNavigator({
    mainWithoutPetFlow,
    AddPet: AddPetScreen
    // })
  }
)

const App = createAppContainer(switchNavigator);

export default () => {
  const [loaded] = useFonts({
    NotoSans: require('./src/assets/fonts/NotoSans-Regular.ttf'),
    NotoSansBold: require('./src/assets/fonts/NotoSans-Bold.ttf'),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </ThemeProvider>
  )
}