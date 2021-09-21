
import { Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    header:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
        ,alignItems: "center",
        position: "absolute",
        top:25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "black",
        color: "white",
        width: Dimensions.get("screen").width,
    },
    header__cameras:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    header__share:{

    },
    header__camera1:{

    },
    header__camera2:{
        marginLeft:10
    },
    header__text:{
        fontSize: 15,
        fontWeight: "500",
        letterSpacing: 2,
        textTransform: "uppercase",
        color:"lightseagreen"
    }
})
export default styles