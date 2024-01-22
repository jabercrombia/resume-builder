import { Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    unorderedList : {
        marginBottom: 10,
        fontSize: 10
    }
});

export default function bulletPoints({bulletPoint}) {

    const bulletPt = bulletPoint.split("\n");

    const bulletPoints = bulletPt?.map((colorName,index) => {
      return (
      <View style={{ flexDirection: "row", marginBottom: 5 }} key={index}>
        <Text style={{ marginRight: 5 }}>{'\u2022'}</Text>
        <Text>{colorName}</Text>
      </View>
    )
    });

    return (
        <View style={{flexDirection: "column", width: "100%", paddingBottom: 10}}>{bulletPoints}</View>);
}
