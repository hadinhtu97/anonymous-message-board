# Anonymous Message Board

## Description
Backend APIs manage message on board without login

## Use
```
git clone https://github.com/hadinhtu97/anonymous-message-board
cd anonymous-message-board
npm install
touch .env
[This app use mongodb as database, you need to add a MONGO_URI variable into .env]
npm run start
```

## APIs
* GET
  * `[]/api/threads/[board]`: receive most recent 10 bumped threads on the board with only the most recent 3 replies for each
  * `[]/api/replies/[board]?thread_id=[_id]` : receive entire thread with all its replies
* POST
  * `[]/api/threads/[board]`: with form data including `text` and `delete_password` to create a new thread
  * `[]/api/replies/[board]` : with form data including `text`, `delete_password` and `thread_id` to add a reply on thread_id
* PUT
  * `[]/api/threads/[board]`: with form data including `thread_id` to report this thread_id
  * `[]/api/replies/[board]` : with form data including `thread_id` and `reply_id` to report reply_id on thread_id
* DELETE
  * `[]/api/threads/[board]`: with form data including `thread_id` and `delete_password` to delete this thread_id
  * `[]/api/replies/[board]` : with form data including `thread_id`, `reply_id` and `delete_password`. If success, the text of the `reply_id` will be changed to `deleted`.

### Demo
[Link Demo](https://anonymous-message-board/.hadinhtu97.repl.co/)
