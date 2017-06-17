/**
* @Author: eason
* @Date:   2016-12-15T13:48:42+08:00
* @Email:  uniquecolesmith@gmail.com
 * @Last modified by:   eason
 * @Last modified time: 2017-06-18T03:46:18+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';
import { connect } from 'dva';
import { View, Flex } from 'elfen';
import Helmet from 'react-helmet';
import Beat from 'respinner/lib/beat';

import styles from './App.css';

import Navigation from '../components/Navigation';
import NavigationContent from '../components/NavigationContent';

import logo from '../assets/logo.png';

function IndexPage(props) {
  return (
    <Flex width="100%" height="100%" className={styles.normal}>
      <Helmet>
        <link rel="shortcut icon" href={logo} />
      </Helmet>
      <View width={280} style={{ boxShadow: '0 5px 15px rgba(0,0,0,.08)' }}>
        {props.navs.length === 0
          ? <Beat style={{ marginTop: 100 }} fill="#4197ff" count={4} />
          : <Navigation navigations={props.navs} onSelectNav={props.onSelectNav} />
        }
      </View>
      <View flex={1}>
        {props.list.length
          ? <NavigationContent name={props.name} list={props.list} />
        : null}
      </View>
    </Flex>
  );
}

IndexPage.propTypes = {
};

const mapState = ({ navigation }) => {
  const { currentNav, navs, list } = navigation;
  return {
    navs: Object.values(navs || {}).sort((a, b) => a.index - b.index),
    name: currentNav.name,
    list: Object.values(list[currentNav.key] || {}).sort((a, b) => a.index - b.index),
  };
};

const mapDispatch = dispatch => ({
  onSelectNav(nav) {
    dispatch({ type: 'navigation/fire/nav', payload: nav });
  },
});

export default connect(mapState, mapDispatch)(IndexPage);
