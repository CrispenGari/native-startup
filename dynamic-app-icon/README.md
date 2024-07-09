### Dynamic App Icon

In this one we are going to walk through how we can dynamically change the app icon in expo. First we need to install the package called [expo-dynamic-app-icon](https://github.com/outsung/expo-dynamic-app-icon)

```shell
npx expo install expo-dynamic-app-icon
```

And then you navigate to the `app.json` in the plugins array you add the following:

```shell
{
     "plugins": [
      [
        "expo-dynamic-app-icon",
        {
          "red": { // icon name
            "image": "./assets/icon1.png", // icon path
            "prerendered": true // for ios UIPrerenderedIcon option
          },
          "gray": {
            "image": "./assets/icon2.png",
            "prerendered": true
          }
        }
      ]
    ]
}
```

After that you can change the icon of the app using the `setAppIcon` as follows:

```ts
import { setAppIcon } from "expo-dynamic-app-icon";
setAppIcon("red"); // set icon 'assets/icon1.png'
```

and you can also get the app icon using the `getAppIcon` as follows:

```shell
import { getAppIcon } from "expo-dynamic-app-icon";

getAppIcon() // get current icon name 'red'
```
