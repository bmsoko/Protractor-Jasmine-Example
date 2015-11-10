function passThrough($httpBackend) {
    $httpBackend.whenGET(/^\/scripts\//).passThrough();
};

module.exports.build = function(funcs) {
    var funcStr = "angular.module('httpBackEndMock', ['ngMockE2E'])";

    if (Array.isArray(funcs)) {
        for (var i = 0; i < funcs.length; i++) {
            funcStr += "\r.run(" + funcs[i] + ")"
        };
    } else {
        funcStr += "\r.run(" + funcs + ")"
    }

    funcStr += "\r.run(" + passThrough + ")";

    var funcTyped = Function(funcStr);

    //console.log(funcTyped.toString())
    return funcTyped;
}

module.exports.oneTheme = function ($httpBackend) {
    var oneTheme = {
        "endpoint_name": "theme",
        "method": "POST",
        "result_count": "10",
        "timing": {
            " theme Constructor called": "0.000 (0.000)",
            "  theme Destructor called": "0.004 (0.004)"
        },
        "inputs": {
            "raw_input": ""
        },
        "results": [
            {
                "theme_name": "fareness_beach",
                "theme_display_name": "Museum"
            }
        ]
    };
    $httpBackend.whenPOST('https://www.fareness.com/api/theme/').respond(oneTheme);
};

module.exports.allThemes = function ($httpBackend) {
    var allThemes = {
        "endpoint_name": "theme",
        "method": "POST",
        "result_count": "10",
        "timing": {
            " theme Constructor called": "0.000 (0.000)",
            "  theme Destructor called": "0.013 (0.013)"
        },
        "inputs": {
            "raw_input": ""
        },
        "results": [
            {
                "theme_name": "fareness_beach",
                "theme_display_name": "Beach"
            },
            {
                "theme_name": "fareness_europe",
                "theme_display_name": "Europe"
            },
            {
                "theme_name": "fareness_island",
                "theme_display_name": "Island"
            },
            {
                "theme_name": "fareness_major",
                "theme_display_name": "US Cities"
            },
            {
                "theme_name": "fareness_family",
                "theme_display_name": "Family"
            },
            {
                "theme_name": "fareness_asia",
                "theme_display_name": "Asia"
            },
            {
                "theme_name": "fareness_music",
                "theme_display_name": "Music"
            },
            {
                "theme_name": "fareness_nightlife",
                "theme_display_name": "Nightlife"
            },
            {
                "theme_name": "fareness_outdoors",
                "theme_display_name": "Outdoors"
            },
            {
                "theme_name": "fareness_museum_art",
                "theme_display_name": "Museum"
            }
        ]
    };
    $httpBackend.whenPOST('https://www.fareness.com/api/theme/').respond(allThemes);
};

module.exports.allTiles = function ($httpBackend) {
    var allTiles =
    {
        "endpoint_name": "tile",
        "method": "POST",
        "result_count": "2",
        "timing": {
            " tile Constructor called": "0.018 (0.018)",
            "  tile Destructor called": "0.018 (0.000)"
        },
        "inputs": {
            "raw_input": "a",
            "origin": "COR",
            "trip_length": "5 (default)"
        },
        "results": {
            "tiles": {
                "all_destinations": {
                    "theme_display_name": "All Destinations",
                    "theme_name": "all_destinations",
                    "theme_description": "",
                    "locations": {
                        "MIA": {
                            "type": "flight",
                            "iata_code": "MIA",
                            "city": "Miami",
                            "lat": "25.793200",
                            "long": "-80.290604",
                            "images": [],
                            "cheapest_fare": {
                                "day": "July 10th",
                                "fare": 923
                            }
                        },
                        "HNL": {
                            "type": "flight",
                            "iata_code": "HNL",
                            "city": "Honolulu",
                            "lat": "21.318701",
                            "long": "-157.921997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "OGG": {
                            "type": "flight",
                            "iata_code": "OGG",
                            "city": "Kahului",
                            "lat": "20.898600",
                            "long": "-156.429993",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MCO": {
                            "type": "flight",
                            "iata_code": "MCO",
                            "city": "Orlando",
                            "lat": "28.429399",
                            "long": "-81.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PBI": {
                            "type": "flight",
                            "iata_code": "PBI",
                            "city": "West Palm Beach",
                            "lat": "26.683201",
                            "long": "-80.095596",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SAN": {
                            "type": "flight",
                            "iata_code": "SAN",
                            "city": "San Diego",
                            "lat": "32.733601",
                            "long": "-117.190002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SJD": {
                            "type": "flight",
                            "iata_code": "SJD",
                            "city": "San José del Cabo",
                            "lat": "23.151800",
                            "long": "-109.721001",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CUN": {
                            "type": "flight",
                            "iata_code": "CUN",
                            "city": "Cancún",
                            "lat": "21.036501",
                            "long": "-86.877098",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "KOA": {
                            "type": "flight",
                            "iata_code": "KOA",
                            "city": "Kailua/Kona",
                            "lat": "19.738800",
                            "long": "-156.046005",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PVR": {
                            "type": "flight",
                            "iata_code": "PVR",
                            "city": "Puerto Vallarta",
                            "lat": "20.680099",
                            "long": "-105.253998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LIH": {
                            "type": "flight",
                            "iata_code": "LIH",
                            "city": "Lihue",
                            "lat": "21.976000",
                            "long": "-159.339005",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "FLL": {
                            "type": "flight",
                            "iata_code": "FLL",
                            "city": "Fort Lauderdale",
                            "lat": "26.072599",
                            "long": "-80.152702",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "AMS": {
                            "type": "flight",
                            "iata_code": "AMS",
                            "city": "Amsterdam",
                            "lat": "52.308601",
                            "long": "4.763890",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BCN": {
                            "type": "flight",
                            "iata_code": "BCN",
                            "city": "Barcelona",
                            "lat": "41.297100",
                            "long": "2.078460",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "IST": {
                            "type": "flight",
                            "iata_code": "IST",
                            "city": "Istanbul",
                            "lat": "40.976898",
                            "long": "28.814600",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LHR": {
                            "type": "flight",
                            "iata_code": "LHR",
                            "city": "London",
                            "lat": "51.470600",
                            "long": "-0.461941",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MAD": {
                            "type": "flight",
                            "iata_code": "MAD",
                            "city": "Madrid",
                            "lat": "40.493599",
                            "long": "-3.566760",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CDG": {
                            "type": "flight",
                            "iata_code": "CDG",
                            "city": "Paris",
                            "lat": "49.012798",
                            "long": "2.550000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "FCO": {
                            "type": "flight",
                            "iata_code": "FCO",
                            "city": "Rome",
                            "lat": "41.804501",
                            "long": "12.250800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "VIE": {
                            "type": "flight",
                            "iata_code": "VIE",
                            "city": "Vienna",
                            "lat": "48.110298",
                            "long": "16.569700",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ARN": {
                            "type": "flight",
                            "iata_code": "ARN",
                            "city": "Stockholm",
                            "lat": "59.651901",
                            "long": "17.918600",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PRG": {
                            "type": "flight",
                            "iata_code": "PRG",
                            "city": "Prague",
                            "lat": "50.100800",
                            "long": "14.260000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CPH": {
                            "type": "flight",
                            "iata_code": "CPH",
                            "city": "Copenhagen",
                            "lat": "55.617901",
                            "long": "12.656000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "DUB": {
                            "type": "flight",
                            "iata_code": "DUB",
                            "city": "Dublin",
                            "lat": "53.421299",
                            "long": "-6.270070",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "NAS": {
                            "type": "flight",
                            "iata_code": "NAS",
                            "city": "Nassau",
                            "lat": "25.039000",
                            "long": "-77.466202",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PPT": {
                            "type": "flight",
                            "iata_code": "PPT",
                            "city": "Papeete",
                            "lat": "-17.553699",
                            "long": "-149.606995",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "NAN": {
                            "type": "flight",
                            "iata_code": "NAN",
                            "city": "Nadi",
                            "lat": "-17.755400",
                            "long": "177.442993",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PLS": {
                            "type": "flight",
                            "iata_code": "PLS",
                            "city": "Providenciales Island",
                            "lat": "21.773600",
                            "long": "-72.265900",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BOB": {
                            "type": "flight",
                            "iata_code": "BOB",
                            "city": "Motu Mute",
                            "lat": "-16.444401",
                            "long": "-151.751007",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "STT": {
                            "type": "flight",
                            "iata_code": "STT",
                            "city": "Charlotte Amalie, Harry S. Truman Airport",
                            "lat": "18.337299",
                            "long": "-64.973396",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "GCM": {
                            "type": "flight",
                            "iata_code": "GCM",
                            "city": "Georgetown",
                            "lat": "19.292801",
                            "long": "-81.357697",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "DPS": {
                            "type": "flight",
                            "iata_code": "DPS",
                            "city": "Denpasar-Bali Island",
                            "lat": "-8.748170",
                            "long": "115.167000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "JFK": {
                            "type": "flight",
                            "iata_code": "JFK",
                            "city": "New York",
                            "lat": "40.639801",
                            "long": "-73.778900",
                            "images": [
                                {
                                    "url": "//res.cloudinary.com/fareness-com/image/upload/c_crop,x_1300,y_450,w_2900,h_3800/q_60,f_auto,e_saturation:-25/jcr5hhbtwvgwllglil2x.jpg",
                                    "image_copy": "Big Apple Getaway",
                                    "image_description": "New York skyline, centered on the Empire State Building",
                                    "photographer": "Anthony Delanoix"
                                }
                            ],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ORD": {
                            "type": "flight",
                            "iata_code": "ORD",
                            "city": "Chicago",
                            "lat": "41.978600",
                            "long": "-87.904800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "DFW": {
                            "type": "flight",
                            "iata_code": "DFW",
                            "city": "Dallas-Fort Worth",
                            "lat": "32.896801",
                            "long": "-97.038002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "IAH": {
                            "type": "flight",
                            "iata_code": "IAH",
                            "city": "Houston",
                            "lat": "29.984400",
                            "long": "-95.341400",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAS": {
                            "type": "flight",
                            "iata_code": "LAS",
                            "city": "Las Vegas",
                            "lat": "36.080101",
                            "long": "-115.152000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAX": {
                            "type": "flight",
                            "iata_code": "LAX",
                            "city": "Los Angeles",
                            "lat": "33.942501",
                            "long": "-118.407997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PHX": {
                            "type": "flight",
                            "iata_code": "PHX",
                            "city": "Phoenix",
                            "lat": "33.434299",
                            "long": "-112.012001",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PDX": {
                            "type": "flight",
                            "iata_code": "PDX",
                            "city": "Portland",
                            "lat": "45.588699",
                            "long": "-122.598000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SFO": {
                            "type": "flight",
                            "iata_code": "SFO",
                            "city": "San Francisco",
                            "lat": "37.618999",
                            "long": "-122.375000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SEA": {
                            "type": "flight",
                            "iata_code": "SEA",
                            "city": "Seattle",
                            "lat": "47.449001",
                            "long": "-122.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CHS": {
                            "type": "flight",
                            "iata_code": "CHS",
                            "city": "Charleston",
                            "lat": "32.898602",
                            "long": "-80.040497",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "IAD": {
                            "type": "flight",
                            "iata_code": "IAD",
                            "city": "Washington",
                            "lat": "38.944500",
                            "long": "-77.455803",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SYD": {
                            "type": "flight",
                            "iata_code": "SYD",
                            "city": "Sydney",
                            "lat": "-33.946098",
                            "long": "151.177002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "JAC": {
                            "type": "flight",
                            "iata_code": "JAC",
                            "city": "Jackson",
                            "lat": "43.607300",
                            "long": "-110.737999",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BKK": {
                            "type": "flight",
                            "iata_code": "BKK",
                            "city": "Bangkok",
                            "lat": "13.681100",
                            "long": "100.747002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PEK": {
                            "type": "flight",
                            "iata_code": "PEK",
                            "city": "Beijing",
                            "lat": "40.080101",
                            "long": "116.584999",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "HKG": {
                            "type": "flight",
                            "iata_code": "HKG",
                            "city": "Hong Kong",
                            "lat": "22.308901",
                            "long": "113.915001",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ICN": {
                            "type": "flight",
                            "iata_code": "ICN",
                            "city": "Seoul",
                            "lat": "37.469101",
                            "long": "126.450996",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SIN": {
                            "type": "flight",
                            "iata_code": "SIN",
                            "city": "Singapore",
                            "lat": "1.350190",
                            "long": "103.994003",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "HND": {
                            "type": "flight",
                            "iata_code": "HND",
                            "city": "Tokyo",
                            "lat": "35.552299",
                            "long": "139.779999",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SGN": {
                            "type": "flight",
                            "iata_code": "SGN",
                            "city": "Ho Chi Minh City",
                            "lat": "10.818800",
                            "long": "106.652000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "REP": {
                            "type": "flight",
                            "iata_code": "REP",
                            "city": "Siem Reap",
                            "lat": "13.410700",
                            "long": "103.813004",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ATL": {
                            "type": "flight",
                            "iata_code": "ATL",
                            "city": "Atlanta",
                            "lat": "33.636700",
                            "long": "-84.428101",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "AUS": {
                            "type": "flight",
                            "iata_code": "AUS",
                            "city": "Austin",
                            "lat": "30.194500",
                            "long": "-97.669899",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MEM": {
                            "type": "flight",
                            "iata_code": "MEM",
                            "city": "Memphis",
                            "lat": "35.042400",
                            "long": "-89.976700",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MSP": {
                            "type": "flight",
                            "iata_code": "MSP",
                            "city": "Minneapolis",
                            "lat": "44.882000",
                            "long": "-93.221802",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BNA": {
                            "type": "flight",
                            "iata_code": "BNA",
                            "city": "Nashville",
                            "lat": "36.124500",
                            "long": "-86.678200",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MSY": {
                            "type": "flight",
                            "iata_code": "MSY",
                            "city": "New Orleans",
                            "lat": "29.993401",
                            "long": "-90.258003",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SLC": {
                            "type": "flight",
                            "iata_code": "SLC",
                            "city": "Salt Lake City",
                            "lat": "40.788399",
                            "long": "-111.977997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ATH": {
                            "type": "flight",
                            "iata_code": "ATH",
                            "city": "Athens",
                            "lat": "37.936401",
                            "long": "23.944500",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_beach": {
                    "theme_display_name": "Beach",
                    "theme_name": "fareness_beach",
                    "theme_description": null,
                    "locations": {
                        "MIA": {
                            "type": "flight",
                            "iata_code": "MIA",
                            "city": "Miami",
                            "lat": "25.793200",
                            "long": "-80.290604",
                            "images": [],
                            "cheapest_fare": {
                                "day": "July 10th",
                                "fare": 923
                            }
                        },
                        "HNL": {
                            "type": "flight",
                            "iata_code": "HNL",
                            "city": "Honolulu",
                            "lat": "21.318701",
                            "long": "-157.921997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "OGG": {
                            "type": "flight",
                            "iata_code": "OGG",
                            "city": "Kahului",
                            "lat": "20.898600",
                            "long": "-156.429993",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MCO": {
                            "type": "flight",
                            "iata_code": "MCO",
                            "city": "Orlando",
                            "lat": "28.429399",
                            "long": "-81.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PBI": {
                            "type": "flight",
                            "iata_code": "PBI",
                            "city": "West Palm Beach",
                            "lat": "26.683201",
                            "long": "-80.095596",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SAN": {
                            "type": "flight",
                            "iata_code": "SAN",
                            "city": "San Diego",
                            "lat": "32.733601",
                            "long": "-117.190002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SJD": {
                            "type": "flight",
                            "iata_code": "SJD",
                            "city": "San José del Cabo",
                            "lat": "23.151800",
                            "long": "-109.721001",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CUN": {
                            "type": "flight",
                            "iata_code": "CUN",
                            "city": "Cancún",
                            "lat": "21.036501",
                            "long": "-86.877098",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "KOA": {
                            "type": "flight",
                            "iata_code": "KOA",
                            "city": "Kailua/Kona",
                            "lat": "19.738800",
                            "long": "-156.046005",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PVR": {
                            "type": "flight",
                            "iata_code": "PVR",
                            "city": "Puerto Vallarta",
                            "lat": "20.680099",
                            "long": "-105.253998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LIH": {
                            "type": "flight",
                            "iata_code": "LIH",
                            "city": "Lihue",
                            "lat": "21.976000",
                            "long": "-159.339005",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "FLL": {
                            "type": "flight",
                            "iata_code": "FLL",
                            "city": "Fort Lauderdale",
                            "lat": "26.072599",
                            "long": "-80.152702",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_nightlife": {
                    "theme_display_name": "Nightlife",
                    "theme_name": "fareness_nightlife",
                    "theme_description": null,
                    "locations": {
                        "MIA": {
                            "type": "flight",
                            "iata_code": "MIA",
                            "city": "Miami",
                            "lat": "25.793200",
                            "long": "-80.290604",
                            "images": [],
                            "cheapest_fare": {
                                "day": "July 10th",
                                "fare": 923
                            }
                        },
                        "JFK": {
                            "type": "flight",
                            "iata_code": "JFK",
                            "city": "New York",
                            "lat": "40.639801",
                            "long": "-73.778900",
                            "images": [
                                {
                                    "url": "//res.cloudinary.com/fareness-com/image/upload/c_crop,x_1300,y_450,w_2900,h_3800/q_60,f_auto,e_saturation:-25/jcr5hhbtwvgwllglil2x.jpg",
                                    "image_copy": "Big Apple Getaway",
                                    "image_description": "New York skyline, centered on the Empire State Building",
                                    "photographer": "Anthony Delanoix"
                                }
                            ],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "AUS": {
                            "type": "flight",
                            "iata_code": "AUS",
                            "city": "Austin",
                            "lat": "30.194500",
                            "long": "-97.669899",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ORD": {
                            "type": "flight",
                            "iata_code": "ORD",
                            "city": "Chicago",
                            "lat": "41.978600",
                            "long": "-87.904800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAS": {
                            "type": "flight",
                            "iata_code": "LAS",
                            "city": "Las Vegas",
                            "lat": "36.080101",
                            "long": "-115.152000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAX": {
                            "type": "flight",
                            "iata_code": "LAX",
                            "city": "Los Angeles",
                            "lat": "33.942501",
                            "long": "-118.407997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MSY": {
                            "type": "flight",
                            "iata_code": "MSY",
                            "city": "New Orleans",
                            "lat": "29.993401",
                            "long": "-90.258003",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CUN": {
                            "type": "flight",
                            "iata_code": "CUN",
                            "city": "Cancún",
                            "lat": "21.036501",
                            "long": "-86.877098",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_europe": {
                    "theme_display_name": "Europe",
                    "theme_name": "fareness_europe",
                    "theme_description": null,
                    "locations": {
                        "AMS": {
                            "type": "flight",
                            "iata_code": "AMS",
                            "city": "Amsterdam",
                            "lat": "52.308601",
                            "long": "4.763890",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BCN": {
                            "type": "flight",
                            "iata_code": "BCN",
                            "city": "Barcelona",
                            "lat": "41.297100",
                            "long": "2.078460",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "IST": {
                            "type": "flight",
                            "iata_code": "IST",
                            "city": "Istanbul",
                            "lat": "40.976898",
                            "long": "28.814600",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LHR": {
                            "type": "flight",
                            "iata_code": "LHR",
                            "city": "London",
                            "lat": "51.470600",
                            "long": "-0.461941",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MAD": {
                            "type": "flight",
                            "iata_code": "MAD",
                            "city": "Madrid",
                            "lat": "40.493599",
                            "long": "-3.566760",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CDG": {
                            "type": "flight",
                            "iata_code": "CDG",
                            "city": "Paris",
                            "lat": "49.012798",
                            "long": "2.550000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "FCO": {
                            "type": "flight",
                            "iata_code": "FCO",
                            "city": "Rome",
                            "lat": "41.804501",
                            "long": "12.250800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "VIE": {
                            "type": "flight",
                            "iata_code": "VIE",
                            "city": "Vienna",
                            "lat": "48.110298",
                            "long": "16.569700",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ARN": {
                            "type": "flight",
                            "iata_code": "ARN",
                            "city": "Stockholm",
                            "lat": "59.651901",
                            "long": "17.918600",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PRG": {
                            "type": "flight",
                            "iata_code": "PRG",
                            "city": "Prague",
                            "lat": "50.100800",
                            "long": "14.260000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CPH": {
                            "type": "flight",
                            "iata_code": "CPH",
                            "city": "Copenhagen",
                            "lat": "55.617901",
                            "long": "12.656000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "DUB": {
                            "type": "flight",
                            "iata_code": "DUB",
                            "city": "Dublin",
                            "lat": "53.421299",
                            "long": "-6.270070",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_island": {
                    "theme_display_name": "Island",
                    "theme_name": "fareness_island",
                    "theme_description": null,
                    "locations": {
                        "HNL": {
                            "type": "flight",
                            "iata_code": "HNL",
                            "city": "Honolulu",
                            "lat": "21.318701",
                            "long": "-157.921997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "OGG": {
                            "type": "flight",
                            "iata_code": "OGG",
                            "city": "Kahului",
                            "lat": "20.898600",
                            "long": "-156.429993",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "NAS": {
                            "type": "flight",
                            "iata_code": "NAS",
                            "city": "Nassau",
                            "lat": "25.039000",
                            "long": "-77.466202",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "KOA": {
                            "type": "flight",
                            "iata_code": "KOA",
                            "city": "Kailua/Kona",
                            "lat": "19.738800",
                            "long": "-156.046005",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PPT": {
                            "type": "flight",
                            "iata_code": "PPT",
                            "city": "Papeete",
                            "lat": "-17.553699",
                            "long": "-149.606995",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "NAN": {
                            "type": "flight",
                            "iata_code": "NAN",
                            "city": "Nadi",
                            "lat": "-17.755400",
                            "long": "177.442993",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PLS": {
                            "type": "flight",
                            "iata_code": "PLS",
                            "city": "Providenciales Island",
                            "lat": "21.773600",
                            "long": "-72.265900",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BOB": {
                            "type": "flight",
                            "iata_code": "BOB",
                            "city": "Motu Mute",
                            "lat": "-16.444401",
                            "long": "-151.751007",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "STT": {
                            "type": "flight",
                            "iata_code": "STT",
                            "city": "Charlotte Amalie, Harry S. Truman Airport",
                            "lat": "18.337299",
                            "long": "-64.973396",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "GCM": {
                            "type": "flight",
                            "iata_code": "GCM",
                            "city": "Georgetown",
                            "lat": "19.292801",
                            "long": "-81.357697",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LIH": {
                            "type": "flight",
                            "iata_code": "LIH",
                            "city": "Lihue",
                            "lat": "21.976000",
                            "long": "-159.339005",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "DPS": {
                            "type": "flight",
                            "iata_code": "DPS",
                            "city": "Denpasar-Bali Island",
                            "lat": "-8.748170",
                            "long": "115.167000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_major": {
                    "theme_display_name": "US Cities",
                    "theme_name": "fareness_major",
                    "theme_description": null,
                    "locations": {
                        "JFK": {
                            "type": "flight",
                            "iata_code": "JFK",
                            "city": "New York",
                            "lat": "40.639801",
                            "long": "-73.778900",
                            "images": [
                                {
                                    "url": "//res.cloudinary.com/fareness-com/image/upload/c_crop,x_1300,y_450,w_2900,h_3800/q_60,f_auto,e_saturation:-25/jcr5hhbtwvgwllglil2x.jpg",
                                    "image_copy": "Big Apple Getaway",
                                    "image_description": "New York skyline, centered on the Empire State Building",
                                    "photographer": "Anthony Delanoix"
                                }
                            ],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ORD": {
                            "type": "flight",
                            "iata_code": "ORD",
                            "city": "Chicago",
                            "lat": "41.978600",
                            "long": "-87.904800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "DFW": {
                            "type": "flight",
                            "iata_code": "DFW",
                            "city": "Dallas-Fort Worth",
                            "lat": "32.896801",
                            "long": "-97.038002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "IAH": {
                            "type": "flight",
                            "iata_code": "IAH",
                            "city": "Houston",
                            "lat": "29.984400",
                            "long": "-95.341400",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAS": {
                            "type": "flight",
                            "iata_code": "LAS",
                            "city": "Las Vegas",
                            "lat": "36.080101",
                            "long": "-115.152000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAX": {
                            "type": "flight",
                            "iata_code": "LAX",
                            "city": "Los Angeles",
                            "lat": "33.942501",
                            "long": "-118.407997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MCO": {
                            "type": "flight",
                            "iata_code": "MCO",
                            "city": "Orlando",
                            "lat": "28.429399",
                            "long": "-81.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PHX": {
                            "type": "flight",
                            "iata_code": "PHX",
                            "city": "Phoenix",
                            "lat": "33.434299",
                            "long": "-112.012001",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PDX": {
                            "type": "flight",
                            "iata_code": "PDX",
                            "city": "Portland",
                            "lat": "45.588699",
                            "long": "-122.598000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SFO": {
                            "type": "flight",
                            "iata_code": "SFO",
                            "city": "San Francisco",
                            "lat": "37.618999",
                            "long": "-122.375000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SEA": {
                            "type": "flight",
                            "iata_code": "SEA",
                            "city": "Seattle",
                            "lat": "47.449001",
                            "long": "-122.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CHS": {
                            "type": "flight",
                            "iata_code": "CHS",
                            "city": "Charleston",
                            "lat": "32.898602",
                            "long": "-80.040497",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_family": {
                    "theme_display_name": "Family",
                    "theme_name": "fareness_family",
                    "theme_description": null,
                    "locations": {
                        "HNL": {
                            "type": "flight",
                            "iata_code": "HNL",
                            "city": "Honolulu",
                            "lat": "21.318701",
                            "long": "-157.921997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAX": {
                            "type": "flight",
                            "iata_code": "LAX",
                            "city": "Los Angeles",
                            "lat": "33.942501",
                            "long": "-118.407997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MCO": {
                            "type": "flight",
                            "iata_code": "MCO",
                            "city": "Orlando",
                            "lat": "28.429399",
                            "long": "-81.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CDG": {
                            "type": "flight",
                            "iata_code": "CDG",
                            "city": "Paris",
                            "lat": "49.012798",
                            "long": "2.550000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PHX": {
                            "type": "flight",
                            "iata_code": "PHX",
                            "city": "Phoenix",
                            "lat": "33.434299",
                            "long": "-112.012001",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "FCO": {
                            "type": "flight",
                            "iata_code": "FCO",
                            "city": "Rome",
                            "lat": "41.804501",
                            "long": "12.250800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SAN": {
                            "type": "flight",
                            "iata_code": "SAN",
                            "city": "San Diego",
                            "lat": "32.733601",
                            "long": "-117.190002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SFO": {
                            "type": "flight",
                            "iata_code": "SFO",
                            "city": "San Francisco",
                            "lat": "37.618999",
                            "long": "-122.375000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "IAD": {
                            "type": "flight",
                            "iata_code": "IAD",
                            "city": "Washington",
                            "lat": "38.944500",
                            "long": "-77.455803",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SYD": {
                            "type": "flight",
                            "iata_code": "SYD",
                            "city": "Sydney",
                            "lat": "-33.946098",
                            "long": "151.177002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "NAS": {
                            "type": "flight",
                            "iata_code": "NAS",
                            "city": "Nassau",
                            "lat": "25.039000",
                            "long": "-77.466202",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "JAC": {
                            "type": "flight",
                            "iata_code": "JAC",
                            "city": "Jackson",
                            "lat": "43.607300",
                            "long": "-110.737999",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_asia": {
                    "theme_display_name": "Asia",
                    "theme_name": "fareness_asia",
                    "theme_description": null,
                    "locations": {
                        "BKK": {
                            "type": "flight",
                            "iata_code": "BKK",
                            "city": "Bangkok",
                            "lat": "13.681100",
                            "long": "100.747002",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PEK": {
                            "type": "flight",
                            "iata_code": "PEK",
                            "city": "Beijing",
                            "lat": "40.080101",
                            "long": "116.584999",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "HKG": {
                            "type": "flight",
                            "iata_code": "HKG",
                            "city": "Hong Kong",
                            "lat": "22.308901",
                            "long": "113.915001",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ICN": {
                            "type": "flight",
                            "iata_code": "ICN",
                            "city": "Seoul",
                            "lat": "37.469101",
                            "long": "126.450996",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SIN": {
                            "type": "flight",
                            "iata_code": "SIN",
                            "city": "Singapore",
                            "lat": "1.350190",
                            "long": "103.994003",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "HND": {
                            "type": "flight",
                            "iata_code": "HND",
                            "city": "Tokyo",
                            "lat": "35.552299",
                            "long": "139.779999",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SGN": {
                            "type": "flight",
                            "iata_code": "SGN",
                            "city": "Ho Chi Minh City",
                            "lat": "10.818800",
                            "long": "106.652000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "REP": {
                            "type": "flight",
                            "iata_code": "REP",
                            "city": "Siem Reap",
                            "lat": "13.410700",
                            "long": "103.813004",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_music": {
                    "theme_display_name": "Music",
                    "theme_name": "fareness_music",
                    "theme_description": null,
                    "locations": {
                        "JFK": {
                            "type": "flight",
                            "iata_code": "JFK",
                            "city": "New York",
                            "lat": "40.639801",
                            "long": "-73.778900",
                            "images": [
                                {
                                    "url": "//res.cloudinary.com/fareness-com/image/upload/c_crop,x_1300,y_450,w_2900,h_3800/q_60,f_auto,e_saturation:-25/jcr5hhbtwvgwllglil2x.jpg",
                                    "image_copy": "Big Apple Getaway",
                                    "image_description": "New York skyline, centered on the Empire State Building",
                                    "photographer": "Anthony Delanoix"
                                }
                            ],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ATL": {
                            "type": "flight",
                            "iata_code": "ATL",
                            "city": "Atlanta",
                            "lat": "33.636700",
                            "long": "-84.428101",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "AUS": {
                            "type": "flight",
                            "iata_code": "AUS",
                            "city": "Austin",
                            "lat": "30.194500",
                            "long": "-97.669899",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ORD": {
                            "type": "flight",
                            "iata_code": "ORD",
                            "city": "Chicago",
                            "lat": "41.978600",
                            "long": "-87.904800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LAX": {
                            "type": "flight",
                            "iata_code": "LAX",
                            "city": "Los Angeles",
                            "lat": "33.942501",
                            "long": "-118.407997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MEM": {
                            "type": "flight",
                            "iata_code": "MEM",
                            "city": "Memphis",
                            "lat": "35.042400",
                            "long": "-89.976700",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MSP": {
                            "type": "flight",
                            "iata_code": "MSP",
                            "city": "Minneapolis",
                            "lat": "44.882000",
                            "long": "-93.221802",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BNA": {
                            "type": "flight",
                            "iata_code": "BNA",
                            "city": "Nashville",
                            "lat": "36.124500",
                            "long": "-86.678200",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MSY": {
                            "type": "flight",
                            "iata_code": "MSY",
                            "city": "New Orleans",
                            "lat": "29.993401",
                            "long": "-90.258003",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PDX": {
                            "type": "flight",
                            "iata_code": "PDX",
                            "city": "Portland",
                            "lat": "45.588699",
                            "long": "-122.598000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SFO": {
                            "type": "flight",
                            "iata_code": "SFO",
                            "city": "San Francisco",
                            "lat": "37.618999",
                            "long": "-122.375000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SEA": {
                            "type": "flight",
                            "iata_code": "SEA",
                            "city": "Seattle",
                            "lat": "47.449001",
                            "long": "-122.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_outdoors": {
                    "theme_display_name": "Outdoors",
                    "theme_name": "fareness_outdoors",
                    "theme_description": null,
                    "locations": {
                        "LAS": {
                            "type": "flight",
                            "iata_code": "LAS",
                            "city": "Las Vegas",
                            "lat": "36.080101",
                            "long": "-115.152000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "PDX": {
                            "type": "flight",
                            "iata_code": "PDX",
                            "city": "Portland",
                            "lat": "45.588699",
                            "long": "-122.598000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SLC": {
                            "type": "flight",
                            "iata_code": "SLC",
                            "city": "Salt Lake City",
                            "lat": "40.788399",
                            "long": "-111.977997",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SFO": {
                            "type": "flight",
                            "iata_code": "SFO",
                            "city": "San Francisco",
                            "lat": "37.618999",
                            "long": "-122.375000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SEA": {
                            "type": "flight",
                            "iata_code": "SEA",
                            "city": "Seattle",
                            "lat": "47.449001",
                            "long": "-122.308998",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CHS": {
                            "type": "flight",
                            "iata_code": "CHS",
                            "city": "Charleston",
                            "lat": "32.898602",
                            "long": "-80.040497",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "JAC": {
                            "type": "flight",
                            "iata_code": "JAC",
                            "city": "Jackson",
                            "lat": "43.607300",
                            "long": "-110.737999",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LIH": {
                            "type": "flight",
                            "iata_code": "LIH",
                            "city": "Lihue",
                            "lat": "21.976000",
                            "long": "-159.339005",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                },
                "fareness_museum_art": {
                    "theme_display_name": "Museum",
                    "theme_name": "fareness_museum_art",
                    "theme_description": null,
                    "locations": {
                        "JFK": {
                            "type": "flight",
                            "iata_code": "JFK",
                            "city": "New York",
                            "lat": "40.639801",
                            "long": "-73.778900",
                            "images": [
                                {
                                    "url": "//res.cloudinary.com/fareness-com/image/upload/c_crop,x_1300,y_450,w_2900,h_3800/q_60,f_auto,e_saturation:-25/jcr5hhbtwvgwllglil2x.jpg",
                                    "image_copy": "Big Apple Getaway",
                                    "image_description": "New York skyline, centered on the Empire State Building",
                                    "photographer": "Anthony Delanoix"
                                }
                            ],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "AMS": {
                            "type": "flight",
                            "iata_code": "AMS",
                            "city": "Amsterdam",
                            "lat": "52.308601",
                            "long": "4.763890",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "BCN": {
                            "type": "flight",
                            "iata_code": "BCN",
                            "city": "Barcelona",
                            "lat": "41.297100",
                            "long": "2.078460",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ORD": {
                            "type": "flight",
                            "iata_code": "ORD",
                            "city": "Chicago",
                            "lat": "41.978600",
                            "long": "-87.904800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "LHR": {
                            "type": "flight",
                            "iata_code": "LHR",
                            "city": "London",
                            "lat": "51.470600",
                            "long": "-0.461941",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "MAD": {
                            "type": "flight",
                            "iata_code": "MAD",
                            "city": "Madrid",
                            "lat": "40.493599",
                            "long": "-3.566760",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "CDG": {
                            "type": "flight",
                            "iata_code": "CDG",
                            "city": "Paris",
                            "lat": "49.012798",
                            "long": "2.550000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "FCO": {
                            "type": "flight",
                            "iata_code": "FCO",
                            "city": "Rome",
                            "lat": "41.804501",
                            "long": "12.250800",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "SFO": {
                            "type": "flight",
                            "iata_code": "SFO",
                            "city": "San Francisco",
                            "lat": "37.618999",
                            "long": "-122.375000",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "IAD": {
                            "type": "flight",
                            "iata_code": "IAD",
                            "city": "Washington",
                            "lat": "38.944500",
                            "long": "-77.455803",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "ATH": {
                            "type": "flight",
                            "iata_code": "ATH",
                            "city": "Athens",
                            "lat": "37.936401",
                            "long": "23.944500",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        },
                        "VIE": {
                            "type": "flight",
                            "iata_code": "VIE",
                            "city": "Vienna",
                            "lat": "48.110298",
                            "long": "16.569700",
                            "images": [],
                            "cheapest_fare": {
                                "day": "",
                                "fare": 0
                            }
                        }
                    }
                }
            },
            "departure_timeframes": [
                {
                    "start_date": "2015-07-10",
                    "end_date": "2015-07-10",
                    "display": "This weekend only",
                    "exclusive": true
                },
                {
                    "start_date": "2015-07-07",
                    "end_date": "2015-07-21",
                    "display": "Next 2 weeks only",
                    "exclusive": true
                },
                {
                    "start_date": "2015-07-07",
                    "end_date": "2015-07-31",
                    "display": "All of July",
                    "exclusive": false
                },
                {
                    "start_date": "2015-08-01",
                    "end_date": "2015-08-31",
                    "display": "All of August",
                    "exclusive": false
                },
                {
                    "start_date": "2015-09-01",
                    "end_date": "2015-09-30",
                    "display": "All of September",
                    "exclusive": false
                },
                {
                    "start_date": "2015-10-01",
                    "end_date": "2015-10-31",
                    "display": "All of October",
                    "exclusive": false
                },
                {
                    "start_date": "2015-11-01",
                    "end_date": "2015-11-30",
                    "display": "All of November",
                    "exclusive": false
                }
            ]
        }
    };
    $httpBackend.whenPOST('https://www.fareness.com/api/tile/').respond(allTiles);
};

module.exports.sfoHonMap = function ($httpBackend) {
    var sfoHonMap = {
        "endpoint_name": "map",
        "method": "POST",
        "result_count": "2",
        "timing": {
            " map Constructor called": "0.005 (0.005)",
            "  map Destructor called": "0.005 (0.000)"
        },
        "inputs": {
            "origin": "SFO",
            "destination": "hon",
            "trip_length": "5 (default)",
            "raw_input": "sfo/hon - filters = []"
        },
        "results": {
            "origin": {
                "name": "San Francisco International Airport",
                "city": "San Francisco",
                "lat": "37.618999",
                "long": "-122.375000",
                "iata_code": "SFO",
                "iso_region": "US-CA"
            },
            "destinations": [
                {
                    "city": "San José del Cabo",
                    "lat": "23.151800",
                    "long": "-109.721001",
                    "fare": "345.67",
                    "currency": "USD"
                },
                {
                    "city": "Honolulu",
                    "lat": "21.318701",
                    "long": "-157.921997",
                    "fare": "543.21",
                    "currency": "USD"
                },
                {
                    "city": "Fort Lauderdale",
                    "lat": "26.072599",
                    "long": "-80.152702",
                    "fare": "444.44",
                    "currency": "USD"
                },
                {
                    "city": "Pangkal Pinang-Palaubangka Island",
                    "lat": "-2.162200",
                    "long": "106.139000",
                    "fare": "1444.44",
                    "currency": "USD"
                },
                {
                    "city": "Gold Coast",
                    "lat": "-28.164400",
                    "long": "153.505005",
                    "fare": "2198.76",
                    "currency": "USD"
                }
            ]
        }
    };

    $httpBackend.whenPOST('https://www.fareness.com/api/tile/').respond(sfoHonMap);
};