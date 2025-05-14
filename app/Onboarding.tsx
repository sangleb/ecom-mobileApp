import { theme } from "@/app/theme";
import { HapticButton } from "@/components/HapticButton";
import { OnboardingImage } from "@/components/OnboardingImage";
import { useUserStore } from "@/store/useUserStore";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Onboarding(){

    const { toggleOnboarding } = useUserStore();

    const router = useRouter();

    function handlePress(){
        toggleOnboarding();
        router.replace("/")
    }
    return (
        <LinearGradient 
            style={styles.container}
            start={{x:0, y:0}} //this is top left
            end={{x:1, y:1}} //this is bottom right
            colors={[ theme.green, theme.appleGreen, theme.limeGreen]}
        >
            <StatusBar />
            <View >
                <Text style={styles.heading}>Your Store</Text>
                <Text style= {styles.tagLine}>Lets get essentials !</Text>
            </View>
            <OnboardingImage />
            <HapticButton
                onPress={handlePress}
                title="Finish Onboarding"
            >
            </HapticButton>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: theme.grey,
        backgroundColor: theme.aquaMarine,
        fontWeight: "bold",
    },
    heading: {
        fontSize: 40,
        color: theme.white,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center"
    },
    tagLine: {
        fontSize: 20,
        color: theme.white,
        textAlign: "center",
        marginBottom: 20,
    }
})