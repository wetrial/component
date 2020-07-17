import { defineConfig } from 'umi';
const { REACT_APP_ENV } = process.env;

const isSite = REACT_APP_ENV !== 'dev';

export default defineConfig({
  antd: {
    dark: false,
  },
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  //dynamicImport: {},
  base: '/component',
  publicPath: '/component/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // ssr: {},
  mode: 'site', // site | doc
  favicon: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',
  logo: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',
  title: 'Wetrial组件库',
  locales: [['zh-CN', '中文']],
  resolve: {
    includes: ['src'],
    previewLangs: [], // tsx、jsx
  },
  navs: [
    null,
    {
      title: 'antd',
      path: 'https://ant.design/components/form-cn/',
    },
    {
      title: 'hooks',
      path: 'https://wetrial.github.io/hooks',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
    // [
    //   'import',
    //   {
    //     libraryName: '@wetrial/component',
    //     camel2DashComponentName: false,
    //     customStyleName: (name) => {
    //       return `../global.less`;
    //     },
    //   },
    //   '@wetrial/component',
    // ],
  ],
  styles: [`${isSite ? 'http://wetrial.github.io' : 'http://localhost:8000'}/component/global.css`],
  // scripts: [
  //   // 由于github不支持url重写，history-route模式下会跳转到404 404页面会对路由进行处理将路由转换成?path=xxx/xxx这种形式，首页需要对这种进行处理通过window.g_history.push()进行跳转
  //   `(function(g_history){
  //     if(g_history&&g_history.location&&g_history.location.query&&g_history.location.query.path){
  //       var hash=g_history.location.hash
  //       g_history.push({pathname:g_history.location.query.path,hash:hash})
  //     }
  //   }(window.g_history))`,
  // ],
  //plugins: ['@umijs/plugin-qiankun'],
});
