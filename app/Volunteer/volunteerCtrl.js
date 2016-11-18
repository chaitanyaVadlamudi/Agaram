(function () {
    function volunteerCtrl($scope, lookupSvc,$http) {
        var states = [{
            "name": "Telangana",
            code: "TS",
            countryCode: "IN"
}, {
            "name": "Andhra Pradesh",
            code: "AP",
            countryCode: "IN"
}, ,{code:"AR",
    name:"Arunachal Pradesh",
    countryCode:"IN"
   },
   {code:"AS",
    name:"Assam",
    countryCode:"IN"
   },
   {code:"BR",
    name:"Bihar",
    countryCode:"IN"
   },
   {code:"CG",
    name:"Chhattisgarh",
    countryCode:"IN"
   },
   {code:"Chandigarh",
    name:"Chandigarh",
    countryCode:"IN"
   },
   {code:"DN",
    name:"Dadra and Nagar Haveli",
    countryCode:"IN"
   },
   {code:"DD",
   name :"Daman and Diu",
    countryCode:"IN"
   },
   {code:"DL",
    name:"Delhi",
    countryCode:"IN"
   },
   {code:"GA",
    name:"Goa",
    countryCode:"IN"
   },
   {code:"GJ",
    name:"Gujarat",
    countryCode:"IN"
   },
   {code:"HR",
    name:"Haryana",
    countryCode:"IN"
   },
   {code:"HP",
    name:"Himachal Pradesh",
    countryCode:"IN"
   },
   {code:"JK",
   name :"Jammu and Kashmir",
    countryCode:"IN"
   },
   {code:"JH",
    name :"Jharkhand",
    countryCode:"IN"
   },
   {code:"KA",
    name :"Karnataka",
    countryCode:"IN"
   },
   {code:"KL",
    name:"Kerala",
    countryCode:"IN"
   },
   {code:"MP",
    name :"Madhya Pradesh",
    countryCode:"IN"
   },
   {code:"MH",
    name :"Maharashtra",
    countryCode:"IN"
   },
   {code:"MN",
    name:"Manipur",
    countryCode:"IN"
   },
   {code:"ML",
    name:"Meghalaya",
    countryCode:"IN"
   },
   {code:"MZ",
    name :"Mizoram",
    countryCode:"IN"
   },
   {code:"NL",
    name :"Nagaland",
    countryCode:"IN"
   },
   {code:"OR",
    name :"Orissa",
    countryCode:"IN"
   },
   {code:"PB",
    name :"Punjab",
    countryCode:"IN"
   },
   {code:"PY",
    name :"Pondicherry",
    countryCode:"IN"
   },
   {code:"RJ",
    name:"Rajasthan",
    countryCode:"IN"
   },
   {code:"SK",
    name :"Sikkim",
    countryCode:"IN"
   },
   {code:"TN",
    name :"Tamil Nadu",
    countryCode:"IN"
   },
   {code:"TR",
    name :"Tripura",
    countryCode:"IN"
   },
   {code:"UP",
    name :"Uttar Pradesh",
    countryCode:"IN"
   },
   {code:"UK",
    name :"Uttarakhand",
    countryCode:"IN"
   },
   {code:"WB",
    name:"West Bengal",
    countryCode:"IN"
   },{
        "name": "Alabama",
        "code": "AL",
        countryCode: "US"
    },       {
        "name": "Alabama",
        "code": "AL",
        countryCode: "US"
    },
    {
        "name": "Alaska",
        "code": "AK",
        countryCode: "US"
    },
    {
        "name": "American Samoa",
        "code": "AS",
        countryCode: "US"
    },
    {
        "name": "Arizona",
        "code": "AZ",
        countryCode: "US"
    },
    {
        "name": "Arkansas",
        "code": "AR",
        countryCode: "US"
    },
    {
        "name": "California",
        "code": "CA",
        countryCode: "US"
    },
    {
        "name": "Colorado",
        "code": "CO",
        countryCode: "US"
    },
    {
        "name": "Connecticut",
        "code": "CT",
        countryCode: "US"
    },
    {
        "name": "Delaware",
        "code": "DE",
        countryCode: "US"
    },
    {
        "name": "District Of Columbia",
        "code": "DC",
        countryCode: "US"
    },
    {
        "name": "Federated States Of Micronesia",
        "code": "FM",
        countryCode: "US"
    },
    {
        "name": "Florida",
        "code": "FL",
        countryCode: "US"
    },
    {
        "name": "Georgia",
        "code": "GA",
        countryCode: "US"
    },
    {
        "name": "Guam",
        "code": "GU",
        countryCode: "US"
    },
    {
        "name": "Hawaii",
        "code": "HI",
        countryCode: "US"
    },
    {
        "name": "Idaho",
        "code": "ID",
        countryCode: "US"
    },
    {
        "name": "Illinois",
        "code": "IL",
        countryCode: "US"
    },
    {
        "name": "Indiana",
        "code": "IN",
        countryCode: "US"
    },
    {
        "name": "Iowa",
        "code": "IA",
        countryCode: "US"
    },
    {
        "name": "Kansas",
        "code": "KS",
        countryCode: "US"
    },
    {
        "name": "Kentucky",
        "code": "KY",
        countryCode: "US"
    },
    {
        "name": "Louisiana",
        "code": "LA",
        countryCode: "US"
    },
    {
        "name": "Maine",
        "code": "ME",
        countryCode: "US"
    },
    {
        "name": "Marshall Islands",
        "code": "MH",
        countryCode: "US"
    },
    {
        "name": "Maryland",
        "code": "MD",
        countryCode: "US"
    },
    {
        "name": "Massachusetts",
        "code": "MA",
        countryCode: "US"
    },
    {
        "name": "Michigan",
        "code": "MI",
        countryCode: "US"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN",
        countryCode: "US"
    },
    {
        "name": "Mississippi",
        "code": "MS",
        countryCode: "US"
    },
    {
        "name": "Missouri",
        "code": "MO",
        countryCode: "US"
    },
    {
        "name": "Montana",
        "code": "MT",
        countryCode: "US"
    },
    {
        "name": "Nebraska",
        "code": "NE",
        countryCode: "US"
    },
    {
        "name": "Nevada",
        "code": "NV",
        countryCode: "US"
    },
    {
        "name": "New Hampshire",
        "code": "NH",
        countryCode: "US"
    },
    {
        "name": "New Jersey",
        "code": "NJ",
        countryCode: "US"
    },
    {
        "name": "New Mexico",
        "code": "NM",
        countryCode: "US"
    },
    {
        "name": "New York",
        "code": "NY",
        countryCode: "US"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC",
        countryCode: "US"
    },
    {
        "name": "North Dakota",
        "code": "ND",
        countryCode: "US"
    },
    {
        "name": "Northern Mariana Islands",
        "code": "MP",
        countryCode: "US"
    },
    {
        "name": "Ohio",
        "code": "OH",
        countryCode: "US"
    },
    {
        "name": "Oklahoma",
        "code": "OK",
        countryCode: "US"
    },
    {
        "name": "Oregon",
        "code": "OR",
        countryCode: "US"
    },
    {
        "name": "Palau",
        "code": "PW",
        countryCode: "US"
    },
    {
        "name": "Pennsylvania",
        "code": "PA",
        countryCode: "US"
    },
    {
        "name": "Puerto Rico",
        "code": "PR",
        countryCode: "US"
    },
    {
        "name": "Rhode Island",
        "code": "RI",
        countryCode: "US"
    },
    {
        "name": "South Carolina",
        "code": "SC",
        countryCode: "US"
    },
    {
        "name": "South Dakota",
        "code": "SD",
        countryCode: "US"
    },
    {
        "name": "Tennessee",
        "code": "TN",
        countryCode: "US"
    },
    {
        "name": "Texas",
        "code": "TX",
        countryCode: "US"
    },
    {
        "name": "Utah",
        "code": "UT",
        countryCode: "US"
    },
    {
        "name": "Vermont",
        "code": "VT",
        countryCode: "US"
    },
    {
        "name": "Virgin Islands",
        "code": "VI",
        countryCode: "US"
    },
    {
        "name": "Virginia",
        "code": "VA",
        countryCode: "US"
    },
    {
        "name": "Washington",
        "code": "WA",
        countryCode: "US"
                
    },
    {
        "name": "West Virginia",
        "code": "WV",
        countryCode: "US"
    },
    {
        "name": "Wisconsin",
        "code": "WI",
        countryCode: "US"
    },
    {
        "name": "Wyoming",
        "code": "WY",
        countryCode: "US"
                      } ];
        $scope.volunteerDetails = {};
        $scope.registerVolunteer = function () {
            window.alert("Your registration is successful. Your activites as volunteer in Agaram means alot to us.");
            console.log($scope.volunteerDetails);
        };
        // $scope.countries = lookupSvc.getCountries();

        lookupSvc.getCountriesFromApi()
            .then(function (response) {
                //console.log(response);
                $scope.countries = response.data.countries;
            })
            .catch(function (errorResponse) {
                console.log(errorResponse);
            });

        $scope.loadStatesByCountry = function () {
            var countryCode = $scope.volunteerDetails.country.code;
            $scope.states = getStateByCountry(countryCode);
        };



        function getStateByCountry(code) {
            var stateList = _.where(states, {
                countryCode: code
            });
            return stateList;
        }

        
    }
    angular.module("volunteer").controller("volunteerCtrl", volunteerCtrl);

})();
