import { StyleSheet, View, ViewStyle } from 'react-native';

import { CircuitCorner } from '@/components/brand/CircuitCorner';
import { CircuitEdge } from '@/components/brand/CircuitEdge';
import { Brand } from '@/constants/Colors';

type CircuitPlacement = 'diagonal' | 'left' | 'right' | 'edge';

type CircuitCornerName = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

type CircuitPatternProps = {
  variant?: 'onDark' | 'card';
  framed?: boolean;
  cornerSize?: number;
  inset?: number;
  placement?: CircuitPlacement;
  edgeWidth?: number;
};

const PLACEMENT_CORNERS: Record<Exclude<CircuitPlacement, 'edge'>, CircuitCornerName[]> = {
  diagonal: ['topLeft', 'bottomRight'],
  left: ['topLeft', 'bottomLeft'],
  right: ['topRight', 'bottomRight'],
};

function cornerStyle(corner: CircuitCornerName, inset: number): ViewStyle {
  if (corner === 'topLeft') return { top: inset, left: inset };
  if (corner === 'topRight') return { top: inset, right: inset };
  if (corner === 'bottomLeft') return { bottom: inset, left: inset };
  return { bottom: inset, right: inset };
}

export function CircuitPattern({
  variant = 'onDark',
  framed = false,
  cornerSize = 168,
  inset = 20,
  placement = 'edge',
  edgeWidth = 96,
}: CircuitPatternProps) {
  const cornerVariant = variant === 'card' ? 'card' : 'onDark';

  if (placement === 'edge') {
    return (
      <View style={styles.wrap} pointerEvents="none">
        <View style={styles.sheen} />
        <View style={styles.depth} />
        <CircuitEdge variant={cornerVariant} size={edgeWidth} side="left" />
        <CircuitEdge variant={cornerVariant} size={edgeWidth} side="bottom" />
      </View>
    );
  }

  const corners = PLACEMENT_CORNERS[placement];

  return (
    <View style={styles.wrap} pointerEvents="none">
      {framed ? (
        <View
          style={[
            styles.frame,
            {
              top: inset,
              left: inset,
              right: inset,
              bottom: inset,
            },
          ]}
        />
      ) : null}

      <View style={styles.sheen} />
      <View style={styles.depth} />

      {corners.map((corner) => (
        <CircuitCorner
          key={corner}
          corner={corner}
          variant={cornerVariant}
          size={cornerSize}
          style={cornerStyle(corner, inset)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  frame: {
    position: 'absolute',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: Brand.borderOnDark,
  },
  sheen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '42%',
    backgroundColor: 'rgba(255, 255, 255, 0.035)',
  },
  depth: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '38%',
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
  },
});
