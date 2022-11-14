
export function usernameRule (rule, value, callback){
  // 以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
  let userNameReg = /^[a-zA-Z]\w{5,17}$/;
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else {
    if (!userNameReg.test(value)) {
      callback(new Error('用户名：以字母开头，长度在6~18之间，只能包含字母、数字和下划线'));
    }
    callback();
  }
}

export function passRule (rule, value, callback){
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    // rule.validateField('checkPass');
  }
  callback();
}

export function rePassRule (rule, value, callback){
  if (value === '') {
    callback(new Error('请再次输入密码'));
  // } else if (value !== '') {
    // callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}

// export function ageRule (rule, value, callback) {
//   if (!value) {
//     return callback(new Error('年龄不能为空'));
//   }
//   setTimeout(() => {
//     if (!Number.isInteger(value)) {
//       callback(new Error('请输入数字值'));
//     } else {
//       if (value < 18) {
//         callback(new Error('必须年满18岁'));
//       } else {
//         callback();
//       }
//     }
//   }, 1000);
// };

