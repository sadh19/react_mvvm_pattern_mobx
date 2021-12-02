import { observer } from 'mobx-react';
import React from 'react';
import UserListViewModel from './UserListViewModel';

const UserListView = ({ viewModel }: { viewModel: UserListViewModel }) => {
  return (
    <React.Fragment>
      {viewModel.getUsers().map((x) => (
        <div
          key={x.id}
          onClick={() => {
            viewModel.removeUser(x.id);
          }}
        >
          {x.name}
        </div>
      ))}
    </React.Fragment>
  );
};

export default observer(UserListView);
