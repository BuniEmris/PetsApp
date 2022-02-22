import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Switch,
} from "react-native";
import React from "react";
import ImagePicker from "react-native-image-crop-picker";
import DatePicker from "react-native-date-picker";
import SafeAreaWrapper from "../../../components/SafeAreaWrapper";
import { styles } from "./styles";
import Devider from "../../../components/shared/Devider";
import Camera from "../../../components/shared/Camera";
import Pickers from "../../../components/info/Pickers";
import Row from "../../../components/shared/Row";
import { RH, RW } from "../../../utils/helpers/responsive";
import AcceptButton from "../../../components/info/AcceptButton";
import CustomModal from "../../../components/info/CustomModal";
const Info = () => {
  const [image, setImage] = React.useState<any>(null);
  const [gender, setGender] = React.useState<String>("");
  const [date, setDate] = React.useState(new Date());
  const [viewModal, setViewModal] = React.useState<boolean>(false);
  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.laterButton}>
          <Text style={styles.laterButtonText}>Later</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Become acquainted ?</Text>
        <Text style={styles.subTitle}>Fill in your pet information</Text>
        <Devider />
        <Text style={styles.photoText}>Pet photo</Text>
        <TouchableOpacity
          onPress={() =>
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
              includeBase64: true,
            }).then((image) => {
              if (image) {
                setImage(image);
              }
            })
          }
          style={styles.cameraWrapper}
        >
          {image ? (
            <Image
              style={styles.camera}
              source={{ uri: `data:${image.mime};base64,${image.data}` }}
            />
          ) : (
            <Camera />
          )}
        </TouchableOpacity>
        <Text
          style={{
            ...styles.photoText,
            marginTop: 50,
            marginBottom: 30,
            textAlign: "left",
          }}
        >
          Pet's name ?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Pet's name"
          placeholderTextColor="#979797"
        />
        <Pickers
          text1="View"
          text2="Select"
          onPress={() => setViewModal(true)}
        />
        <Pickers text1="Breed" text2="Select" />
        <Pickers text1="Сharacter" text2="Select" />
        <Pickers text1="Sex" />
        <Row style={{ justifyContent: "flex-start", flexGap: 30 }}>
          <TouchableOpacity
            onPress={() => setGender("Male")}
            style={
              gender == "Male" ? styles.switchButtonActive : styles.switchButton
            }
          >
            <Text
              style={{
                ...styles.text2,
                color:
                  gender == "Male"
                    ? "rgba(51, 51, 51, 1)"
                    : "rgba(189, 189, 189, 1)",
              }}
            >
              Male
            </Text>
          </TouchableOpacity>

          <Text style={styles.text1}>or</Text>
          <TouchableOpacity
            onPress={() => setGender("Female")}
            style={
              gender == "Female"
                ? styles.switchButtonActive
                : styles.switchButton
            }
          >
            <Text
              style={{
                ...styles.text2,
                color:
                  gender == "Female"
                    ? "rgba(51, 51, 51, 1)"
                    : "rgba(189, 189, 189, 1)",
              }}
            >
              Female
            </Text>
          </TouchableOpacity>
        </Row>
        <Row>
          <Text style={{ ...styles.text1, marginTop: RH(50) }}>Neutered</Text>
          <Switch
            style={{ marginTop: RH(50) }}
            value={true}
            trackColor={{
              true: "rgba(0, 220, 146, 1)",
              false: "rgba(0, 220, 146, 1)",
            }}
          />
        </Row>
        <Row>
          <Text style={{ ...styles.text1, marginTop: RH(50) }}>
            Microchipped
          </Text>
          <Switch
            style={{ marginTop: RH(50) }}
            value={false}
            trackColor={{
              true: "rgba(0, 220, 146, 1)",
              false: "rgba(0, 220, 146, 1)",
            }}
          />
        </Row>
        <Text style={{ ...styles.text1, marginTop: RH(50) }}>
          Height / Mass
        </Text>
        <Text style={{ ...styles.text1, marginTop: RH(50) }}>
          Dvate of birth
        </Text>
        <DatePicker
          androidVariant="nativeAndroid"
          date={date}
          mode="date"
          onDateChange={setDate}
          locale="en"
        />
        <Devider />
        <AcceptButton
          label="Add pet"
          disabled={false}
          onPress={() => {}}
          style={{ marginTop: RH(50), width: RW(300), height: RH(50) }}
        />
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove pet</Text>
        </TouchableOpacity>
        <CustomModal
          modalVisible={viewModal}
          closeModal={() => setViewModal(false)}
          isView={true}
        />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default Info;
