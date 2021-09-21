
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
        color:"lightseagreen",
        textAlign: "center"
    },
    main__text2:{
        fontSize: 15,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "none",
        color:"lightseagreen",
        textAlign: "center"
    },
    main__list:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width *.95,
        marginTop: 10
    }
    ,main__button:{
        backgroundColor: "black",
        padding: 10,
        width: 160,
        borderRadius: 5
    }
})
export default styles