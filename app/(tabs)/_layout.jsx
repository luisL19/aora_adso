import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

const TabsLayout = () => {
  return (
    <>
        <Tabs>
           <Tabs.Screen
                name="home"
                options={{
                    title:'Home',
                    headerShown: false,
                    tabBar
        
                }} 
            />
        </Tabs>
    </>
  )
}

export default TabsLayout