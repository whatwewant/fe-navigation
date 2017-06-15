/**
* @Author: eason
* @Date:   2017-06-14T18:12:43+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-06-15T09:29:40+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';

import { View, Absolute, Text, List, ListItem } from 'elfen';

import Card from './Card';

export default function Navigation(props) {
  const { name, list = [] } = props;
  return (
    <View position="relative" width="100%" height="100%">
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
      <Absolute top={107} right={0} bottom={0} left={0}>
        <List width="100%" height="100%" style={{ padding: 30, display: 'flex', flexWrap: 'wrap' }}>
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
      </Absolute>
    </View>
  );
}
