### native-startup

✔💎 Native startup consist of React-Native UI and simple applications build using react native expo.

### Environment

You are required to have the following:

[x] Nodejs
[ ] Android Studio

### Setting up Android Emulator on Windows.

1. First you need to download the Java `11+`
2. To download `Java17` we are going to first make sure that you have [`chocolatey`](https://chocolatey.org/) installed in your computer. To check that run the following command:

```shell
choco --version
```

If you don't get the version number of chocolatey you can open `cmd` as an admin and run the following command to install `chocolatey`:

```shell
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command " [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

3. To Download `Java17` we will run the following command:

```shell
choco install openjdk17
```

4. The next thing is to install [`Android Studio`](https://developer.android.com/studio)

   - During the installation process make sure that **Android Studio** and **Android Virtual Device** are checked.

   * after the installation is complete we need to install the sdk that is specific for react-native. To do that you need to open android studio go to `SDK Manager` under Android `SDK` in the `SDK Platform` tab.
   * Locate the `Android 12.0S` SDK and make sure that you check the following options and make sure you click `Show Package Details` and select the following:
     [x] Android SDK Platform
     [x] Intel x86 Atom_64 System Image
   * Go to the `SDK Tools` tab
     - on the bottom right conner make sure you select the checkbox named `Show Package Details` and go ahead and check the checkbox that says:
       [x] `31.0.0`
   * Go ahead and click the **Apply Button**

> Wait for the installation to complete and then:

5. Click the windows button and search for **Environmental Variables**.
6. Click on **Environmental Variables** and then on the **User Environmental Variables** click on the **New** button and add the following:
   - `Variable name`: `ANDROID_HOME`
   - `Variable value`: `C:\Users\<your_username>\AppData\Local\Android\Sdk`
     > Note that `C:\Users\<your_username>\AppData\Local\Android\Sdk` is the path where you `sdk` is located.
7. Open `Powershell` and type the following command:

```shell
Get-ChildItem -Path Env:\
```

> Then if we see our `ANDROID_HOME` environmental variable we are happy.

8. Navigate to `platform-tools` which is located on `C:\Users\<your_username>\AppData\Local\Android\Sdk\platform-tools` we want to add it in our **Environmental Variables** again. Locate the `System variables` and inside that we will locate the `Path` and click the `Edit` button. Click `New` button and add the following path:

```shell
`C:\Users\<your_username>\AppData\Local\Android\Sdk\platform-tools`
```

9. If you have installed `react-native` CLI you are recommended to uninstall by running the following command:

```shell
npm uninstall -g react-native-cli @react-native-community/cli
```

10. Open `Android Studio` and go to `Virtual Device Manager` click on `Create Device` and you select the device that you want.

> All done, now you can start android Emulator from the command line using commands like:

```shell
npm start android
# OR
yarn start android
```

These commands run when you have a react-native project that you want to run on an emulator.

You can start the emulator by navigating to:

```shell
cd C:\Users\%USERNME%\AppData\Local\Android\Sdk\emulator
```

Check the list of emulators that you have by running the following command:

```shell
emulator  -list-avds
```

Then

```shell
emulator -avd <your amulator name>
# eg

emulator -avd Pixel_7_Pro
```

### Refs.

1. [docs.expo.dev/workflow/android-studio-emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
2. [reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup?guide=native)
