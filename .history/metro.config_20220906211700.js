/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// get defaults assetExts array
import { assetExts as defaultAssetExts } from "metro-config/src/defaults/defaults";

export const transformer = {
    getTransformOptions: async () => ({
        transform: {
            experimentalImportSupport: false,
            inlineRequires: false,
        },
    }),
};
export const resolver = {
    assetExts: [
        ...defaultAssetExts,
        'md'
    ]
};