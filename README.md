<div align="center" >

<img alt="img" height="320px" width="" src="https://i0.wp.com/lastmilelogisticsops.com/wp-content/uploads/2021/06/restaurant-mobile-app-main-725x384-1.jpeg?fit=725%2C384&ssl=1" />
<h2>Food Order WebApp</h2>
<p>Food Order WebApp with parcel, React, Redux, Tailwind CSS, 80% Test Case coverage.</p>
<hr/>
</div>

### Description

- I developed a WebApp it can handle large scale user to achieve this I Used lazy loading concept, and aslo I write test case with 80% coverage.
  <!-- <a href= "file:///home/subha/Code/Project/Food%20Order%20WebApp/Dev/coverage/lcov-report/pages/index.html" >View Test Case coverage</a> -->

- Implemented Cart page using Redux Store, also implemented Search Bar, Filter Button, and Google Authentication.

- Developed different type restaurant cart for pure veg restaurant to achieve this I used Higher order component.

<h2>Technologies</h2>
<table>
      <tbody>
        <tr>
          <th>React.js</th>
           <th>React-Redux</th>
           <th> Integrate Swiggy API</th>
        </tr>
          <tr>
           <th>Parcel</th>
           <th>Tailwind Css</th>
         </tr>
      </tbody>    
</table>

### Setup to write Test Cases:

- Install React Tesing Library: " npm i @testing-library/react "
- Install jest " npm i jest "
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file(.parcelrc) to disable default babel transpilation
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom " npm i -D @testing-library/jest-dom "
- To autometically run the test write "watch-test": "jest --watchAll" write into Package.json file
