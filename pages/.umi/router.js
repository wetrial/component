import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: props =>
      React.createElement(
        require('E:/Study/Project/Wetrial/wetrial-component/node_modules/umi-plugin-father-doc/lib/themes/default/layout.js')
          .default,
        {
          ...{
            menus: {
              '*': {
                '*': [
                  {
                    path: '/',
                    title: 'README',
                    meta: { locale: 'zh-CN', title: 'README', order: null },
                  },
                  {
                    title: '通用',
                    path: '/common',
                    meta: { order: 1000 },
                    children: [
                      {
                        path: '/common/exception',
                        title: 'Exception 异常',
                        meta: {
                          title: 'Exception 异常',
                          group: {
                            title: '通用',
                            path: '/common',
                            order: 1000,
                          },
                          slugs: [
                            { depth: 1, value: '案例', heading: '案例' },
                            { depth: 2, value: '403', heading: '403' },
                            { depth: 2, value: '404', heading: '404' },
                            { depth: 2, value: '500', heading: '500' },
                            { depth: 1, value: 'API', heading: 'api' },
                          ],
                        },
                      },
                      {
                        path: '/common/authorized',
                        title: 'Authorized 权限',
                        meta: {
                          title: 'Authorized 权限',
                          group: {
                            title: '通用',
                            path: '/common',
                            order: 1000,
                          },
                          slugs: [
                            { depth: 1, value: '案例', heading: '案例' },
                            {
                              depth: 2,
                              value: '基本使用',
                              heading: '基本使用',
                            },
                            { depth: 1, value: 'API', heading: 'api' },
                            {
                              depth: 2,
                              value: 'RenderAuthorized',
                              heading: 'renderauthorized',
                            },
                            {
                              depth: 2,
                              value: 'Authorized',
                              heading: 'authorized',
                            },
                            {
                              depth: 2,
                              value: 'Authorized.AuthorizedRoute',
                              heading: 'authorizedauthorizedroute',
                            },
                            {
                              depth: 2,
                              value: 'Authorized.Secured',
                              heading: 'authorizedsecured',
                            },
                            {
                              depth: 2,
                              value: 'Authorized.check',
                              heading: 'authorizedcheck',
                            },
                            {
                              depth: 2,
                              value: 'Authorized.hasPermissions',
                              heading: 'authorizedhaspermissions',
                            },
                          ],
                        },
                      },
                      {
                        path: '/common/scroll-bar',
                        title: 'ScrollBar 滚动条',
                        meta: {
                          title: 'ScrollBar 滚动条',
                          group: {
                            title: '通用',
                            path: '/common',
                            order: 1000,
                          },
                          slugs: [
                            { depth: 1, value: '案例', heading: '案例' },
                            {
                              depth: 2,
                              value: '基础使用',
                              heading: '基础使用',
                            },
                            {
                              depth: 2,
                              value: '自定隐藏滚动条',
                              heading: '自定隐藏滚动条',
                            },
                            {
                              depth: 2,
                              value: '自动高度',
                              heading: '自动高度',
                            },
                            {
                              depth: 2,
                              value: 'universal',
                              heading: 'universal',
                            },
                            {
                              depth: 2,
                              value: '滚动条事件',
                              heading: '滚动条事件',
                            },
                            {
                              depth: 2,
                              value: '自定义滚动条',
                              heading: '自定义滚动条',
                            },
                            { depth: 1, value: 'API', heading: 'api' },
                            { depth: 1, value: 'Methods', heading: 'methods' },
                            {
                              depth: 2,
                              value: 'positionValues',
                              heading: 'positionvalues',
                            },
                          ],
                        },
                      },
                      {
                        path: '/common/footer-toolbar',
                        title: 'FooterToolbar 底部工具栏',
                        meta: {
                          title: 'FooterToolbar 底部工具栏',
                          group: {
                            title: '通用',
                            path: '/common',
                            order: 1000,
                          },
                          slugs: [
                            { depth: 1, value: '案例', heading: '案例' },
                            {
                              depth: 2,
                              value: '基础使用',
                              heading: '基础使用',
                            },
                            { depth: 1, value: 'API', heading: 'api' },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    title: '数据录入',
                    path: '/data-display',
                    meta: { order: 900 },
                    children: [
                      {
                        path: '/data-display/index.',
                        title: 'AvatarList 头像列表',
                        meta: {
                          title: 'AvatarList 头像列表',
                          group: {
                            title: '数据展示',
                            path: '/data-display',
                            order: 600,
                          },
                          slugs: [
                            {
                              depth: 1,
                              value: 'AvatarList 头像列表',
                              heading: 'avatarlist-头像列表',
                            },
                            { depth: 1, value: '案例', heading: '案例' },
                            {
                              depth: 2,
                              value: '简单案例',
                              heading: '简单案例',
                            },
                            {
                              depth: 2,
                              value: '带最大数量',
                              heading: '带最大数量',
                            },
                            { depth: 1, value: 'API', heading: 'api' },
                            {
                              depth: 2,
                              value: 'AvatarList',
                              heading: 'avatarlist',
                            },
                            {
                              depth: 2,
                              value: 'AvatarList.Item',
                              heading: 'avatarlistitem',
                            },
                          ],
                        },
                      },
                      {
                        path: '/data-display/ellipsis',
                        title: 'Ellipsis 超出省略',
                        meta: {
                          title: 'Ellipsis 超出省略',
                          group: {
                            title: '数据展示',
                            path: '/data-display',
                            order: 100,
                          },
                          slugs: [
                            { depth: 1, value: '案例', heading: '案例' },
                            {
                              depth: 2,
                              value: '指定行数',
                              heading: '指定行数',
                            },
                            {
                              depth: 2,
                              value: '指定字数',
                              heading: '指定字数',
                            },
                            {
                              depth: 2,
                              value: '悬浮提示',
                              heading: '悬浮提示',
                            },
                            { depth: 1, value: 'API', heading: 'api' },
                          ],
                        },
                      },
                      {
                        path: '/data-display/select-plus',
                        title: 'SelectPlus 下拉选择',
                        meta: {
                          title: 'SelectPlus 下拉选择',
                          group: {
                            title: '数据录入',
                            path: '/data-display',
                            order: 900,
                          },
                          slugs: [
                            { depth: 1, value: '案例', heading: '案例' },
                            {
                              depth: 2,
                              value: '基础使用',
                              heading: '基础使用',
                            },
                            {
                              depth: 2,
                              value: '指定 keyName、label',
                              heading: '指定-keyname、label',
                            },
                            { depth: 2, value: '案例', heading: '案例-1' },
                            { depth: 1, value: 'API', heading: 'api' },
                            {
                              depth: 2,
                              value: 'SelectPlus',
                              heading: 'selectplus',
                            },
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
            },
            locales: [],
            navs: {},
            title: 'Wetrial',
            logo: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',
            mode: 'doc',
            repoUrl: 'https://github.com/wetrial/component',
          },
          ...props,
        },
      ),
    routes: [
      {
        path: '/',
        component: require('../../README.md').default,
        exact: true,
        meta: {
          locale: 'zh-CN',
          title: 'README',
          order: null,
        },
        title: 'README',
        _title: 'Wetrial - README',
        _title_default: 'Wetrial',
      },
      {
        path: '/common/authorized',
        component: require('../../src/Authorized/index.md').default,
        exact: true,
        meta: {
          title: 'Authorized 权限',
          group: {
            title: '通用',
            path: '/common',
            order: 1000,
          },
          slugs: [
            {
              depth: 1,
              value: '案例',
              heading: '案例',
            },
            {
              depth: 2,
              value: '基本使用',
              heading: '基本使用',
            },
            {
              depth: 1,
              value: 'API',
              heading: 'api',
            },
            {
              depth: 2,
              value: 'RenderAuthorized',
              heading: 'renderauthorized',
            },
            {
              depth: 2,
              value: 'Authorized',
              heading: 'authorized',
            },
            {
              depth: 2,
              value: 'Authorized.AuthorizedRoute',
              heading: 'authorizedauthorizedroute',
            },
            {
              depth: 2,
              value: 'Authorized.Secured',
              heading: 'authorizedsecured',
            },
            {
              depth: 2,
              value: 'Authorized.check',
              heading: 'authorizedcheck',
            },
            {
              depth: 2,
              value: 'Authorized.hasPermissions',
              heading: 'authorizedhaspermissions',
            },
          ],
        },
        title: 'Authorized 权限',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial - Authorized 权限',
        _title_default: 'Wetrial',
      },
      {
        path: '/data-display/index.',
        component: require('../../src/AvatarList/index..md').default,
        exact: true,
        meta: {
          title: 'AvatarList 头像列表',
          group: {
            title: '数据展示',
            path: '/data-display',
            order: 600,
          },
          slugs: [
            {
              depth: 1,
              value: 'AvatarList 头像列表',
              heading: 'avatarlist-头像列表',
            },
            {
              depth: 1,
              value: '案例',
              heading: '案例',
            },
            {
              depth: 2,
              value: '简单案例',
              heading: '简单案例',
            },
            {
              depth: 2,
              value: '带最大数量',
              heading: '带最大数量',
            },
            {
              depth: 1,
              value: 'API',
              heading: 'api',
            },
            {
              depth: 2,
              value: 'AvatarList',
              heading: 'avatarlist',
            },
            {
              depth: 2,
              value: 'AvatarList.Item',
              heading: 'avatarlistitem',
            },
          ],
        },
        title: 'AvatarList 头像列表',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial - AvatarList 头像列表',
        _title_default: 'Wetrial',
      },
      {
        path: '/data-display/ellipsis',
        component: require('../../src/Ellipsis/index.md').default,
        exact: true,
        meta: {
          title: 'Ellipsis 超出省略',
          group: {
            title: '数据展示',
            path: '/data-display',
            order: 100,
          },
          slugs: [
            {
              depth: 1,
              value: '案例',
              heading: '案例',
            },
            {
              depth: 2,
              value: '指定行数',
              heading: '指定行数',
            },
            {
              depth: 2,
              value: '指定字数',
              heading: '指定字数',
            },
            {
              depth: 2,
              value: '悬浮提示',
              heading: '悬浮提示',
            },
            {
              depth: 1,
              value: 'API',
              heading: 'api',
            },
          ],
        },
        title: 'Ellipsis 超出省略',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial - Ellipsis 超出省略',
        _title_default: 'Wetrial',
      },
      {
        path: '/common/exception',
        component: require('../../src/Exception/index.md').default,
        exact: true,
        meta: {
          title: 'Exception 异常',
          group: {
            title: '通用',
            path: '/common',
            order: 1000,
          },
          slugs: [
            {
              depth: 1,
              value: '案例',
              heading: '案例',
            },
            {
              depth: 2,
              value: '403',
              heading: '403',
            },
            {
              depth: 2,
              value: '404',
              heading: '404',
            },
            {
              depth: 2,
              value: '500',
              heading: '500',
            },
            {
              depth: 1,
              value: 'API',
              heading: 'api',
            },
          ],
        },
        title: 'Exception 异常',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial - Exception 异常',
        _title_default: 'Wetrial',
      },
      {
        path: '/common/footer-toolbar',
        component: require('../../src/FooterToolbar/index.md').default,
        exact: true,
        meta: {
          title: 'FooterToolbar 底部工具栏',
          group: {
            title: '通用',
            path: '/common',
            order: 1000,
          },
          slugs: [
            {
              depth: 1,
              value: '案例',
              heading: '案例',
            },
            {
              depth: 2,
              value: '基础使用',
              heading: '基础使用',
            },
            {
              depth: 1,
              value: 'API',
              heading: 'api',
            },
          ],
        },
        title: 'FooterToolbar 底部工具栏',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial - FooterToolbar 底部工具栏',
        _title_default: 'Wetrial',
      },
      {
        path: '/common/scroll-bar',
        component: require('../../src/ScrollBar/index.md').default,
        exact: true,
        meta: {
          title: 'ScrollBar 滚动条',
          group: {
            title: '通用',
            path: '/common',
            order: 1000,
          },
          slugs: [
            {
              depth: 1,
              value: '案例',
              heading: '案例',
            },
            {
              depth: 2,
              value: '基础使用',
              heading: '基础使用',
            },
            {
              depth: 2,
              value: '自定隐藏滚动条',
              heading: '自定隐藏滚动条',
            },
            {
              depth: 2,
              value: '自动高度',
              heading: '自动高度',
            },
            {
              depth: 2,
              value: 'universal',
              heading: 'universal',
            },
            {
              depth: 2,
              value: '滚动条事件',
              heading: '滚动条事件',
            },
            {
              depth: 2,
              value: '自定义滚动条',
              heading: '自定义滚动条',
            },
            {
              depth: 1,
              value: 'API',
              heading: 'api',
            },
            {
              depth: 1,
              value: 'Methods',
              heading: 'methods',
            },
            {
              depth: 2,
              value: 'positionValues',
              heading: 'positionvalues',
            },
          ],
        },
        title: 'ScrollBar 滚动条',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial - ScrollBar 滚动条',
        _title_default: 'Wetrial',
      },
      {
        path: '/data-display/select-plus',
        component: require('../../src/SelectPlus/index.md').default,
        exact: true,
        meta: {
          title: 'SelectPlus 下拉选择',
          group: {
            title: '数据录入',
            path: '/data-display',
            order: 900,
          },
          slugs: [
            {
              depth: 1,
              value: '案例',
              heading: '案例',
            },
            {
              depth: 2,
              value: '基础使用',
              heading: '基础使用',
            },
            {
              depth: 2,
              value: '指定 keyName、label',
              heading: '指定-keyname、label',
            },
            {
              depth: 2,
              value: '案例',
              heading: '案例-1',
            },
            {
              depth: 1,
              value: 'API',
              heading: 'api',
            },
            {
              depth: 2,
              value: 'SelectPlus',
              heading: 'selectplus',
            },
          ],
        },
        title: 'SelectPlus 下拉选择',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Wetrial - SelectPlus 下拉选择',
        _title_default: 'Wetrial',
      },
      {
        path: '/common',
        meta: {
          order: 1000,
        },
        exact: true,
        redirect: '/common/exception',
        _title: 'Wetrial',
        _title_default: 'Wetrial',
      },
      {
        path: '/data-display',
        meta: {
          order: 600,
        },
        exact: true,
        redirect: '/data-display/index.',
        _title: 'Wetrial',
        _title_default: 'Wetrial',
      },
      {
        component: () =>
          React.createElement(
            require('E:/Study/Project/Wetrial/wetrial-component/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'pages', hasRoutesInConfig: false },
          ),
        _title: 'Wetrial',
        _title_default: 'Wetrial',
      },
    ],
    title: 'Wetrial',
    _title: 'Wetrial',
    _title_default: 'Wetrial',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
