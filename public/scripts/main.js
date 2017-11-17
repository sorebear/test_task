const teal = "rgb(00, 150, 136)";

$('.mobile-menu').on('click', () => toggleMobileMenu());
// First Ajax Call and Function Gets The Employee Names and Randomly Chooses Three To Display
$.ajax({
	url: "https://techi.envivent.com/names.json",
	success: function(result) {
		const employees = result.employees;
		let randomThreeEmployees = [];
		for (let i = 0; i < 3; i++) {
			randomThreeEmployees.push(
				employees.splice(Math.floor(Math.random() * employees.length), 1)[0]
			);
			const name = 
				`${randomThreeEmployees[i]['first_name']} 
				${randomThreeEmployees[i]['last_name']}`;
			$(`.team-image-${i} .employee-name`).text(name);
		}
		// Once the 3 random employees are chosen, 
		// the other 2 AJAX calls and invoked with that information
		getTitles(randomThreeEmployees);
		getImages(randomThreeEmployees);
	},
	error: function() {
		console.log("There was an error getting the employees information");
	}
});

// This function gets the images for the 3 employees and appends it to the corresponding Div on the DOM
function getImages(employeeArray) {
	$.ajax({
		url: "https://techi.envivent.com/images.json",
		success: function(result) {
			const employeePictures = result.employees;
			let imageFolder = result["images-folder"];
			for (let i = 0; i < employeeArray.length; i++) {
				const image = $(
					`<img src="${imageFolder + employeePictures[employeeArray[i]["id"] - 1]["full"]}">`
                );
                $(`.team-image-${i}`).append(image);
			}
		},
		error: function() {
			console.log("There was an error getting the proper images.");
		}
	});
}

// This function gets the titles/job descriptions for the 3 employees
// And sets it to the Text property of the corresponding elements on the DOM
function getTitles(employeeArray) {
	$.ajax({
		url: "https://techi.envivent.com/description.json",
		success: function(result) {
			const employeeTitles = result.employees.sort((a, b) => a.id - b.id);
			console.log("Titles After Sort: ", employeeTitles);
			for (let i = 0; i < employeeArray.length; i++) {
				const title = employeeTitles[employeeArray[i]["id"] - 1]["title"];
				const description = employeeTitles[employeeArray[i]["id"] - 1]["description"];
				$(`.team-image-${i} .employee-title`).text(title);
				$(`.team-image-${i} .job-description`).text(description);
			}
		},
		error: function() {
			console.log("There was an error getting the proper images.");
		}
	});
}

// In Mobile View, This function handles the Opening and Closing of the Menu on Button Press
function toggleMobileMenu() {
	if ($('.mobile-menu').hasClass('fa-bars')) {
		$('nav ul').css('animation', 'open .5s both');
		$('.mobile-menu').addClass('fa-times').removeClass('fa-bars').css('color', teal);
	} else {
		$('nav ul').css('animation', 'collapse .5s both');
		$('.mobile-menu').addClass('fa-bars').removeClass('fa-times').css('color', 'black');
	}
}



