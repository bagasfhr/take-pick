import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Axios from 'axios';

const Item = ({email, name, phone}) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `https://avatars.dicebear.com/api/male/${email}.png`,
        }}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descPhone}>{phone}</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      phone,
    };
    console.log('data before send: ', data);
    Axios.post('http://10.0.2.2:3004/users', data).then((res) => {
      console.log('res: ', res);
      setName('');
      setEmail('');
      setPhone('');
      getData();
    });
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then((res) => {
      console.log('res get data', res);
      setUsers(res.data);
    });
  };
  return (
    <View style={{marginHorizontal: 16}}>
      <Text>Local API (Json Server Test)</Text>
      <View style={styles.line} />
      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email Address"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={phone}
        onChangeText={(value) => setPhone(value)}
      />
      <Button title="Save" onPress={submit} />
      <View style={styles.line} />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 25,
    paddingHorizontal: 16,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  desc: {
    marginLeft: 16,
    flex: 1,
  },
  delete: {
    alignItems: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  descName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descEmail: {
    fontSize: 12,
  },
  descPhone: {
    fontSize: 12,
  },
});
