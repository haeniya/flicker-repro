import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const goToSettings = () => {
    router.push('/settings');
  };
  const goToExplore = () => {
    router.push('/explore');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
    >
      <TouchableOpacity onPress={goToSettings}>
        <ThemedText>Go to Settings</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToExplore}>
        <ThemedText>Go to Explore</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
