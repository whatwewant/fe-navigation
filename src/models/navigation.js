/**
* @Author: eason
* @Date:   2017-06-14T22:54:06+08:00
* @Email:  uniquecolesmith@gmail.com
 * @Last modified by:   eason
 * @Last modified time: 2017-06-15T00:29:11+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import * as services from '../services/wn';

export default {
  namespace: 'navigation',
  state: {
    currentNav: {
      key: 'community',
      name: '社区',
      value: 'community',
    },
    navs: {},
    list: {},
  },
  reducers: {
    'save/navs'({ navs, ...others }, { payload: newNavs }) { // eslint-disable-line
      return {
        ...others,
        navs: { ...navs, ...newNavs },
      };
    },
    'save/nav/content'({ list, ...others }, { nav, payload: navContent }) { // eslint-disable-line
      return {
        ...others,
        currentNav: nav,
        list: { ...list, ...navContent },
      };
    },
  },
  effects: {
    *'sync/navs'(action, { call, put }) { // eslint-disable-line
      const navs = yield call(services.fetchNavigations, 'navigations');

      if (!navs) {
        throw new Error('navs is null');
      }

      yield put({ type: 'save/navs', payload: navs });
    },
    *'fire/nav'({ payload: nav }, { call, put }) { // eslint-disable-line
      const { key } = nav;
      const navContent = yield call(services.fetchNavigations, key);

      // if (!navContent) {
      //   throw new Error('navs is null');
      // }

      yield put({ type: 'save/nav/content', nav, payload: { [key]: navContent || {} } });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'sync/navs' });
      dispatch({ type: 'fire/nav', payload: { name: '社区', key: 'community', value: 'community' } });
    },
  },
};
