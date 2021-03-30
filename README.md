<p align="center">
  <img src="https://github.com/nahidtopalovic/library_api/blob/main/media/logo/banner.png" />
</p>

# CLUBLIT!

The place where readers come together to network and talk with their favorite authors and like-minded peers over voice. 
_#QuarantineandChill #StayHomeStaySafe #togetherandhome_

**This platform is developed in stages;** the first and current version of the MVP (minimum viable product) demonstrates a backend developed in Node.js with CRUD operations for user accounts stored on a cloud-based MongoDB. Interaction with the external Google API REST service is used for querying book information allowing this information to be added to user's accounts.  
Concerning security mechanisms, the users' information follows salted and hash-based authentication.  

### Backend (v.0.1)
Our current backend is on Azure. Feel free to try it ou here:


[![Clublit! in Azure](https://azurecomcdn.azureedge.net/mediahandler/acomblog/media/Default/blog/deploybutton.png)](https://clublit.azurewebsites.net/)


It is advisable to use [Postman](https://www.postman.com/) for CRUD operations to use the backend.

### Front-end
<p align="center">
  <img src="https://github.com/nahidtopalovic/library_api/blob/main/media/IOS/front-end.png" height="450" />
</p>

The current version of the front-end can be found in the respective branch of this repository and ran locally. It was successfully tested on macOS Big Sur launched over the command line to open from the local server the IOS simulator as demonstrated on the respective section of the youtube video.

### To run this repository locally
Note: [Node.js](https://nodejs.org/en/) is required. 
1. Through your terminal select the repository. 


2. ``
npm install
``
to install missing depdencies.



3. ``
npm start
``
to start the application.


#### To be added
* Securing the database with role-based policies.
* Error handling with REST add right errors, such as if staments (404)


_Disclaimer: This project is part of a cloud computing coursework taught by [Dr. Sukhpal Singh Gill](https://github.com/iamssgill) and [Ignacio De Castro Arribas](https://www.linkedin.com/in/ignacio-de-castro-arribas-44a48117) at the Queen Mary University of London Electrical Engineering & Computer Science Department to create a prototype of a cloud application._
