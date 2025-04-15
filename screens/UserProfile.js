import { useSelector, useDispatch } from "react-redux";
import { Text, View, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";
import { deleteUser, logoutUser } from "../redux/actions/userActions";
import globalStyles from "../shared/GlobalStyles";
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions } from "@react-navigation/native";
import { useEffect } from "react";
import { clearMovieSearchResults } from "../redux/actions/searchMovieActions";

export const UserProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const cUser = useSelector((state) => state.users.currentUser);

    const handleDelete = () => {
        Alert.alert(
            "Delete Account",
            "Are you sure you want to delete this account?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    onPress: () => dispatch(deleteUser(cUser.id)),
                    style: "destructive",
                },
            ]
        );
    };

    useEffect(() => {
        if (!cUser) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Login" }],
                })
            );
        }
    }, [cUser]);

    return (
        <ScrollView style={[globalStyles.container, styles.containerStyle]}>
            {cUser ? (
                <View style={styles.userInfoContainer}>
                    <View style={[globalStyles.profile, styles.profileImg]}>
                        <Icon name="person-circle-outline" color="#00ccf7" size={160} />
                    </View>

                    <Text style={[globalStyles.userName, styles.userNameStyle]}>
                        Hello, {cUser.name.toUpperCase()}
                    </Text>

                    <View style={styles.userDetail}>
                        {[
                            { label: "Username", value: cUser.username },
                            { label: "Email", value: cUser.email },
                            { label: "Phone Number", value: cUser.phone },
                            { label: "Joined", value: cUser.joinedOn.toLowerCase() },
                        ].map((item, idx) => (
                            <View key={idx} style={globalStyles.userDetailsContainer}>
                                <Text style={globalStyles.userDetailDesc}>{item.label}</Text>
                                <Text style={globalStyles.userDetail}>{item.value}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={globalStyles.userActionButtonsContainer}>
                        <TouchableOpacity
                            style={[globalStyles.userActionButtons, styles.changePswdBtn]}
                            onPress={() => navigation.navigate("UpdatePassword")}
                        >
                            <Text style={globalStyles.userActionButtonsText}>Change Password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[globalStyles.userActionButtons, styles.deleteUserBtn]}
                            onPress={handleDelete}
                        >
                            <Text style={globalStyles.userActionButtonsText}>Delete Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[globalStyles.userActionButtons, styles.logOutBtn]}
                            onPress={() => {
                                dispatch(logoutUser());
                                dispatch(clearMovieSearchResults());
                            }}
                        >
                            <Text style={globalStyles.userActionButtonsText}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <Text style={{ color: "#fff" }}>Not Logged In</Text>
            )}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#0d0d0d',
    },
    changePswdBtn: {
        backgroundColor: '#2c2c2e'
    },
    deleteUserBtn: {
        backgroundColor: '#ff3b30'
    },
    logOutBtn: {
        backgroundColor: '#1c1c1e'
    },
    userDetail: {
        marginTop: 20,
        width: '90%'
    },
    userInfoContainer: {
        alignItems: 'center',
        width: '100%',
        paddingBottom: 20
    },
    profileImg: {
        marginTop: 20
    },
    userNameStyle: {
        marginTop: 10
    }

})