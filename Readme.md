# Point of Sales Backend
#### Build with 
<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Contributors](#contributors)

## Introduction
  this is just an API for my "Point of Sales" project

## Features
* users can add custom item to menu with foto 
* users can increase or decrease quantity to custom item on chart
* users can print chart detail with quantity and price ,to pdf
* to access them all except users must logged in first


## Requirements
* [`npm`](https://www.npmjs.com/get-npm)
* [`Express js`](https://expressjs.com/en/starter/installing.html)
* [`My Sql`](https://www.apachefriends.org/download.html)
* [`Postman`](https://www.getpostman.com/downloads/) 

## Usage for development
1. Clone this Repository
2. Open the folder and type `npm install` 
3. Create Environment Variable
    ```
    $ touch .env
    ```
    Fill in the code below into .env file
    ```
    DB_HOST="Your_Host"
    DB_USER="Your_Username"
    DB_PASS="Your_Password"
    DB_NAME="Your_Table"
    ```

4. And then ,type `npm start` for run this app.

5. you can see the result in browser or postman instead for more costumized tools
 
6. To see the example result in postman ,just click this button then import to your postman

    [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/2eefc88adb7a18e072bb)




## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/rizal271">
          <img width="200" src="https://avatars0.githubusercontent.com/u/33866110?s=460&v=4" alt="Khadam ikhwanus shofa"><br/>
          <sub><b>Khadam ikhwanus shofa</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>

#