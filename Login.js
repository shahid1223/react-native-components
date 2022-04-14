import React, { useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from "react-native";

const Login = () => {
    const image = { uri: "https://images.unsplash.com/photo-1649778457108-4e9a88b5d726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80" };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        alert(email + " " + password)
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                blurRadius={2}
                style={styles.image}
            >
                <View style={styles.content}>
                    <Text style={styles.text}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                    />

                    <View style={styles.button}>
                        <Button
                            style={styles.button}
                            title="Login"
                            color='none'
                            onPress={() => handleSubmit()}
                        />
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    },
    content: {
        textAlign: 'center',
        marginTop: 90,

    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",
        borderRadius: 10,
        marginTop: 20,
        color: 'white'
    },
    button: {
        color: 'white',
        textAlign: 'center',
        height: 40,
        margin: 'auto',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'
    }
});

export default Login;