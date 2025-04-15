import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import { StackActions } from "@react-navigation/native";
import globalStyles from "../shared/GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser);
    const errorMessage = useSelector((state) => state.users.message);

    const validate = () => {
        if (username == " " || password == " " || !username || !password) {
            Alert.alert("Error", "Empty Field(s)")
        } else {
            dispatch(loginUser(username, password))
           
        }
    }
    useEffect(() => {
        // Once currentUser gets updated (non-null), navigate.
        console.log("in login")
        if (currentUser != null) {
            console.log(currentUser)
            navigation.dispatch(StackActions.popTo("TabNav"));
        }
    }, [currentUser]); 
    return (
        <View style={[globalStyles.signInContainer, { backgroundColor: "#0d0d0d" }]}>

            <Icon name="person-circle-outline" size={80} color="#00ccf7" style={{ marginBottom: 10 }} />

            <Text style={[globalStyles.heading, { color: "#00ccf7", marginBottom: 20 }]}>
                Welcome Back
            </Text>

            {currentUser === null && errorMessage ? (
                <Text style={globalStyles.errorMessage}>{errorMessage}</Text>
            ) : null}

            <View style={globalStyles.inputWithIcon}>
                <Icon name="person-outline" size={20} color="#aaa" style={globalStyles.iconStyle} />
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                    placeholderTextColor="#aaa"
                    keyboardType="default"
                    maxLength={15}
                    style={globalStyles.inputText}
                />
            </View>

            <View style={globalStyles.inputWithIcon}>
                <Icon name="lock-closed-outline" size={20} color="#aaa" style={globalStyles.iconStyle} />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    keyboardType="default"
                    maxLength={20}
                    secureTextEntry
                    style={globalStyles.inputText}
                />
            </View>

            <TouchableOpacity
                onPress={validate}
                style={[globalStyles.signInbutton, { backgroundColor: "#00ccf7" }]}
            >
                <Text style={globalStyles.signInbuttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={globalStyles.signInSwitchContainer}>
                <Text style={{ color: "#ccc" }}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(StackActions.popTo("SignUp"))}
                >
                    <Text style={globalStyles.signInSwitchButtonText}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
