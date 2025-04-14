import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../redux/actions";
import { useState } from "react";
import globalStyles from "../shared/GlobalStyles";

export const PasswordUpdate = ({navigation}) => {
    const [newPassword, setNewPassword] = useState("")
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser)

    const validate = () => {
        if (newPassword  == " " || !newPassword) {
            Alert.alert("Error", "Empty Field(s)")
        } else {
            dispatch(updatePassword(currentUser.id, newPassword))
            Alert.alert("Password Changed")
            navigation.goBack()
        }
    }

    return (
        <View style={globalStyles.signInContainer}>
            <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder='Enter your new password '
                keyboardType='default'
                maxLength={20}
                secureTextEntry={true}
                style={globalStyles.input}
            />

            <TouchableOpacity
                onPress={() => validate()}
                style={globalStyles.signInbutton}
            >
                <Text style={globalStyles.signInbuttonText}>Change Password</Text>
            </TouchableOpacity>
        </View>
    )
}

