# Telegram Bot 🔥
This project is a bot which posts educational content from a csv file to a telegram group at a sceduled time. We are online most of the times so I thought
to use the time for reading educational content . 

So I used node js to build this bot and utilized the <a href="https://core.telegram.org/bots/api/">Telegram Bot API</a> to post messages.

## Steps to Run

### Generate a telegram bot and create a group 

* Go to /botfather in Telegram and register a new bot .
* Copy your API Token - That is your BOT_TOKEN.
* Create a new group in telegram , copy the username - That is your GROUP_ID .
* Mention the time interval in CRON_JOB variable the standard is in hours.
* Add the file name in the variable - FILE_NAME , make sure to follow name the columms as Question - Answer.

### Install

```sh
npm install
npm run build
```

### Usage

```sh
npm start
```


### Additional Features

* Will add more features to make the user experience better.
* Also feel free to suggest , contribute with new featues that can make the bot better for education.

## Contributing
1. Fork this repository
1. Create a new branch (`git checkout -b add-new-feature`)
1. Add the program to the appropriate category folder
1. Create a new file with the program name as the filename (e.g. `my-feature.md`)
1. Provide a brief description of the program and any relevant links or resources
1. Save the file and commit your changes (`git commit -am "Add new program"`)
1. Push to the branch (`git push origin add-new-feature`)
1. Create a new pull request

### Work in Progress.
* Test Cases .
* Cron Logic.
* Welcome message for new users.



### License

This repository is licensed under the [MIT License](https://github.com/roy-sukrit/telegram-bot/blob/master/LICENSE).

Give a ⭐️ if this project helped you!
