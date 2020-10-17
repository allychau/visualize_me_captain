// Last 30 Years Annual National Emissions

// <script src='https://cdn.jsdelivr.net/npm/chartist@0.11.4/dist/chartist.min.js'></script>
// <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
// <div class="ct-chart ct-perfect-fourth" data-x-axis="Year" data-y-axis="Annual CO2 Emissions (Billion Tones)"></div> 

Chartist.Line('.ct-chart', {
	
	labels: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 
			1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 
			2008, 2009, 2010. 2011, 2012, 2013, 2014, 2015, 2016, 2017]
	
	series: [[5.1, 5.1, 5.2, 5.3, 5.4, 5.6, 5.7, 5.8, 6.0, 6.0, 6.0,
			6.0, 6.1, 6.1, 6.1, 5.9, 5.5, 5.7, 5.5, 5.6, 5.4, 5.3, 5.3]
			
	]
	}, {
	
	low: 0,
	showArea: true
	});
	

// Last 5 Decades National Emissions Average

// <script src='https://cdn.jsdelivr.net/npm/chartist@0.11.4/dist/chartist.min.js'></script>
// <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
// <div class="ct-chart ct-perfect-fourth" data-x-axis="Decade" data-y-axis="Annual CO2 Emissions (Billion Tones)"></div> 

Chartist.Line('.ct-chart', {
	
	labels: [50s, 60s, 70s, 80s, 90s, 00s, 10s]
	
	series: [[2.6, 3.5, 4.6, 4.7, 5.5, 6.0, 5.5]
			]
	}, {
	
	low: 0,
	showArea: true
	});

// Cumulative Emissions by Year

// <script src='https://cdn.jsdelivr.net/npm/chartist@0.11.4/dist/chartist.min.js'></script>
// <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
// <div class="ct-chart ct-perfect-fourth" data-x-axis="Decade" data-y-axis="Annual CO2 Emissions (Billion Tones)"></div> 

Chartist.Line('.ct-chart', {
	
	labels: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 
			1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 
			2008, 2009, 2010. 2011, 2012, 2013, 2014, 2015, 2016, 2017]
	
	series: [[5.1, 10.2, 15.4, 20.7, 26.1, 31.7, 37.4, 43.2, 49.2, 55.2, 61.2,
			67.2, 73.3, 79.4, 85.5, 91.4, 96.9, 102.6, 108.1, 113.6, 119.2, 124.6, 129.9, 135.2]

			]
	}, {
	
	low: 0,
	showArea: true
	});