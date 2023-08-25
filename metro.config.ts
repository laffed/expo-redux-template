/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getDefaultConfig } from '@expo/metro-config';


const defaultConfig = getDefaultConfig(__dirname);

// @ts-expect-error
defaultConfig?.resolver?.assetExts?.push?.('cjs');

module.exports = defaultConfig;
