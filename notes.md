# Data Modeling Notes

A good data model (physical schema for the database)

- captures ALL the data needed by the system
- captures ONLY the data needed by the system
- reflects reality
- is flexible
- guarantees data integrity without sacrificing (too much) performance
- is driven by the way data is accessed

## Components

- entities(nouns) <> resources --> tables
- properties (keys, attributes) --> columns
- relationships <> subresources --> Foreign Keys

## WorkFlow

- identify entities
- identify the relationships
- identify the properties

## Relationships

- one to one: very uncommon
- one to many: order <> order details, cart <> items, channel <> messages
- many to many: authors <> books, artist <> song, label <> artist

An artist can write many songs.
A song can be written by many artists.
An user has many followers.
An user can follow several other users.

## Mantras

-   every table MUST have a Primary Key
-   every change to the database schema requires a new migration.

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.
