import LoginForm from '../LoginForm/LoginForm.tsx';
import styles from './Login.module.css';

Login.propTypes = {};

function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <svg
            width='101'
            height='93'
            viewBox='0 0 101 93'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_15659_9973)'>
              <path
                d='M60.0409 48.6814L50.4863 58.2017L40.9317 48.6814C39.8024 47.5561 39.8024 45.7105 40.9317 44.5852C42.0611 43.4599 43.9133 43.4599 45.0427 44.5852L50.4863 50.0092L55.9299 44.5852C57.0593 43.4599 58.9115 43.4599 60.0409 44.5852C61.1929 45.7105 61.1703 47.5335 60.0409 48.6814Z'
                fill='#FA5E92'
              />
              <path
                d='M88.6822 66.1464V73.5061C88.4784 73.3711 88.2755 73.236 88.0726 73.1234C86.2426 71.9531 84.9325 71.0979 81.9283 71.0979C78.9468 71.0979 77.6141 71.9531 75.7846 73.1234C73.6839 74.4738 71.0637 76.1619 66.1848 76.1619C61.3059 76.1619 58.6857 74.4738 56.5851 73.1234C54.7555 71.9531 53.4453 71.0979 50.4412 71.0979C47.4371 71.0979 46.127 71.9531 44.2974 73.1234C42.1967 74.4738 39.5766 76.1619 34.6977 76.1619C29.8187 76.1619 27.1985 74.4738 25.0979 73.1234C23.2683 71.9531 21.9582 71.0979 18.9541 71.0979C15.9725 71.0979 14.6399 71.9531 12.8103 73.1234C12.6295 73.236 12.4489 73.3485 12.2456 73.4835V66.1464C13.9171 65.3587 16.0177 64.7736 18.9315 64.7736C23.8105 64.7736 26.4306 66.4615 28.5313 67.8119C30.3609 68.9823 31.6709 69.8375 34.6751 69.8375C37.6792 69.8375 38.9893 68.9823 40.8189 67.8119C42.9195 66.4615 45.5397 64.7736 50.4187 64.7736C55.2976 64.7736 57.9177 66.4615 60.0184 67.8119C61.8479 68.9823 63.158 69.8375 66.1622 69.8375C69.1438 69.8375 70.4764 68.9823 72.3061 67.8119C74.4067 66.4615 77.0269 64.7736 81.9058 64.7736C84.8873 64.751 87.0104 65.3587 88.6822 66.1464Z'
                fill='#4A15AD'
              />
              <path
                d='M88.6822 82.9141V90.2508C88.4784 90.1157 88.2755 89.9815 88.0726 89.8688C86.2426 88.6986 84.9325 87.8433 81.9283 87.8433C78.9468 87.8433 77.6142 88.6986 75.7846 89.8688C73.6839 91.2188 71.0637 92.9294 66.1848 92.9294C61.3059 92.9294 58.6858 91.2412 56.5851 89.8688C54.7555 88.6986 53.4454 87.8433 50.4413 87.8433C47.4371 87.8433 46.127 88.6986 44.2974 89.8688C42.1968 91.2188 39.5766 92.9294 34.6977 92.9294C29.8187 92.9294 27.1986 91.2412 25.0979 89.8688C23.2683 88.6986 21.9583 87.8433 18.9542 87.8433C15.9725 87.8433 14.6399 88.6986 12.8103 89.8688C12.6296 89.9815 12.4489 90.0934 12.2456 90.2284V82.8915C13.9171 82.1038 16.0177 81.5187 18.9315 81.5187C23.8105 81.5187 26.4307 83.2066 28.5313 84.557C30.3609 85.7273 31.671 86.5827 34.6751 86.5827C37.6793 86.5827 38.9893 85.7273 40.8189 84.557C42.9196 83.2066 45.5397 81.5187 50.4187 81.5187C55.2976 81.5187 57.9177 83.2066 60.0184 84.557C61.848 85.7273 63.158 86.5827 66.1622 86.5827C69.1438 86.5827 70.4764 85.7273 72.3061 84.557C74.4067 83.2066 77.0269 81.5187 81.9058 81.5187C84.8873 81.4961 87.0104 82.1263 88.6822 82.9141Z'
                fill='#4A15AD'
              />
              <path
                d='M77.5462 27.4804C74.5195 24.4646 70.5214 22.9341 66.5461 22.9341C62.5707 22.9341 58.5727 24.442 55.5233 27.4804L50.4863 32.4993L45.4493 27.4804C42.3999 24.4646 38.4245 22.9341 34.4491 22.9341C30.4737 22.9341 26.4757 24.442 23.4489 27.4804C17.3728 33.5346 17.3728 43.37 23.4489 49.4243L35.4429 61.3751C35.8269 61.3077 36.1431 61.105 37.0692 60.4974C38.1082 59.8222 39.4635 58.9444 41.248 58.1792L33.3649 50.3245C31.6256 48.5915 30.677 46.2958 30.677 43.8427C30.677 41.3894 31.6482 39.0937 33.3649 37.3608C35.1041 35.6278 37.4081 34.6825 39.8701 34.6825C42.3322 34.6825 44.636 35.6278 46.3753 37.3608L46.9174 37.9009L50.5315 41.4794L54.665 37.3608C56.4043 35.6278 58.7081 34.6825 61.1702 34.6825C63.6322 34.6825 65.9362 35.6503 67.6754 37.3608C71.2669 40.9393 71.2669 46.7459 67.6754 50.3245L59.7698 58.2018C61.5316 58.967 62.8643 59.8447 63.9033 60.5199C64.8746 61.1501 65.1683 61.3301 65.5748 61.3977L77.5914 49.4243C83.6223 43.37 83.6223 33.5346 77.5462 27.4804Z'
                fill='#FA5E92'
              />
              <path
                d='M50.4864 11.6359C48.7246 11.6359 47.3015 10.2179 47.3015 8.46243V0H53.6713V8.46243C53.6713 10.2179 52.2482 11.6359 50.4864 11.6359Z'
                fill='#FA5E92'
              />
              <path
                d='M12.1778 49.7843C12.1778 51.5398 10.7547 52.9577 8.99294 52.9577H0.5V46.6108H8.99294C10.7547 46.6108 12.1778 48.0512 12.1778 49.7843Z'
                fill='#FA5E92'
              />
              <path
                d='M100.472 46.6108V52.9577H91.9801C90.2176 52.9577 88.7953 51.5398 88.7953 49.7843C88.7953 48.0288 90.2176 46.6108 91.9801 46.6108H100.472Z'
                fill='#FA5E92'
              />
              <path
                d='M17.0341 21.5387C15.7918 22.7766 13.7815 22.7766 12.5392 21.5387L6.53088 15.552L11.0258 11.0732L17.0341 17.06C18.2764 18.2978 18.2764 20.3009 17.0341 21.5387Z'
                fill='#FA5E92'
              />
              <path
                d='M83.9386 21.5387C85.1809 22.7766 87.1908 22.7766 88.4335 21.5387L94.4421 15.552L89.9473 11.0732L83.9386 17.06C82.6963 18.2978 82.6963 20.3009 83.9386 21.5387Z'
                fill='#FA5E92'
              />
            </g>
            <defs>
              <clipPath id='clip0_15659_9973'>
                <rect
                  width='100'
                  height='92.9293'
                  fill='white'
                  transform='translate(0.5)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className={styles.heading}>CMS Login</p>

        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
