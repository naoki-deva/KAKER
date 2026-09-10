import {View, Text, FlatList, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
    
    const isMyMessaege = () =>{
        const isMyMessage = () => {
            return message.user.id === 'u1';
        };
        return isMyMessage();
    };

    return (
        <View 
        style={[styles.container, 
        {
            backgroundColor: isMyMessaege() ? '#82a5df' : 'white',
            alignSelf: isMyMessaege() ? 'flex-end' : 'flex-start',
         },
         ]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shwdowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end',
    },
});

export default Message;