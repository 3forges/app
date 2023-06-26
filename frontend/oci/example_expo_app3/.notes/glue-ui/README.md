# Glu

## Install 

```bash
npx gluestack-ui@latest init
```

I get an error saying `x  Error: TTY initialization failed: uv_tty_init returned EBADF (bad file descriptor)` in : 

```bash
$ npx gluestack-ui@latest init
npm WARN exec The following package was not found and will be installed: gluestack-ui@0.4.2
T  gluestack-ui
|
○  Cloning repository
|
o  Repository cloned successfully.
|
x  Error: TTY initialization failed: uv_tty_init returned EBADF (bad file descriptor)
|
*  gluestack-ui initialization completed!
node:internal/errors:477
    ErrorCaptureStackTrace(err);
    ^

SystemError [ERR_TTY_INIT_FAILED]: TTY initialization failed: uv_tty_init returned EBADF (bad file descriptor)
    at new SystemError (node:internal/errors:239:5)
    at new NodeError (node:internal/errors:350:7)
    at new WriteStream (node:tty:93:11)
    at ConfirmPrompt.prompt (C:\Users\Utilisateur\AppData\Local\npm-cache\_npx\4d3bda48cf361d69\node_modules\@clack\core\dist\index.cjs:9:766)
    at confirm (C:\Users\Utilisateur\AppData\Local\npm-cache\_npx\4d3bda48cf361d69\node_modules\@clack\prompts\dist\index.cjs:22:7)
    at C:\Users\Utilisateur\AppData\Local\npm-cache\_npx\4d3bda48cf361d69\node_modules\gluestack-ui\dist\utils.js:76:64
    at Generator.next (<anonymous>)
    at C:\Users\Utilisateur\AppData\Local\npm-cache\_npx\4d3bda48cf361d69\node_modules\gluestack-ui\dist\utils.js:7:71
    at new Promise (<anonymous>)
    at __awaiter (C:\Users\Utilisateur\AppData\Local\npm-cache\_npx\4d3bda48cf361d69\node_modules\gluestack-ui\dist\utils.js:3:12) {
  code: 'ERR_TTY_INIT_FAILED',
  info: {
    errno: -4083,
    code: 'EBADF',
    message: 'bad file descriptor',
    syscall: 'uv_tty_init'
  },
  errno: [Getter/Setter],
  syscall: [Getter/Setter]
}

Node.js v18.4.0

```
 For that frst error, i found : 
 * from March 2023 https://github.com/Nutlope/aicommits/issues/152
 * I foundthe solution [here : it works if i execute the command with either vscode terminal, or powershell, and that's most likely due to windows and unix path slash/antislash opposition](https://stackoverflow.com/questions/75750730/cannot-create-sveltekit-app-err-tty-init-failed-uv-tty-init-returned-ebadf-ba)

* I filled in a full github message to help others looking for an answer : https://github.com/Nutlope/aicommits/issues/152#issuecomment-1607985798

### Add a first new GluStack UI Component

```PowerShell
PS C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3> npx gluestack-ui@latest add PestoNavBar
T  gluestack-ui
|
o  Repository already cloned.
|
o  Git pull successful.
|
*  gluestack-ui is already initialized in your project!
|
o  Select the type of components:
|  core
|
o  Select core components:
|  heading
|
*  ✅  Heading  component added successfully!
|
o  Lockfile detected for npm. Continue with npm install?
|  Yes
|
○  ⏳ Installing dependencies

added 1 package, and audited 1607 packages in 6s

105 packages are looking for funding
  run `npm fund` for details

77 vulnerabilities (73 moderate, 4 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
|
o  Dependencies have been installed successfully.
|
—  You're all set!

```

After adding a first component, I had a new error when i try and start my expo app :

```bash
$ npx expo start --web
Starting project at C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3
Some dependencies are incompatible with the installed expo version:
  react-native@0.70.10 - expected version: 0.71.8
Your project may not work correctly until you install the correct versions of the packages.
Install individual packages by running npx expo install react-native@0.71.8
Starting Metro Bundler
Starting Webpack on port 19006 in development mode.
(node:2792) [DEP_WEBPACK_DEV_SERVER_CONSTRUCTOR] DeprecationWarning: Using 'compiler' as the first argument is deprecated. Please use 'options' as the first argument and 'compiler' as the second argument.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:2792) [DEP_WEBPACK_DEV_SERVER_LISTEN] DeprecationWarning: 'listen' is deprecated. Please use the async 'start' or 'startCallback' method.
Waiting on http://localhost:19000
Logs for your project will appear below.
WARNING in ./node_modules/@legendapp/tools/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\index.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\index.ts'

WARNING in ./node_modules/@legendapp/tools/react.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\react.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\react.ts'

WARNING in ./node_modules/@legendapp/tools/src/PromiseCallback.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\PromiseCallback.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\PromiseCallback.ts'

WARNING in ./node_modules/@legendapp/tools/src/ResizeObserver.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\ResizeObserver.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\ResizeObserver.ts'

WARNING in ./node_modules/@legendapp/tools/src/animationFrameOnce.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\animationFrameOnce.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\animationFrameOnce.ts'

WARNING in ./node_modules/@legendapp/tools/src/arrayFunctions.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\arrayFunctions.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\arrayFunctions.ts'

WARNING in ./node_modules/@legendapp/tools/src/is.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\is.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\is.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/MemoFnComponent.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\MemoFnComponent.tsx' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\MemoFnComponent.tsx'

WARNING in ./node_modules/@legendapp/tools/src/react/useComponentSize.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useComponentSize.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useComponentSize.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/useEverHadValue.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useEverHadValue.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useEverHadValue.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/useForceRender.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useForceRender.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useForceRender.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/useInterval.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useInterval.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useInterval.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/useMakeRef.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useMakeRef.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useMakeRef.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/usePrevious.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\usePrevious.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\usePrevious.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/useStableCallback.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useStableCallback.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useStableCallback.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/useStateWithRef.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useStateWithRef.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useStateWithRef.ts'

WARNING in ./node_modules/@legendapp/tools/src/react/useTimeout.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useTimeout.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\react\useTimeout.ts'

WARNING in ./node_modules/@legendapp/tools/src/timeoutOnce.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\timeoutOnce.ts' file: Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3\node_modules\@legendapp\src\timeoutOnce.ts'

web compiled with 18 warnings
^C

```

To solve that, I added an `./.env.sh`, to set the `GENERATE_SOURCEMAP=false` env var, before `npm run web` :

```bash
source ./.env.sh && npm run web
```

And there the app starts fine without warning or error, and GLuStack UI is ready for use.

And I saw something: the `npx gluestack-ui@latest add <component name>` commands allows to add dependencies to the project, by components _**from the `Glustack-UI` framework**_, to that command you must provide as `<component name>` one of the following component names:

```bash
PS C:\Users\Utilisateur\pesto_25_juin_2023\frontend\oci\example_expo_app3> npx gluestack-ui@latest add
T  gluestack-ui
|
o  Repository already cloned.
|
o  Git pull successful.
|
*  gluestack-ui is already initialized in your project!
|
o  Select the type of components:
|  core
|
*  Select core components:
|  [+] actionsheet
|  [+] alert
|  [+] alert-dialog
|  [+] avatar
|  [+] badge
|  [+] box
|  [+] button
|  [+] center
|  [+] checkbox
|  [+] divider
|  [+] fab
|  [+] form-control
|  [+] heading
|  [+] hstack
|  [+] icons
|  [+] image
|  [+] input
|  [+] link
|  [+] menu
|  [+] modal
|  [+] popover
|  [+] pressable
|  [+] progress
|  [+] radio
|  [+] select
|  [+] slider
|  [+] spinner
|  [+] switch
|  [+] tabs
|  [+] text
|  [+] textarea
|  [+] toast
|  [+] tooltip
|  [+] vstack
```

## After install: first steps




## GlustackUI Cheatsheet

> On **_Microsft Windows_**, All below commands have to be executed either in `VsCode` or `PowerShell` on Windows.Note some still are uneasy to execute in VS Code terminal, but in powrershell everythigng goes well, it's obviusly tested on Windows for powershell, but not for git bash.

#### Init gluestack-ui

```bash
npx gluestack-ui@latest init
```

#### init and add components

```bash
npx gluestack-ui@latest
```

#### add component

```bash
npx gluestack-ui@latest add <component-name>
```

#### update component

```bash
npx gluestack-ui@latest update <component-name>
```

#### remove component

```bash
npx gluestack-ui@latest remove <component-name>
```

#### help

```bash
npx gluestack-ui@latest help
```

## ANNEX: What I earned about react native

```tsx
          {/**
            * React Native wants only unitless dimensions, so that it forces the engneer to let react-native adapt the UI for devices
            * https://reactnative.dev/docs/height-and-width#fixed-dimensions
            */}
```