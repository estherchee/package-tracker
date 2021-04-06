# Track-all package tracker

This web app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can use this web app to track all your receiving and delivered parcels.

This web app is available in English and Swedish. You can choose to view the content in English or Swedish, by choosing the language on the footer.

---

<br>

## Requirements:

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### **Node**

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### **Node installation on OS X**

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### **Node installation on Linux**

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### **Node installation on Windows**

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

<br>

## How to run Track-all web app:

1.  Clone **Track-all** repository

    ####

        $ git clone https://github.com/estherchee/package-tracker.git
        $ cd PROJECT
        $ npm install

2.  In the project directory, you can run:

        ####

        `npm start`

        Runs the app in the development mode.\
        Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

        The page will reload if you make edits.\
        You will also see any lint errors in the console.

---

<br>

## How to deploy Track-all web app:

The project can deploy automatically when push to master branch on Github. To deploy manually please follow the steps at below:

1.  Bundles project in production mode for deployment

    ####

        npm run build

2.  Deploy to Firebase
    ####
        firebase deploy --only hosting
