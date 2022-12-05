# Flask React Project

This is the starter for the Flask React project.

## Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


### Technologies Used
### Frontend
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

### Backend
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

### Hosting

![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

***
### Feature Descriptions
* Users can create an account or log in to an existing account
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252548/AirBnB/WikiReadMe/ProfileDropdown_w5k2on.png)
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252548/AirBnB/WikiReadMe/SignInModal_kc6kme.png)
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252550/AirBnB/WikiReadMe/LoginModal_wnbpuj.png)

* Upon successful log in or sign up:
* Users can create a new listing to display publicly and can also update and delete the listing from their account page.
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252547/AirBnB/WikiReadMe/LoggedInDropDown_gm9w19.png)
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252548/AirBnB/WikiReadMe/AccountPage_pinoe3.png)
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252547/AirBnB/WikiReadMe/NewSpot_tvyrwh.png)

* Users can view existing spot details and book/review the spots on the single spot page.
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252551/AirBnB/WikiReadMe/SpotPage_cpywbs.png)

*Users can read, update, and delete their reviews and bookings from the account page
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252548/AirBnB/WikiReadMe/ReviewEdit_ivqt7z.png)
![image](https://res.cloudinary.com/degkakjou/image/upload/v1670252547/AirBnB/WikiReadMe/NewSpot_tvyrwh.png)




### Future Features
* A fully functional search filter utilizing tags and location (GoogleMaps API Integration)
* AWS Integration for images in reviews, listings and user profiles.
* Host profiles to read/update/delete other users bookings on your listings.
* Direct messages between host and users.
