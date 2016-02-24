# Sample OAuth2 Applications with Adama

Two example applications using OAuth2 to authenticate to [Araport](http://www.araport.org) and use an [Adama](https://github.com/Arabidopsis-Information-Portal/adama.git) service to query information about a gene.
The first example assumes you have created a client at Araport and generated a token. The token is entered into
the text box to run the query. The second example uses the OAuth2 "implicit flow" and leverages the [JSO](https://github.com/andreassolberg/jso)
JavaScript library.

## Prerequisites

You need to have the following installed:

- [Node.js + npm](http://nodejs.org/)
- grunt
  - `npm install -g grunt-cli`
  - `npm install -g bower`

After those are installed, clone this repo, cd into the directory, and run:

```
$ git clone https://github.com/eriksf/oauth-examples.git
$ cd oauth-examples/known-token (or jso)
$ npm install && bower install
$ grunt
```

## Development

You can interactively develop your app using the built-in test runner. Simply
execute this command from within the base directory of your app:

```bash
$ grunt
```

This will run your application on a local server at
[http://localhost:9000](http://localhost:9000). It will also watch your
app code for changes and automatically reload the browser when it detects
changes.
