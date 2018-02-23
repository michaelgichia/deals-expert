# API Docs

## `User`

##### Create user

POST `/api/users`

###### Parameters

* username: string
* password: string

##### Signin user

POST `/auth/signin`

###### Parameters

* username: string
* password: string

##### Get all users

GET `api/users/`

###### Parameters

* Authorization: token

##### Get user

GET `api/users/me`
GET `api/users/:id`

###### Parameters

* Authorization: token
