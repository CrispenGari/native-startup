### Uploading files on Firebase Storage.

We are going to use the expo-image-picker from `expo` to select images from our image library aka gallery.

A function that selects images and save the data to the state:

```js
...
const [data, setData] = useState(null);
const [progress, setProgress] = useState(0);
...

const selectImage = async () => {
  const permission = await ImagePicker.getMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  }
  const cameraPermission = await ImagePicker.getCameraPermissionsAsync();
  if (!cameraPermission.granted) {
    await ImagePicker.requestCameraPermissionsAsync();
  }
  const result =
    (await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsMultipleSelection: false,
    })) || (await ImagePicker.launchCameraAsync());

  setData(result);
  return;
};
```

A function that will upload a blob file on `firebase storage`.

```js
const upload = () => {
  db.collection("posts")
    .add({
      username: "username",
      email: "test@gmail.com",
    })
    .then(async (doc) => {
      if (data?.uri) {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", data?.uri, true);
          xhr.send(null);
        });
        const uploadTask = storage.ref(`images/${doc.id}`).put(blob);
        uploadTask.on(
          "state_changed",
          (obs) => {
            setProgress(obs.bytesTransferred / obs.totalBytes);
          },
          (error) => {
            console.error(error);
          },
          () => {
            storage
              .ref(`images`)
              .child(doc.id)
              .getDownloadURL()
              .then((url) => {
                db.collection("posts").doc(doc.id).set(
                  {
                    imageUrl: url,
                  },
                  { merge: true }
                );
              })
              .then(() => {
                setData(null);
                setProgress(0);
              });
          }
        );
      }
    })
    .catch((err) => console.error(err));
};
```
