/**
* @Author: eason
* @Date:   2017-06-14T22:46:09+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-06-14T23:01:01+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import firebase from 'firebase';

const api = firebase.initializeApp({ databaseURL: 'https://web-navigation.firebaseio.com' }).database().ref();

export async function fetch(child) {
  const snapshot = await api.child(child).once('value');
  return snapshot.val();
}

export async function fetchNavigations(name) {
  return await fetch(name);
}
