import { useWindowDimensions } from 'react-native';

const COMPACT_BREAKPOINT = 640;

export function useIsCompact() {
  const { width } = useWindowDimensions();
  return width < COMPACT_BREAKPOINT;
}
