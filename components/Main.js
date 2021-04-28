import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Main(props) {
    return (
        <View style={styles.container}>
            <Text>Main</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
