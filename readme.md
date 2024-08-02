# Overview
The sample application call a third party REST API from https://reqres.in/ to return user data. In reality when we test our application, the external 
dependency is a challenge to manage because you may require special access to be granted, the service is unavailable, or the data state is changing causing
difficulty to validate the result consistently. This can slow down the cadance of your development flow.

This sample application show how to use dependency injection in nodejs app to mock/stub dependencies so that test can be run frictionlessly.

# Design
The code highlight a few key designs:
1. Abstract the actual backend from the services so that the backend can be mock/stub while the rest of the code continue to work with the service layer without change.
2. Use dependency injection to inject and wire up the actual backend into the service without the service need to know anything.
3. Use configuration file to load the required dependencies setup based on the environment or purpose.

# Make use of
1. node-dependency-injection (https://github.com/zazoomauro/node-dependency-injection/tree/master)
2. dotenv (https://github.com/motdotla/dotenv)

# Running the code
## Create two .env file.

.env.dev
```text
DEPENDENCY_INJECTION_SERVICE_FILE=services.json
```

.env.test
```text
DEPENDENCY_INJECTION_SERVICE_FILE=services_test.json
```


## Set the NODE_ENV environment variable
Set the following environment variable in the console host to pick up the correct configuration

In Powershell
```powershell
$env:NODE_ENV="dev" # or "test"
```
In command line
```cmd
set NODE_ENV="dev" # or "test"
```

Then run **node index.js**