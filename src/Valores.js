import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default (param) => {
    // console.warn(param)
    return(
        <Text style={styles.text}>
            O valor {param.max} é maior que o valor de {(param.max - param.min)} !
        </Text>
    ) 
}

const styles = StyleSheet.create({
    text: {
      color: '#FF1493',
      fontWeight: 600,
      fontSize:20,
      alignItems: 'stretch',
      justifyContent: 'flex-end',
    },

  });
  