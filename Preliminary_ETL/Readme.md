# Initial Data Collection and Cleaning

Basic cleaning and preprocessing was performed to standardize all datasets into a similar, usable, format with common column names and all null values removed. This data was used to create the first visualizations for the analysis.

## Data Sourcing
Several datasets were initially sourced from the World Health Organization including a general quality of life dataset with a variety of metrics as well as 5 other datasets; 4 which each focus on a single metric of sanitation and 1 with emissions data. The goal behind this selection was to isolate the "Life Expectancy" column of the first dataset as the target variable and perform an analysis of the relationship between different lifestyle factors and the average life expectancy of a given country. A machine learning model was also in mind to ideally predict life expectancy using these factors and potentially a few others. 

## Initial Data Cleaning
Basic data preprocessing was performed to standardize all the datasets into the same format with the same column names for both ease of joining within the database as well as the more in-depth analysis and cleaning of the data for use in the machine-learning model. The emissions dataset was converted from a wide format (with each year being represented by a column) to long format for consistency with the other datasets with years reperesented as rows. 

## Machine-Learning
Next, separate and more in-depth preprocessing was performed by other team members specifically for use in the machine-learning model. The files created in the initial cleaning were referenced, refactored, and exapnded upon for this next step. Once complete, the cleaned files for the machine learning model will replace the first set in the database as well as in tableau for more complete and accurate visualizations. 
