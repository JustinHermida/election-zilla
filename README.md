# Election Zilla

1. Team Name: 

Election Zilla

2. Mascot: 

https://images.app.goo.gl/4JPQ4ALuuwPhLtY98

3. Motivational Team Slogan:
Roawr!!!!
https://www.urbandictionary.com/define.php?term=Roawr

4. Select Team Colors for your theme:

Green, Red,

5. Git Repo: https://github.com/JustinHermida/election-zilla


## Models

### Workflow 1:

Owner: Abhi



POST /voters
Voter: {
  id: PK
  firstName,
  lastName.,
  address,
  county/city,
  county/city, 
  birthdate, 
  email
  phone,
}

POST /register

GET /voters
 - Voters component
 
DELETE /voters/{id}
DELETE /voters
{[...ids]}
 - Voters Table Component
 - Sorting ascending by column

PUT /voters

Voter: {
  firstName,
  lastName.,
  address,
  county/city,
  county/city, 
  birthdate, 
  email,
  phone,
}


### Workflow 2:

Jay
Person {
  Role:
}

### Workflow 3

Justin

Components:
- Create Election Form/Model Component
- Ballot Table component for displaying elections
-- Do more research
    
Election {
 id
 Questions [...Question],
 voterId [],
}


Question: {
  id,
  question,
  yes_counts,
  total
}

