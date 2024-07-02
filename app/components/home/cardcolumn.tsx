import { View } from 'react-native'
import React from 'react'

const CardColumn = ({children}: React.PropsWithChildren) => {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 20, flexGrow: 1, width: "50%"  }}>
      {children}
    </View>
  )
}

export default CardColumn