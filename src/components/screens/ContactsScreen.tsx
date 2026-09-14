import chats from '@/assets/data/chats.json';
import ChatListItem from '@/components/ChatListItem';
import { View, Text, FlatList } from 'react-native';
import ContactListItem from '../ContactListItem';

const ContactsScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => <ContactListItem user={item.user} />}
        />
    )
}

export default ContactsScreen;