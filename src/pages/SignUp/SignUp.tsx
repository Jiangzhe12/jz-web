import React from 'react'
import styles from './styles.module.less';

function SignUp() {
  return (
    <div className={styles.Login}>
      <form>
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

        <div>
          <input type="checkbox" /><label>Remember me</label>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp