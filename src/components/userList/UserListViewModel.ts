import User from "../../models/User";
import userListModel from "./UserListModel";

class UserListViewModel {

    static getInstance () {

        const dependencies = {
            userListModel
        };

        return new UserListViewModel(dependencies);
    }

    private constructor(dependencies: any) {
        Object.assign(this, dependencies);
    }

    loadUsers () {
        //@ts-ignore
        return this.userListModel.loadUsers();
    }

    getUsers (): User[] {
        //@ts-ignore
        return this.userListModel.userList;
    }

    removeUser (id: number) {
        //@ts-ignore
        this.userListModel.removeUser(id);
    }




}

export default UserListViewModel;