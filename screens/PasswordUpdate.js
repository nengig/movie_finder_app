// // import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
// // import { useSelector, useDispatch } from "react-redux";
// // import { updatePassword } from "../redux/actions";
// // import { useState } from "react";
// // import globalStyles from "../shared/GlobalStyles";

// // export const PasswordUpdate = ({navigation}) => {
// //     const [newPassword, setNewPassword] = useState("")
// //     const dispatch = useDispatch();
// //     const currentUser = useSelector((state) => state.users.currentUser)

// //     const validate = () => {
// //         if (newPassword  == " " || !newPassword) {
// //             Alert.alert("Error", "Empty Field(s)")
// //         } else {
// //             dispatch(updatePassword(currentUser.id, newPassword))
// //             Alert.alert("Password Changed")
// //             navigation.goBack()
// //         }
// //     }

// //     return (
// //         <View style={globalStyles.signInContainer}>
// //             <TextInput
// //                 value={newPassword}
// //                 onChangeText={setNewPassword}
// //                 placeholder='Enter your new password '
// //                 keyboardType='default'
// //                 maxLength={20}
// //                 secureTextEntry={true}
// //                 style={globalStyles.input}
// //             />

// //             <TouchableOpacity
// //                 onPress={() => validate()}
// //                 style={globalStyles.signInbutton}
// //             >
// //                 <Text style={globalStyles.signInbuttonText}>Change Password</Text>
// //             </TouchableOpacity>
// //         </View>
// //     )
// // }



// import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { updatePassword } from "../redux/actions";
// import { useState } from "react";
// import globalStyles from "../shared/GlobalStyles";

// export const PasswordUpdate = ({ navigation }) => {
//     const [newPassword, setNewPassword] = useState("");
//     const dispatch = useDispatch();
//     const currentUser = useSelector((state) => state.users.currentUser);

//     const validate = () => {
//         const trimmedPassword = newPassword.trim();

//         if (!trimmedPassword) {
//             Alert.alert("Error", "Password field cannot be empty.");
//             return;
//         }

//         if (trimmedPassword.length < 6) {
//             Alert.alert("Error", "Password should be at least 6 characters long.");
//             return;
//         }

//         dispatch(updatePassword(currentUser.id, trimmedPassword));
//         Alert.alert("Success", "Password changed successfully.");
//         navigation.goBack();
//     };

//     return (
//         <View style={globalStyles.signInContainer}>
//             <Text style={[globalStyles.heading, { color: "#00ccf7", marginBottom: 20 }]}>
//                 Update Your Password
//             </Text>

//             <TextInput
//                 value={newPassword}
//                 onChangeText={setNewPassword}
//                 placeholder="Enter your new password"
//                 placeholderTextColor="#aaa"
//                 keyboardType="default"
//                 maxLength={20}
//                 secureTextEntry={true}
//                 style={globalStyles.input}
//             />

//             <TouchableOpacity
//                 onPress={validate}
//                 style={[globalStyles.signInbutton, { backgroundColor: "#00ccf7" }]}
//             >
//                 <Text style={globalStyles.signInbuttonText}>Change Password</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };


import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../redux/actions/userActions";
import { StackActions } from "@react-navigation/native";
import globalStyles from "../shared/GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

export const PasswordUpdate = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState("");
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser);

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
        <View style={[globalStyles.signInContainer, { backgroundColor: "#0d0d0d" }]}>
            <Icon name="key-outline" size={80} color="#00ccf7" style={{ marginBottom: 10 }} />

            <Text style={[globalStyles.heading, { color: "#00ccf7", marginBottom: 20 }]}>
                Change Your Password
            </Text>

            <View style={globalStyles.inputWithIcon}>
                <Icon name="lock-closed-outline" size={20} color="#aaa" style={globalStyles.iconStyle} />
                <TextInput
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="New Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    maxLength={20}
                    style={globalStyles.inputText}
                />
            </View>

            <TouchableOpacity
                onPress={validate}
                style={[globalStyles.signInbutton, { backgroundColor: "#00ccf7" }]}
            >
                <Text style={globalStyles.signInbuttonText}>Update Password</Text>
            </TouchableOpacity>

            <View style={globalStyles.signInSwitchContainer}>
                <Text style={{ color: "#ccc" }}>Remembered your old password?</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text style={globalStyles.signInSwitchButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
