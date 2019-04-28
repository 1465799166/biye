import React from 'react';
import ReactDom from 'react-dom';
import App from '@containers/App/App';
import './normalize.css';
import Compute from 'auto-compute-first-screen-time'

ReactDom.render(<App />, document.getElementById('root'));
Compute.report({
  // required: false
  onReport: function (result) {
      if (result.success) {
          console.log('首屏时间：' + result.firstScreenTime + 'ms')
      } else {
          console.log(result);
      }
  }
});

if (module.hot) {
  module.hot.accept();
}
