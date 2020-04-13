
# BOCS Task

This repository will contain all the files of the tasks given for BOCS internship.
It has two folders for each of the respective questions.
  

## Getting Started

### Prerequisites

  

You should have the following installed on your local machine:

  

```
NodeJs
npm
Terminal
POSTMAN
```

Below are the download links for the same:

*  [NodeJs and npm](https://nodejs.org/en/download/)
*  [POSTMAN](https://www.postman.com/downloads/)

  

Install them and then move to the next step.

  
  

### Extracting

  

* Download and extract the repository.

* Start terminal and change working directory to the extracted repository.

<hr>
  

## Running

### Question 1: String Permutations
* Open terminal and change your working directory to ```Coding-Question``` where you have the file ```perms.js```
> I have added all the comments explaining the algo behind the code.
* Open ```perms.js``` and change the variable ```input``` on *line 44* to your desired test input string
* Now in the terminal, type ```node perms.js```
* You'll get the output in the terminal


<hr>

### Question 2 : Weather App
* Change the directory in the terminal to ```API-question``` which has ```app.js``` file in it.
* In the terminal type and run ```npm install``` to install the required packages.
* After the installation, in the terminal type ```node app.js``` or ```nodemon app.js```.

> You can set your apikey by changing the **apikey** variable in **app.js** to the one that you got from the openweathermap.org website. For testing purposes I've entered mine already, so no need to worry.

* In the terminal you'll see ```Server is on port 3000``` means that the application is successfully running on ```PORT 3000```

> In case of error make sure that port 3000 is not used by some other application.
*  Open POSTMAN application, name your collection as BOCS. And click this button on the top left.
    

*[![enter image description here](https://camo.githubusercontent.com/aaf010cbf4f68ccb8c18d53d9f1c6559759dc05d/68747470733a2f2f6c6561726e696e672d73657276696365732d6d656469612e627269676874636f76652e636f6d2f646f632d6173736574732f6e6f64652f31373931392d7573652d706f73746d616e2d687474702d72657175657374732f6e6f646531373931392d6372656174652d6e65772d726571756573742e706e67)](https://camo.githubusercontent.com/aaf010cbf4f68ccb8c18d53d9f1c6559759dc05d/68747470733a2f2f6c6561726e696e672d73657276696365732d6d656469612e627269676874636f76652e636f6d2f646f632d6173736574732f6e6f64652f31373931392d7573652d706f73746d616e2d687474702d72657175657374732f6e6f646531373931392d6372656174652d6e65772d726571756573742e706e67)

-   Name the request as  _weather_.
    
-   Now change the Request type from GET to POST
    

[![enter image description here](https://camo.githubusercontent.com/4fd8e25d5e29db3202251845c3ad40a04577a64b/68747470733a2f2f692e696d6775722e636f6d2f635734377177772e706e67)](https://camo.githubusercontent.com/4fd8e25d5e29db3202251845c3ad40a04577a64b/68747470733a2f2f692e696d6775722e636f6d2f635734377177772e706e67)

* Enter request url as ```localhost:3000```
* Now to enter the lattitude and longitude, click on ***body*** tab and switch to ***x-www-form-urlencoded*** 
* You need to enter the two following keys and their numerical values:
	* lat
	* lon
	
![enter image description here](https://i.imgur.com/7kskwpD.png)
* Click on send now. If everything goes fine you'll get ```Status: 200``` in the POSTMAN
* You can see the output in both:
	* Terminal and
	
	![enter image description here](https://i.imgur.com/Vhh1zc6.png)
	*  POSTMAN
	
![enter image description here](https://i.imgur.com/6DTxrbz.png)


## Built With

  

* NodeJs

* npm dependencies:
	* request 2.88.2
	* express 4.16.14

## Authors

  

*  **[Mehul Chaturvedi](https://github.com/Mehulcoder)**

  
  

## Acknowledgments

  

I enjoyed doing this task and I tried to make this README as detailed as possible. If you have any queries you can E-mail me at ```mehul170104047@iitg.ac.in``` or ```mehul355180@gmail.com```.
