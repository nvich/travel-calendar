# Travel Calendar

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