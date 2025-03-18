import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
        padding: 0,
        margin: 0,
        maxHeight: "100%",
        maxWidth: "100%"
    },
    container: {
        // padding: 16,
        paddingVertical: 10,
        width: '100%',
        // backgroundColor: 'black'
    },

    headerStyle: {
        width: '100%',
        padding: 10,
        // color: 'deepskyblue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    movieCard:{
        maxWidth: 160,
        // backgroundColor: "gray",
        // padding: 5,
        marginHorizontal: "5"
    },
    movieCardTitle:{
        // fontWeight: "bold",
        fontSize: '17',
        maxWidth: 150,
        paddingTop: 5,
        paddingLeft: 2
        
    },
    movieCardImage: {
        width: 150,
        height: 200,
        borderRadius: 5
    },
    movieCardRating:{
        position: "absolute",
        right: "6",
        top: "5",
        borderRadius: 10,
        padding: 5,
        fontWeight: "bold",
        color: "white"
    },
    signInContainer:{
        alignItems: "center",
        padding: 16,
        width: '100%',
    },
    input:{
        height: 40,
        width: '80%',
        padding: 10,
        marginVertical:8,
        borderWidth: 2,
        borderRadius:10,
        borderColor: '#051923'
    },
    signInbutton:{
        padding:'2%',
        borderRadius:8,
        alignItems:'center',
        width:'80%',
        backgroundColor:'black',
        marginVertical:5
    },
    signInbuttonText:{
        fontSize:20,
        color: 'white',
        alignItems:'center',
        fontWeight:'bold'
    },
    signInSwitchButtonText: {
        marginLeft:5,
        color:'blue',
        textDecorationLine:'underline',
        
    },
    signInSwitchContainer:{
        flexDirection:'row',
    },
    errorMessage:{
        color:'red'
    }
});

export default globalStyles;