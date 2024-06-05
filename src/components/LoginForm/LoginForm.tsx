import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";

LoginForm.propTypes = {};

function LoginForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label className={styles.label}>Username or email</label>
      <input
        {...register("username")}
        className={styles.input__text}
        placeholder="Username or email"
        type="text"
      />
      {/* <TextField
        // className={styles.input__text}
        id='outlined-basic'
        variant='outlined'
        error
      /> */}
      <label className={styles.label}>Password</label>
      <input
        {...register("password")}
        className={styles.input__text}
        placeholder="Password"
        type="password"
      />
      {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl> */}
      <div className={styles.btn}>
        <button type="submit" className={styles.btn__login}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
