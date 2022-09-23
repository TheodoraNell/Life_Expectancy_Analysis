// An array containing Data for the top and bottom 25 countries for life expectancy in 2022.

let countries = [
  {
    country: "Afghanistan",
    location: [33.93911,67.709953],
    life_expectancy : 63.2,
    drinking_water : 28,
    hand_washing: 38,
    safe_sanitation: "no data"
  },
  {
    country: "Albania",
    location: [41.153332,20.168331],
    life_expectancy : 78,
    drinking_water : 71,
    hand_washing:  "no data",
    safe_sanitation: 48
  },
  {
    country: "Algeria",
    location: [28.033886,1.659626],
    life_expectancy : 77.1,
    drinking_water : 72,
    hand_washing: 85,
    safe_sanitation: 18
  },
  {
    country: "Angola",
    location: [-11.202692,17.873887],
    life_expectancy : 63.1,
    drinking_water :  "no data",
    hand_washing: 27,
    safe_sanitation: "no data"
  },
  {
    country: "Antigua and Barbuda",
    location: [17.060816,-61.796428],
    life_expectancy : 76.5,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Argentina",
    location: [-38.416097,-63.616672],
    life_expectancy : 76.6,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Armenia",
    location: [40.069099,45.038189],
    life_expectancy : 76,
    drinking_water : 87,
    hand_washing: 95,
    safe_sanitation: 69
  },
  {
    country: "Australia",
    location: [-25.274398,133.775136],
    life_expectancy : 83,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 74
  },
  {
    country: "Austria",
    location: [47.516231,14.550072],
    life_expectancy : 81.6,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 100
  },
  {
    country: "Azerbaijan",
    location: [40.143105,47.576927],
    life_expectancy : 71.4,
    drinking_water : 88,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Bahamas",
    location: [25.03428,-77.39628],
    life_expectancy : 73.2,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Bahrain",
    location: [25.930414,50.637772],
    life_expectancy : 75.8,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 91
  },
  {
    country: "Bangladesh",
    location: [23.684994,90.356331],
    life_expectancy : 74.3,
    drinking_water : 59,
    hand_washing: 58,
    safe_sanitation: 39
  },
  {
    country: "Barbados",
    location: [13.193887,-59.543198],
    life_expectancy : 76,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Belarus",
    location: [53.709807,27.953389],
    life_expectancy : 74.8,
    drinking_water : 95,
    hand_washing:  "no data",
    safe_sanitation: 74
  },
  {
    country: "Belgium",
    location: [50.503887,4.469936],
    life_expectancy : 81.4,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 89
  },
  {
    country: "Belize",
    location: [17.189877,-88.49765],
    life_expectancy : 74.4,
    drinking_water :  "no data",
    hand_washing: 90,
    safe_sanitation: "no data"
  },
  {
    country: "Benin",
    location: [9.30769,2.315834],
    life_expectancy : 63.4,
    drinking_water :  "no data",
    hand_washing: 12,
    safe_sanitation: "no data"
  },
  {
    country: "Bhutan",
    location: [27.514162,90.433601],
    life_expectancy : 73.1,
    drinking_water : 37,
    hand_washing: 92,
    safe_sanitation: 65
  },
  {
    country: "Bolivia",
    location: [-16.290154,-63.588653],
    life_expectancy : 72.1,
    drinking_water :  "no data",
    hand_washing: 27,
    safe_sanitation: 53
  },
  {
    country: "Bosnia and Herzegovina",
    location: [43.915886,17.679076],
    life_expectancy : 76.8,
    drinking_water : 89,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Botswana",
    location: [-22.328474,24.684866],
    life_expectancy : 62.2,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Brazil",
    location: [-14.235004,-51.92528],
    life_expectancy : 75.9,
    drinking_water : 86,
    hand_washing:  "no data",
    safe_sanitation: 49
  },
  {
    country: "Brunei",
    location: [4.535277,114.727669],
    life_expectancy : 74.3,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Bulgaria",
    location: [42.733883,25.48583],
    life_expectancy : 75.1,
    drinking_water : 98,
    hand_washing:  "no data",
    safe_sanitation: 72
  },
  {
    country: "Burkina Faso",
    location: [12.238333,-1.561593],
    life_expectancy : 62.7,
    drinking_water :  "no data",
    hand_washing: 9,
    safe_sanitation: "no data"
  },
  {
    country: "Burundi",
    location: [-3.373056,29.918886],
    life_expectancy : 63.8,
    drinking_water :  "no data",
    hand_washing: 6,
    safe_sanitation: "no data"
  },
  {
    country: "CaboVerde",
    location: [16.002082,-24.013197],
    life_expectancy : 74,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Cambodia",
    location: [12.565679,104.990963],
    life_expectancy : 70.1,
    drinking_water : 28,
    hand_washing: 74,
    safe_sanitation: "no data"
  },
  {
    country: "Cameroon",
    location: [7.369722,12.354722],
    life_expectancy : 62.4,
    drinking_water :  "no data",
    hand_washing: 36,
    safe_sanitation: "no data"
  },
  {
    country: "Canada",
    location: [56.130366,-106.346771],
    life_expectancy : 82.2,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 84
  },
  {
    country: "Central African Republic",
    location: [6.611111,20.939444],
    life_expectancy : 53.1,
    drinking_water : 6,
    hand_washing: 22,
    safe_sanitation: 14
  },
  {
    country: "Chad",
    location: [15.454166,18.732207],
    life_expectancy : 59.6,
    drinking_water : 6,
    hand_washing: 25,
    safe_sanitation: 10
  },
  {
    country: "Chile",
    location: [-35.675147,-71.542969],
    life_expectancy : 80.7,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 79
  },
  {
    country: "China",
    location: [35.86166,104.195397],
    life_expectancy : 77.4,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 70
  },
  {
    country: "Colombia",
    location: [4.570868,-74.297333],
    life_expectancy : 79.3,
    drinking_water : 73,
    hand_washing: 68,
    safe_sanitation: 18
  },
  {
    country: "Comoros",
    location: [-11.875001,43.872219],
    life_expectancy : 67.4,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Congo",
    location: [-0.228021,15.827659],
    life_expectancy : 64.7,
    drinking_water : 46,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Costa Rica",
    location: [9.748917,-83.753428],
    life_expectancy : 80.8,
    drinking_water : 81,
    hand_washing: 86,
    safe_sanitation: 30
  },
  {
    country: "Cote d'Ivoire",
    location: [7.539989,-5.54708],
    life_expectancy : 62.9,
    drinking_water : 35,
    hand_washing: 22,
    safe_sanitation: "no data"
  },
  {
    country: "Croatia",
    location: [45.1,15.2],
    life_expectancy : 78.6,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 68
  },
  {
    country: "Cuba",
    location: [21.521757,-77.781167],
    life_expectancy : 77.8,
    drinking_water :  "no data",
    hand_washing: 92,
    safe_sanitation: 37
  },
  {
    country: "Cyprus",
    location: [35.126413,33.429859],
    life_expectancy : 83.1,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 77
  },
  {
    country: "Czechia",
    location: [49.817492,15.472962],
    life_expectancy : 79.1,
    drinking_water : 98,
    hand_washing:  "no data",
    safe_sanitation: 85
  },
  {
    country: "Democratic People's Republic of Korea",
    location: [40.339852,127.510093],
    life_expectancy : 72.6,
    drinking_water : 66,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Democratic Republic of the Congo",
    location: [-4.038333,21.758664],
    life_expectancy : 62.4,
    drinking_water : 19,
    hand_washing: 19,
    safe_sanitation: 13
  },
  {
    country: "Denmark",
    location: [56.26392,9.501785],
    life_expectancy : 81.3,
    drinking_water : 97,
    hand_washing:  "no data",
    safe_sanitation: 92
  },
  {
    country: "Djibouti",
    location: [11.825138,42.590275],
    life_expectancy : 65.8,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 37
  },
  {
    country: "Dominican Republic",
    location: [18.735693,-70.162651],
    life_expectancy : 72.8,
    drinking_water :  "no data",
    hand_washing: 47,
    safe_sanitation: "no data"
  },
  {
    country: "Ecuador",
    location: [-1.831239,-78.183406],
    life_expectancy : 78.4,
    drinking_water : 67,
    hand_washing: 87,
    safe_sanitation: 42
  },
  {
    country: "Egypt",
    location: [26.820553,30.802498],
    life_expectancy : 71.8,
    drinking_water :  "no data",
    hand_washing: 90,
    safe_sanitation: 67
  },
  {
    country: "El Salvador",
    location: [13.794185,-88.89653],
    life_expectancy : 75,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Equatorial Guinea",
    location: [1.650801,10.267895],
    life_expectancy : 62.2,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Eritrea",
    location: [15.179384,39.782334],
    life_expectancy : 64.1,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Estonia",
    location: [58.595272,25.013607],
    life_expectancy : 78.9,
    drinking_water : 96,
    hand_washing:  "no data",
    safe_sanitation: 93
  },
  {
    country: "Ethiopia",
    location: [9.145,40.489673],
    life_expectancy : 68.7,
    drinking_water : 13,
    hand_washing: 8,
    safe_sanitation: 7
  },
  {
    country: "Fiji",
    location: [-16.578193,179.414413],
    life_expectancy : 68,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Finland",
    location: [61.92411,25.748151],
    life_expectancy : 81.6,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 84
  },
  {
    country: "France",
    location: [46.227638,2.213749],
    life_expectancy : 82.5,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 79
  },
  {
    country: "Gabon",
    location: [-0.803689,11.609444],
    life_expectancy : 66.5,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Gambia",
    location: [13.443182,-15.310139],
    life_expectancy : 65.5,
    drinking_water : 45,
    hand_washing: 18,
    safe_sanitation: 29
  },
  {
    country: "Georgia",
    location: [42.315407,43.356892],
    life_expectancy : 73.3,
    drinking_water : 66,
    hand_washing: 92,
    safe_sanitation: 34
  },
  {
    country: "Germany",
    location: [51.165691,10.451526],
    life_expectancy : 81.7,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 97
  },
  {
    country: "Ghana",
    location: [7.946527,-1.023194],
    life_expectancy : 66.3,
    drinking_water : 41,
    hand_washing: 42,
    safe_sanitation: 13
  },
  {
    country: "Greece",
    location: [39.074208,21.824312],
    life_expectancy : 81.1,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 92
  },
  {
    country: "Grenada",
    location: [12.262776,-61.604171],
    life_expectancy : 72.9,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Guatemala",
    location: [15.783471,-90.230759],
    life_expectancy : 72,
    drinking_water : 56,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Guinea",
    location: [9.945587,-9.696645],
    life_expectancy : 61,
    drinking_water :  "no data",
    hand_washing: 20,
    safe_sanitation: "no data"
  },
  {
    country: "Guinea-Bissau",
    location: [11.803749,-15.180413],
    life_expectancy : 60.2,
    drinking_water : 24,
    hand_washing: 18,
    safe_sanitation: 12
  },
  {
    country: "Guyana",
    location: [4.860416,-58.93018],
    life_expectancy : 65.7,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Haiti",
    location: [18.971187,-72.285215],
    life_expectancy : 64.1,
    drinking_water :  "no data",
    hand_washing: 22,
    safe_sanitation: "no data"
  },
  {
    country: "Honduras",
    location: [15.199999,-86.241905],
    life_expectancy : 71.9,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 50
  },
  {
    country: "Hungary",
    location: [47.162494,19.503304],
    life_expectancy : 76.4,
    drinking_water : 93,
    hand_washing:  "no data",
    safe_sanitation: 88
  },
  {
    country: "Iceland",
    location: [64.963051,-19.020835],
    life_expectancy : 82.3,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 84
  },
  {
    country: "India",
    location: [20.593684,78.96288],
    life_expectancy : 70.8,
    drinking_water :  "no data",
    hand_washing: 68,
    safe_sanitation: 46
  },
  {
    country: "Indonesia",
    location: [-0.789275,113.921327],
    life_expectancy : 71.3,
    drinking_water :  "no data",
    hand_washing: 94,
    safe_sanitation: "no data"
  },
  {
    country: "Iran (Islamic Republic of)",
    location: [32.427908,53.688046],
    life_expectancy : 77.3,
    drinking_water : 94,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Iraq",
    location: [33.223191,43.679291],
    life_expectancy : 72.4,
    drinking_water : 60,
    hand_washing: 97,
    safe_sanitation: 43
  },
  {
    country: "Ireland",
    location: [53.41291,-8.24389],
    life_expectancy : 81.8,
    drinking_water : 97,
    hand_washing:  "no data",
    safe_sanitation: 83
  },
  {
    country: "Israel",
    location: [31.046051,34.851612],
    life_expectancy : 82.6,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 95
  },
  {
    country: "Italy",
    location: [41.87194,12.56738],
    life_expectancy : 83,
    drinking_water : 96,
    hand_washing:  "no data",
    safe_sanitation: 96
  },
  {
    country: "Jamaica",
    location: [18.109581,-77.297508],
    life_expectancy : 76,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Japan",
    location: [36.204824,138.252924],
    life_expectancy : 84.3,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 81
  },
  {
    country: "Jordan",
    location: [30.585164,36.238414],
    life_expectancy : 77.9,
    drinking_water : 86,
    hand_washing:  "no data",
    safe_sanitation: 82
  },
  {
    country: "Kazakhstan",
    location: [48.019573,66.923684],
    life_expectancy : 74,
    drinking_water : 89,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Kenya",
    location: [-0.023559,37.906193],
    life_expectancy : 66.1,
    drinking_water :  "no data",
    hand_washing: 27,
    safe_sanitation: "no data"
  },
  {
    country: "Kiribati",
    location: [-3.370417,-168.734039],
    life_expectancy : 59.4,
    drinking_water : 15,
    hand_washing: 56,
    safe_sanitation: 27
  },
  {
    country: "Kuwait",
    location: [29.31166,47.481766],
    life_expectancy : 81,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 100
  },
  {
    country: "Kyrgyzstan",
    location: [41.20438,74.766098],
    life_expectancy : 74.2,
    drinking_water : 70,
    hand_washing: 100,
    safe_sanitation: 92
  },
  {
    country: "Lao People's Republic",
    location: [19.85627,102.495496],
    life_expectancy : 68.5,
    drinking_water : 18,
    hand_washing: 56,
    safe_sanitation: 61
  },
  {
    country: "Latvia",
    location: [56.879635,24.603189],
    life_expectancy : 75.4,
    drinking_water : 96,
    hand_washing:  "no data",
    safe_sanitation: 83
  },
  {
    country: "Lebanon",
    location: [33.854721,35.862285],
    life_expectancy : 76.4,
    drinking_water : 48,
    hand_washing:  "no data",
    safe_sanitation: 16
  },
  {
    country: "Lesotho",
    location: [-29.609988,28.233608],
    life_expectancy : 50.7,
    drinking_water : 29,
    hand_washing: 6,
    safe_sanitation: 48
  },
  {
    country: "Liberia",
    location: [6.428055,-9.429499],
    life_expectancy : 64.1,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Libya",
    location: [26.3351,17.228331],
    life_expectancy : 75.8,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 22
  },
  {
    country: "Lithuania",
    location: [55.169438,23.881275],
    life_expectancy : 76,
    drinking_water : 95,
    hand_washing:  "no data",
    safe_sanitation: 94
  },
  {
    country: "Luxembourg",
    location: [49.815273,6.129583],
    life_expectancy : 82.4,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 97
  },
  {
    country: "Madagascar",
    location: [-18.766947,46.869107],
    life_expectancy : 65.3,
    drinking_water : 21,
    hand_washing: 27,
    safe_sanitation: 10
  },
  {
    country: "Malawi",
    location: [-13.254308,34.301525],
    life_expectancy : 65.6,
    drinking_water :  "no data",
    hand_washing: 8,
    safe_sanitation: 24
  },
  {
    country: "Malaysia",
    location: [4.210484,101.975766],
    life_expectancy : 74.7,
    drinking_water : 94,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Maldives",
    location: [3.202778,73.22068],
    life_expectancy : 79.6,
    drinking_water :  "no data",
    hand_washing: 96,
    safe_sanitation: "no data"
  },
  {
    country: "Mali",
    location: [17.570692,-3.996166],
    life_expectancy : 62.8,
    drinking_water :  "no data",
    hand_washing: 17,
    safe_sanitation: 20
  },
  {
    country: "Malta",
    location: [35.937496,14.375416],
    life_expectancy : 81.9,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 92
  },
  {
    country: "Mauritania",
    location: [21.00789,-10.940835],
    life_expectancy : 68.4,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Mauritius",
    location: [-20.348404,57.552152],
    life_expectancy : 74.1,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Mexico",
    location: [23.634501,-102.552784],
    life_expectancy : 76,
    drinking_water : 43,
    hand_washing:  "no data",
    safe_sanitation: 57
  },
  {
    country: "Micronesia (Federated States of)",
    location: [7.425554,150.550812],
    life_expectancy : 63,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Mongolia",
    location: [46.862496,103.846656],
    life_expectancy : 68.1,
    drinking_water : 30,
    hand_washing: 86,
    safe_sanitation: 56
  },
  {
    country: "Montenegro",
    location: [42.708678,19.37439],
    life_expectancy : 75.9,
    drinking_water : 85,
    hand_washing: 99,
    safe_sanitation: 45
  },
  {
    country: "Morocco",
    location: [31.791702,-7.09262],
    life_expectancy : 73,
    drinking_water : 80,
    hand_washing:  "no data",
    safe_sanitation: 39
  },
  {
    country: "Mozambique",
    location: [-18.665695,35.529562],
    life_expectancy : 58.1,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Myanmar",
    location: [21.913965,95.956223],
    life_expectancy : 69.1,
    drinking_water : 59,
    hand_washing: 75,
    safe_sanitation: 61
  },
  {
    country: "Namibia",
    location: [-22.95764,18.49041],
    life_expectancy : 64.6,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Nepal",
    location: [28.394857,84.124008],
    life_expectancy : 70.9,
    drinking_water : 18,
    hand_washing: 62,
    safe_sanitation: 49
  },
  {
    country: "Netherlands",
    location: [52.132633,5.291266],
    life_expectancy : 81.8,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 97
  },
  {
    country: "New Zealand",
    location: [-40.900557,174.885971],
    life_expectancy : 82,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 82
  },
  {
    country: "Nicaragua",
    location: [12.865416,-85.207229],
    life_expectancy : 75,
    drinking_water : 56,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Niger",
    location: [17.607789,8.081666],
    life_expectancy : 63.3,
    drinking_water :  "no data",
    hand_washing: 23,
    safe_sanitation: 16
  },
  {
    country: "Nigeria",
    location: [9.081999,8.675277],
    life_expectancy : 62.6,
    drinking_water : 22,
    hand_washing: 33,
    safe_sanitation: 31
  },
  {
    country: "North Macedonia",
    location: [41.608635,21.745275],
    life_expectancy : 74.8,
    drinking_water : 77,
    hand_washing: 100,
    safe_sanitation: 12
  },
  {
    country: "Norway",
    location: [60.472024,8.468946],
    life_expectancy : 82.6,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 65
  },
  {
    country: "Oman",
    location: [21.512583,55.923255],
    life_expectancy : 73.9,
    drinking_water : 91,
    hand_washing: 97,
    safe_sanitation: "no data"
  },
  {
    country: "Pakistan",
    location: [30.375321,69.345116],
    life_expectancy : 65.6,
    drinking_water : 36,
    hand_washing: 80,
    safe_sanitation: "no data"
  },
  {
    country: "Panama",
    location: [8.537981,-80.782127],
    life_expectancy : 79.3,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Papua New Guinea",
    location: [-6.314993,143.95555],
    life_expectancy : 65.3,
    drinking_water :  "no data",
    hand_washing: 30,
    safe_sanitation: "no data"
  },
  {
    country: "Paraguay",
    location: [-23.442503,-58.443832],
    life_expectancy : 75.8,
    drinking_water : 64,
    hand_washing: 80,
    safe_sanitation: 60
  },
  {
    country: "Peru",
    location: [-9.189967,-75.015152],
    life_expectancy : 79.9,
    drinking_water : 51,
    hand_washing:  "no data",
    safe_sanitation: 53
  },
  {
    country: "Philippines",
    location: [12.879721,121.774017],
    life_expectancy : 70.4,
    drinking_water : 47,
    hand_washing: 82,
    safe_sanitation: 61
  },
  {
    country: "Poland",
    location: [51.919438,19.145136],
    life_expectancy : 78.3,
    drinking_water : 98,
    hand_washing:  "no data",
    safe_sanitation: 91
  },
  {
    country: "Portugal",
    location: [39.399872,-8.224454],
    life_expectancy : 81.6,
    drinking_water : 95,
    hand_washing:  "no data",
    safe_sanitation: 85
  },
  {
    country: "Qatar",
    location: [25.354826,51.183884],
    life_expectancy : 77.2,
    drinking_water : 96,
    hand_washing:  "no data",
    safe_sanitation: 97
  },
  {
    country: "Republic of Korea",
    location: [35.907757,127.766922],
    life_expectancy : 83.3,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 100
  },
  {
    country: "Republic of Moldova",
    location: [47.411631,28.369885],
    life_expectancy : 73.3,
    drinking_water : 74,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Romania",
    location: [45.943161,24.96676],
    life_expectancy : 75.6,
    drinking_water : 82,
    hand_washing:  "no data",
    safe_sanitation: 83
  },
  {
    country: "Russian Federation",
    location: [61.52401,105.318756],
    life_expectancy : 73.2,
    drinking_water : 76,
    hand_washing:  "no data",
    safe_sanitation: 61
  },
  {
    country: "Rwanda",
    location: [-1.940278,29.873888],
    life_expectancy : 69.1,
    drinking_water : 12,
    hand_washing: 5,
    safe_sanitation: "no data"
  },
  {
    country: "Saint Kitts and Nevis",
    location: [17.357822,-62.782998],
    life_expectancy : 74.3,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Saint Lucia",
    location: [13.909444,-60.978893],
    life_expectancy : 73.2,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Saint Vincent and the Grenadines",
    location: [12.984305,-61.287228],
    life_expectancy : 70.5,
    drinking_water : 46,
    hand_washing: 79,
    safe_sanitation: 48
  },
  {
    country: "Samoa",
    location: [-13.759029,-172.104629],
    life_expectancy : 70.4,
    drinking_water : 36,
    hand_washing: 55,
    safe_sanitation: 35
  },
  {
    country: "Sao Tome and Principe",
    location: [0.18636,6.613081],
    life_expectancy : 74.3,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 59
  },
  {
    country: "Saudi Arabia",
    location: [23.885942,45.079162],
    life_expectancy : 68.6,
    drinking_water :  "no data",
    hand_washing: 22,
    safe_sanitation: 24
  },
  {
    country: "Senegal",
    location: [14.497401,-14.452362],
    life_expectancy : 75.9,
    drinking_water : 75,
    hand_washing:  "no data",
    safe_sanitation: 18
  },
  {
    country: "Serbia",
    location: [44.016521,21.005859],
    life_expectancy : 73.3,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Seychelles",
    location: [-4.679574,55.491977],
    life_expectancy : 60.8,
    drinking_water : 11,
    hand_washing: 21,
    safe_sanitation: 14
  },
  {
    country: "Sierra Leone",
    location: [8.460555,-11.779889],
    life_expectancy : 83.2,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 100
  },
  {
    country: "Singapore",
    location: [1.352083,103.819836],
    life_expectancy : 78.2,
    drinking_water : 99,
    hand_washing:  "no data",
    safe_sanitation: 82
  },
  {
    country: "Slovakia",
    location: [48.669026,19.699024],
    life_expectancy : 81.3,
    drinking_water : 98,
    hand_washing:  "no data",
    safe_sanitation: 72
  },
  {
    country: "Slovenia",
    location: [46.151241,14.995463],
    life_expectancy : 65.2,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Solomon Islands",
    location: [-9.64571,160.156194],
    life_expectancy : 56.5,
    drinking_water :  "no data",
    hand_washing: 25,
    safe_sanitation: 32
  },
  {
    country: "Somalia",
    location: [5.152149,46.199616],
    life_expectancy : 65.3,
    drinking_water :  "no data",
    hand_washing: 44,
    safe_sanitation: "no data"
  },
  {
    country: "South Africa",
    location: [-30.559482,22.937506],
    life_expectancy : 62.8,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "South Sudan",
    location: [6.877000,31.307000],
    life_expectancy : 83.2,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 96
  },
  {
    country: "Spain",
    location: [40.463667,-3.74922],
    life_expectancy : 76.9,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Sri Lanka",
    location: [7.873054,80.771797],
    life_expectancy : 69.1,
    drinking_water :  "no data",
    hand_washing: 13,
    safe_sanitation: "no data"
  },
  {
    country: "Sudan",
    location: [12.862807,30.217636],
    life_expectancy : 71.5,
    drinking_water : 56,
    hand_washing: 72,
    safe_sanitation: 25
  },
  {
    country: "Suriname",
    location: [3.919305,-56.027783],
    life_expectancy : 57.7,
    drinking_water :  "no data",
    hand_washing: 24,
    safe_sanitation: "no data"
  },
  {
    country: "Swaziland",
    location: [-26.522503,31.465866],
    life_expectancy : 82.4,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 95
  },
  {
    country: "Sweden",
    location: [60.128161,18.643501],
    life_expectancy : 83.4,
    drinking_water : 94,
    hand_washing:  "no data",
    safe_sanitation: 100
  },
  {
    country: "Switzerland",
    location: [46.818188,8.227512],
    life_expectancy : 72.7,
    drinking_water :  "no data",
    hand_washing: 83,
    safe_sanitation: "no data"
  },
  {
    country: "Syrian Arab Republic",
    location: [34.802075,38.996815],
    life_expectancy : 69.5,
    drinking_water : 55,
    hand_washing: 73,
    safe_sanitation: "no data"
  },
  {
    country: "Tajikistan",
    location: [38.861034,71.276093],
    life_expectancy : 77.7,
    drinking_water :  "no data",
    hand_washing: 85,
    safe_sanitation: 26
  },
  {
    country: "Thailand",
    location: [15.870032,100.992541],
    life_expectancy : 69.6,
    drinking_water :  "no data",
    hand_washing: 28,
    safe_sanitation: "no data"
  },
  {
    country: "Timor-Leste",
    location: [-8.874217,125.727539],
    life_expectancy : 64.3,
    drinking_water : 20,
    hand_washing: 17,
    safe_sanitation: 9
  },
  {
    country: "Togo",
    location: [8.619543,0.824782],
    life_expectancy : 72.6,
    drinking_water : 30,
    hand_washing: 70,
    safe_sanitation: 34
  },
  {
    country: "Tonga",
    location: [-21.178986,-175.198242],
    life_expectancy : 76.1,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Trinidad and Tobago",
    location: [10.691803,-61.222503],
    life_expectancy : 77,
    drinking_water : 79,
    hand_washing: 84,
    safe_sanitation: 81
  },
  {
    country: "Tunisia",
    location: [33.886917,9.537499],
    life_expectancy : 78.6,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 78
  },
  {
    country: "Turkey",
    location: [38.963745,35.243322],
    life_expectancy : 69.7,
    drinking_water : 95,
    hand_washing: 100,
    safe_sanitation: "no data"
  },
  {
    country: "Turkmenistan",
    location: [38.969719,59.556278],
    life_expectancy : 66.7,
    drinking_water : 17,
    hand_washing: 23,
    safe_sanitation: "no data"
  },
  {
    country: "Uganda",
    location: [1.373333,32.290275],
    life_expectancy : 73,
    drinking_water : 89,
    hand_washing:  "no data",
    safe_sanitation: 72
  },
  {
    country: "Ukraine",
    location: [48.379433,31.16558],
    life_expectancy : 76.1,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 99
  },
  {
    country: "United Arab Emirates",
    location: [23.424076,53.847818],
    life_expectancy : 81.4,
    drinking_water : 100,
    hand_washing:  "no data",
    safe_sanitation: 98
  },
  {
    country: "United Kingdom",
    location: [55.378051,-3.435973],
    life_expectancy : 67.3,
    drinking_water :  "no data",
    hand_washing: 48,
    safe_sanitation: 26
  },
  {
    country: "United States",
    location: [37.09024,-95.712891],
    life_expectancy : 78.5,
    drinking_water : 97,
    hand_washing:  "no data",
    safe_sanitation: 98
  },
  {
    country: "Uruguay",
    location: [-32.522779,-55.765835],
    life_expectancy : 77.1,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Uzbekistan",
    location: [41.377491,64.585262],
    life_expectancy : 73,
    drinking_water : 59,
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Vanuatu",
    location: [-15.376706,166.959158],
    life_expectancy : 65.3,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: "no data"
  },
  {
    country: "Venezuela (Bolivarian Republic of)",
    location: [6.42375,-66.58973],
    life_expectancy : 73.9,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 23
  },
  {
    country: "Viet Nam",
    location: [14.058324,108.277199],
    life_expectancy : 73.7,
    drinking_water :  "no data",
    hand_washing: 86,
    safe_sanitation: "no data"
  },
  {
    country: "Yemen",
    location: [15.552727,48.516388],
    life_expectancy : 66.6,
    drinking_water :  "no data",
    hand_washing:  "no data",
    safe_sanitation: 19
  },
  {
    country: "Zambia",
    location: [-13.133897,27.849332],
    life_expectancy : 62.5,
    drinking_water :  "no data",
    hand_washing: 18,
    safe_sanitation: "no data"
  },
  {
    country: "Zimbabwe",
    location: [-19.015438,29.154857],
    life_expectancy : 60.7,
    drinking_water : 30,
    hand_washing: 42,
    safe_sanitation: 26
  }

]