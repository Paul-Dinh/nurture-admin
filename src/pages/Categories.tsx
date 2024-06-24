import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TableContent from '../components/Table/TableContent';
import { loadingOff, loadingOn } from '../features/loader/loaderSlice';

function Categories() {
  const head = ['slug', 'name', 'image', 'status', 'createdAt', 'action'];

  const [body, setBody] = useState([]);
  const dispatch = useDispatch();

  const USER_TOKEN = localStorage.getItem('accessToken');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  useEffect(() => {
    async function handleLoading() {
      dispatch(loadingOn());

      // await axios
      //   .post(
      //     'https://dev-api.nurture.vinova.sg/api/v1/admins/auth/refresh-access-token',
      //     // { refreshToken: localStorage.getItem('refreshToken') },
      //     {
      //       headers: { Authorization: AuthStr },
      //     },
      //   )
      //   .then((response) => {
      //     localStorage.setItem('accessToken', response.data.data.tokens.accessToken);
      //   })
      //   .catch((err) => console.log(err));

      await axios
        .get('https://dev-api.nurture.vinova.sg/api/v1/admins/categories', {
          headers: { Authorization: AuthStr },
          params: { limit: 25, page: 1 },
        })
        .then((response) => setBody(response.data.data))
        .catch((err) => console.log(err));

      dispatch(loadingOff());
    }

    handleLoading();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AuthStr]);

  return (
    <>
      <TableContent
        head={head}
        body={body}
        setBody={setBody}
      />
    </>
  );
}

export default Categories;
