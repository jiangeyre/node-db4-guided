# Data Modeling Notes

A good data model (physical schema for the database)

-   captures ALL the data needed by the system
-   captures ONLY the data needed by the system
-   reflects reality
-   is flexible
-   guarantees data integrity without sacrificing (too much) performance
-   is driven by the way data is accessed

## Components

-   entities (nouns) <> resources --> tables
-   properties (keys, attributes) --> columns
-   relationships <> sub-resources --> Foreign Keys

## Workflow

-   identify entities
-   identify the relationships
-   identify the properties

## Relationships

-   one to one : very uncommon
-   one to many -> order <> order details, cart <> items, channel <> messages
-   many to many -> authors <> books, artist <> song, label <> artist

An artist can write many songs

A song can be written by many artists

A user has many followers

A user can follow several other users

## Mantras

-   every change to the schema requires a new migration.
-   every table must have a primary key.
-   on a one to many -> use a foreign key.
-   the FK must be the same data type as the Primary Key it references.
-   the FK goes on the "many" side (table).
-   on a many to many -> use a third table.
-   the third table can have extra information (describes the transaction)
-   work o two (or three for many to many) entities at a time.

Authors

-   id
-   name
-   email

Books

-   id
-   title
-   synopsis
-   publisher_id

Publishers

-   id
-   name

Products Order Customers

```js
const author = {
    id: 1,
    books: []
}

const book = {
    id: 1
    authors: []
}

const publisher = {
    id: 1,
    authors: [],
    books: []
}

```

Schools <> Tracks <> Cohorts <> Students

Student Enrollments Cohorts

Students

-   id
-   name
-   email

Enrollments (Student_Cohorts)

-   id
-   student_id
-   cohort_id
-   started
-   completed
-   processedBy (employee id)
