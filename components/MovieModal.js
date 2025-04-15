import React, { useState } from 'react';
import { Modal, View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';


const MovieModal = ({
  visible,
  onClose,
  statusSelection,
  setStatusSelection,
  isFavourited,
  toggleFavourite,
  userRating,
  setUserRating,
  onSave,
}) => {


  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Select...', value: '' },
    { label: 'Watched', value: 'watched' },
    { label: 'Plan to Watch', value: 'toWatch' },
  ]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          width: '90%',
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
        }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Update Movie Status
          </Text>

          <Text style={{ marginTop: 10 }}>Status:</Text>
          <DropDownPicker
            open={open}
            value={statusSelection}
            items={items}
            setOpen={setOpen}
            setValue={setStatusSelection}
            setItems={setItems}
            textStyle={{
              fontSize: 18
            }}
            containerStyle={
              styles.picker
            }
            style={{
              borderWidth: 0.3,   // Remove the border of the dropdown box
              
            }}
          />

          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: isFavourited ? 'gold' : '#ddd',
              padding: 10,
              borderRadius: 5,
            }}
            onPress={toggleFavourite}
          >
            <Text>{isFavourited ? '★ Favourited' : '☆ Add to Favourites'}</Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 15 }}>Rate:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
            {[1, 2, 3, 4, 5].map(rating => (
              <TouchableOpacity key={rating} onPress={() => setUserRating(rating)}>
                <Text style={{ fontSize: 20, color: userRating >= rating ? 'orange' : 'gray' }}>★</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 20 }}>
            <Button title="Save" onPress={onSave} />
            <Button title="Cancel" onPress={onClose} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MovieModal;
const styles = StyleSheet.create({
  picker: {
    marginTop: 10,
    width: "100%",
    alignSelf: "center",
    // borderWidth: 0,   // Remove the border of the dropdown box
    // borderColor: 'transparent',  // Ensure the border color is transparent
  },
});