import {StyleSheet, Dimensions} from 'react-native'
const styles = StyleSheet.create({
    imageviewer:{
        flex: 1,
        alignItems: "center"
    },
    imageviewer__top:{
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: "lightseagreen",
        marginBottom: 0,
        width: Dimensions.get("screen").width,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
        ,paddingRight: 40
    },
    imageviewer__text1:{
        textAlign: "center",
        color: "orange", fontSize: 16,fontWeight: "500",
        letterSpacing: 2,
    },
    imageviewer__image:{
        width: Dimensions.get("screen").width *.95,
        height : Dimensions.get("screen").height *.70,
        resizeMode: "contain"
    }, 
    imageviewer__controls:{
        width: Dimensions.get("screen").width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "lightgray",
        position: "absolute",
        bottom: -Dimensions.get("screen").height + 70
    },imageviewer__control:{
        width: 50,
        height: 30,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
      
    }, imageviewer__shareControls:{
        position: "absolute",
        width: 50,
        backgroundColor: "black",
        alignItems: "center",
        // height: Dimensions.get("screen").height *.5 ,
        opacity: .8,
        right: 10,
        top: Dimensions.get("screen").height *.2,
        zIndex: 20,
        borderRadius: 5
    },
    imageviewer__sharecontrol:{
        marginVertical: 20
    }
})
export default styles