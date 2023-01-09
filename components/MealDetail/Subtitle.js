import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: '#e2b497',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});