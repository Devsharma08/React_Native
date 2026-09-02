import { StyleSheet, View, useColorScheme } from "react-native";
import React from "react";

import { Colors } from "../constants/Colors";

const ThemedCard = ({ style, children, ...props }) => {
    const colorScheme = useColorScheme();
        const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <View {...props} style={[{ backgroundColor: theme.uiBackground }, style, styles.card]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    },
});
export default ThemedCard
