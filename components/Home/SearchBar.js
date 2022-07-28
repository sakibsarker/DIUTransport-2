import * as React from "react";
import { Searchbar, Text } from "react-native-paper";
import { FlatList, TouchableOpacity, View } from "react-native";
import { placesAutoComplete } from "../../Utils/PlacesAutocomplete";
import { useTheme } from "react-native-paper";

const SearchBar = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const onChangeSearch = async (query) => {
    setSearchQuery(query);
    const data = await placesAutoComplete(query);
    setOptions(data.placesNames);
    console.log(query);
    console.log(options);
  };

  const renderItem = ({ item }) => (
    <Item title={item.value} coordinates={item.coords} />
  );

  const Item = ({ title, coordinates }) => (
    <View
      key={title}
      style={{
        padding: 10,
        paddingLeft: 40,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setPlace(coordinates);
          console.log(place);
        }}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Searchbar
        style={{
          borderRadius: 40,
        }}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {options?.length > 0 ? (
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default SearchBar;
