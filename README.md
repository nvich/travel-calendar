# Travel Calendar

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![issues](https://img.shields.io/github/issues/descco-group/travel-calendar.svg?style=flat-square)](https://github.com/descco-group/travel-calendar/issues)

## Install

```
npm install
```

## Usage

```
mongod
```
```
mongoimport --db travel-calendar --collection travels --file ./resources/data/travel-calendar/travels.json
mongoimport --db travel-calendar --collection users --file ./resources/data/travel-calendar/users.json
```

### Development

```
npm run start:dev
```

### Production

```
npm start
```

## API

### Get All
```
GET - http://localhost:3000/admin/travels
```

### Create ID
```
POST - http://localhost:3000/admin/travels
```

### Get ID
```
GET - http://localhost:3000/admin/travels/:id
```

### Update Id
```
PUT - http://localhost:3000/admin/travels/:id
```

### Delete Id
```
DELETE - http://localhost:3000/admin/travels/:id
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/descco-group/travel-calendar/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
