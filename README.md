# How to use Jobboard API ?

## Endpoints

Jobboard API bring many ressources with the endpoints below.

## Sectors :

### All sectors

This is an object representing all sectors.

````python
GET /api/sectors
````

Response object :

```
[
    {
        "id": 1,
        "name": Aéronautique
    },
    {
        "id": 2,
        "name": Computer science
    },
]
```

### Sector by ID

This is an object representing once sector select by ID.

````python
GET /api/sector/:id
````

```
[
    {
        "id": 1,
        "name": Aéronautique
    },
]
```

### Delete sector by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/sector/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```

### Post a new sector

This endpoint take a "sector_name" argument, create a new object and return a success message. 

````python
POST /api/sector
````

```
[
    {
        "type": Success,
        "response": Object added successfully
    },
]
```

### Patch sector

This endpoint edit a sector which already exist.

````python
PATCH /api/sector/:id
````

```
[
    {
        "type": Success,
        "response": Object modified successfully
    },
]
```

## Advertisements

### All advertisements

This is an object representing all advertisements.

````python
GET /api/advertisements
````

Response object :

```
[
    {
        "about": "Amazing job in the heart of Los Angeles",
        "contract_type": "Part-Time",
        "id": 1,
        "id_companie": 3,
        "id_sector": 12,
        "id_wage": 8,
        "job_description": "Software engineer",
        "localisation": "Los-Angeles",
        "title": "Computer engineer"
    },
    {
        "about": "Work in the big company with many advantages",
        "contract_type": "Full-Time",
        "id": 2,
        "id_companie": 23,
        "id_sector": 43,
        "id_wage": 1,
        "job_description": "Data-Scientist",
        "localisation": "San-Francisco",
        "title": "Data scientist"
    },
]
```

### Advertisement by ID

This is an object representing once advertisement select by ID.

````python
GET /api/advertisements/:id
````

```
[
    {
        "about": "Work in the big company with many advantages",
        "contract_type": "Full-Time",
        "id": 2,
        "id_companie": 23,
        "id_sector": 43,
        "id_wage": 1,
        "job_description": "Data-Scientist",
        "localisation": "San-Francisco",
        "title": "Data scientist"
    },
]
```

### Advertisement by ID

This is an object representing once advertisement select by ID.

````python
GET /api/advertisements/:id
````

```
[
    {
        "about": "Work in the big company with many advantages",
        "contract_type": "Full-Time",
        "id": 2,
        "id_companie": 23,
        "id_sector": 43,
        "id_wage": 1,
        "job_description": "Data-Scientist",
        "localisation": "San-Francisco",
        "title": "Data scientist"
    },
]
```

### Advertisement by title and localisation

This endpoint take a "advertisement_title" and/or "advertisement_localisation" argument.
It return one advertisement select by title and localisation.

````python
GET /api/advertisements/title
````

```
[
    {
        "about": "Work in the big company with many advantages",
        "contract_type": "Full-Time",
        "id": 2,
        "id_companie": 23,
        "id_sector": 43,
        "id_wage": 1,
        "job_description": "Data-Scientist",
        "localisation": "San-Francisco",
        "title": "Data scientist"
    },
]
```

### Delete advertisement by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/advertisements/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```

### Patch advertisement by ID

This endpoint edit an advertisement which already exist.

````python
PATCH /api/advertisement/:id
````

```
[
    {
        "type": Success,
        "response": Object modified successfully
    },
]
```

## Companies

### All companies

This is an object representing all companies.

````python
GET /api/companies
````

Response object :

```
[
    {
        "id": 1,
        "name": "Apple", 
        "about": "On vend des Iphones",
        "linkedin_link": "linkedin.com/apple", 
        "twitter_link": "twitter.com/apple", 
        "website_link": "apple.com"
        "id_domain": 1, 
    }, 
    {
        "id": 2, 
        "name": "Samsung", 
        "about": "On vend des Samsung", 
        "linkedin_link": "linkedin.com/samsung", 
        "twitter_link": "twitter.com/samsung", 
        "website_link": "samsung.com"
        "id_domain": 1, 
    }
]
```

### Companies by ID

This is an object representing once companies select by ID.

````python
GET /api/company/:id
````

```
[
    {
        "id": 1, 
        "name": "Apple", 
        "about": "On vend des Iphones", 
        "linkedin_link": "linkedin.com/apple", 
        "twitter_link": "twitter.com/apple", 
        "website_link": "apple.com"
        "id_domain": 1, 
    },
]
```

### Delete Companies by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/companie/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```

### Post a new Companies

This endpoint take a "name", "about", "linkedin_link", "twitter_link", "website_link", "id_domain" argument, create a new object and return a success message. 

````python
POST /api/companie
````

```
[
    {
        "type": Success,
        "response": Sector added successfully
    },
]
```

### Patch Companies

This endpoint edit a companies which already exist.

````python
PATCH /api/company/:id
````

```
[
    {
        "type": Success,
        "response": Sector modified successfully
    },
]
```

## Domains 

### All domains

This is an object representing all domains.

````python
GET /api/domains
````

Response object :

```
[
    {
        "id": 1,
        "name": Fullstack developper
    },
    {
        "id": 2,
        "name": Back-end developper
    },
]
```

### Domain by ID

This is an object representing once domain select by ID.

````python
GET /api/domain/:id
````

```
[
    {
        "id": 2,
        "name": Back-end developper
    },
]
```

### Delete domain by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/domain/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```

### Post a new domain

This endpoint take a "domain_name" argument, create a new object and return a success message. 

````python
POST /api/domain
````

```
[
    {
        "type": Success,
        "response": Object added successfully
    },
]
```

### Patch domain

This endpoint edit a domain which already exist.

````python
PATCH /api/domain/:id
````

```
[
    {
        "type": Success,
        "response": Object modified successfully
    },
]
```

## Wages 

### All wages

This is an object representing all wages.

````python
GET /api/wages
````

Response object :

```
[
    {
        "id": 1,
        "amount": 1000 / 2000
    },
    {
        "id": 2,
        "amount": 2000 / 3000
    },
]
```

### Wages by ID

This is an object representing once wage select by ID.

````python
GET /api/wage/:id
````

```
[
    {
        "id": 2,
        "amount": 1000 / 2000
    },
]
```

### Delete wage by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/wage/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```

### Post a new wage

This endpoint take a "wage_name" argument, create a new object and return a success message. 

````python
POST /api/wages
````

```
[
    {
        "type": Success,
        "response": Object added successfully
    },
]
```

### Patch wage

This endpoint edit a wage which already exist.

````python
PATCH /api/wage/:id
````

```
[
    {
        "type": Success,
        "response": Object modified successfully
    },
]
```

## Emails

### All emails

This is an object representing all emails.

````python
GET /api/emails
````

Response object :

```
[
    {
        "content": "Je suis le contenue du mail", 
        "id": 1, 
        "letter": "je suis le liens vers la lettre de motivation", 
        "object": "Je suis l'objet du mail.", 
        "resume": "Je suis le liens vers le cv", 
        "send_date": "Tue, 06 Oct 2020 10:56:47 GMT"
    }, 
    {
        "content": "Je suis le contenue du mail2", 
        "id": 2, 
        "letter": "je suis le liens vers la lettre de motivation2", 
        "object": "Je suis l'objet du mail.2", 
        "resume": "Je suis le liens vers le cv2", 
        "send_date": "Tue, 06 Oct 2020 10:57:08 GMT"
    }
]
```

### emails by ID

This is an object representing once email select by ID.

````python
GET /api/email/:id
````

```
[
    {
        "content": "Je suis le contenue du mail2", 
        "id": 2, 
        "letter": "je suis le liens vers la lettre de motivation2", 
        "object": "Je suis l'objet du mail.2", 
        "resume": "Je suis le liens vers le cv2", 
        "send_date": "Tue, 06 Oct 2020 10:57:08 GMT"
    }
]
```

### Delete email by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/email/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```

### Post a new email

This endpoint take an "object", "content", "send_date", "resume", "letter" argument, create a new object and return a success message. 

````python
POST /api/email
````

```
[
    {
        "type": Success,
        "response": Object added successfully
    },
]
```

### Patch email

This endpoint edit a email which already exist.

````python
PATCH /api/email/:id
````

```
[
    {
        "type": Success,
        "response": Object modified successfully
    },
]
```

## Users

### All users

This is an object representing all users.

````python
GET /api/users
````

Response object :

```
[
    {
        "birthday": "Fri, 23 Nov 1990 00:00:00 GMT",
        "email": "jeandupont@gmail.com",
        "first_name": "Jean",
        "gender": "Male",
        "id": 1,
        "last_name": "Dupont",
        "password": "motdepasse",
        "phone": "0607080910",
        "token": "dgfsdfgdlkqsfdjksqdfkfkdsfqsdfkj45432gfdsg"
    },
    {
        "birthday": "Thu, 10 Dec 1998 00:00:00 GMT",
        "email": "lebronjames@gmail.com",
        "first_name": "Lebron",
        "gender": "Male",
        "id": 2,
        "last_name": "James",
        "password": "motdepasse",
        "phone": "0603480910",
        "token": "dgfsdfgdlkqdfdjksqdfkfkdsfqsdfk"
    }
]
```

### User by ID

This is an object representing once users select by ID.

````python
GET /api/user/:id
````

```
[
    {
        "birthday": "Thu, 10 Dec 1998 00:00:00 GMT",
        "email": "lebronjames@gmail.com",
        "first_name": "Lebron",
        "gender": "Male",
        "id": 2,
        "last_name": "James",
        "password": "motdepasse",
        "phone": "0603480910",
        "token": "dgfsdfgdlkqdfdjksqdfkfkdsfqsdfk"
    }
]
```

### Post new user

This endpoint take an "first_name", "last_name", "email", "phone", "password", "birthday", "gender", "token" argument, create a new object and return a success message. 

````python
POST /api/users
````

```
[
    {
        "type": Success,
        "response": Object added successfully
    },
]
```

### Patch users

This endpoint take an "first_name", "last_name", "email", "phone", "password", "birthday", "gender", "token" argument, create a new object and return a success message. 

````python
PATCH /api/user/:id
````

```
[
    {
        "type": Success,
        "response": Object modified successfully
    },
]
```

### Delete user by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/user/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```

## Applications

### All applications

This is an object representing all applications.

````python
GET /api/applications
````

Response object :

```
[
    {
        "apply_date": "Wed, 07 Oct 2020 09:53:20 GMT", 
        "id": 1, 
        "id_advertisement": 1, 
        "id_email": 1, 
        "id_user": 1
    }, 
    {
        "apply_date": "Wed, 07 Oct 2020 09:53:54 GMT", 
        "id": 3, 
        "id_advertisement": 1, 
        "id_email": 1, 
        "id_user": 3
    }
]
```

### User by ID

This is an object representing once applications select by ID.

````python
GET /api/applications/:id
````

```
[
    {
        "apply_date": "Wed, 07 Oct 2020 09:53:54 GMT", 
        "id": 3, 
        "id_advertisement": 1, 
        "id_email": 1, 
        "id_user": 3
    }
]
```

### Post new user

This endpoint take an "id_user", "id_advertisement", "apply_date", "id_email" argument, create a new object and return a success message. 

````python
POST /api/applications
````

```
[
    {
        "type": Success,
        "response": Object added successfully
    },
]
```

### Patch applications

This endpoint take an "id_user", "id_advertisement", "apply_date", "id_email" argument, create a new object and return a success message. 

````python
PATCH /api/applications/:id
````

```
[
    {
        "type": Success,
        "response": Object modified successfully
    },
]
```

### Delete user by ID

This endpoint return a remove confirmation message.

````python
DELETE /api/applications/:id
````

```
[
    {
        "type": Success,
        "response": Object deleted successfully
    },
]
```
