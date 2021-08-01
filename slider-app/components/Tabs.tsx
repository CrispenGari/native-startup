import React from "react";
import { View, Dimensions } from "react-native";
import Indicator from "./Indicator";
import Tab from "./Tab";
interface MeasuresType {
  width: number;
  height: number;
  x: number;
  y: number;
}
const { width } = Dimensions.get("screen");
const Tabs: React.FC<any> = ({ scrollX, data, onTabPress }) => {
  const containerRef = React.useRef<View | any>();
  const [measures, setMeasures] = React.useState<MeasuresType[]>([]);
  React.useEffect(() => {
    let m: MeasuresType[] = [];
    data.forEach((item: any) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x: number, y: number, width: number, height: number) => {
          m.push({
            x,
            y,
            width,
            height,
          });
          if (m.length === data.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, []);
  return (
    <View
      style={{
        position: "absolute",
        bottom: 15,
        zIndex: 5,
        width,
      }}
      ref={containerRef}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 1,
        }}
      >
        {data?.map((item: any, index: number) => (
          <Tab
            key={index}
            item={item}
            ref={item.ref}
            onTabPress={() => onTabPress(index)}
          />
        ))}
      </View>
      {measures?.length > 0 && (
        <Indicator scrollX={scrollX} measures={measures} />
      )}
    </View>
  );
};
export default Tabs;
