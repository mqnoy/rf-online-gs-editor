import {
  CHANGE_CURRENT_USER,
  CHANGE_CURRENT_USER_TOKEN,
  LOGOUT_CURRENT_USER,
} from './constants';

import {
  announceProjectCountItems,
  announceProjectCountStores,
  announceProjectCountBoxItemOuts,
  announceProjectCountHandler,
} from './actions/announces';

import {
  projectsImportsStartFileImport,
  projectsImportsCancelFileImport,
  projectsImports,
  projectsImportsActionNames,
  projectsImportsBindActions,
  projectsImportsBindActionsWithFileKey,
} from './actions/projectsImports';

import {
  projectsNextValuesChangePropValue,
  projectsNextValuesChangeIsSaving,
  projectsNextValuesChangeIsSaved,
  projectsNextValuesChangeIsError,
  projectsNextValuesChangeErrorMessage,
  projectsNextValuesChangeNextValue,
} from './actions/projectsNextValues';

import {
  projectsEntriesFinder,
  projectsEntriesFinderItemsBindActions,
  projectsEntriesFinderStoresBindActions,
} from './actions/projectsEntriesFinder';

import {
  projectsItems,
  projectsItemsActionNames,
  projectsItemsBindActions,
} from './actions/projectsItems';

import {
  projectsStores,
  projectsStoresActionNames,
  projectsStoresBindActions,
} from './actions/projectsStores';

import {
  projectsBoxItemOuts,
  projectsBoxItemOutsActionNames,
  projectsBoxItemOutsBindActions,
} from './actions/projectsBoxItemOuts';

export {
  announceProjectCountItems,
  announceProjectCountStores,
  announceProjectCountBoxItemOuts,
  announceProjectCountHandler,
};
export {
  projectsImportsStartFileImport,
  projectsImportsCancelFileImport,
  projectsImports,
  projectsImportsActionNames,
  projectsImportsBindActions,
  projectsImportsBindActionsWithFileKey,
};
export {
  projectsNextValuesChangePropValue,
  projectsNextValuesChangeIsSaving,
  projectsNextValuesChangeIsSaved,
  projectsNextValuesChangeIsError,
  projectsNextValuesChangeErrorMessage,
  projectsNextValuesChangeNextValue,
};
export {
  projectsEntriesFinder,
  projectsEntriesFinderItemsBindActions,
  projectsEntriesFinderStoresBindActions,
};
export { projectsItems, projectsItemsActionNames, projectsItemsBindActions };
export { projectsStores, projectsStoresActionNames, projectsStoresBindActions };
export {
  projectsBoxItemOuts,
  projectsBoxItemOutsActionNames,
  projectsBoxItemOutsBindActions,
};

/**
 * Current User Actions
 */

export function changeCurrentUser(user) {
  return {
    type: CHANGE_CURRENT_USER,
    user,
  };
}

export function changeCurrentUserToken(token) {
  return {
    type: CHANGE_CURRENT_USER_TOKEN,
    token,
  };
}

export function logoutCurrentUser() {
  return {
    type: LOGOUT_CURRENT_USER,
  };
}
