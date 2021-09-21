import {StyleSheet, Dimensions} from 'react-native'

const styles= StyleSheet.create({
    editcontact:{
        alignItems: "center",
        paddingTop: 10,
        flex: 1,
        backgroundColor: "lightgray",
    },
    editcontact__info:{
        margin: 10,
        marginTop: 40,
        borderColor: "lightseagreen",
        backgroundColor:"white",
        width: Dimensions.get("screen").width,
        flex:1,
        marginBottom: 0,
        opacity: 1,
        zIndex: 20
        ,paddingTop: 20
    },
    editcontact__list:{
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    editcontact__text1:{

    },editcontact__text2:{
        color: "lightseagreen",
        marginRight: 10,
        textTransform: "uppercase",
        letterSpacing: 1.5

    },
    editcontact__text3:{
        
    },editcontact__btn:{
        width: 100
    },editcontact__listbtn:{
        width: Dimensions.get("screen").width
        ,     flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default styles