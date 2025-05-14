import * as Haptics from "expo-haptics";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import { theme } from "@/app/theme";

type Props = {
    title: string,
    onPress: () => void,
}

export const HapticButton = ({title, onPress} : Props) => {

    const handlePress = () => {
        if(Platform.OS !== "web")
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
    }
    return (
        <Pressable
            style={(state) => {
                if(state.pressed)
                    return [styles.button, styles.buttonPressed];
                return styles.button;
            }}
            onPress={handlePress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create ({
    text: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 6,
        backgroundColor: theme.green,
    },
    buttonPressed: {
        backgroundColor: theme.darkGreen
    }
})

