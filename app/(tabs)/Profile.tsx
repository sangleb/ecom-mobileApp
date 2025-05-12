import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/app/theme";

export default function Profile(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Profile
            </Text>
        </View>
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
    }
})