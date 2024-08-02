const fs = require('fs').promises;
const path = require('path');

class UserApiStub {
    constructor() {}

    async listUser(pageNumber) {
        try {
            const filePath = path.resolve(__dirname, 'fake_user_respond.json');
            const data = await fs.readFile(filePath, 'utf-8');
            return data;
        } catch (error) {
            console.error('Error reading the file:', error);
            throw error;
        }
    }
}

module.exports = UserApiStub;
