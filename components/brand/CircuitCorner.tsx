import { StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Circle, G, Line, Path } from 'react-native-svg';

import { Brand } from '@/constants/Colors';

type CircuitCornerProps = {
  corner: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  variant?: 'card' | 'onDark';
  size?: number;
  style?: ViewStyle;
};

function cornerTransform(corner: CircuitCornerProps['corner']) {
  switch (corner) {
    case 'topRight':
      return 'scale(-1,1) translate(-160,0)';
    case 'bottomLeft':
      return 'scale(1,-1) translate(0,-160)';
    case 'bottomRight':
      return 'scale(-1,-1) translate(-160,-160)';
    default:
      return undefined;
  }
}

export function CircuitCorner({
  corner,
  variant = 'card',
  size = 148,
  style,
}: CircuitCornerProps) {
  const isDark = variant === 'onDark';

  const tracePrimary = isDark ? 'rgba(255,255,255,0.18)' : Brand.navy;
  const traceAccent = isDark ? Brand.blueBright : Brand.blueBright;
  const traceSoft = isDark ? 'rgba(99,179,237,0.45)' : Brand.blue;
  const nodeFill = isDark ? Brand.blueLight : Brand.blueBright;
  const nodeRing = isDark ? 'rgba(255,255,255,0.35)' : Brand.navy;

  const primaryOpacity = isDark ? 1 : 1;
  const accentOpacity = isDark ? 0.85 : 1;
  const softOpacity = isDark ? 0.7 : 0.9;

  return (
    <View
      style={[
        styles.wrap,
        corner === 'topLeft' && styles.topLeft,
        corner === 'topRight' && styles.topRight,
        corner === 'bottomLeft' && styles.bottomLeft,
        corner === 'bottomRight' && styles.bottomRight,
        { width: size, height: size },
        style,
      ]}
      pointerEvents="none">
      <Svg width={size} height={size} viewBox="0 0 160 160">
        <G transform={cornerTransform(corner)}>
          <Path
            d="M14 108V52C14 30 30 14 52 14H108"
            stroke={tracePrimary}
            strokeWidth={1.75}
            strokeLinecap="round"
            fill="none"
            opacity={primaryOpacity}
          />
          <Path
            d="M24 108V58C24 38 38 24 58 24H98"
            stroke={traceAccent}
            strokeWidth={1.5}
            strokeLinecap="round"
            fill="none"
            opacity={accentOpacity}
          />
          <Path
            d="M34 108V64C34 46 46 34 64 34H88"
            stroke={traceSoft}
            strokeWidth={1.2}
            strokeLinecap="round"
            fill="none"
            opacity={softOpacity}
          />

          <Line
            x1="108"
            y1="14"
            x2="132"
            y2="14"
            stroke={tracePrimary}
            strokeWidth={1.75}
            strokeLinecap="round"
            opacity={primaryOpacity}
          />
          <Circle cx="132" cy="14" r="4" fill={nodeFill} opacity={accentOpacity} />

          <Line
            x1="14"
            y1="108"
            x2="14"
            y2="132"
            stroke={tracePrimary}
            strokeWidth={1.75}
            strokeLinecap="round"
            opacity={primaryOpacity}
          />
          <Circle cx="14" cy="132" r="3.5" fill={nodeFill} opacity={accentOpacity} />

          <Line
            x1="52"
            y1="14"
            x2="76"
            y2="14"
            stroke={traceAccent}
            strokeWidth={1.35}
            strokeLinecap="round"
            opacity={accentOpacity}
          />
          <Circle
            cx="76"
            cy="14"
            r="3.25"
            fill="none"
            stroke={nodeRing}
            strokeWidth={1.35}
            opacity={softOpacity}
          />

          <Line
            x1="14"
            y1="52"
            x2="14"
            y2="76"
            stroke={traceAccent}
            strokeWidth={1.35}
            strokeLinecap="round"
            opacity={accentOpacity}
          />
          <Circle cx="14" cy="76" r="3" fill={nodeFill} opacity={softOpacity} />

          <Path
            d="M76 14V38H100"
            stroke={tracePrimary}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={primaryOpacity}
          />
          <Circle cx="100" cy="38" r="3.25" fill={nodeFill} opacity={accentOpacity} />

          <Path
            d="M14 76H38V100"
            stroke={tracePrimary}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={primaryOpacity}
          />
          <Circle
            cx="38"
            cy="100"
            r="3.25"
            fill="none"
            stroke={nodeRing}
            strokeWidth={1.35}
            opacity={softOpacity}
          />

          <Line
            x1="38"
            y1="38"
            x2="56"
            y2="56"
            stroke={traceSoft}
            strokeWidth={1.15}
            strokeLinecap="round"
            opacity={softOpacity}
          />
          <Circle cx="56" cy="56" r="2.75" fill={nodeFill} opacity={softOpacity} />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    overflow: 'hidden',
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
  },
});
