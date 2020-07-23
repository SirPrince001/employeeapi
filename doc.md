## Employee Api
This API allows to perform CRUD on the  employee, 

## Create New Employee
> This create new employee and save to the database

- **Endpoint:** `/create-employee`
- **Method:** `POST`
- **Body:**

```json
{
  
"firstname":"prince",
"lastname":"bassey",
"email":"bassey@gmail.com",
"salary":1550,
"dob":"12-4-2002"
}
```

- Response:

```json
{
   "_id": "5f19bdb34c88e40017f407b1",
        "firstname": "joyce",
        "lastname": "john",
        "email": "jjc@gmail.com",
        "salary": 1500,
        "dob": "20-16-199",
        "__v": 0

}
```

## Login
> This fetch and allow employee to login
- **Endpoint:** `/login`
- **Method:** `POST`
- **Body:** 

```json
{
    "email":"jjc@gmail.com"
}
```
- Response

```json