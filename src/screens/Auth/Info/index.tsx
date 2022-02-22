import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Switch,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import { styles } from "./styles";
import Devider from "../../../components/shared/Devider";
import Camera from "../../../components/shared/Camera";
import ImagePicker from "react-native-image-crop-picker";
import Row from "../../../components/shared/Row";
import Pickers from "../../../components/info/Pickers";
import { RH, RW } from "../../../utils/helpers/responsive";
import DatePicker from "react-native-date-picker";
import AcceptButton from "../../../components/info/AcceptButton";
import CustomModal from "../../../components/info/CustomModal";
import { SafeAreaView } from "react-native-safe-area-context";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  clearInfo,
  setDateOfBirdth,
  setHeight,
  setMass,
  setMicrochipped,
  setName,
  setNeusted,
  setPhoto,
  setSex,
  setSomething,
} from "../../../redux/slices/infoSlice";
import RowPicker from "../../../components/info/RowPicker";
const Info = ({ navigation }: any) => {
  const {
    photo,
    name,
    view,
    breed,
    character,
    sex,
    neusted,
    microchipped,
    height,
    mass,
    something,
    dateOfBirds,
  } = useSelector((state: RootState) => state.infoSlice);
  const dispatch = useDispatch();
  const [viewModal, setViewModal] = React.useState<boolean>(false);
  const [isView, setIsView] = React.useState<boolean>(false);
  const getDaysArray = useMemo(
    () => (month: number, year: number) => {
      const daysInMonth = new Date(year, month, 0).getDate();
      const daysArray = [];
      for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
      }
      return daysArray;
    },
    [dateOfBirds],
  );
  const getLastNineYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 9; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(
    Math.abs(
      getDaysArray(
        month.findIndex((el) => el == dateOfBirds.month) + 1,
        Number(dateOfBirds.year),
      ).findIndex((el) => String(el) == dateOfBirds.day),
    ),
  );
  useEffect(() => {
    if (
      getDaysArray(
        month.findIndex((el) => el == dateOfBirds.month) + 1,
        Number(dateOfBirds.year),
      ).findIndex((el) => String(el) == dateOfBirds.day) === -1
    ) {
      dispatch(
        setDateOfBirdth({
          ...dateOfBirds,
          day: "1",
        }),
      );
    }
  }, [dateOfBirds]);
  return (
    <SafeAreaView>
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
                dispatch(setPhoto(image));
              }
            })
          }
          style={styles.cameraWrapper}
        >
          {photo ? (
            <Image
              style={styles.camera}
              source={{ uri: `data:${photo.mime};base64,${photo.data}` }}
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
          value={name}
          onChangeText={(el: string) => dispatch(setName(el))}
          placeholder="Pet's name"
          placeholderTextColor="#979797"
        />
        <Pickers
          text1="View"
          text2="Select"
          value={view}
          onPress={() => {
            setViewModal(true);
            setIsView(true);
          }}
        />
        <Pickers
          text1="Breed"
          text2="Select"
          value={breed}
          onPress={() => navigation.navigate("PetBreed")}
        />
        <Pickers
          text1="Сharacter"
          text2="Select"
          value={character}
          onPress={() => {
            setViewModal(true);
            setIsView(false);
          }}
        />
        <Pickers text1="Sex" />
        <Row style={{ justifyContent: "flex-start", flexGap: 30 }}>
          <TouchableOpacity
            onPress={() => dispatch(setSex("Male"))}
            style={
              sex == "Male" ? styles.switchButtonActive : styles.switchButton
            }
          >
            <Text
              style={{
                ...styles.text2,
                color:
                  sex == "Male"
                    ? "rgba(51, 51, 51, 1)"
                    : "rgba(189, 189, 189, 1)",
              }}
            >
              Male
            </Text>
          </TouchableOpacity>

          <Text style={styles.text1}>or</Text>
          <TouchableOpacity
            onPress={() => dispatch(setSex("Female"))}
            style={
              sex == "Female" ? styles.switchButtonActive : styles.switchButton
            }
          >
            <Text
              style={{
                ...styles.text2,
                color:
                  sex == "Female"
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
            value={neusted}
            onValueChange={(e) => dispatch(setNeusted(e))}
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
            value={microchipped}
            onValueChange={(e) => dispatch(setMicrochipped(e))}
            trackColor={{
              true: "rgba(0, 220, 146, 1)",
              false: "rgba(0, 220, 146, 1)",
            }}
          />
        </Row>
        <Text style={{ ...styles.text1, marginTop: RH(50) }}>
          Height / Mass
        </Text>
        <RowPicker
          selectedIndex1={[
            "1 ft",
            "2 ft",
            "3 ft",
            "4 ft",
            "5 ft",
            "6 ft",
          ].findIndex((el) => el == height)}
          selectedIndex2={[
            "1 in",
            "2 in",
            "3 in",
            "4 in",
            "5 in",
            "6 in",
          ].findIndex((el) => el == mass)}
          selectedIndex3={[
            "1 lb",
            "2 lb",
            "3 lb",
            "4 lb",
            "5 lb",
            "6 lb",
          ].findIndex((el) => el == something)}
          data1={["1 ft", "2 ft", "3 ft", "4 ft", "5 ft", "6 ft"]}
          data2={["1 in", "2 in", "3 in", "4 in", "5 in", "6 in"]}
          data3={["1 lb", "2 lb", "3 lb", "4 lb", "5 lb", "6 lb"]}
          onChange1={(el: string) => dispatch(setHeight(el))}
          onChange2={(el: string) => dispatch(setMass(el))}
          onChange3={(el: string) => dispatch(setSomething(el))}
        />
        <Text style={{ ...styles.text1, marginTop: RH(50) }}>
          Date of birth
        </Text>
        <RowPicker
          data1={getDaysArray(
            month.findIndex((el) => el == dateOfBirds.month) + 1,
            Number(dateOfBirds.year),
          )}
          data2={month}
          data3={getLastNineYears()}
          selectedIndex1={Math.abs(
            getDaysArray(
              month.findIndex((el) => el == dateOfBirds.month) + 1,
              Number(dateOfBirds.year),
            ).findIndex((el) => String(el) == dateOfBirds.day),
          )}
          selectedIndex2={month.findIndex(
            (el) => String(el) == dateOfBirds.month,
          )}
          selectedIndex3={getLastNineYears().findIndex(
            (el) => String(el) == dateOfBirds.year,
          )}
          onChange1={(el: string) =>
            dispatch(setDateOfBirdth({ ...dateOfBirds, day: el }))
          }
          onChange2={(el: string) =>
            dispatch(setDateOfBirdth({ ...dateOfBirds, month: el }))
          }
          onChange3={(el: string) =>
            dispatch(setDateOfBirdth({ ...dateOfBirds, year: el }))
          }
        />
        {/* <DatePicker
          androidVariant="nativeAndroid"
          date={new Date()}
          mode="date"
          onDateChange={(date) => {
            console.log(typeof date);
            dispatch(setDateOfBirdth(date));
          }}
          locale="en"
        /> */}
        <Devider />
        <AcceptButton
          label="Add pet"
          disabled={false}
          onPress={() => {
            navigation.navigate("HomeTabs");
            dispatch(clearInfo());
          }}
          style={{ marginTop: RH(50), width: RW(300), height: RH(50) }}
        />
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove pet</Text>
        </TouchableOpacity>
        <CustomModal
          modalVisible={viewModal}
          closeModal={() => setViewModal(false)}
          isView={isView}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;
