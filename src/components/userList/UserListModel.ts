import axios from "axios";
import { makeAutoObservable } from "mobx";
import User from "../../models/User";

class UserListModel {

    private static userListModel: UserListModel;
    userList: User[] = [] as User[];
    message: string = 'Mensaje desde el modelo';

    private constructor() {
        makeAutoObservable(this);
    }

    static getInstance () {

        if (this.userListModel === null || this.userListModel === undefined) {
            this.userListModel = new UserListModel();
        }

        return this.userListModel;
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


    setMessage (newMessage: string) {
        this.message = newMessage;
    }

}

export default UserListModel.getInstance();