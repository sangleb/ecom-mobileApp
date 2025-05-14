import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
            <Stack.Screen 
                name="Onboarding" 
                options={{
                    headerShown: false,
                    presentation: "modal",
                }}
            />
            <Stack.Screen name="New Product" options={{
                presentation: "modal",
                title: "Add Product",
            }}
            />

            <Stack.Screen name="AddProductToCart" options={{
                presentation: "modal",
                title: "Add Product to Cart",
            }}

            />
        </Stack>
    )
}