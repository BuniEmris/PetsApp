import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { RH, RW } from "../../utils/helpers/responsive";
import appStyles from "../../constants/styles";
import Devider from "../shared/Devider";
import Row from "../shared/Row";

type Props = {
  modalVisible: boolean;
  isView: boolean;
  closeModal: () => void;
};

const dataView = ["Dog", "Cat", "Exotic pet"];
const dataСharacter = ["Calm", "Neutral", "Aggressive"];

const CustomModal = ({ modalVisible, closeModal, isView }: Props) => {
  const [selected, setSelected] = React.useState<string>("");
  const data = isView ? dataView : dataСharacter;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select pet view</Text>
          <Devider width={RW(310)} />
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={
                item == selected
                  ? styles.pickerWrapperActive
                  : styles.pickerWrapper
              }
              onPress={() => setSelected(item)}
            >
              <Text
                style={
                  item == selected ? styles.pickerTextActive : styles.pickerText
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
          <Devider width={RW(310)} />
          <Row style={{ width: RW(310), paddingHorizontal: RW(25) }}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButtonText}>Сancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.doneButtonText,
                  {
                    color: !!selected
                      ? "rgba(0, 220, 146, 1)"
                      : "rgba(189, 189, 189, 1)",
                  },
                ]}
              >
                Done
              </Text>
            </TouchableOpacity>
          </Row>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: RW(20),
    padding: RW(18),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    textAlign: "left",
    fontFamily: appStyles.CormorantGaramond,
    fontWeight: "600",
    fontSize: RW(40),
    lineHeight: RH(48.44),
  },
  pickerWrapper: {
    // marginTop: RH(20),
    alignSelf: "center",
    marginTop: RH(8),
  },
  pickerWrapperActive: {
    alignSelf: "center",
    borderBottomColor: "rgba(0, 220, 146, 1)",
    marginTop: RH(8),
    borderBottomWidth: 1,
  },

  pickerTextActive: {
    fontFamily: appStyles.MONTSERRAT,
    fontSize: RW(30),
    fontWeight: "400",
    lineHeight: RH(36.57),
    color: "rgba(51, 51, 51, 1)",
  },
  pickerText: {
    fontFamily: appStyles.MONTSERRAT,
    fontSize: RW(30),
    fontWeight: "400",
    lineHeight: RH(36.57),
    color: "rgba(130, 130, 130, 1)",
  },
  closeButtonText: {
    fontFamily: appStyles.CormorantGaramond,
    fontSize: RW(35),
    fontWeight: "300",
    color: "rgba(51, 51, 51, 1)",
    lineHeight: RH(42.39),
    marginTop: RH(16),
    textAlign: "center",
  },
  doneButtonText: {
    fontFamily: appStyles.CormorantGaramond,
    fontSize: RW(35),
    fontWeight: "700",
    color: "rgba(51, 51, 51, 1)",
    lineHeight: RH(42.39),
    marginTop: RH(16),
    textAlign: "center",
  },
});
