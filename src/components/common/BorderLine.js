import React from "react";
import { View, StyleSheet } from "react-native";

const BorderLine = ({ children }) => {
  return <View style={styles.borderLine} />;
};

const styles = StyleSheet.create({
  borderLine: {
    marginTop: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4'
  },
});

export default BorderLine;
