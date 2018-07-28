# Compile
To build the app, you need NodeJs and Apache Cordova. [See the instructions](https://cordova.apache.org/docs/en/latest/guide/cli/) on the official website.
Android & Ios dependencies are not part of this scope.

# Steps
As the project is build around the webwallet, the first thing to do is to download the content of the [official masari webwallet](https://github.com/masari-project/masari-webwallet)
and put the content of the src directory inside the src directory of this repo

The next step is to compile with 
```
cordova build
```

To launch the Android app you will need to launch
```
cordova run android
```