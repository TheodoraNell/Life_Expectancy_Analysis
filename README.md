
# Life Expectancy Analysis using Linear Regression

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Life_expectancy_world_map.PNG"  width="1000" height="400">
 

## ![#2874A6 ](https://via.placeholder.com/15/2874A6/2874A6.png) Content Navigator 
<details>
  <summary>Click to expand or hide</summary>

<br/>
	
* [Project Overview](#project-overview)
   * [Topic Description](#Topic-Description) 
   * [Questions We Asked](#questions-to-answer) 
* [Resources](#resources) 
* [Communication Protocols](#communication-protocols)    
* [Database](#database)
* [Links](#Links)
	
</details>


## Project Overview

#### Topic Description

Throughout the centuries, life expectancy has increased due to improvements made to the environment in which a population lives in. This increase in life expectancy can be accounted for be analyzing factors that might contribute to a healthier life, such as economical factors, social factors, and mortality factors. The goal of our project was to be able to identify the effects of santiation on worldwide life expectancy. We examined 193 countries within decade long period of 2005-2015.

#### Description of Data Source

The 5 main datasets we used come from the World Health Organization (WHO) and they include a wide range of different world health statistics by country and year. Both datasets come from the World Health Organization (WHO) and they cover the most recent health statistics of the world. One dataset  includes various indicators of health and the percentages of individuals with access to these factors. The second dataset includes information about how life expectancy has increased or decreased in countries around the world. 

#### Questions to Answer
 
a. Which countries have an increase in life expectancy? Which countries did not?

b. Out of the countries with life expectancy changes, which factors affected this statistical the most?

c. Going forward, humanitarian efforts can be focused on what areas of the world? And, what factors showed the most effect on world health. 

#### Project Timeline

![Project_Timeline](https://user-images.githubusercontent.com/102566199/187097436-851339f6-3102-4f8c-9c02-b3678c454c93.png)

#### Resources 

a. Software: Jupyter Notebook, Tableau 2022.1, Google Slides, Canva, Git Bash, Slack, R, VScode

b. Languages: Python 3.7, HTML, CSS

c. Libraries: Pandas, numpy, sklearn.model

d. Machine Learning Models: Multiple Linear Regression

e. Database: postgreSQL, pgAdmin, AWS



#### Communication Protocols

1. Slack Messaging App

2. 2 Hour Collaboration Meetings Bi-Weekly

Communication will take place through the Slack chat and requires each group member to contribute to the conversation regularly. 
In the case of emergency, the member will be contacted through their personal email. Everyone shall clearly communicate what they plan to work on and complete between class meetings. 

#### Data Visualizations



#### Machine Learning Model

- takes in data from provisional database
- outputs label for input data

a. Preliminary Data Preprocessing: The null values were really causing the model to not extremely reliable. The first try gave us an extremely high value of accuracy, but there were too many rows that had been dropped (due to too many null values) for this to be trusted. Instead, the missing data was pulled from a multitude of WHO datasets to be able to piece the information back together. Once this was complete, the data was able to create a preliminary model that could be trusted. The accuracy was lower, but that was to be expected at this point.

 Issues: 
 
- Nulls, Zeros, String to Ints, and Inconsistencies

- Population changed by factor of 10x year to year

- Getting new clean data for 'population' and 'GDP' required conversions for wide to long (format)




b. Engineering and Feature Selection: The model that was to be used for a multiple linear regression model, which would be a supervised model that took into account many factors. This was chosen so that the santiation factors' effects could be closely mapped. This was working initially, but as the project progressed it became apparent that we might need to move to a single linear regression model so that the result could be clearly communicated with our audience. 

c. Splitting in to Testing and Training Sets: We split the training set away from the testing set by testing the model without the santiation factors and then with the santiation factors for the testing set. If this was unsuccessful, then it would need to be adjusted to perhaps only include the older data in the training set and then use the newer data for the testing set. This could be possible because there is data for each country for many years, ranging from 2008  to 2015.

d. Explanation of Model Choice: The benefits for the multiple linear regression model is that it can be used to test multiple factors at once, but the biggest downside is that the visualizations that were generated with our data was not clean and easy to understand. 


#### Analysis and Result of MLM

- Feature selection was done by considering P-value and VIF. Goal was to get p-value below 0.05 for all features and vif below 5.0
- Removed 1 feature at a time and updated model, by the 8th model, reached the threshold and had our list of features to use
- Validation with test set came back with accuracy/r-squared value of 0.707 (total of 8 features)
- Introduced the sanitation files to the original dataset to see if stronger results. Followed same process and this time to get VIF below 5 and p-value below 0.05, this time feature selection was trimmed down to 4 features and but accuracy improved by about 10%. The validation r-squared was .802

* Random Forest Regression* 

- Dropped country and used getdummies function on status and then used all columns for the model
- Ended up with a RMSE(root mean square error) of 2.014 and an accuracy score of 99.07 (possible overfitting) and the validation or testing had a 98.12% accuracy.
- Density Plot to show actual life expectancy versus the predicted life expectancy of the testing set



#### Database 

Conceptual Diagram to help visualize our database construction

![Database Schema](https://user-images.githubusercontent.com/102566199/189573147-f648a7cd-2e45-493d-8c5a-d4f9ad68616b.png)


- Data Exploration: 193 countries were represented in the dataset, while 195 exist in the world. The only two that are not recognized will NOT affect the analysis. Rows that were found to have high amounts of null values were dropped. Data was converted to a long format to allow for easy merging. All the countries have multiple years that are considered, which allows a relationship between Life Expectancy and other factors to be displayed throughout time. Running some initial analysis showed that there was high collinearity among some rows such as: infant deaths and Morality under 5. This is displayed with a resulting value of a collinearity of over 0.9 and a heat map showing that there were representing too much of the same data, which is reasonable for the two factors. 

- Data Analysis: While building the data analysis, columsn were added to the Life Expectancy dataset to increase the amount of factors that could be considered. These columns came from the Santiation files initially discussed. The data was displaying some outliers when scaling the data for the machine learning model. The min-max scaling option was displaying some serious outliers. This was further demonstrated by the drafted Tableau visualizations that were created to check on this trend. The preliminary analysis yielded 5 main factors with the highest affect on Life Expectancy: BMI, Schooling, Commposition of Resources, Adult Morality, and Infant Deaths. Many of the visualizations used to better understand that data found a positive correlation between the increase in Santiation factors and the increase in Life Expectancy. 

a. Static Data Storage: a combination of AWS and pgAdmin are used to create a solid database to pull from 

b. Database connection: the database is connected to pgAdmin from AWS using the endpoint connection point to import this

c. Tables: There were tables created for every factor of Santiation being considered (ex. Handwashing, Santiation Services, Clean Water). This was used so that they could be displayed individually and then merged easily together





#### Dashboard
 

The webpage will collect all of our information and display it for the final presentation. The interactive elements will include our data display, our map, the Tableau visualizations, and our presentation through Google Slides. Our webpage is hosted through GitHub Pages and is currently formatted to be scrollable in a mobile format, but will be tested for best display option. 





#### Future Recommendations

If our group was to redo this project, we would have immediately found additional data to fill in the datasets with any information that was missing. Many countries were missing population data, which was difficult to work with because entire countries would not be represented. Once this component was fixed, we would be able to join our datasets without so many null values being present. 

The scaling of the data for the machine learning model was difficult to understand because outliers tended to skew the visualizations created. 


#### Links


[Link to Google Slides Presentation](https://docs.google.com/presentation/d/1YMWFu4EWW-TqpLAgISpPaUMpxWWm84ooTI_JyVNc4Eo/edit?usp=sharing)


[Tableau Public Link](https://public.tableau.com/views/LifeExpectancy_16629782555020/LifeExpectancyAnalysis?:showVizHome=no&:embed=true)

*Datasets Used*

[Life Expectancy (WHO)](https://www.kaggle.com/datasets/kumarajarshi/life-expectancy-who)

[World Health Statistics 2020](https://www.kaggle.com/datasets/utkarshxy/who-worldhealth-statistics-2020-complete?select=safelySanitization.csv)

*Dashboard*

https://theodoranell.github.io/




[To Navigate to the Top](#Life-Expectancy-Analysis-using-Linear-Regression)



