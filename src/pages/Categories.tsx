import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../api/AxiosConfig';
import TableContent from '../components/Table/TableContent';
import { bodyValue, setBody } from '../features/body/bodySlice';
import { loadingOff, loadingOn } from '../features/loader/loaderSlice';

function Categories() {
  const head = ['slug', 'name', 'image', 'status', 'createdAt', 'action'];

  const dispatch = useDispatch();
  const body = useSelector(bodyValue);

  const USER_TOKEN = localStorage.getItem('accessToken');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  useEffect(() => {
    async function handleLoading() {
      dispatch(loadingOn());

      await instance
        .get('admins/categories', {
          headers: { Authorization: AuthStr },
          params: { limit: 25, page: 1 },
        })
        .then((response) => dispatch(setBody(response.data.data)))
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
      />
    </>
  );
}

export default Categories;
