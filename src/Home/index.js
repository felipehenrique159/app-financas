import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Balance from '../components/Balance'

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Felipe Ananias"/>
        <Balance balance="120,00" expenses="-650,00"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
});