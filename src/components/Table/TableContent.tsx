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
import ArrowIcon from '../../assets/icons/arrow-icon.tsx';
import EditIcon from '../../assets/icons/edit-icon.tsx';
import DeleteIcon from '../../assets/icons/delete-icon.tsx';

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
                {head.slice(0, -1).map((item) => (
                  <TableCell
                    key={item}
                    className={`${styles.table_cell} ${styles.table_cell_header} ${styles.table_header_action}`}
                  >
                    <div className={styles.table_header}>
                      {capitalizeFirstLetter(item)}
                      <span>
                        <ArrowIcon />
                      </span>
                    </div>
                  </TableCell>
                ))}
                <TableCell
                  className={`${styles.table_cell} ${styles.table_cell_header} ${styles.table_header_action}`}
                >
                  <div className={styles.table_header}>Action</div>
                </TableCell>
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
                        <EditIcon />
                      </span>
                      <span
                        className={styles.delete_btn}
                        onClick={() => handleDeleteClick(idx, item)}
                      >
                        <DeleteIcon />
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
