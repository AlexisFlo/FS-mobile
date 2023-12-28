import { FlatList } from 'react-native';
import posts from '../../assets/data/posts';

export default function FeedScreen() {
  return(
    <FlatList
        data={posts}
        renderItem={() => <FeedPost post={item} />}
      />
  )
};
