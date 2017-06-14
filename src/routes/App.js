/**
* @Author: eason
* @Date:   2016-12-15T13:48:42+08:00
* @Email:  uniquecolesmith@gmail.com
 * @Last modified by:   eason
 * @Last modified time: 2017-06-15T01:01:59+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';
import { connect } from 'dva';
import { View, Flex } from 'elfen';
import styles from './App.css';

import Navigation from '../components/Navigation';
import NavigationContent from '../components/NavigationContent';

function IndexPage(props) {
  return (
    <Flex width="100%" height="100%" className={styles.normal}>
      <View width={280} style={{ boxShadow: '0 5px 15px rgba(0,0,0,.08)' }}>
        <Navigation navigations={props.navs} onSelectNav={props.onSelectNav} />
      </View>
      <View flex={1}>
        <NavigationContent name={props.name} list={props.list} />
      </View>
    </Flex>
  );
}

IndexPage.propTypes = {
};

const mapState = ({ navigation }) => {
  const { currentNav, navs, list } = navigation;
  return {
    navs: Object.values(navs || {}).sort((a, b) => b.index < a.x),
    name: currentNav.name,
    list: Object.values(list[currentNav.key] || {}).sort((a, b) => b.index < a.x),
  };
};

const mapDispatch = dispatch => ({
  onSelectNav(nav) {
    dispatch({ type: 'navigation/fire/nav', payload: nav });
  },
});

export default connect(mapState, mapDispatch)(IndexPage);
