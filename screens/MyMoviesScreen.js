import { View, Text } from "react-native";
import globalStyles from "../shared/GlobalStyles";

const MyMoviesScreen = () => {
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerStyle}>My Movies Screen</Text>
        </View>
    )
}

export default MyMoviesScreen;