# Module_20_Project

- The database will store the cleaned and processed CSV files.
- AWS will host the files.
- The server will be linked to PgAdmin database.


## Schema Diagram 

![Schema](https://github.com/ibachrachel/Module_20_Project/blob/SteveZ/Resources/Database/Schema.jpg)

Basic_Handwashing
- 
`Year int PK FK >- LE_DATA.Year
Country varchar PK FK >- LE_DATA.Country
Total real
Rural real
Urban real`

Basic_Drinking_Water
-
`Year int PK FK >- LE_DATA.Year
Country varchar PK FK >- LE_DATA.Country
Total real
Rural real
Urban real`

LE_DATA
-
`Year int PK
Country varchar PK
GDP real
LE real
Status varchar
Alcohol real
Shooling real
BMI real`

Basic_Sanitation
-
`Year int PK FK >- LE_DATA.Year
Country varchar PK FK >- LE_DATA.Country
Total real
Rural real
Urban real`

Unsafe_WASH_Morality
-
`Year int PK FK >- LE_DATA.Year
Country varchar PK FK >- LE_DATA.Country
Male real
Female real
Both real`

## SQL Table Creation Code

`CREATE TABLE drinking_water (
    country VARCHAR(100) NOT NULL,
    year_ int NOT NULL,
	drinking_water Real NOT NULL,
	PRIMARY KEY (country, year_)
	);`
	

