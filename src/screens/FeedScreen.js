import { FlatList } from 'react-native';
import FeedPost from "../components/FeedPost";
import posts from '../../assets/data/posts';

export default function FeedScreen() {
  return(
    <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
  )
};
