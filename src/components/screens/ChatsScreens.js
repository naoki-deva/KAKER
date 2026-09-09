import chats from '@/assets/data/chats.json';
import ChatListItem from '@/components/ChatListItem';
import { FlatList } from 'react-native';

const ChatsScreens = () => {
  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreens;