
import {StyleSheet, Dimensions} from 'react-native'
const styles = StyleSheet.create({
    main:{
        flex: 1,
        paddingTop: 10,
        alignItems: "center"
    },main__loading:{
        flex: 1,
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    main__text1:{
        fontSize: 15,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen",
        textAlign: "center",
        marginBottom: 15,
        textDecorationLine: "underline"
    },
    main__text2:{
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen",
    },
    main__text4:{
        fontSize: 15,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen",
        textAlign: "center",
        marginBottom: 15,
    },
    main__text3:{
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"orange",
    }
    ,main__controltext:{
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen"
    },
    main__top:{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightseagreen",
        width: Dimensions.get("screen").width
    },
    main__bottom:{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightseagreen",
        width: Dimensions.get("screen").width
    }, main__list:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
    }
})
export default styles