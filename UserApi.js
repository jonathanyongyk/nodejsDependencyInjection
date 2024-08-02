class UserApi {
    constructor() {
        
      }
      async listUser(pageNumber) {
        return await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
            .then(response => response.json())
            .then(data => data.data);
    }
}

module.exports = UserApi;
