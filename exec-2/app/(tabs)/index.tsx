import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// ajuste o caminho conforme sua estrutura
import foto from '../../assets/images/foto.jpeg';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar style="light" />

      <View style={styles.card}>
        <Image source={foto} style={styles.avatar} contentFit="cover" />

        {/* Nome embaixo da foto */}
        <Text style={styles.name}>Juliana Tenório</Text>

        {/* Demais informações abaixo, alinhadas à esquerda */}
        <View style={styles.infoBlock}>
          <Text style={styles.subtitle}>Aluna do curso Ciência da Computação</Text>
          <Text style={styles.subtitle}>Universidade Católica de Pernambuco</Text>
          {/* <Text style={styles.detail}>email@exemplo.com</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const AVATAR_W = 150;
const AVATAR_H = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D47A1',
    padding: 16,
  },
  card: {
    alignItems: 'flex-start',
  },
  avatar: {
    width: AVATAR_W,
    height: AVATAR_H,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  name: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  infoBlock: {
    marginTop: 6,
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  detail: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 2,
  },
});
