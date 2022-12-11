## Full Detail Bug Reports Have Been Filed Under Issues



## Some Sample Test Cases Are Listed Below

## API ENDPOINTS 
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

