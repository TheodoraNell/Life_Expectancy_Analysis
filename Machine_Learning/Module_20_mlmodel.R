#Load Packages
library(dplyr)
library(tidyverse)
library(ggplot2)

#Import csv file and create data frame
lifeExpectancy <- read.csv(file = "Module_20_Project/Resources/Life_Expectancy_Data.csv", check.names=F, stringsAsFactors = F)
head(lifeExpectancy)

#Perform linear regression using the 6 columns
model <- lm(`Life expectancy` ~ `Adult Mortality` + `infant deaths` + Alcohol + `percentage expenditure` + `Hepatitis B` + Measles + BMI + `under-five deaths` + Polio + `Total expenditure` + Diphtheria + `HIV/AIDS` + GDP + Population + `thinness  1-19 years` + `thinness 5-9 years` + `Income composition of resources` + Schooling, data = lifeExpectancy)

#Using summary function to determine p-value and r-squared values
#summary(lm(`Life expectancy` ~ `Adult Mortality` + `infant deaths` + Alcohol + `percentage expenditure` + `Hepatitis B` + Measles + BMI + `under-five deaths` + Polio + `Total expenditure` + Diphtheria + `HIV/AIDS` + GDP + Population + `thinness  1-19 years` + `thinness 5-9 years` + `Income composition of resources` + Schooling, data = lifeExpectancy))
summary(model)
#Biggest concern here is that 1289 observations deleted due to NA's

#Examine coefficients table
summary(model)$coefficient

#Examine the confidence of the model
confint(model)

#The RSE estimate gives a measure of error of prediction. The lower the RSE, 
#the more accurate the model.
#The error rate can be estimated by dividing the RSE by the mean outcome variable
#sigma(model)/mean(lifeExpectancy$ `Life expectancy`) #gives an NA for some reason
sqrt(deviance(model)/df.residual(model))
#Closer to zero the better the model, but be careful of overfitting


#Checking multicollinearity between Adult Mortality, infant deaths, under-five deaths
#Multicollinearity is a problem because it will inflate the standard error of a model as well as make the parameter estimates inconsistent.
plot(lifeExpectancy[c(5, 6, 12)])

#Multicollinearity only a problem when it is above a .9
#Correlation matrix
cor(lifeExpectancy[c(5,6,12)])
#Can probably drop either infant death column or under-five death column

#Variance Inflation Factor
#Third way to check mutlicollinearity.  Only an issue when VIF > 10
score <- lm(`Adult Mortality` ~ `infant deaths` + `under-five deaths`, data = lifeExpectancy)
1/(1-summary(score)$r.squared)

#To list objects in enviroment is ls()
#to Remove items in environment is rm(object name)
#Hold control L to clear console


