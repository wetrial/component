export default {
  // history: 'hash',
  hash: true,
  // base: 'component',
  // publicPath: '/component/',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  doc: {
    mode: 'doc',
    logo: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',
    title: 'Wetrial',
    locales: [['zh-CN', '中文']],
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        pwa: true,
        headScripts: ['https://hm.baidu.com/hm.js?a3636d814818bccb02a7991d78ba3048'],
      },
    ],
  ],
};
