# dogTinder

> DogTinder helps find homes for rescue animals.

## Team

  - Scott Moschella
  - Yujin Chung
  - Joshua Stagner

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> Visit http://dogtinder.herokuapp.com

## Requirements

- Node 7.8
- Postgresql

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
webpack -w
npm start
```
Duplicate the dotenv_example file and rename it to:
```
.env
```

You will need to set up this file with the required information. Here's a quick explanation of each non-obvious entry:

```
PET_API_KEY= /* get this key by registering for a free API developer at petfinder.com,
more info here: https://www.petfinder.com/developers/api-docs#keys  */
PORT=3000
FACEBOOK_APP_ID=fillmein // more info here: https://developers.facebook.com/docs/facebook-login
FACEBOOK_APP_SECRET=fillmein // https://developers.facebook.com/docs/facebook-login
ROOT_URL=THIS_WILL_BE_EITHER_http://127.0.0.1:3000_OR_http://dogtinder.herokuapp.com
SESSION_SECRET=FUNNY_WORDS_GO_HERE // this can be literally any string of letters
DB_HOST=localhost // Get this from heroku after installing postgres
DB_USERNAME=Josh // set this when you do 'dbcreate -U username databasename
DB_PASSWORD=blank
DB_DATABASENAME=dogTinder // set this when you do 'dbcreate -U username databasename
REDIS_URL=(do ** heroku config:get REDISCLOUD_URL ** to get this url)
```

### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
