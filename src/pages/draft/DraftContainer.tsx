import { Route, Routes } from 'react-router-dom';

import DraftLayout from './components/DraftLayout';
import DraftButton from './containers/DraftButton';
import DraftComponents from './containers/DraftComponent';
import DraftFormControl from './containers/DraftForm';
import DraftIcon from './containers/DraftIcon';
import DraftImage from './containers/DraftImage';
import DraftTypography from './containers/DraftTypography';
import { DRAFT_ROUTES } from './routes';

import './style.css';

const DraftContainer = () => {
  return (
    <Routes>
      <Route element={<DraftLayout />}>
        <Route
          index
          element={<DraftTypography />}
        />
        <Route
          path={DRAFT_ROUTES.typo.path}
          element={<DraftTypography />}
        />
        <Route
          path={DRAFT_ROUTES.button.path}
          element={<DraftButton />}
        />
        <Route
          path={DRAFT_ROUTES.formControl.path}
          element={<DraftFormControl />}
        />
        <Route
          path={DRAFT_ROUTES.component.path}
          element={<DraftComponents />}
        />
        <Route
          path={DRAFT_ROUTES.iconGallery.path}
          element={<DraftIcon />}
        />
        <Route
          path={DRAFT_ROUTES.imageGallery.path}
          element={<DraftImage />}
        />
      </Route>
    </Routes>
  );
};

export default DraftContainer;
