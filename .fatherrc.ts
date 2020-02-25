import { IBundleOptions } from 'father-build';

const options: IBundleOptions = {
  esm: 'babel',
  cjs: 'babel',
  disableTypeCheck: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
};

export default options;
