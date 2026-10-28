const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Permite que o Metro processe arquivos WASM e SQL exigidos pelo SQLite na Web
config.resolver.sourceExts.push('sql');
config.resolver.assetExts.push('wasm');

// Adiciona os cabeçalhos exigidos pelo SQLite no navegador (SharedArrayBuffer)
config.server = {
  ...config.server,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
      return middleware(req, res, next);
    };
  },
};

module.exports = config;