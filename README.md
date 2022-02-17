# Ultimate Hello World CRA

This project is very similar to [my previous hello world project][1]; the difference is, this project uses [create-react-app][2] instead of custom webpack and babel config for frontend build. Using custom config revealed serious problems when I used it in a real project. Since create react app already solves all those problems, I'm hoping to save time by not reinventing the wheel. You can view the app deployed [here][3]. The page shows the tools used in displaying this hello world:

* User interface implemented in **ReactJS** and **Sass**
* Server implemented with **Typescript** and executed in **NodeJS**
* Static web content served with **Express**
* Dynamic content served with **Apollo** server that is based on **GraphQL**
* Persistent data stored in **MongoDB**
* Server-side and client-side unit test cases implemented using **Jest**
* End to end test cases implemented using **Cypress**
* Dependencies managed by **npm**
* CI/CI pipeline implemented in **CircleCI**
* Application deployed in **Heroku**
* Source code maintained using **Git** and **GitHub**
* Application packaged in **Docker**
* **Gulp** and **Babel** to automate server build, **create-react-app** to automate client build.
* **Visual Studio Code** IDE (project includes configurations to support debugging in vscode)

The main goal of this project is to demonstrate all these tools working together that can be used as a template for apps based on the same tools.

## How To Use
1) Download ZIP version of this repo's `develop` branch to avoid copying over the git history.
2) Extract the contents into an empty directory. We'll refer to this directory's name as `PROJECT_NAME` and the full path as `PROJECT_ROOT`.
3) Run `docker-compose up` in the root of the project and visit http://localhost:3000 to verify "Hello World" output.
4) Exit the docker-compose process started in step 3.
5) Run `docker volume prune` to drop the volume created in step 3.

6) Make below modifications in `docker-compose.yml`:
* Docker service name: Replace `local-ultimate-hello-world-cra` with `local-PROJECT_NAME`
* MongoDB username: Replace `ultimate-hello-world-cra-user` with `PROJECT_NAME-user`
* MongoDB password: Replace `ultimate-hello-world-cra-pass` with `PROJECT_NAME-pass`
* MongoDB namespace: Replace `ultimateHelloWorldCra` with `PROJECT_NAME`

7) Make below modifications in `mongodb/init.js`:
* MongoDB username: Replace `ultimate-hello-world-cra-user` with `PROJECT_NAME-user`
* MongoDB password: Replace `ultimate-hello-world-cra-pass` with `PROJECT_NAME-pass`
* MongoDB namespace: Replace `ultimateHelloWorldCra` db namespace with `PROJECT_NAME`

8) Perform steps 3 and 4 to verify if "Hello World" output is still working. Perform step 5 after verifying.

9) Make below modifications in `e2e/docker-compose.ci-dev-test.yml`:
* Docker service name: Replace `ultimate-hello-world-cra-web` with `PROJECT_NAME-web`
* MongoDB username: Replace `ultimate-hello-world-cra-user` with `PROJECT_NAME-user`
* MongoDB password: Replace `ultimate-hello-world-cra-pass` with `PROJECT_NAME-pass`
* MongoDB namespace: Replace `ultimateHelloWorldCra` db namespace with `PROJECT_NAME`

10) Make below modifications in `e2e/docker-compose.ci-staging-test.yml`:
* Heroku staging app name: Replace `ultimate-hello-world-cra-stage` with `PROJECT_NAME-staging`

11) Make below modifications in `.circleci/config.yml`:
* Heroku staging app name: Replace `ultimate-hello-world-cra-stage` with `PROJECT_NAME-staging`
* Heroku production app name: Replace `ultimate-hello-world-cra` with `PROJECT_NAME`

12) Replace the contents in `README.md` to suit your project. Create a GitHub repo with name as `PROJECT_NAME` and push your `PROJECT_ROOT` to that repo's `develop` branch.

13) Login to CircleCI and click "Set Up Project" against your newly created repo, select develop branch and click "Let's Go". This should trigger a build in CircleCI that completes successfully.

14) Create two apps in Heroku:
    1) `PROJECT_NAME`
    2) `PROJECT_NAME-staging`

15) Copy the API key from Heroku's Account Settings.

16) Open Project Settings for your new project in CircleCI, create a new environment variable as `HEROKU_API_KEY` and set its value to the key copied in step 15.

17) Create two new databases in MongoDB Atlas, each containing a collection called `pages`:
    1) `PROJECT_NAME`
    2) `PROJECT_NAME-staging`

18) Copy the JSON in `mongodb/init.js` at line 19 and insert it into both the `pages` collection created in step 17.

19) Navigate to Security > Database Access in Atlas. Create two new users:
    1) Production user
        * Username: `PROJECT_NAME`-user
        * Password: any strong password
        * Privileges: readWrite@`PROJECT_NAME`
    2) Staging user
        * Username: `PROJECT_NAME`-stagingUser
        * Password: any strong password
        * Privileges: readWrite@`PROJECT_NAME`-staging

21) Fetch your MongoDB srv record's host from Connect > Connect Your Application in Atlas.

20) Open project settings for `PROJECT_NAME` in Heroku and set following config vars:
    DB_NAMESPACE=`PROJECT_NAME`
    DB_URI=mongodb+srv://`PROJECT_NAME`-user:`productionPassword`@`srvHost`/`PROJECT_NAME`?retryWrites=true&w=majority

21) Open project settings for `PROJECT_NAME-staging` in Heroku and set following config vars:
    DB_NAMESPACE=`PROJECT_NAME-staging`
    DB_URI=mongodb+srv://`PROJECT_NAME`-staging-user:`stagingPassword`@`srvHost`/`PROJECT_NAME-staging`?retryWrites=true&w=majority

22) Push your code to your repo's `production` branch using below commands:

        git checkout -b production
        git push --set-upstream origin production

23) This should trigger a build in CircleCI that completes successfully.

24) You should be able to visit the hello world app in the following URLs depending on the apps you created in step 14:

    1) https://`PROJECT_NAME`.herokuapp.com
    2) https://`PROJECT_NAME-staging`.herokuapp.com

Please raise an issue if you have questions or face errors when using this template.

[1]: https://github.com/andrewnessinjim/ultimate-hello-world
[2]: https://create-react-app.dev/
[3]: https://ultimate-hello-world-cra.herokuapp.com/
