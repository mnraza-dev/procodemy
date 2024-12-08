import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [loggedInUser, setLoggedInUser] = useState(true);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      
    }, [])
    
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}