<p align="center">
  <img src="https://github.com/nahidtopalovic/library_api/blob/main/media/logo/banner.png" />
</p>

# CLUBLIT!

The place where readers come together to network and talk with their favorite authors and like-minded peers over voice. 
_#QuarantineandChill #StayHomeStaySafe #togetherandhome_

This platform is developed in stages; the first and current version of the MVP (minimum viable product) demonstrates a backend developed in Node.js with CRUD operations for user accounts stored on a cloud-based MongoDB. Interaction with the external Google API REST service is used for querying book information allowing this information to be added to user's accounts.  
Concerning security mechanisms, the users' information follows salted and hash-based authentication.  

Missing so far
Securing the database with role-based policies.
Serving the application over HTTPS.

### To run this repository locally
``
npm install
``
to install missing depdencies.



``
npm start
``
to start the application.



_Disclaimer: This project is part of a cloud computing coursework taught by [Dr. Sukhpal Singh Gill](https://github.com/iamssgill) and [Ignacio De Castro Arribas](https://www.linkedin.com/in/ignacio-de-castro-arribas-44a48117) at the Queen Mary University of London Electrical Engineering & Computer Science Department to create a prototype of a cloud application._
