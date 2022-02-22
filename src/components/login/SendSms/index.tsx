import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import BackgroundTimer from "react-native-background-timer";
import { styles } from "./styles";
type Iprop = {
  showErrorPin: boolean;
  setShowErrorPin: Function;
};
export default function SendSms({ showErrorPin, setShowErrorPin }: Iprop) {
  const [countdown, setCountdown] = useState(120);
  const [showCountdown, setShowCountdown] = useState(true);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setCountdown((secs) => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  useEffect(() => {
    if (showCountdown) startTimer();
    else BackgroundTimer.stopBackgroundTimer();

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [showCountdown]);
  useEffect(() => {
    if (countdown === 0) BackgroundTimer.stopBackgroundTimer();
  }, [countdown]);

  const showTimer = () => {
    let mins = Math.floor((countdown / 60) % 60);
    let secs = Math.floor(countdown % 60);
    let showMins = mins < 10 ? `0${mins}` : mins;
    let showSecs = secs < 10 ? `0${secs}` : secs;
    return {
      showMins,
      showSecs,
    };
  };

  return (
    <View style={styles.SmsContainer}>
      {countdown !== 0 && !showErrorPin && (
        <Text style={styles.smsText}>
          Send code again in{" "}
          <Text style={styles.timer}>
            {showTimer().showMins}:{showTimer().showSecs}
          </Text>
        </Text>
      )}
      {countdown === 0 ||
        (showErrorPin && (
          <TouchableOpacity
            onPress={() => {
              setShowErrorPin(false);
              countdown === 0;
            }}
          >
            <Text style={styles.timer}>Resend code</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}
