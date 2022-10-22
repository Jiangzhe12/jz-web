import React from 'react'
import styles from './styles.module.less';

function SignUp() {
  return (
    <div className={styles.Login}>
      <form>
        <h1>用户登录</h1>
        <div>
          <label>
            username:
            <input type="text" placeholder='请输入用户名' />
          </label>
        </div>

        <div>
          <label>
            password:
            <input type="password" placeholder='请输入密码' />
          </label>
        </div>

        <button type='submit'>Submit</button>
        <button type='reset'>Register</button>
      </form>
    </div>
  );
}

export default SignUp