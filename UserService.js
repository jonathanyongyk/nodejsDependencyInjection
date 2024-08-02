 class UserService {
    //_userApi;
    constructor(userApi) {
        this._userApi = userApi;
      }

      
    async listUser(pageNumber) {
        return await this._userApi.listUser(pageNumber);
    }
  }
  
  module.exports = UserService;