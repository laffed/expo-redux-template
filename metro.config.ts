
import { getDefaultConfig } from '@expo/metro-config';


const defaultConfig = getDefaultConfig(__dirname);

/* eslint-disable @typescript-eslint/no-unsafe-call -- conf */
// @ts-expect-error -- allowed
defaultConfig?.resolver?.assetExts?.push?.('cjs');
/* eslint-enable @typescript-eslint/no-unsafe-call -- conf */

module.exports = defaultConfig;
