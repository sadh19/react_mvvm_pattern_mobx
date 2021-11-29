import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import UserListController from './UserListController';
import UserListViewModel from './UserListViewModel';

const UserListProvider = () => {
  const viewModel = UserListViewModel.getInstance();

  useEffect(() => {
    viewModel.loadUsers();
  }, []);

  return (
    <React.Fragment>
      <UserListController viewModel={viewModel} />
    </React.Fragment>
  );
};

export default observer(UserListProvider);
