var app=angular.module("ContactApp");

app.service("DataService",function($http){
	
//	this.getEmployees = function()
//	{
//		return $http.get("http://localhost:3000/employees")
//		.then(function(response){
//			console.log(response);
//			return response.data;
//		});
//	};
//
//
//	this.saveEmployee = function(emp)
//	{
//		console.log("Saving Object :" + emp.id);
//		
//		return $http.put("http://localhost:3000/employees/"+emp.id,emp)
//		.then(function(response){
//			console.log(response);
//			return response.data;
//		});
//	};
//
//	this.delEmployee = function(emp)
//	{
//		console.log("Deleting Object :" + emp.id);
//		
//		return $http.delete("http://localhost:3000/employees/"+emp.id)
//		.then(function(response){
//			console.log(response);
//			return response.data;
//		});
//	};
//
//	
//	
//	this.addEmployee = function(emp)
//	{
//		console.log("Saving Object :" + emp.id);
//		
//		return $http.post("http://localhost:3000/employees",emp)
//		.then(function(response){
//			console.log(response);
//			return response.data;
//		});
//	};

    this.emp_data = {
            'AK': 'Alaska',
            'AL': '123',
            'AR': '7576',
            'AZ': '345',
            'CA': '453',
            'CO': '453',
            'CT': '765',
            'DC': '234',
            'DE': '35434',
            //'FL': 'Florida', Simulate a missing value defaults to 2 letter abbr
            'GA': '',
            'HI': '234',
            'IA': '234',
            'ID': 'Idaho',
            'IL': '234',
            'IN': '234',
            'KS': '234',
            'KY': '234',
            'LA': '234',
            'MA': '234',
            'MD': '7566',
            'ME': '567',
            'MI': '567',
            'MN': '46',
            'MO': '456',
            'MS': '567',
            'MT': '345',
            'NC': '456',
            'ND': '345',
            'NE': '65',
            'NH': '356',
            'NJ': '54',
            'NM': '4356',
            'NV': '5463',
            'NY': '3456',
            'OH': '2345',
            'OK': '2345',
            'OR': '564',
            'PA': '456',
            'RI': '234',
            'SC': '234',
            'SD': '5467',
            'TN': '5467',
            'TX': '2345',
            'UT': '345',
            'VA': '432',
            'VT': '654',
            'WA': '456',
            'WI': '543',
            'WV': '345',
            'WY': '1234'
      };

	
	
});
