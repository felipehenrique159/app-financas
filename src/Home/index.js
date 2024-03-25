import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Balance from '../components/Balance'
import Moviments from '../components/Moviments'
import Actions from '../components/Actions'

const list = [
  {
    id: 1,
    label: 'Gasolina Moto',
    balance: '60,00',
    date: '25/03/24',
    type: 0
  },
  {
    id: 2,
    label: 'Peças carro',
    balance: '300,50',
    date: '17/03/24',
    type: 0
  },
  {
    id: 3,
    label: 'Salario',
    balance: '2500,50',
    date: '05/03/24',
    type: 1
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Felipe Ananias"/>
        <Balance balance="2500,50" expenses="-360,50"/>

        <Actions/>

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