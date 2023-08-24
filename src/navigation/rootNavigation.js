import { StackActions } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
// export function push(name, params) {
//   navigationRef.current?.push(name, params);
// }
export function push(name, params) {
  navigationRef.current && navigationRef.current.dispatch(StackActions.push(name, params));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function toggleDrawer() {
  navigationRef.current?.toggleDrawer();
}