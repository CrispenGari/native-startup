import React from 'react'
import { View , Image, TouchableOpacity} from 'react-native'
import styles from './ImageCardStyles'

const ImageCard = ({asset, setImage, index}) => {
    const openImage = ()=>{
        if(asset){
            setImage([asset,index ])
        }
    }
    return (
        <TouchableOpacity style={styles.image} onPress={openImage}>
            <Image source={{uri: asset?.uri}} style={styles.image__image}/>
        </TouchableOpacity>
    )
}
export default ImageCard
