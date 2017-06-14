/**
* @Author: eason
* @Date:   2017-06-14T22:54:06+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-06-14T23:22:11+08:00
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
    'save/nav/content'({ list, ...others }, { nav, payload: navContent }) { // eslint-disable-line
      return {
        ...others,
        currentNav: nav,
        list: { ...list, ...navContent },
      };
    },
  },
  effects: {
    *'fire/nav'({ payload: nav }, { call, put }) { // eslint-disable-line
      const { key } = nav;
      const navContent = yield call(services.fetchNavigations, key);

      if (!nav) {
        throw new Error('nav is null');
      }

      yield put({ type: 'save/nav/content', nav, payload: { [key]: navContent } });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'fire/nav', payload: { name: '社区', key: 'community', value: 'community' } });
    },
  },
};
