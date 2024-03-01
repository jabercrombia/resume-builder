import { Text, StyleSheet, View } from '@react-pdf/renderer';

export default function bulletPoints({bulletPoint}) {

    const bulletPt = bulletPoint.split("\n");

    const bulletPoints = bulletPt?.map((jobDescriptionText,index) => {
      return (
      <View style={{ flexDirection: "row", marginBottom: 5 }} key={index} wrap={false}>
        <Text style={{ marginRight: 5 }}>{'\u2022'}</Text>
        <Text style={{fontSize: 10}}>{jobDescriptionText}</Text>
      </View>
    )
    });

    return (
        <View style={{flexDirection: "column", width: "100%", paddingBottom: 10}}>{bulletPoints}</View>);
}
