# Steps - Getting Started with Deployment Process

1. Install git in system
2. Create 2 repos on Github
3. Push the code
   a. create gitignore if not exits
   b. Add all the file which should not be push(.env, node_modules)
4. Create account on Render.com
5. Deploy the backend on render
6. Step to deploy for front-end
   - Push your code on git-hub
   - Login-in to Netlify
   - Add new project
   - import existing project
   - select the github repo
   - Setup build command
   - select dist/ build as publish directory
   - Setup Env manully for your local env
7. Setup CI/CD pipeline configuragtion
   - Create .github/workflows/ci-cd.yaml file
   - All all the rules
     - Pipeline name
     - push & pull_request
     - Setup Job name
     - Define the runner ubuntu
     - Checkout code to github runner
     - Install pnpm lastest version which is there in your local
     - Install node and link pnpm cache
     - Install dependencies - pnpm install
     - pnpm run lint
     - pnpm run test
     - pnpm run build
   - Push that to github
   - Action will run on github, if fails then recheck it an make it green
   - Now whenever you raised the PR, CI/CD pipeline run and if it pass then allow to merge
8. Setting for Branch Protection
   - Go to repo Setting
   - Go to branches
   - Select Branch protection
   - Check "Require a pull request before merging".
   - Check "Require status checks to pass before merging" and search for your GitHub Action name(which is Job name).

# Steps - todo-frontend

1. Check node version -> node -v
2. Install pnpm -> npm i -g pnpm
3. Create new app using -> pnpm create vite@latest todo-frontend --template react
4. Add TailwindCSS -> pnpm add -D tailwindcss @tailwindcss/vite
5. Create an todo App component
6. Create 2 env files -> .env.development & .env.production
7. Define the URL -> since it is VITE -> VITE_API_URL=http://localhost:backend_port
8. Install axios -> pnpm add axios (as normal dependencies)
9. Define API_URL in App.js -> since we are fetch the URL from env file ->
   using import.meta.env.(env_define_variable)
10. Write a code to fetch (API class)

# List - Issue faced while doing all this process

1. If your trying to run the pnpm i (which run the script) in to window and get some powershell issue then do this

   a. Open Window powershell
   b. Run as administrator
   c. Check the Execution policy list -> Get-ExecutionPolicy -List
   d. Give current user as remote access ->
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

2. Remove node_module from project in windows
   ri -r -fo .\node_modules\

3. Process.env issue it say it is not define when using process.env
   a. Vite is execute by Node -> Node starts a dev server
   b. Dev server sends your code to browser
   c. Browser runs your ReactJS code -> No Node object(like process) exist.
   d. Vite replace import.meta.env before sending the code -> your code can safely access env vars.

4. If some file are pushed which should be on github then run this command
   a. git rm --cached .env.development .env.production -> Tells Git to remove a file from the repository not from local
   b. git commit -m "somemessages"
   c. git push
