import React from 'react';
import { Result } from 'antd';
import check, { IAuthorityType, hasPermissions } from './CheckPermissions';

import AuthorizedRoute from './AuthorizedRoute';
import Secured from './Secured';

interface AuthorizedProps {
  authority: IAuthorityType;
  noMatch?: React.ReactNode;
}

type IAuthorizedType = React.FunctionComponent<AuthorizedProps> & {
  Secured: typeof Secured;
  check: typeof check;
  AuthorizedRoute: typeof AuthorizedRoute;
  hasPermissions: typeof hasPermissions;
};

const Authorized: React.FunctionComponent<AuthorizedProps> = ({
  children,
  authority,
  noMatch = (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  ),
}) => {
  const childrenRender: React.ReactNode = typeof children === 'undefined' ? null : children;
  const dom = check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized as IAuthorizedType;
