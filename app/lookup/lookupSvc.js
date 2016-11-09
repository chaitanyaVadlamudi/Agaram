(function () {
    'use strict'
    function lookupSvc($q, $http) {
         
 var states = [{
      code:"AP",
      name:"Andhra Pradesh",
      countryCode:"IN"
  },
   {code:"AR",
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
   },
   {
     name: "California",
     code: "CA",
     countryCode: "US"
    },
    {
     name: "Illinois",
     code: "IL",
     countryCode: "US"
     },
     {
      name: "Nevada",
      code: "NV",
      countryCode: "US"
      }
]
this.getStateListByCountry = function (code) {
            //filter the states by country.
            var stateList = _.where(states, {
                countryCode: code
            });
            return stateList;
        };
       
        this.getCountriesFromApi = function () {
            var dfd = $q.defer();
            $http.get("app/api/countries.json")
                .then(function (response) {
                    dfd.resolve(response);
                })
                .catch(function (err) {
                    dfd.reject(err);
                });

            return dfd.promise;
        };
    }
    angular.module("lookup")
        .service("lookupSvc", ["$q", "$http", lookupSvc])
})();
