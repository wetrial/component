import { checkPermissions } from './CheckPermissions';

const target = 'ok';
const error = 'error';

describe('test CheckPermissions', () => {
  it('failing string permission authentication', () => {
    expect(checkPermissions('user', 'user', target, error)).toEqual('ok');
  });

  it('Correct string permission authentication', () => {
    expect(checkPermissions('user', 'NULL', target, error)).toEqual('error');
  });
  it('authority is undefined , return ok', () => {
    expect(checkPermissions(undefined, 'NULL', target, error)).toEqual('ok');
  });
  it('currentAuthority is undefined , return error', () => {
    expect(checkPermissions('admin', '', target, error)).toEqual('error');
  });
  it('Wrong string permission authentication', () => {
    expect(checkPermissions('admin', 'user', target, error)).toEqual('error');
  });
  it('Correct Array permission authentication', () => {
    expect(checkPermissions(['user', 'admin'], 'user', target, error)).toEqual('ok');
  });
  it('Wrong Array permission authentication,currentAuthority error', () => {
    expect(checkPermissions(['user', 'admin'], 'user,admin', target, error)).toEqual('error');
  });
  it('Wrong Array permission authentication', () => {
    expect(checkPermissions(['user', 'admin'], 'guest', target, error)).toEqual('error');
  });
  it('Wrong Function permission authentication', () => {
    expect(checkPermissions(() => false, 'guest', target, error)).toEqual('error');
  });
  it('Correct Function permission authentication', () => {
    expect(checkPermissions(() => true, 'guest', target, error)).toEqual('ok');
  });
  it('authority is string, currentAuthority is array, return ok', () => {
    expect(checkPermissions('user', ['user'], target, error)).toEqual('ok');
  });

  it('authority is string, currentAuthority is array, return ok1', () => {
    expect(checkPermissions('user', ['user', 'admin'], target, error)).toEqual('ok');
  });
  it('authority is array, currentAuthority is array, return ok', () => {
    expect(checkPermissions(['user', 'admin'], ['user', 'admin'], target, error)).toEqual('ok');
  });

  it('Wrong Function permission authentication1', () => {
    expect(checkPermissions(() => false, ['user'], target, error)).toEqual('error');
  });

  it('Correct Function permission authentication2', () => {
    expect(checkPermissions(() => true, ['user'], target, error)).toEqual('ok');
  });

  it('authority is undefined , return ok1', () => {
    expect(checkPermissions(undefined, ['user'], target, error)).toEqual('ok');
  });
});
