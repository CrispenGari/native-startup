import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Picker as Pick } from "react-native";
import { styles } from "./PickerStyles";

function Picker() {
  return (
    <View style={styles.picker}>
      <View style={styles.picker__pickerC}>
        <View style={styles.picker__pickerLabels}>
          <Text style={styles.picker__pickerLabelsText}>Hours</Text>
          <Text style={styles.picker__pickerLabelsText}>Minutes</Text>
          <Text style={styles.picker__pickerLabelsText}>Seconds</Text>
        </View>
        <View style={styles.picker__pickers}>
          <Pick style={styles.picker__picker} selectedValue={2}>
            {new Array(99).fill(null).map((i, j) => {
              return (
                <Pick.Item
                  label={j.toString()}
                  value={j}
                  key={j}
                  color="#4B98A3"
                />
              );
            })}
          </Pick>
          <Pick style={styles.picker__picker} selectedValue={5}>
            {new Array(59).fill(null).map((i, j) => {
              return <Pick.Item label={j.toString()} value={j} key={j} />;
            })}
          </Pick>
          <Pick style={styles.picker__picker} selectedValue={20}>
            {new Array(59).fill(null).map((i, j) => {
              return <Pick.Item label={j.toString()} value={j} key={j} />;
            })}
          </Pick>
        </View>
      </View>
    </View>
  );
}

export default Picker;
