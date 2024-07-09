### Server

In this one we are going to learn how we can create API routes using expo-router `v3`. We are going to follow [this guide](https://docs.expo.dev/router/reference/api-routes/) to implement a simple api using `expo-router`.

First we need to navigate to the `app.json` and change the `output` of the `web` from `static` to `server` as follows:

```json
{
  "web": {
    "bundler": "metro",
    "output": "server",
    "favicon": "./assets/images/favicon.png"
  }
}
```

After doing that we will need to go to the plugins and specify the origin of your `routes` as follows:

```json
{
  "plugins": [
    [
      "expo-router",
      {
        "origin": "https://hello.com"
      }
    ]
  ]
}
```

> Note that the origin to your routes is where you have hosted your expo-routes server after deployment. Now we are going to create a folder called `api` in the `app` folder. And to mark the file as an api-route. We prefix it with `+api` for example: a file `api/hi+api.ts` will result in the path `/hi`

```ts
// api/hi+api.tx

export function GET(request: Request) {
  // const postId = request.expoUrl.searchParams.get('post') api/[post].tsx
  return Response.json({ hello: "world", method: request.method });
}

export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ data: body }, { status: 200, statusText: "OK" });
}
```

Now we can test this on postman. We can go to `http://localhost:8081/api/hi` with a get and post requests to get different responses.

Note that we are using a full url to make request to our server in postman like `http://localhost:8081/api/hi` however when working within our app we can just specify the path for example `/api/hi`
