import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import {MotiView} from 'moti'

export default function Balance({balance, expenses}) {
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 900,
        delay: 300
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>
                {balance}
            </Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.expenses}>
                {expenses}
            </Text>
        </View>
      </View>
    </MotiView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      paddingTop: 22,
      paddingStart: 18,
      paddingEnd: 18,
      paddingBottom: 22,
      borderRadius: 4,
      zIndex: 99
    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        color: '#dadada',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: 'red'
    }
});