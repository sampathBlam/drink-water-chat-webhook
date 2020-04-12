# drink-water-chat-webhook

A node js server which reminds me to drink water every hour using google chat's incoming webhooks

# Setup

## Prequisites

Make sure Node.js is installed in your machine

## Clone the repository

```sh
git clone git@github.com:sampathBlam/drink-water-chat-webhook.git
```

## Configure incoming webhook in Google Chat

- Open Google Chat
- Open any private chat or room
- Select Configure webhooks from the menu beside the name of the chat

![Chat webhook menu](/images/chat_webhook_menu.jpg)

- Set the name and avatar url for the webhook in the Incoming webhook dialog

![Chat webhook dialog](/images/chat_webhook_dialog.jpg)

- Copy the webhook url

![Chat webhook url](/images/chat_webhook_url.jpg)

## Configure the repository to use the webhook url

- Open the folder to which the repository was cloned.

```sh
cd drink-water-chat-webhook
```

- Install dependencies

```sh
npm install
```

- Configure the webhook url and the time interval for the reminder as environmental variable

- This can be done by adding environment variables when running `server.js`

```sh
WEBHOOK_URL=<URL_COPIED_FROM_CHAT_APP> TIME_INVERVAL=<TIME_IN_MILLISECONDS> node server.js
```

- Or we can use a .env file to specify these environmental variables

- Create a new file (`.env`) in the root of the repository

- Set the webhook url and the time interval in the .env file.

```
WEBHOOK_URL=<URL_COPIED_FROM_CHAT_APP>
TIME_INVERVAL=<TIME_IN_MILLISECONDS>
```

- Run the server

```sh
node server.js
```

Now the app has been configured to send a reminder to the WEBHOOK_URL every TIME_INTERVAL milliseconds.
