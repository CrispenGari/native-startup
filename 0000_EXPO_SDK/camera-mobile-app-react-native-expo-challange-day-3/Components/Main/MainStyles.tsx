
import {StyleSheet, Dimensions} from 'react-native'
const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    main__image:{
        width: Dimensions.get("screen").width *.95,
        height: Dimensions.get("screen").height *.65,
        resizeMode: "contain",
    },
    main__text1:{
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen"
    },
    main__text2:{
        fontSize: 15,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "none",
        color:"lightseagreen",
        textAlign: "center",
        marginBottom: 10
    },
    main__controls:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width *.95,
        marginTop: 10
    }
    ,main__vidcontrols:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width *.95,
    },
    main__share:{
        width: 150,
        backgroundColor: "black"
        ,padding: 10, borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 30,
        marginTop: 20
    },
    main__open:{
        width: 100,
        height: 100,
        maxWidth: 100,
        maxHeight: 100,
        backgroundColor: "lightgray",
        borderRadius: 50,
        flex: 1,
        alignItems: "center", 
        justifyContent: "center",
        marginVertical: 20,
    }
    ,main__controltext:{
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen"
    },
    main__instruction:{
        position: "absolute",
        bottom: 0,
        width: Dimensions.get("screen").width,
        padding: 10,
        textAlign: "center"
        ,backgroundColor: "lightgray",
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen"
    },main__video:{
        width: Dimensions.get("screen").width*.97,
        height: Dimensions.get("screen").height*.4,
        resizeMode: "contain"
    }
})
export default styles