
const di = require('node-dependency-injection');
const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

console.log(env);
console.log(process.env.DEPENDENCY_INJECTION_SERVICE_FILE);


async function main()
{
    let container = new di.ContainerBuilder();

    let loader = new di.JsonFileLoader(container);
    //let r = await loader.load(path.resolve(__dirname, 'services_test.json'));
    let r = await loader.load(path.resolve(__dirname, process.env.DEPENDENCY_INJECTION_SERVICE_FILE));

     const userService = container.get('service.userService');
    //const userService = container.get('api.userApi');
    
    let data =   await userService.listUser(1);

    console.log(data);
    console.log("done");
}

(async() => {
    await main();
  })();