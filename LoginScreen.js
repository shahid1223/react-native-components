import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemcontainer}>
                <Text style={styles.text}>Login</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <Pressable style={styles.button} >
                        <Text style={styles.buttontext}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    itemcontainer: {
        backgroundColor: "red",
        height: "80%",
        width: "80%",
        borderRadius: 10,
    },
    text: {
        color: "#ffff",
        alignSelf: 'center',
        marginTop: '20%',
        fontSize: 25,
        textTransform: 'uppercase'
    },
    inputContainer: {
        marginTop: '8%',
    },
    input: {
        alignSelf: 'center',
        marginTop: '10%',
        backgroundColor: "white",
        borderColor: "gray",
        width: "90%",
        height: "20%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: '10%',
        width: "40%",
        height: "20%",
    },
    buttontext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Login;