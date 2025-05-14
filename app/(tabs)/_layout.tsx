import { theme } from "@/app/theme";
import { useUserStore } from "@/store/useUserStore";
import Feather from "@expo/vector-icons/Feather";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable } from "react-native";

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
                    ),
                    headerRight: () => (
                        <Link href="/NewProduct" asChild>
                            <Pressable 
                                style={{paddingRight: 16}}
                            >
                                <Feather name="plus-circle" size={24} color={theme.darkgoldenrod}/>
                            </Pressable>
                        </Link>
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

