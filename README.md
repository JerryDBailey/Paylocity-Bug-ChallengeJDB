# Paylocity Bug Challege
*Work By Jerry Bailey*

**Table of Contents**

1.[User Story](#user-story)

2.[Example Test Cases](#example-test-cases)

3.[Bugs Found](#bugs-found)

4.[Sample User Story Automation](#sample-user-story-automation)



## User Story

As an Employer, I want to input my employee data so that I can get a preview of benefit costs.

*Assumptions :*
- All employees are paid $2000 per paycheck before deductions
- There are 26 paychecks in a year
- The cost of benefits is $1000/year for each employee
- Each dependent incurs a cost of $500/year

**Scenario 1: Add Employee**

GIVEN an Employer 
AND I am on the Benefits Dashboard page 
WHEN I select Add Employee 
THEN I should be able to enter employee details 
AND the employee should save 
AND I should see the employee in the table 
AND the benefit cost calculations are correct

**Scenario 2: Edit Employee**
GIVEN an Employer 
AND I am on the Benefits Dashboard page 
WHEN I select the Action Edit 
THEN I can edit employee details 
AND the data should change in the table

**Scenario 3: Delete Employee**
GIVEN an Employer 
AND I am on the Benefits Dashboard page 
WHEN I click the Action X 
THEN the employee should be deleted

## Example Test Cases
 *API ENDPOINTS* 
 
**GET - Get Employee List**
- No Params -- Pass
- With Params -- Fail
- Bad Params -- Fail

**POST - Add Employee**
- Good Body -- Pass
- No Body -- Pass
- First Name -- Pass
- No First Name -- Pass
- Numbers In Name -- Fail
- Specials In Name -- Fail
- Max Length 50 -- Pass 
- Last Name -- Pass
- No Last Name -- Pass
- Numbers In Last Name -- Fail
- Specials In Last Name -- Fail
- Length Last Name -- Pass
- Dependants -- Pass
- Dependants max Limit -- Pass
- Dependants min Limit -- Pass
- Dependants Negative Number -- Pass
- Dependants Cost Calulations -- Pass
- Base Salaray -- Pass
- Per Check Cost -- Pass
- Employee Cost -- Pass
- *Notes** Need more inoforamtion on the math logic, UI does not display anything past .01-.99 but logic uses like example dependant cost 19.23546. Base Salary = 52000 per year, Checks = 26 per year , Employee Cost = 1000 per year, Dependants Cost = 500 per year

**GET - Get Employee**
- No Params -- Fail -- Unresolved Variable
- Params -- Fail -- Doesnt care about anything after a ?

**PUT - Update Employee**
- Good Body -- Pass
- Bad id -- Fail -- Creates New Record, does not enter Salary or gross
- Firstname good -- Pass
- Special Characters -- fails
- Numbers -- Fails
- Length -- Pass -- Max50
- Lastname good -- Pass
- Special In Name -- Fails
- Numbers In Name -- Fails
- Name Length -- Pass
- Dependants Max -- Pass
- Dependants Min -- Pass
- Dependants Negative Number -- Pass

**DEL - Delete Employee**
- Delete Employee -- Fail -- Unresolved Variable
- Params -- Fail -- ignores anything after ?

## UI Test Case Examples

**Login Page**
- Does Page Load -- Pass
- Click Login -- Pass
- Valid Login / Password -- Pass
- Valid Login / Invalid Password -- Pass
- Invalid Login / Valid Password -- Pass
- Invalid Login / Invalid Password -- Pass

**Benefits Page**
- Does page load -- Pass
- Any errors in Devtools -- 403 forbidden but this might be expected.
- Click Add Employee -- Pass
- First name -- Pass
- Last name -- Pass
- Dependents -- Pass
- Click Add -- Pass
- Does Employee Show In Table -- Pass
- Are Costs Calculated -- Pass
- Employee Information Displayed Correctly -- Fail
- First Name Blank -- Pass
- Last Name Blank -- Pass
- Dependents Blank -- Pass -- defaults to zero, this seems accetable but would like to check with a dev
- Edit Employee -- Pass
- Delete Employee -- Pass
- Logout -- Pass
- Table Adjusting To Fit -- Fail

**Inspect Elements**
- Html language -- Fail -- missing / not set
- Contrast -- Fail -- at least two images are below 4.5 ( logout and add employee both have low contrast ratios)
- Footer -- Off center


## Bugs Found
https://github.com/JerryDBailey/Paylocity-Bug-ChallengeJDB/issues

## Sample User Story Automation
https://github.com/JerryDBailey/Paylocity-Bug-ChallengeJDB/blob/main/SampleAutomation.cy.js

