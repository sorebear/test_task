class LoadImages {
  constructor(initFunction) {
    this.initFunction = initFunction;
  }

  // First Ajax Call and Function Gets The Employee Names and Randomly Chooses Three To Display
  getThreeNames() {
    $.ajax({
      url: 'https://techi.envivent.com/names.json',
      success: result => {
        const employees = result.employees;
        let randomThreeEmployees = [];
        for (let i = 0; i < 3; i++) {
          randomThreeEmployees.push(
              employees.splice(Math.floor(Math.random() * employees.length), 1)[0]
          );
          const name = 
            randomThreeEmployees[i]['first_name'] + ' ' +
            randomThreeEmployees[i]['last_name'];
          $('.team-image-' + i + ' .card__overlay--employee-name').text(name);
          $('.team-image-' + i + ' .card__profile-link')[0].setAttribute('href', 'employee_bio.php?name=' + name);
        }
        // Once the 3 random employees are chosen, 
        // the other 2 AJAX calls and invoked with that information
        this.getTitles(randomThreeEmployees);
        this.getImages(randomThreeEmployees);
      },
      error: function() {
        console.log('There was an error getting the employees information');
      }
    });
  }

  getAllNames() {
    $.ajax({
      url: 'https://techi.envivent.com/names.json',
      success: result => {
        const employees = result.employees;
        for (let i = 0; i < employees.length; i++) {
          const name = 
              employees[i]['first_name'] + ' ' +
              employees[i]['last_name'];
          $('.team-image-' + i + ' .card__overlay--employee-name').text(name);
          const linkEl = $('.team-image-' + i + ' .card__profile-link')[0]; 
          const query = linkEl.getAttribute('href');
          linkEl.setAttribute('href', query + '&name=' + name); 
        }
        // Once the 3 random employees are chosen, 
        // the other 2 AJAX calls and invoked with that information
        this.getTitles(employees);
      },
      error: () => {
        console.log('There was an error getting the employees information');
      }
    });
  }

   // This function gets the images for the 3 employees and appends it to the corresponding Div on the DOM
  getImages(employeeArray) {
    $.ajax({
      url: 'https://techi.envivent.com/images.json',
      success: result => {
        const employeePictures = result.employees;
        let imageFolder = result['images-folder'];
        for (let i = 0; i < employeeArray.length; i++) {
          const imagePath = imageFolder + employeePictures[employeeArray[i]['id'] - 1]['full'];
          const image = $('<img class="card__image" src="' + imagePath  + '">');
          $('.team-image-' + i).append(image);
          const linkEl = $('.team-image-' + i + ' .card__profile-link')[0]; 
          const query = linkEl.getAttribute('href');
          linkEl.setAttribute('href', query + '&img=' + imagePath); 
        }
      },
      error: () => {
        console.log('There was an error getting the proper images.');
      }
    });
  }

   // This function gets the titles/job descriptions for the 3 employees
   // And sets it to the Text property of the corresponding elements on the DOM
  getTitles(employeeArray) {
    $.ajax({
      url: 'https://techi.envivent.com/description.json',
      success: result => {
        const employeeTitles = result.employees.sort((a, b) => a.id - b.id);
        for (let i = 0; i < employeeArray.length; i++) {
          const title = employeeTitles[employeeArray[i]['id'] - 1]['title'];
          const description = employeeTitles[employeeArray[i]['id'] - 1]['description'];
          $('.team-image-' + i + ' .card__overlay--employee-title').text(title);
          $('.team-image-' + i + ' .card__overlay--job-description').text(description);
          const linkEl = $('.team-image-' + i + ' .card__profile-link')[0]; 
          const query = linkEl.getAttribute('href');
          linkEl.setAttribute('href', query + '&title=' + title + '&job-des=' + description); 
        }
      },
      error: () => {
        console.log('There was an error getting the proper images.');
      }
    });
  }
}

export default LoadImages;