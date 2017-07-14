# `log-file-viewer` to view log files by 10 lines

This project allows a user to enter a log file name and read its contents by 10 lines

### Finished Product

Here is the [complete application](https://log-file-viewer.herokuapp.com/)

## Running locally

```
git clone https://github.com/peachy-manasis/log-file-viewer.git
cd log-file-viewer
npm install

cd client
npm install

cd ..
npm start
```

## Overview

`log-file-viewer` enables a user to view a log file's contents per 10 lines. It is paginated so you can view from the beginning, go to the next 10 lines, or skip to the end of the file, and vice versa applies. This configures a Webpack development server to run on `localhost:3000`. And will bundle all static assets located under `client/src/`. All requests to `localhost:3000` will serve `client/index.html` which will include Webpack's `bundle.js`.

### Background

The app is deployed via Heroku.


### Running unit tests

unit test directory is at `test` directory. run tests via `npm test`
testable files are found at `storage` directory. they are `file-01.log`, `file-02.log`, and `file-03.log`
