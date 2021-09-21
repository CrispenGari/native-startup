import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    contactcard:{

    },
    contactcardEven:{
        flexDirection: "row",
        backgroundColor: "lightblue",
        paddingHorizontal:10,
        paddingVertical: 5
    }, contactcardOdd:{
        flexDirection: "row",
        backgroundColor: "lightgray",
        paddingHorizontal:10,
        paddingVertical: 5
    },
    contactcard__info:{
        marginLeft: 10,
        flex: 1
    },
    contactcard__infobottom:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    contactcard__text1:{
       fontWeight: "bold"
    }
    , contactcard__text2:{
        
    }
    , contactcard__text4:{
        
    }
    , contactcard__text3:{
        color: "green",
    },
    contactcard__selected:{
        backgroundColor: "green",
        flexDirection: "row",
        paddingHorizontal:10,
        paddingVertical: 5,
        color: "white"
    }
})
export default styles