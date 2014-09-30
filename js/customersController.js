app.controller("customersController", function ($scope, $http) {
  var url = "http://www.w3schools.com/website/Customers_JSON.php";
  $scope.editName = '';
  $scope.editCountry = '';

  // $http.get(url)
  //   .success(function(response) {
  //     $scope.names = response;
  //   });

  $scope.names = [ { "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" } ];

  $scope.editUser = function(name) {
    for (var i = 0; i < $scope.names.length; i++) {
      var _name = $scope.names[i]['Name']
      if (_name === name) {
        var _country = $scope.names[i]['Country'];
        isFind = true;
        $scope.editName = _name;
        $scope.editCountry = _country;
        return;
      }
    }

    $scope.editName = '';
    $scope.editCountry = '';
  };

  $scope.delUser = function(name) {
    for (var i = 0; i < $scope.names.length; i++) {
      var _name = $scope.names[i]['Name']
      var oldLen = $scope.names.length;
      if (_name === name) {
        $scope.names.splice(i, 1);
        return;
      }
    }
  };

  $scope.save = function(name, country) {
    for (var i = 0; i < $scope.names.length; i++) {
      var _name = $scope.names[i]['Name']
      if (_name === name) {
        $scope.names[i]['Country'] = country;
        return;
      }
    }

    $scope.names[$scope.names.length] = {
      'Name': name, 
      'Country': country
    };
  }
});