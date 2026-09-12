import { Text, View, StyleSheet} from 'react-native';

const EmptyView = () => {
    return (
        <View>
            <Text style={styles.text}>Fuck you mother fucker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        backgroundColor: 'red',
    }
})

export default EmptyView;