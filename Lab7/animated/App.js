import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from "@react-navigation/native";
import Tab1 from "./screens/Tab1";
import Tab2 from "../animated/screens/Tab2";
import Tab3 from "../animated/screens/Tab3";
import Spring from "./screens/Tab1";
import { Header } from "react-native/Libraries/NewAppScreen";
import {AntDesign} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();


export default function App() {
   return (
  <NavigationContainer> 
     <Tab.Navigator initialRouteName="T1" screenOptions={{headerShown:false}}>
      <Tab.Screen name= "Spring" component={Tab1} 
      options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="star" size={24} color={color} />;
          },
        }} />
      <Tab.Screen name= "Sequence" component={Tab2}
       options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="heart" size={24} color={color} />;
          },
        }}/> 
      <Tab.Screen name= "Pararell" component={Tab3}
      options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="play" size={24} color={color} />;
          },
        }} />
      </Tab.Navigator> 
  </NavigationContainer>
  );
}