import { useSession } from '@/context/ctx';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import React, { useState } from 'react';

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Call your signIn function with email and password
    signIn({ email, password });
    // Navigate after signing in
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.button}>
        <Text style={styles.signin} onPress={handleSignIn}>
        Sign In
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.signup} onPress={() => router.push('/sign-up')}>
        Create an Account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
  signin: {
    padding: 14,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signup: {
    width: '100%',
    padding: 8,
    backgroundColor: '#28A745',
    borderRadius: 8,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  }
});