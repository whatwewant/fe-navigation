/**
* @Author: eason
* @Date:   2017-06-14T18:12:43+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-06-14T23:30:08+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';

import { View, Text, List, ListItem } from 'elfen';

import Card from './Card';

export default function Navigation(props) {
  const { name, list = [] } = props;
  return (
    <View>
      <Text
        size={24}
        color={'#f0506e'}
        align={'left'}
        paddingTop={40}
        marginRight={28}
        marginLeft={28}
        paddingBottom={30}
        style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.09)' }}
      >
        {name}
      </Text>
      <List style={{ padding: 30, display: 'flex', flexWrap: 'wrap' }}>
        {list.map((item, key) => (
          <ListItem key={key}>
            <Card
              logo={item.logo}
              name={item.name}
              description={item.description}
              homepage={item.homepage}
            />
          </ListItem>
        ))}
      </List>
    </View>
  );
}
