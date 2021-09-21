import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    album:{
        width: Dimensions.get("screen").width *.30,
        height: 140,
        backgroundColor: "lightgray"
        ,margin:5,
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    album__text:{
        fontSize: 15,
        // fontStyle: "italic",
        color: "lightseagreen",
        // letterSpacing: .5,
        // textTransform: "lowercase",
        textAlign: "center"
    }
})
export default styles