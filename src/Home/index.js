import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Balance from '../components/Balance'
import Moviments from '../components/Moviments'

const list = [
  {
    id: 1,
    label: 'Peças carro',
    balance: '300,50',
    date: '17/09/22',
    type: 0
  },
  {
    id: 2,
    label: 'Salario',
    balance: '2500,50',
    date: '17/09/22',
    type: 1
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Felipe Ananias"/>
        <Balance balance="120,00" expenses="-650,00"/>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Moviments data={item}></Moviments>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});