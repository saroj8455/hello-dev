import * as common from './common/common.helper.js';
function hello__dev() {
  return 'Hi, Developer World 😎';
}

function greet() {
  return 'HI, 😊' + common.message;
}

export { hello__dev as hello, greet as greet };
