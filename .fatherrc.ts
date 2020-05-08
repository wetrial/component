import { IBundleOptions } from 'father-build';

const options: IBundleOptions = {
  entry: 'src/index.ts',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
  disableTypeCheck: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
};

export default options;
