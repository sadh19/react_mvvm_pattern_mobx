import { observer } from 'mobx-react';
import React from 'react';
import UserListView from './UserListView';
import UserListViewModel from './UserListViewModel';

const UserListController = ({
  viewModel,
}: {
  viewModel: UserListViewModel;
}) => {
  return (
    <React.Fragment>
      <UserListView users={viewModel.getUsers()} />
    </React.Fragment>
  );
};

export default observer(UserListController);
