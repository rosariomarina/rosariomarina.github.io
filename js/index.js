//First, load in data

var data = [
{"Year":1880,"temperature":-0.19},{"Year":1881,"temperature":-0.11},{"Year":1882,"temperature":-0.12},{"Year":1883,"temperature":-0.2},{"Year":1884,"temperature":-0.3},{"Year":1885,"temperature":-0.32},{"Year":1886,"temperature":-0.33},{"Year":1887,"temperature":-0.36},{"Year":1888,"temperature":-0.18},{"Year":1889,"temperature":-0.11},{"Year":1890,"temperature":-0.37},{"Year":1891,"temperature":-0.24},{"Year":1892,"temperature":-0.27},{"Year":1893,"temperature":-0.32},{"Year":1894,"temperature":-0.32},{"Year":1895,"temperature":-0.23},{"Year":1896,"temperature":-0.12},{"Year":1897,"temperature":-0.12},{"Year":1898,"temperature":-0.28},{"Year":1899,"temperature":-0.19},{"Year":1900,"temperature":-0.09},{"Year":1901,"temperature":-0.16},{"Year":1902,"temperature":-0.3},{"Year":1903,"temperature":-0.39},{"Year":1904,"temperature":-0.49},{"Year":1905,"temperature":-0.28},{"Year":1906,"temperature":-0.23},{"Year":1907,"temperature":-0.4},{"Year":1908,"temperature":-0.44},{"Year":1909,"temperature":-0.48},{"Year":1910,"temperature":-0.43},{"Year":1911,"temperature":-0.43},{"Year":1912,"temperature":-0.36},{"Year":1913,"temperature":-0.36},{"Year":1914,"temperature":-0.16},{"Year":1915,"temperature":-0.12},{"Year":1916,"temperature":-0.33},{"Year":1917,"temperature":-0.44},{"Year":1918,"temperature":-0.28},{"Year":1919,"temperature":-0.27},{"Year":1920,"temperature":-0.26},{"Year":1921,"temperature":-0.18},{"Year":1922,"temperature":-0.27},{"Year":1923,"temperature":-0.25},{"Year":1924,"temperature":-0.25},{"Year":1925,"temperature":-0.21},{"Year":1926,"temperature":-0.09},{"Year":1927,"temperature":-0.21},{"Year":1928,"temperature":-0.19},{"Year":1929,"temperature":-0.35},{"Year":1930,"temperature":-0.15},{"Year":1931,"temperature":-0.1},{"Year":1932,"temperature":-0.17},{"Year":1933,"temperature":-0.3},{"Year":1934,"temperature":-0.14},{"Year":1935,"temperature":-0.21},{"Year":1936,"temperature":-0.16},{"Year":1937,"temperature":-0.04},{"Year":1938,"temperature":-0.04},{"Year":1939,"temperature":-0.03},{"Year":1940,"temperature":0.11},{"Year":1941,"temperature":0.18},{"Year":1942,"temperature":0.05},{"Year":1943,"temperature":0.07},{"Year":1944,"temperature":0.2},{"Year":1945,"temperature":0.08},{"Year":1946,"temperature":-0.07},{"Year":1947,"temperature":-0.04},{"Year":1948,"temperature":-0.11},{"Year":1949,"temperature":-0.11},{"Year":1950,"temperature":-0.18},{"Year":1951,"temperature":-0.07},{"Year":1952,"temperature":0.01},{"Year":1953,"temperature":0.07},{"Year":1954,"temperature":-0.15},{"Year":1955,"temperature":-0.14},{"Year":1956,"temperature":-0.21},{"Year":1957,"temperature":0.04},{"Year":1958,"temperature":0.07},{"Year":1959,"temperature":0.03},{"Year":1960,"temperature":-0.02},{"Year":1961,"temperature":0.05},{"Year":1962,"temperature":0.04},{"Year":1963,"temperature":0.07},{"Year":1964,"temperature":-0.2},{"Year":1965,"temperature":-0.1},{"Year":1966,"temperature":-0.05},{"Year":1967,"temperature":-0.02},{"Year":1968,"temperature":-0.07},{"Year":1969,"temperature":0.07},{"Year":1970,"temperature":0.03},{"Year":1971,"temperature":-0.09},{"Year":1972,"temperature":0.01},{"Year":1973,"temperature":0.16},{"Year":1974,"temperature":-0.08},{"Year":1975,"temperature":-0.02},{"Year":1976,"temperature":-0.11},{"Year":1977,"temperature":0.17},{"Year":1978,"temperature":0.06},{"Year":1979,"temperature":0.16},{"Year":1980,"temperature":0.27},{"Year":1981,"temperature":0.33},{"Year":1982,"temperature":0.13},{"Year":1983,"temperature":0.31},{"Year":1984,"temperature":0.16},{"Year":1985,"temperature":0.12},{"Year":1986,"temperature":0.18},{"Year":1987,"temperature":0.33},{"Year":1988,"temperature":0.41},{"Year":1989,"temperature":0.28},{"Year":1990,"temperature":0.44},{"Year":1991,"temperature":0.41},{"Year":1992,"temperature":0.22},{"Year":1993,"temperature":0.24},{"Year":1994,"temperature":0.31},{"Year":1995,"temperature":0.45},{"Year":1996,"temperature":0.34},{"Year":1997,"temperature":0.47},{"Year":1998,"temperature":0.62},{"Year":1999,"temperature":0.4},{"Year":2000,"temperature":0.4},{"Year":2001,"temperature":0.53},{"Year":2002,"temperature":0.62},{"Year":2003,"temperature":0.61},{"Year":2004,"temperature":0.53},{"Year":2005,"temperature":0.67},{"Year":2006,"temperature":0.62},{"Year":2007,"temperature":0.64},{"Year":2008,"temperature":0.52},{"Year":2009,"temperature":0.63},{"Year":2010,"temperature":0.7},{"Year":2011,"temperature":0.59},{"Year":2012,"temperature":0.62},{"Year":2013,"temperature":0.65},{"Year":2014,"temperature":0.73},{"Year":2015,"temperature":0.87},{"Year":2016,"temperature":0.99},{"Year":2017,"temperature":0.91},{"Year":2018,"temperature":0.83}
] ;
//check we have 139 years
console.log(data.length)

//select the var container to start adding new elements to it

var container = document.querySelector ('.chart');

//start a loop to add one new element per entry
data.forEach( function (entry) {
 
 //elements are always added in two steps
  var stripe = document.createElement('div');
container.appendChild(stripe);
  
 //give the new element a class 
stripe.className = 'stripe';
  
  var color = '';
  
  // dark blue: temperatures under -0.5
  // light blue: temperatue under -0.25
  // grey: temperature is between -0.25 and +0.25
  // light red: temperature is above 0.25 
  // dark red: temperature is above 0.5
  
  var colorScale = chroma.scale('RdBu').domain([1, -1]);
  color = colorScale(entry.temperature);
  
  stripe.style['background-color'] = color;
  } );