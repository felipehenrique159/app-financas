import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Moviments({ data }) {

    const [showBalance, setShowBalance] = useState(false)

    function showBalanceValue() {
        setShowBalance(!showBalance)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={showBalanceValue}>
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>
                    {data.label}
                </Text>

                {showBalance ? (<Text style={data.type == 1 ? styles.balance : styles.expenses}>
                    {data.type == 1 ? `R$ ${data.balance}` : `R$ -${data.balance}`}
                </Text>
                ) : (
                    <View style={styles.skeleton}>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date: {
        color: '#dadada',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    balance: {
        fontSize: 16,
        color: '#2ecc77',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 15,
        backgroundColor: '#dadada',
        borderRadius: 8
    }
});