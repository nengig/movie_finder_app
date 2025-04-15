import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userActions";
import { StackActions } from "@react-navigation/native";
import globalStyles from "../shared/GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

export const CreateAccount = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser);
    const errorMessage = useSelector((state) => state.users.message);

    const validate = () => {
        if (
            !username.trim() ||
            !password.trim() ||
            !name.trim() ||
            !email.trim() ||
            !phone.trim()
        ) {
            Alert.alert("Error", "Please fill in all fields.");
        } else {
            const newUser = {
                username: username.trim(),
                password: password.trim(),
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                joinedOn: new Date().toUTCString(),
                favourite: [],
                watchedList: [],
                toWatch: [],
                reviews: [],
            };

            dispatch(addUser(newUser));
        }
    };

    useEffect(() => {
        if (currentUser) {
            navigation.dispatch(StackActions.popTo("TabNav"));
        }
    }, [currentUser]);

    return (
        <View style={[globalStyles.signInContainer, { backgroundColor: "#0d0d0d" }]}>

            <Icon name="person-circle-outline" size={80} color="#00ccf7" style={{ marginBottom: 10 }} />
            <Text style={[globalStyles.heading, { color: "#00ccf7", marginBottom: 20 }]}>
                Create Your Account
            </Text>

            {currentUser === null && errorMessage ? (
                <Text style={globalStyles.errorMessage}>{errorMessage}</Text>
            ) : null}

            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Full Name"
                placeholderTextColor="#aaa"
                keyboardType="default"
                maxLength={100}
                style={globalStyles.input}
            />
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                placeholderTextColor="#aaa"
                keyboardType="default"
                maxLength={15}
                style={globalStyles.input}
            />
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                style={globalStyles.input}
            />
            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone Number"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                maxLength={10}
                style={globalStyles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#aaa"
                keyboardType="default"
                maxLength={20}
                secureTextEntry
                style={globalStyles.input}
            />

            <TouchableOpacity
                onPress={validate}
                style={[globalStyles.signInbutton, { backgroundColor: "#00ccf7" }]}
            >
                <Text style={globalStyles.signInbuttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={globalStyles.signInSwitchContainer}>
                <Text style={{ color: "#ccc" }}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(StackActions.popTo("Login"))}
                >
                    <Text style={globalStyles.signInSwitchButtonText}> Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
