import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions';
import { CommonActions, StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ToolBar = ({ navigation }) => {
    //const dispatch = useDispatch();

    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    navigation.dispatch(StackActions.popTo("UserProfile"))
                }}
            >
                <Icon name="person-circle-outline" color="black" size={30} />
            </TouchableOpacity>
        ),
        /* headerLeft: () => (
            <TouchableOpacity
                onPress={() => {
                    dispatch(logoutUser());
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: "Login" }]
                    })
                    )
                }}
            >
                <Text>Log Out</Text>
            </TouchableOpacity>
        ), */
    };
};

/* const ProfileToolBar = ({ navigation }) => {
    return{
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <Icon name="compass" color="black" size={25} />
            </TouchableOpacity>
        ),
    }
 
}; */