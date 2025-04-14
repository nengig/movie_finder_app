import { useSelector, useDispatch } from "react-redux";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { deleteUser, logoutUser } from "../redux/actions";
import globalStyles from "../shared/GlobalStyles";
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions } from "@react-navigation/native";
import { useEffect } from "react";

export const UserProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const cUser = useSelector((state) => state.users.currentUser)
    const handleDelete = () => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this acc?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => dispatch(deleteUser(cUser.id)),
                    style: "destructive",
                },
            ]
        );
    }
    useEffect(() => {
        console.log("in profile")
        if (cUser == null) {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }]
            })
            )
        }
    }, [cUser]);
    return (
        <View style={[globalStyles.container,]}>
            {
                cUser ? (
                    <View style={{ alignItems: 'center' }}>
                        <View style={globalStyles.profile}>
                            <Icon name="film-outline" color="black" size={200} />
                        </View>

                        <Text style={globalStyles.userName}>HELLO, {cUser.name.toUpperCase()}</Text>

                        <View style={[{ marginVertical: 10 }]}>

                            <View style={globalStyles.userDetailsContainer}>
                                <Text style={globalStyles.userDetailDesc}>username</Text>
                                <Text style={globalStyles.userDetail}>{cUser.username}</Text>
                            </View>

                            <View style={globalStyles.userDetailsContainer}>
                                <Text style={globalStyles.userDetailDesc}>email</Text>
                                <Text style={globalStyles.userDetail}>{cUser.email}</Text>
                            </View>

                            <View style={globalStyles.userDetailsContainer}>
                                <Text style={globalStyles.userDetailDesc}>phone number</Text>
                                <Text style={globalStyles.userDetail}>{cUser.phone}</Text>
                            </View>

                            <View style={globalStyles.userDetailsContainer}>
                                <Text style={globalStyles.userDetailDesc}>joined</Text>
                                <Text style={globalStyles.userDetail}>{cUser.joinedOn.toLowerCase()}</Text>
                            </View>
                        </View>
                        <View style={globalStyles.userActionButtonsContainer}>
                            <TouchableOpacity
                                style={globalStyles.userActionButtons}
                                onPress={() =>{
                                    navigation.navigate("UpdatePassword")
                                }}
                            >
                                <Text style={globalStyles.userActionButtonsText}>Change Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={globalStyles.userActionButtons}
                                onPress={() => {
                                    handleDelete()
                                }}
                            >
                                <Text style={globalStyles.userActionButtonsText}>Delete Account</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={globalStyles.userActionButtons}
                                onPress={() => {
                                    dispatch(logoutUser());
                                }}
                            >
                                <Text style={globalStyles.userActionButtonsText}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (<Text>Not Logged In</Text>
                )
            }


        </View>
    )


}