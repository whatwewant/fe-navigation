/**
* @Author: eason
* @Date:   2017-01-04T17:00:03+08:00
* @Email:  uniquecolesmith@gmail.com
 * @Last modified by:   eason
 * @Last modified time: 2017-06-16T01:02:12+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import dva from 'dva';
import OfflinePluginRuntime from 'offline-plugin/runtime';
import './index.css';

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/navigation'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
