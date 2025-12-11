# Steps - Getting Started with Deployment Process

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
