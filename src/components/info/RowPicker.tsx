import { View, Text } from "react-native";
import React from "react";
import Row from "../shared/Row";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { RH } from "../../utils/helpers/responsive";

type Props = {
  data1: Array<string | number>;
  data2: Array<string | number>;
  data3: Array<string | number>;
  selectedIndex1: number;
  selectedIndex2: number;
  selectedIndex3: number;

  onChange1: (value: string) => void;
  onChange2: (value: string) => void;
  onChange3: (value: string) => void;
};

const RowPicker = ({
  data1,
  data2,
  data3,
  onChange1,
  onChange2,
  onChange3,
  selectedIndex1,
  selectedIndex2,
  selectedIndex3,
}: Props) => {
  return (
    <Row style={{ marginTop: RH(40) }}>
      <ScrollPicker
        dataSource={data1} //
        selectedIndex={selectedIndex1}
        // renderItem={(data, index) => {
        //   <Text style={styles.text2}>{data}</Text>;
        // }}
        onValueChange={(data, selectedIndex) => {
          onChange1(String(data));
        }}
        wrapperHeight={180}
        // wrapperWidth={150}
        wrapperColor="#FFFFFF"
        itemHeight={60}
        highlightColor="#d8d8d8"
        highlightBorderWidth={0}
      />
      <View
        style={{
          width: 0,
          height: "60%",
          borderWidth: 1,
          borderColor: "rgba(130, 130, 130, 1)",
        }}
      ></View>
      <ScrollPicker
        dataSource={data2} //["1 in", "2 in", "3 in", "4 in", "5 in", "6 in"]
        selectedIndex={selectedIndex2}
        // renderItem={(data, index) => {
        //   <Text style={styles.text2}>{data}</Text>;
        // }}
        onValueChange={(data, selectedIndex) => {
          onChange2(String(data));
        }}
        wrapperHeight={180}
        // wrapperWidth={150}
        wrapperColor="#FFFFFF"
        itemHeight={60}
        highlightColor="#d8d8d8"
        highlightBorderWidth={0}
      />
      <View
        style={{
          width: 0,
          height: "60%",
          borderWidth: 1,
          borderColor: "rgba(130, 130, 130, 1)",
        }}
      ></View>
      <ScrollPicker
        dataSource={data3} //["1 lb", "2 lb", "3 lb", "4 lb", "5 lb", "6 lb"]
        selectedIndex={selectedIndex3}
        // renderItem={(data, index) => {
        //   <Text>{data}</Text>;
        // }}
        onValueChange={(data, selectedIndex) => {
          onChange3(String(data));
        }}
        wrapperHeight={180}
        wrapperColor="#FFFFFF"
        itemHeight={60}
        highlightColor="#d8d8d8"
        highlightBorderWidth={0}
      />
    </Row>
  );
};

export default RowPicker;
