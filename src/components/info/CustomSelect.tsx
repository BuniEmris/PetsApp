import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Row from "../shared/Row";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import pickersStyles from "./styles";
import appStyles from "../../constants/styles";
const DATA = [
  "Border terrier",
  "Afghan hound",
  "Dachshund",
  "English Springer Spaniel",
  "French Bulldog",
  "German Shepherd Dog",
  "Labrador Retriever",
  "Miniature Pinscher",
  "Pomeranian",
  "Pug",
  "Saint Bernard",
  "Smooth Fox Terrier",
  "Wire Fox Terrier",
];
type Props = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
const CustomSelect = ({ selected, setSelected }: Props) => {
  console.log(selected);

  const data = DATA;
  return (
    <ScrollView>
      {data?.map((item, index) => (
        <TouchableOpacity
          onPress={() => setSelected(item)}
          key={index + selected}
        >
          <Row
            style={{
              borderBottomColor: "rgba(189, 189, 189, 1)",
              borderBottomWidth: 1,
              paddingVertical: 10,
            }}
          >
            <Text
              style={
                selected === item
                  ? pickersStyles.selectTextActive
                  : pickersStyles.selectText
              }
            >
              {item}
            </Text>
            <BouncyCheckbox
              isChecked={selected === item}
              size={25}
              fillColor="rgba(0, 220, 146, 1)"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "rgba(0, 220, 146, 1)" }}
              textStyle={{ fontFamily: appStyles.MONTSERRAT }}
              onPress={(isChecked: boolean) => {
                setSelected(item);
              }}
            />
          </Row>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CustomSelect;
