import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList,TouchableOpacity,Linking } from 'react-native';
import axios from 'axios';

const AnnouncementScreen = () => {
  const [data, setData] = useState([]);

  const handleItemPress = (source) => {
    if (source) {
      Linking.openURL(source);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://ektm-backend.up.railway.app/api/announcement/all');
      setData(response.data.data);
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleItemPress(item.source)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{formatDate(item.schedule)}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pengumuman</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AnnouncementScreen;
