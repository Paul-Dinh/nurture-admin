import LoginForm from '../LoginForm/LoginForm.tsx';
import styles from './Login.module.css';
import ImageLogo from '../../assets/images/logo.svg';

function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={ImageLogo} />
        </div>
        <p className={styles.heading}>CMS Login</p>

        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
