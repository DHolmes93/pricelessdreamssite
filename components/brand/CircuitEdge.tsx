import { StyleSheet, View } from 'react-native';
import Svg, { Circle, G, Line, Path } from 'react-native-svg';

import { Brand } from '@/constants/Colors';

type CircuitEdgeProps = {
  variant?: 'card' | 'onDark';
  size?: number;
  side?: 'left' | 'bottom';
};

function TraceArt({
  trace,
  traceSoft,
  traceDim,
  node,
  nodeRing,
  glow = false,
}: {
  trace: string;
  traceSoft: string;
  traceDim: string;
  node: string;
  nodeRing: string;
  glow?: boolean;
}) {
  const w = (n: number) => (glow ? n + 2.4 : n);
  const c = (color: string) => (glow ? 'rgba(99, 179, 237, 0.32)' : color);

  return (
    <G strokeLinecap="square" strokeLinejoin="miter">
      <Line x1="0" y1="36" x2="34" y2="36" stroke={c(trace)} strokeWidth={w(1.6)} />
      <Circle cx="34" cy="36" r={glow ? 4.2 : 3.2} fill={glow ? 'transparent' : node} />
      <Line x1="0" y1="36" x2="0" y2="72" stroke={c(traceSoft)} strokeWidth={w(1.4)} />
      <Line x1="0" y1="72" x2="22" y2="72" stroke={c(traceSoft)} strokeWidth={w(1.4)} />
      <Circle
        cx="22"
        cy="72"
        r={glow ? 3.8 : 2.8}
        fill="none"
        stroke={c(nodeRing)}
        strokeWidth={w(1.3)}
      />

      <Line x1="0" y1="58" x2="18" y2="58" stroke={c(traceDim)} strokeWidth={w(1.2)} />
      <Line x1="18" y1="58" x2="18" y2="92" stroke={c(traceDim)} strokeWidth={w(1.2)} />
      <Circle cx="18" cy="92" r={glow ? 3.6 : 2.6} fill={glow ? 'transparent' : node} />

      <Path
        d="M0 104H28V132H48"
        stroke={c(trace)}
        strokeWidth={w(1.5)}
        fill="none"
        strokeLinejoin="miter"
      />
      <Circle cx="48" cy="132" r={glow ? 4 : 3} fill={glow ? 'transparent' : node} />

      <Line x1="0" y1="148" x2="0" y2="196" stroke={c(traceSoft)} strokeWidth={w(1.5)} />
      <Line x1="0" y1="168" x2="26" y2="168" stroke={c(trace)} strokeWidth={w(1.4)} />
      <Circle
        cx="26"
        cy="168"
        r={glow ? 3.8 : 2.8}
        fill="none"
        stroke={c(nodeRing)}
        strokeWidth={w(1.2)}
      />

      <Line x1="0" y1="196" x2="38" y2="196" stroke={c(trace)} strokeWidth={w(1.6)} />
      <Line x1="38" y1="196" x2="38" y2="228" stroke={c(trace)} strokeWidth={w(1.6)} />
      <Circle cx="38" cy="228" r={glow ? 4.2 : 3.2} fill={glow ? 'transparent' : node} />

      <Path d="M0 214H16V244H40" stroke={c(traceDim)} strokeWidth={w(1.2)} fill="none" />
      <Circle cx="40" cy="244" r={glow ? 3.5 : 2.5} fill={glow ? 'transparent' : node} />

      <Line x1="0" y1="268" x2="30" y2="268" stroke={c(traceSoft)} strokeWidth={w(1.4)} />
      <Line x1="0" y1="268" x2="0" y2="308" stroke={c(traceSoft)} strokeWidth={w(1.4)} />
      <Circle cx="30" cy="268" r={glow ? 3.8 : 2.8} fill={glow ? 'transparent' : node} />

      <Line x1="0" y1="292" x2="20" y2="312" stroke={c(traceDim)} strokeWidth={w(1.2)} />
      <Circle
        cx="20"
        cy="312"
        r={glow ? 3.4 : 2.4}
        fill="none"
        stroke={c(nodeRing)}
        strokeWidth={w(1.1)}
      />

      <Path d="M0 328H24V356H52" stroke={c(trace)} strokeWidth={w(1.5)} fill="none" />
      <Circle cx="52" cy="356" r={glow ? 4 : 3} fill={glow ? 'transparent' : node} />

      <Line x1="0" y1="372" x2="0" y2="416" stroke={c(trace)} strokeWidth={w(1.5)} />
      <Line x1="0" y1="392" x2="32" y2="392" stroke={c(traceSoft)} strokeWidth={w(1.4)} />
      <Circle
        cx="32"
        cy="392"
        r={glow ? 3.8 : 2.8}
        fill="none"
        stroke={c(nodeRing)}
        strokeWidth={w(1.2)}
      />

      <Line x1="0" y1="416" x2="44" y2="416" stroke={c(trace)} strokeWidth={w(1.6)} />
      <Line x1="44" y1="416" x2="44" y2="448" stroke={c(trace)} strokeWidth={w(1.6)} />
      <Circle cx="44" cy="448" r={glow ? 4.2 : 3.2} fill={glow ? 'transparent' : node} />

      <Line x1="0" y1="468" x2="0" y2="520" stroke={c(traceSoft)} strokeWidth={w(1.5)} />
      <Line x1="0" y1="468" x2="36" y2="468" stroke={c(trace)} strokeWidth={w(1.6)} />
      <Circle cx="36" cy="468" r={glow ? 4 : 3} fill={glow ? 'transparent' : node} />

      <Line x1="0" y1="492" x2="24" y2="492" stroke={c(traceDim)} strokeWidth={w(1.2)} />
      <Line x1="24" y1="492" x2="24" y2="528" stroke={c(traceDim)} strokeWidth={w(1.2)} />
      <Circle cx="24" cy="528" r={glow ? 3.6 : 2.6} fill={glow ? 'transparent' : node} />

      <Path d="M0 512H20V536H46" stroke={c(trace)} strokeWidth={w(1.5)} fill="none" />
      <Circle
        cx="46"
        cy="536"
        r={glow ? 4 : 3}
        fill="none"
        stroke={c(nodeRing)}
        strokeWidth={w(1.3)}
      />

      <Line x1="0" y1="548" x2="52" y2="548" stroke={c(traceSoft)} strokeWidth={w(1.4)} />
      <Line x1="52" y1="548" x2="52" y2="572" stroke={c(traceSoft)} strokeWidth={w(1.4)} />
      <Circle cx="52" cy="572" r={glow ? 3.8 : 2.8} fill={glow ? 'transparent' : node} />

      <Line x1="0" y1="564" x2="28" y2="588" stroke={c(traceDim)} strokeWidth={w(1.2)} />
      <Circle cx="28" cy="588" r={glow ? 3.4 : 2.4} fill={glow ? 'transparent' : node} />
    </G>
  );
}

export function CircuitEdge({ variant = 'onDark', size = 96, side = 'left' }: CircuitEdgeProps) {
  const isDark = variant === 'onDark';
  const trace = isDark ? Brand.blueLight : Brand.blueBright;
  const traceSoft = isDark ? Brand.blueBright : Brand.blue;
  const traceDim = isDark ? 'rgba(99, 179, 237, 0.55)' : Brand.navy;
  const node = isDark ? Brand.blueLight : Brand.blueBright;
  const nodeRing = isDark ? Brand.blueBright : Brand.navy;
  const colors = { trace, traceSoft, traceDim, node, nodeRing };

  const art = (
    <>
      <TraceArt {...colors} glow />
      <TraceArt {...colors} />
    </>
  );

  if (side === 'bottom') {
    return (
      <View style={[styles.bottomWrap, { height: size }]} pointerEvents="none">
        <Svg width="100%" height={size} viewBox="0 0 600 88" preserveAspectRatio="xMidYMax slice">
          <G transform="translate(0, 88) rotate(-90)">{art}</G>
        </Svg>
      </View>
    );
  }

  return (
    <View style={[styles.leftWrap, { width: size }]} pointerEvents="none">
      <Svg width={size} height="100%" viewBox="0 0 88 600" preserveAspectRatio="xMinYMid slice">
        {art}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  leftWrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
  bottomWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
