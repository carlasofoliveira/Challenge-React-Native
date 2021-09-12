import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListaCidades from './Ecras/listaCidades';
import DadosMeteo from './Ecras/dadosMeteo';



const Tab = createMaterialTopTabNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="lista Cidades" component={ListaCidades} />
        <Tab.Screen name="Dados meteo" component={DadosMeteo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;