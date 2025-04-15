import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
       /*  backgroundColor: 'black',
        padding: 0,
        margin: 0,
        maxHeight: "100%",
        maxWidth: "100%" */
    },
    container: {
        // padding: 16,
        paddingVertical: 10,
        width: '100%',
        // backgroundColor: 'black'
    },

    /* headerStyle: {
        width: '100%',
        padding: 10,
        // color: 'deepskyblue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }, */
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
    profile:{
        backgroundColor:'white',
        borderRadius:200,
        padding:15,
    },


    userDetailsContainer: {
        marginBottom: 15,
        backgroundColor: '#1c1c1e',
        padding: 15,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    
    userDetailDesc: {
        fontSize: 14,
        color: '#8e8e93',
        textTransform: 'uppercase',
        marginBottom: 3,
    },
    
    userDetail: {
        fontSize: 16,
        color: '#f0f0f0',
        fontWeight: '500',
    },
    
    userActionButtonsContainer: {
        marginTop: 25,
        width: '90%',
        gap: 15,
    },
    
    userActionButtons: {
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    
    userActionButtonsText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    userName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#00ccf7',
    },

    signInContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    
    input: {
        width: '100%',
        backgroundColor: '#1c1c1e',
        padding: 14,
        marginBottom: 15,
        borderRadius: 10,
        fontSize: 16,
        color: '#fff',
    },
    
    signInbutton: {
        width: '100%',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    
    signInbuttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    
    signInSwitchContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    
    signInSwitchButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#00ccf7',
        marginLeft: 5,
    },
    
    errorMessage: {
        color: "#ff4d4d",
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 14,
    },

    inputWithIcon: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1c1c1e",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        width: "100%",
    },
    
    iconStyle: {
        marginRight: 8,
    },
    
    inputText: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        paddingVertical: 14,
    },
    
    //card style for vertical flatlist

    card: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
        borderWidth: 0.2,
        borderColor: "#f0f0f0"
    },
    infoInnerContainer:{
        flex: 1,
        justifyContent: 'flex-start'
    },
    image: {
        width: 100,
        height: 150,
    },
    noImage: {
        width: 100,
        height: 150,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#f0f0f0"
    },
    overview: {
        fontSize: 12,
        color: '#555',
        color: "#f0f0f0"
    },
    rating: {
        fontSize: 14,
        color: '#f39c12',
    },
    //ends
    
    
});

export default globalStyles;