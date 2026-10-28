const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Adiciona suporte a ficheiros .wasm exigidos pelo expo-sqlite na Web
config.resolver.sourceExts.push('wasm');

module.exports = config;