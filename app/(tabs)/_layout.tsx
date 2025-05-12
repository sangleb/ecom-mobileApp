import { theme } from "@/app/theme";
import { useUserStore } from "@/store/useUserStore";
import Feather from "@expo/vector-icons/Feather";
import { Redirect, Tabs } from "expo-router";

export default function Layout(){
    const { isOnboardingFinished } = useUserStore();
    if(!isOnboardingFinished){
        return(
            <Redirect href="/Onboarding"></Redirect>
        )
    }

    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor:theme.blueViolet,
                
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Home",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) =>(
                        <Feather name="home" color={color} size={size}/>
                    )
                }} 
            />
            <Tabs.Screen 
                name="Profile" 
                options={{
                    title: "Profile",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) =>(
                        <Feather name="user" color={color} size={size}/>
                    )
                }} 
            />
        </Tabs>
    )
}