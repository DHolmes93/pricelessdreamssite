import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Line, Path } from 'react-native-svg';

import { Brand } from '@/constants/Colors';

type CircuitPatternProps = {
  color?: string;
  opacity?: number;
};

export function CircuitPattern({
  color = Brand.blueLight,
  opacity = 0.18,
}: CircuitPatternProps) {
  return (
    <View style={styles.wrap} pointerEvents="none">
      <Svg width="100%" height="100%" viewBox="0 0 240 180" preserveAspectRatio="xMinYMax slice">
        <Circle cx="28" cy="148" r="5" fill={color} opacity={opacity} />
        <Line x1="28" y1="148" x2="72" y2="148" stroke={color} strokeWidth="2" opacity={opacity} />
        <Line x1="72" y1="148" x2="72" y2="118" stroke={color} strokeWidth="2" opacity={opacity} />
        <Circle cx="72" cy="118" r="4" fill={color} opacity={opacity} />
        <Line x1="72" y1="118" x2="108" y2="118" stroke={color} strokeWidth="2" opacity={opacity} />
        <Path
          d="M108 118H132V94"
          stroke={color}
          strokeWidth="2"
          opacity={opacity}
          fill="none"
        />
        <Circle cx="132" cy="94" r="4" fill={color} opacity={opacity} />
        <Line x1="28" y1="148" x2="28" y2="168" stroke={color} strokeWidth="2" opacity={opacity} />
        <Circle cx="28" cy="168" r="3" fill={color} opacity={opacity} />
        <Line x1="48" y1="128" x2="88" y2="88" stroke={color} strokeWidth="1.5" opacity={opacity * 0.8} />
        <Circle cx="88" cy="88" r="3" fill={color} opacity={opacity * 0.8} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
});
