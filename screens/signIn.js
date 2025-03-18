import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { StackActions } from "@react-navigation/native";
import globalStyles from "../shared/GlobalStyles";

export const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser)
    const errorMessage = useSelector((state) => state.users.message)
    const validate = () => {
        dispatch(loginUser(username, password))
        if (currentUser != null) {
            navigation.dispatch(StackActions.popTo("TabNav"))
        }
    }
    return (
        <View style={globalStyles.signInContainer}>
            {/*<Text style={globalStyles.heading}>Enter Your Email and Password</Text>*/}
            {currentUser === null && <Text style={globalStyles.errorMessage}>{errorMessage}</Text>}
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder='Enter your username '
                keyboardType='default'
                maxLength={15}
                style={globalStyles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder='Enter your password '
                keyboardType='default'
                maxLength={20}
                secureTextEntry={true}
                style={globalStyles.input}
            />
            <View style={globalStyles.signInSwitchContainer}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(StackActions.popTo("SignUp"))}>
                    <Text style={globalStyles.signInSwitchButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => validate()}
                style={globalStyles.signInbutton}
            >
                <Text style={globalStyles.signInbuttonText}>Sign In</Text>
            </TouchableOpacity>

        </View>
    )
}