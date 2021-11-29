import axios from "axios";

class ApiCalls {

    loadUsers () {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    }

}

export default new ApiCalls();