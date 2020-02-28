const { REACT_APP_ENV } = process.env;

const isSite = REACT_APP_ENV !== 'dev';

export default {
  // history: 'hash',
  hash: true,
  ...(isSite
    ? {
        base: 'component',
        publicPath: '/component/',
      }
    : null),
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
        scripts: [
          // 由于github不支持url重写，history-route模式下会跳转到404 404页面会对路由进行处理将路由转换成?path=xxx/xxx这种形式，首页需要对这种进行处理通过window.g_history.push()进行跳转
          `(function(g_history){
            if(g_history&&g_history.location&&g_history.location.query&&g_history.location.query.path){
              var hash=g_history.location.hash
              g_history.push({pathname:g_history.location.query.path,hash:hash})
            }
          }(window.g_history))`,
        ],
      },
    ],
    ['@umijs/plugin-qiankun'],
  ],
};
