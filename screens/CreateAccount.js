import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { StackActions } from "@react-navigation/native";
import globalStyles from "../shared/GlobalStyles";

export const CreateAccount  = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser)
    const errorMessage = useSelector((state) => state.users.message)
    const validate = async () => {
        if (username == " " || password == " " || name == " " || email == " " || phone == " " ||
            !username || !password || !name || !email || !phone) {
            Alert.alert("Error", "Empty Field(s)")
        } else {
            const newUser = {
                username: username,
                password: password,
                name: name,
                email: email,
                phone: phone,
                joinedOn: `${new Date().toUTCString()}`,
                favourite: [],
                watchedList: [],
                toWatch: [],
                reveiws: []
            }
            dispatch(addUser(newUser))
            
        }
    }
    useEffect(() => {
        // Once currentUser gets updated (non-null), navigate.
        console.log("in signup")
        if (currentUser != null ) {
            console.log(currentUser)
            navigation.dispatch(StackActions.popTo("TabNav"));
        }
    }, [currentUser]);
    return (
        <View style={globalStyles.signInContainer}>
            {currentUser === null && <Text style={globalStyles.errorMessage}>{errorMessage}</Text>}
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder='Enter your name '
                keyboardType='default'
                maxLength={100}
                style={globalStyles.input}
            />
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder='Enter username '
                keyboardType='default'
                maxLength={15}
                style={globalStyles.input}
            />
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder='Enter your email '
                keyboardType='email-address'
                style={globalStyles.input}
            />
            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder='Enter your phone number '
                keyboardType='number-pad'
                maxLength={10}
                style={globalStyles.input}
            />

            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder='Enter password '
                keyboardType='default'
                maxLength={20}
                secureTextEntry={true}
                style={globalStyles.input}
            />
            <View style={globalStyles.signInSwitchContainer}>
                <Text>Have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(StackActions.popTo("Login"))}>
                    <Text style={globalStyles.signInSwitchButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => validate()}
                style={globalStyles.signInbutton}
            >
                <Text style={globalStyles.signInbuttonText}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )
}