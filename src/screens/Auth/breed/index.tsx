import { View, Text, TextInput, TextInputBase } from "react-native";
import React, { useState } from "react";
import GoBackIcon from "../../../assets/icons/GoBackIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import SearchIcon from "../../../assets/icons/SearchIcon";
import CustomSelect from "../../../components/info/CustomSelect";
import AcceptButton from "../../../components/info/AcceptButton";
import { RH, RW } from "../../../utils/helpers/responsive";
import { useDispatch } from "react-redux";
import { setBreed } from "../../../redux/slices/infoSlice";

const PetBreed = ({ navigation }: any) => {
  const [selected, setSelected] = useState("");

  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GoBackIcon onPress={() => navigation.goBack()} />
        <Text style={styles.header}>Choosing a pet breed</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Search" style={styles.input} />
          <SearchIcon />
        </View>
        <CustomSelect selected={selected} setSelected={setSelected} />
        <AcceptButton
          label="Add pet"
          disabled={!selected}
          onPress={() => {
            dispatch(setBreed(selected));
            navigation.goBack();
          }}
          style={{ marginTop: RH(50), width: RW(300), height: RH(50) }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PetBreed;
