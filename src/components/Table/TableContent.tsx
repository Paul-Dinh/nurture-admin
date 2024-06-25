import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../../api/AxiosConfig.tsx';
import { setBody } from '../../features/body/bodySlice.ts';
import { currentPageName } from '../../features/currentPageName/currentPageNameSlice.ts';
import { loadingOff, loadingOn } from '../../features/loader/loaderSlice.ts';
import { marginValue } from '../../features/margin/marginSlice.ts';
import CreateAdminManagement from '../CreateAdminManagement/CreateAdminManagement.tsx';
import CreateArticle from '../CreateArticle/CreateArticle.tsx';
import CreateCategory from '../CreateCategory/CreateCategory.tsx';
import CreatePD from '../CreatePD/CreatePD.tsx';
import CreateStaticContent from '../CreateStaticContent/CreateStaticContent.tsx';
import DeleteForm from '../DeleteForm/DeleteForm.tsx';
import { StatusPoint } from '../StatusPoint/StatusPoint.tsx';
import styles from './TableContent.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TableRowData = Record<string, any>;

type Props = {
  head: Array<string>;
  body: TableRowData[];
};

function TableContent({ head, body }: Props) {
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const [index, setIndex] = useState(-1);
  const [selectedRow, setSelectedRow] = useState({});
  const [slug, setSlug] = useState('');
  const [id, setId] = useState('');
  const [ids, setIds] = useState('');

  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageName);

  const [openCreateStatic, setOpenCreateStatic] = useState(false);
  const [openCreateAdmin, setOpenCreateAdmin] = useState(false);
  const [openCreateArticle, setOpenCreateArticle] = useState(false);
  const [openCreatePD, setOpenCreatePD] = useState(false);
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  const handleUpdateForm = (currentPage: string) => {
    if (currentPage === 'Static Content') setOpenCreateStatic(true);
    if (currentPage === 'Admin Management') setOpenCreateAdmin(true);
    if (currentPage === 'Article') setOpenCreateArticle(true);
    if (currentPage === 'PD Session') setOpenCreatePD(true);
    if (currentPage === 'Category') setOpenCreateCategory(true);
  };

  const handleUpdateClick = (idx: number, item: TableRowData) => {
    handleUpdateForm(currentPage);
    setIndex(idx);
    setSelectedRow(item);
  };

  const handleDeleteClick = (idx: number, item: TableRowData) => {
    setOpenDeleteForm(true);
    setIndex(idx);
    setSlug(item.slug ?? '');
    setId(item.id ?? '');
    setIds(item.id ?? '');
  };

  const handleDeleteConfirm = () => {
    dispatch(loadingOn());
    const updatedBody = [...body];
    updatedBody.splice(index, 1);
    dispatch(setBody(updatedBody));

    const USER_TOKEN = localStorage.getItem('accessToken');
    const AuthStr = 'Bearer ' + USER_TOKEN;

    if (currentPage === 'Static Content') {
      instance
        .delete('admins/static-content/' + slug, {
          headers: { Authorization: AuthStr },
        })
        .then((response) => console.log(response.data.data))
        .catch((err) => console.log(err));
    }

    if (currentPage === 'Admin Management') {
      instance
        .delete('admins/admins/' + id, {
          headers: { Authorization: AuthStr },
        })
        .then((response) => console.log(response.data.data))
        .catch((err) => console.log(err));
    }

    if (currentPage === 'Article' || currentPage === 'PD Session') {
      instance
        .delete('admins/articles', {
          headers: { Authorization: AuthStr },
          data: {
            ids: [ids],
          },
        })
        .then((response) => console.log(response.data.data))
        .catch((err) => console.log(err));
    }

    if (currentPage === 'Category') {
      instance
        .delete('admins/categories', {
          headers: { Authorization: AuthStr },
          data: {
            ids: [ids],
          },
        })
        .then((response) => console.log(response.data.data))
        .catch((err) => console.log(err));
    }

    dispatch(loadingOff());
    setOpenDeleteForm(false);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const marginTest = useSelector(marginValue);

  return (
    <>
      <div
        className={styles.wrapper}
        style={{ marginLeft: marginTest, transition: 'margin-left 0.35s' }}
      >
        <TableContainer
          sx={{
            height: 'calc(100% - 52px)',
            border: '1px solid #b3b9c4',
          }}
        >
          <Table
            sx={{ minWidth: 650 }}
            size='small'
          >
            <TableHead sx={{ height: 60 }}>
              <TableRow className={styles.table_header_row}>
                {head.map((item) => (
                  <TableCell
                    key={item}
                    className={`${styles.table_cell} ${styles.table_cell_header} ${styles.table_header_action}`}
                  >
                    <div className={styles.table_header}>
                      {capitalizeFirstLetter(item)}
                      <span>
                        <svg
                          width='15'
                          height='15'
                          viewBox='0 0 15 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.64231 1.90736C7.79322 1.71708 8.08885 1.71708 8.23975 1.90736L11.3915 5.88141C11.5823 6.12203 11.4056 6.47053 11.0928 6.47053L4.78929 6.47053C4.47646 6.47053 4.29975 6.12203 4.49057 5.88141L7.64231 1.90736Z'
                            fill='#808080'
                          />
                          <path
                            d='M7.64231 12.7985C7.79322 12.9888 8.08885 12.9888 8.23975 12.7985L11.3915 8.82447C11.5823 8.58386 11.4056 8.23535 11.0928 8.23535L4.78929 8.23535C4.47646 8.23535 4.29975 8.58386 4.49057 8.82447L7.64231 12.7985Z'
                            fill='#808080'
                          />
                        </svg>
                      </span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {body.map((item, idx) => (
                <TableRow
                  key={item.id}
                  className={styles.row}
                >
                  {head.slice(0, -1).map((field) => (
                    <TableCell
                      key={field}
                      className={styles.table_cell}
                    >
                      {(() => {
                        if (field === 'status') {
                          return (
                            <>
                              <StatusPoint status={capitalizeFirstLetter(item.status)} />
                              {capitalizeFirstLetter(item.status)}
                            </>
                          );
                        } else if (field === 'required') {
                          return item['isRequired'] ? 'Yes' : 'No';
                        } else if (field === 'image') {
                          return (
                            <img
                              src={item[field]}
                              alt='image'
                              width='30px'
                            />
                          );
                        } else if (field === 'createdAt') {
                          return new Date(item[field]).toLocaleString();
                        } else {
                          return item[field];
                        }
                      })()}
                    </TableCell>
                  ))}
                  <TableCell
                    aria-label='sticky'
                    className={`${styles.table_cell} ${styles.table_cell_action}`}
                  >
                    <div className={styles.action}>
                      <span
                        className={styles.update_btn}
                        onClick={() => handleUpdateClick(idx, item)}
                      >
                        <svg
                          viewBox='0 0 34 26'
                          width='34'
                          height='34'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M16.25 19C16.25 18.5858 16.5858 18.25 17 18.25H23.75C24.1642 18.25 24.5 18.5858 24.5 19C24.5 19.4142 24.1642 19.75 23.75 19.75H17C16.5858 19.75 16.25 19.4142 16.25 19Z'
                            fill='#FA5E92'
                          ></path>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M21.5 6.909C21.277 6.909 21.0631 6.9976 20.9053 7.15532L11.6772 16.3834L11.2808 17.9692L12.8666 17.5728L22.0947 8.34466C22.1728 8.26656 22.2347 8.17385 22.277 8.07182C22.3193 7.96979 22.341 7.86043 22.341 7.74999C22.341 7.63955 22.3193 7.53019 22.277 7.42815C22.2347 7.32612 22.1728 7.23341 22.0947 7.15532C22.0166 7.07722 21.9239 7.01528 21.8218 6.97301C21.7198 6.93075 21.6105 6.909 21.5 6.909ZM19.8447 6.09466C20.2837 5.65564 20.8791 5.409 21.5 5.409C21.8074 5.409 22.1119 5.46955 22.3959 5.58719C22.6799 5.70484 22.938 5.87728 23.1553 6.09466C23.3727 6.31204 23.5452 6.57011 23.6628 6.85413C23.7805 7.13815 23.841 7.44256 23.841 7.74999C23.841 8.05741 23.7805 8.36182 23.6628 8.64584C23.5452 8.92987 23.3727 9.18794 23.1553 9.40532L13.7803 18.7803C13.6842 18.8764 13.5638 18.9446 13.4319 18.9776L10.4319 19.7276C10.1763 19.7915 9.90597 19.7166 9.71969 19.5303C9.5334 19.344 9.45851 19.0737 9.52241 18.8181L10.2724 15.8181C10.3054 15.6862 10.3736 15.5658 10.4697 15.4697L19.8447 6.09466Z'
                            fill='#FA5E92'
                          ></path>
                        </svg>
                      </span>
                      <span
                        className={styles.delete_btn}
                        onClick={() => handleDeleteClick(idx, item)}
                      >
                        <svg
                          viewBox='0 0 34 26'
                          width='34'
                          height='34'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.5 8.5C9.5 8.08579 9.83579 7.75 10.25 7.75H23.75C24.1642 7.75 24.5 8.08579 24.5 8.5C24.5 8.91421 24.1642 9.25 23.75 9.25H10.25C9.83579 9.25 9.5 8.91421 9.5 8.5Z'
                            fill='#596773'
                          ></path>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M15.5 6.25C15.3011 6.25 15.1103 6.32902 14.9697 6.46967C14.829 6.61032 14.75 6.80109 14.75 7V7.75H19.25V7C19.25 6.80109 19.171 6.61032 19.0303 6.46967C18.8897 6.32902 18.6989 6.25 18.5 6.25H15.5ZM20.75 7.75V7C20.75 6.40326 20.5129 5.83097 20.091 5.40901C19.669 4.98705 19.0967 4.75 18.5 4.75H15.5C14.9033 4.75 14.331 4.98705 13.909 5.40901C13.4871 5.83097 13.25 6.40326 13.25 7V7.75H11.75C11.3358 7.75 11 8.08579 11 8.5V19C11 19.5967 11.2371 20.169 11.659 20.591C12.081 21.0129 12.6533 21.25 13.25 21.25H20.75C21.3467 21.25 21.919 21.0129 22.341 20.591C22.7629 20.169 23 19.5967 23 19V8.5C23 8.08579 22.6642 7.75 22.25 7.75H20.75ZM12.5 9.25V19C12.5 19.1989 12.579 19.3897 12.7197 19.5303C12.8603 19.671 13.0511 19.75 13.25 19.75H20.75C20.9489 19.75 21.1397 19.671 21.2803 19.5303C21.421 19.3897 21.5 19.1989 21.5 19V9.25H12.5Z'
                            fill='#596773'
                          ></path>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M15.5 11.5C15.9142 11.5 16.25 11.8358 16.25 12.25V16.75C16.25 17.1642 15.9142 17.5 15.5 17.5C15.0858 17.5 14.75 17.1642 14.75 16.75V12.25C14.75 11.8358 15.0858 11.5 15.5 11.5Z'
                            fill='#596773'
                          ></path>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M18.5 11.5C18.9142 11.5 19.25 11.8358 19.25 12.25V16.75C19.25 17.1642 18.9142 17.5 18.5 17.5C18.0858 17.5 17.75 17.1642 17.75 16.75V12.25C17.75 11.8358 18.0858 11.5 18.5 11.5Z'
                            fill='#596773'
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ border: '1px solid #b3b9c4', borderTop: 'none' }}
          rowsPerPageOptions={[25, 50, 75, 100]}
          rowsPerPage={rowsPerPage}
          component='div'
          count={body.length}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      <CreateStaticContent
        isOpen={openCreateStatic}
        setOpenUpdateForm={setOpenCreateStatic}
        selectedRow={selectedRow}
      />
      <CreateAdminManagement
        isOpen={openCreateAdmin}
        setOpenUpdateForm={setOpenCreateAdmin}
        selectedRow={selectedRow}
      />
      <CreateArticle
        isOpen={openCreateArticle}
        setOpenUpdateForm={setOpenCreateArticle}
        selectedRow={selectedRow}
      />
      <CreatePD
        isOpen={openCreatePD}
        setOpenUpdateForm={setOpenCreatePD}
        selectedRow={selectedRow}
      />
      <CreateCategory
        isOpen={openCreateCategory}
        setOpenUpdateForm={setOpenCreateCategory}
        selectedRow={selectedRow}
      />

      <DeleteForm
        isOpen={openDeleteForm}
        setOpenDeleteForm={setOpenDeleteForm}
        index={index}
        handleDeleteConfirm={handleDeleteConfirm}
      />
    </>
  );
}

export default TableContent;
