import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '~/store/use-auth';

export default function SignOut() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signOut();
          router.replace('/');
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
