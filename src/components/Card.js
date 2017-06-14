/**
* @Author: eason
* @Date:   2017-06-14T21:47:24+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-06-14T23:28:03+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import React from 'react';

import { View, Flex, Avatar, Text } from 'elfen';

import styles from './Card.less';

export default function Card({ logo, name, description, homepage }) {
  return (
    <View width={300} height={185.4} className={styles.card}>
      <Flex align="center" className={styles.header}>
        <Avatar className={styles.avatar} src={logo} />
        <Text>{name}</Text>
      </Flex>
      <Text className={styles.body} align={'left'}>{description}</Text>
      <Flex justify={'flex-end'} position={'absolute'} right={20} bottom={20}>
        <a
          style={{ fontSize: 12, textDecoration: 'none', color: '#000', marginRight: 8 }}
          href={homepage}
          rel="noopener noreferrer"
          target="_blank"
        >
          前往
        </a>
        <a href={homepage} style={{ display: 'none', fontSize: 12, textDecoration: 'none', color: '#000' }}>点赞</a>
      </Flex>
    </View>
  );
}
