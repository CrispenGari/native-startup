
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
    header__share:{

    },
    header__camera:{

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