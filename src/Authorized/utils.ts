import React from 'react';

export const isComponentClass = (
  component: React.ComponentClass<any, any> | React.ReactNode,
): boolean => {
  if (!component) {
    return false;
  }
  const proto = Object.getPrototypeOf(component);
  if (proto === React.Component || proto === Function.prototype) {
    return true;
  }
  return isComponentClass(proto);
};
