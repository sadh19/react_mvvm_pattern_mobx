import axios from "axios";
import { makeAutoObservable } from "mobx";
import User from "../../models/User";

class UserListModel {

    userList: User[] = [] as User[];

    private constructor() {
        makeAutoObservable(this);
    }

    static getInstance () {
        return new UserListModel();
    }

    loadUsers () {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                this.userList = resp.data as User[];
            })
            .catch((err) => {
                console.log(err);
            });
    }

    removeUser (id: number) {
        this.userList = this.userList.filter(x => x.id !== id);
    }




}

export default UserListModel.getInstance();