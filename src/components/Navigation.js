/**
* @Author: eason
* @Date:   2017-06-14T18:12:32+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-06-14T22:06:12+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';

import { View, Text, List, ListItem } from 'elfen';

import styles from './Navigation.less';

export default class Navigation extends PureComponent {
  static defaultProps = {
    navigations: [
      { name: '社区', key: 'community', value: 'community' },
      { name: '团队组织', key: 'team', value: 'team' },
      { name: '大牛博客', key: 'somebody', value: 'somebody' },
      { name: 'UI框架', key: 'uiframework', value: 'uiframework' },
      { name: '构建工具', key: 'build-tools', value: 'build-tools' },
    ],
  };

  render() {
    const { navigations, onSelectNav } = this.props;
    return (
      <View>
        <Text paddingTop={20} paddingBottom={20} size={24} color={'#f0506e'}>前端</Text>
        <List className={styles.list}>
          {navigations.map(nav => (
            <ListItem
              key={nav.key}
              className={styles.item}
              onClick={() => onSelectNav(nav)}
            >
              {nav.name}
            </ListItem>
          ))}
        </List>
      </View>
    );
  }
}
