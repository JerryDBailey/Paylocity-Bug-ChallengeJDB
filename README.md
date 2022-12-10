# Paylocity-Bug-ChallengeJDB
Jerry D. Bailey's Bug Challenge


**Example API Test Cases**

GET - Get Employee List

No Params -- Pass

W/ Params -- Fail

Bad Params -- Fail


POST - Add Employee

Good Body -- Pass

No Body -- Pass

First Name -- Pass

No First Name -- Pass

Numbers -- Fail

Specials -- Fail

Length -- Max 50 -- Pass  **Notes** Is this the length we want

Last Name -- Pass

No Last Name -- Pass

Numbers -- Fail

Specials -- Fail

Length -- Max 50 -- Pass

Dependants -- Pass

Dependants max 0-32 -- Pass

Dependants Negative Number -- Pass

Dependants math -- Pass **Notes** Need more inoforamtion on the math logic, UI does not display anything past .01-.99 but logic uses example 19.23546



Base Salaray 52000 -- Pass

26 checks -- Pass

1000 cost employee -- Pass -- 38.46 UI or 38.46154 API

500 cost per Dependants -- Pass -- 19.23 UI or 19.23077



GET - Get Employee

No Params -- Fail -- Unresolved Variable

Params -- Fail -- Doesnt care about anything after a ?



PUT - Update Employee

Good Body -- Pass

Bad id -- Fail -- Creates New Record, does not enter Salary or gross

Firstname good -- Pass

Special Characters -- fails

Numbers -- Fails

Length -- Pass -- Max50

Lastname good -- Pass

Special Characters -- Fails

Numbers -- Fails

Length -- Pass -- Max50

dependants -- Pass

negatives -- Pass

0-32 -- Pass



DEL - Delete Employee

Delete Employee -- Fail -- Unresolved Variable

Params -- Fail -- ignores anything after ?




**UI Test Case Examples**

Good login -- Pass

Bad login -- Pass

Good Password -- Pass

Bad Password -- Pass



Benefits Page w/devtools open

Does page load -- Pass

Any errors on page ? 403 forbidden but this might be expected.

Click Add Employee -- Pass

First name -- Pass

Last name -- Pass

dependents -- Pass

First Name Blank -- Pass

Last Name Blank -- Pass

Dependents Blank -- Pass -- defaults to zero, this seems accetable but would like to check with a dev

Edit Employee -- Pass

Delete Employee -- Pass

Logout -- Pass

Inspect Elements, use pointer

Html language -- Fail -- missing / not set

Contrast -- Fail -- at least two images are below 4.5 ( logout and add employee both have low contrast ratios)

Footer -- Off center










