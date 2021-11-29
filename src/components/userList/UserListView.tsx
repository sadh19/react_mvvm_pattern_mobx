import { observer } from 'mobx-react';
import React from 'react';
import User from '../../models/User';

const UserListView = ({ users }: { users: User[] }) => {
  return (
    <React.Fragment>
      {users.map((x) => (
        <div key={x.id}>{x.name}</div>
      ))}
    </React.Fragment>
  );
};

export default observer(UserListView);
