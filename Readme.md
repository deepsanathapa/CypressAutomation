Cypress a JavaScript-based testing automation solution used for modern web automation.Cypress a JavaScript-based testing automation solution used for modern web automation.

## Key Features of Cypress:
-  Time travel for real-time debugging of web apps.  
-  Cypress network control. 
- API testing capabilities. 
- Innovative component testing capabilities. 
-  A beta version of Cypress Studio as a record and playback solution. 
-  Mocking and stubbing capabilities. 

Cypress is a great growing tool. It is fast to ramp up with and provides a good execution environment that is baked in. It is fully JavaScript/MochaJS oriented with specific new APIs to ease the scripting.

 ## System Prerequisites:
 Cypress is a desktop application that is installed on your computer. The desktop application supports the following operating systems:
 1. macOS 10.9 and above (64-bit only)
 2. Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
 3. Windows 7 and above

 Clone the project from github

After clone you need to download npm 

````
npm install

````

  So once everything is done, we need to open the cypress and we need command for it.

   ````
   ./node_modules/.bin/cypress open 

   ````
  
OR

`````
npx cypress open

`````
Rename the env.example to env and update accordingly.


## Note: Read below points carefully

1. Make sure the URL is open on your device before starting the test.

2. Change the env file according to env.example file template with your credentials.

3. Due to privacy policy and security considerations, only positive and valid login scenarios are executed in the project for Facebook. Negative scenarios that involve incorrect credentials or unauthorized access are deliberately excluded to prioritize user privacy and uphold security standards
