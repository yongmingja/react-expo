import { fetchCategoryById, updateCategory } from "@/services/api";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditCategory() {
  const { id } = useLocalSearchParams(); // Get the category ID from the route// 
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
        fetchCategoryById(id)
          .then((response) => setName(response.data.name))
          .catch((error) => Alert.alert('Error', 'Failed to fetch category details'));
      }, [id]);

  const handleSave = async () => {
 
  setLoading(true);
    try {
      await updateCategory(id, { name });
      Alert.alert("Success", "Category updated successfully");
      router.dismissTo("/");
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update category';
      Alert.alert("Error", message);
    } finally {
      setLoading(false);
    }
  }; 
  return (
    <>
      <Stack.Screen options={{ title: "Edit Category" }} />
      <View style={styles.container}>
        <Text style={styles.label}>Category Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Category Name"
        />
        <View style={styles.button}>
          <Text disabled={loading} style={styles.save} onPress={handleSave}>
            {loading ? "Saving..." : "Save"}
          </Text>
        </View>
      </View>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    fontWeight: "bold",
  },
    save: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
});