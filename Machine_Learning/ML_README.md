# Preprocessing 

During our initial exploratory analysis, we discovered that the dataset we chose had quite a bit of NaN's that would have to be cleaned up as well as some possibly unreliable data. (IE population of Afghanistan from year to year had significant fluctuations) In early phases and in mockup of a machine learning model using R, we knew that all NaN's would be dropped from the dataset and not be taken into account in in our model.  With doing no cleaning, this meant that about a third of our dataset would be ignored.  The biggest culprits that we identified that we wanted to clean up were the Population column as well as the GDP column.  We also identified a few colums that had significant collinearity, so we identified a few columns that we could drop as features.  

The columns with collinearity were infant deaths and under-five deaths, GDP and percentage expenditure, thinness 1-19 years and thinness 5-9 years.  

We sourced two different population datasets, one from United Nations and one from Dataworldbank as well as a two different GDP datasets from same sources.    

With the Dataworldbank datasets, the pd.melt function was used to pivot the df from wide to long so that the format matched our life_expectancy dataset, and it was reorganized alphabetically by country and year.  There was very few NaN's and the population of Eritrea for 2011 was used to fill in the NaN's for years 2012 -2015.  The Dataworldbank GDP dataset followed much the same format except it had 108 null values.  These will be dealt with after these two datasets are joined with our Life_expectancy dataset.  

This is where we ran into an issue in joining the datasets because we wanted to join on the column "Country", but the values for this column didn't match up exactly between the datasets.  Steven used a dictionary of the country names to change names for the Life_expectancy dataset and did the same procedure for the Population and GDP datasets and NaN's for GDP were filled in with zeros.  Once complete, the datasets were joined with the Life_expectancy dataset.  

Simultaneously, a different cleaning procedure was being done with the United Nations population and GDP datasets to fill in the NaN's and replace unreliable data in the Life_Expectancy data.  The join/merge was much easier as the values in the "Country" column perfectly aligned.  After merging the dataframes, any NaN's in the United Nations GDP and populations columns were filled with values from the Life_expectancy dataframe and then these columns were dropped.  

The Datworldbank data more completely fills in the data for the two columns that we had the most concerns about (GDP/Population), but since we had already sourced and worked on the data, it was decided to keep it to compare and see if there were tangible differences in results in the machine learning model.  


# Machine Learning Model 

The machine learning model that we chose is multiple linear regression due to the fact that there are numerous independent variables and the output we are looking for is not binary/classification.  Our initial machine learning models will be using the two different versions of the cleaned life_expectancy.csv because we are curious on if there would be different outcomes and these will serve as the basis of our hypothesis.  Our alternative hypothesis is that we can get a more accurate model by incorporating sanitation data while the null hyphothesis would be that there will be no increase of accuracy in the model with sanitation data incorporated.  

Upon loading the data into the machine learning notebook, it is first inspected for null values and outliers. Null values are dropped.  There are multiple columns that appear to have outliers (adult mortality, infant deaths, percentage expenditure, under-five deaths, HIV/AIDS, GDP, Thinness 5-9 years).  Because of the nature of the data and the vast differences between developed countries and still developing countries, outliers should be expected, but should look into and investigate more.  **Some of these colums will be dropped, but need to look at how to deal with outliers still.    

The getdummies funciton is used on the classification column "Status" and then minmaxscaler is applied on the numerical columns to scale the data.(Note Minmaxscaler is very sensitive to outliers so need to revisit as stated above.)

The data is then split between testing and training sets using train_test_split with a 70% to 30% ratio and a random_state = 100. All variables except the target variable (life expectancy) are loaded into the model and a summary of the model is run so we can begin to slim down the number of variables and come up with a finalized feature selection.  Using the summary function, the significance of each variable is considered by looking at the P-Value.  Besides P-value, the Variance Inflation Factor (VIF) is considered as well.  VIF is shows much feature variables are correlated with each other.  One variable is removed at a time and a new linear regression model is ran until ideally every column's p-value is < 0.005 and VIF is < 5.  

By iterating through this process using the training data, the following columns were removed from the model: infant deaths, thinness 5-9 years, percentage expenditure, Schooling, Diphtheria, Income composition of resources, Polio.  

This left us with 8 remaining columns that will be used as features in the model.  They are: Adult mortality, Measles, BMI, under-five deaths, HIV/AIDS, GDP, UN_population, and Developing.  

The R-squared model of this final model is 0.738.  A residual analysis of the error terms (y actual - y-predicted) is also investigaed using a histogram and the plot looks normally distributed.  This model can move forward to make prediction using the test dataset.  

The test dataframe consists of 748 rows and 16 columns.  After scaling like we did for the training data, the target variable(Life expectancy) column is dropped as well as the unneccessary column features that were identified and not used in the 8th and final linear regression model.  When using the testing set in the model, the r-squared value is 0.7078, which is slightly less than our training data. 

# Still to do...
-discuss how to handle outliers
-Use the Dataworld bank Population and GDP datasets that were used to clean the Life_expectancy data to run through the linear model (just curious to see if any significant difference in outcome)
-incorporate pulling from AWS/SQL into the coding 
-merging in the 4 sanitation datasets to the life_expectancy to either a.)see if these columns would make it into the feature selection using the same process, or b.)select the sanitation as features and run the same model/similar model.
-screenshots/photos? graph idea - use multiple scatterplots (each scatterplot is one column feature vs life expectancy) with a single linear model to show the benefits of multiple linear regression (all the difference scatterplots forged into one machine learning model)

# Limitations and Benefits of Multiple Linear Regression

Multiple linear regression is convenient in that it allows for many potential important factors to be be considered in one model.  It is often more reliable than a simple linear regression because of this.  Also, a multiple linear regression can have the ability to help identify outliers in the dependent variable.  


One drawback with multiple linear regression is the because it uses "multiple variables and dimensions, they are almost impossible to plot and visualize." (Module 15.7.3).  Other disadvantages could be using incomplete data (not large enough sample size) and incorrectly identifying correlation as causation.


