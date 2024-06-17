import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';
import TableContent from '../components/Table/TableContent';

function Admin() {
  const head = ['username', 'firstName', 'lastName', 'email', 'role', 'status', 'action'];

  const [body, setBody] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const USER_TOKEN = localStorage.getItem('accessToken');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  useEffect(() => {
    async function handleLoading() {
      setIsLoading(true);

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
        .get('https://dev-api.nurture.vinova.sg/api/v1/admins/admins', {
          headers: { Authorization: AuthStr },
        })
        .then((response) => setBody(response.data.data))
        .catch((err) => console.log(err));

      setIsLoading(false);
    }

    handleLoading();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AuthStr]);

  return (
    <>
      <Loading open={isLoading} />

      <TableContent
        head={head}
        body={body}
        setBody={setBody}
      />
    </>
  );
}

export default Admin;
