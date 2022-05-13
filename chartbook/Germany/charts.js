var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'multiChart',
            height: 450,
            margin: {
                top: 30,
                right: 60,
                bottom: 50,
                left: 70
            },
            color: d3.scale.category10().range(),
            duration: 500,
            yAxis1: {
                tickFormat: function (d) {
                    return d3.format(',.1f')(d);
                }
            },
            interpolate: false,
            legend: {
                align: false,
                height: 200,
                margin: {
                    top: 10,
                    bottom: 25,
                }
            },
        }
    };

    //insert data
$scope.data0 = [{key: 'Overall Income Inequality', type: 'line', values: [{'x': 1962.0, 'y': 28.82653877, 'series': 0}, {'x': 1969.0, 'y': 25.47002398, 'series': 0}, {'x': 1973.0, 'y': 24.49268585, 'series': 0}, {'x': 1978.0, 'y': 24.41370903, 'series': 0}, {'x': 1983.0, 'y': 24.7, 'series': 0}, {'x': 1984.0, 'y': 25.2, 'series': 0}, {'x': 1985.0, 'y': 24.0, 'series': 0}, {'x': 1986.0, 'y': 23.9, 'series': 0}, {'x': 1987.0, 'y': 23.6, 'series': 0}, {'x': 1988.0, 'y': 24.2, 'series': 0}, {'x': 1989.0, 'y': 24.5, 'series': 0}, {'x': 1990.0, 'y': 24.8, 'series': 0}, {'x': 1991.0, 'y': 24.8, 'series': 0}, {'x': 1992.0, 'y': 25.2, 'series': 0}, {'x': 1993.0, 'y': 25.3, 'series': 0}, {'x': 1994.0, 'y': 26.0, 'series': 0}, {'x': 1995.0, 'y': 25.5, 'series': 0}, {'x': 1996.0, 'y': 25.0, 'series': 0}, {'x': 1997.0, 'y': 25.0, 'series': 0}, {'x': 1998.0, 'y': 25.0, 'series': 0}, {'x': 1999.0, 'y': 24.9, 'series': 0}, {'x': 2000.0, 'y': 25.5, 'series': 0}, {'x': 2001.0, 'y': 25.7, 'series': 0}, {'x': 2002.0, 'y': 26.8, 'series': 0}, {'x': 2003.0, 'y': 26.9, 'series': 0}, {'x': 2004.0, 'y': 27.4, 'series': 0}, {'x': 2005.0, 'y': 28.8, 'series': 0}, {'x': 2006.0, 'y': 28.5, 'series': 0}, {'x': 2007.0, 'y': 28.6, 'series': 0}, {'x': 2008.0, 'y': 28.3, 'series': 0}, {'x': 2009.0, 'y': 28.3, 'series': 0}, {'x': 2010.0, 'y': 28.0, 'series': 0}, {'x': 2011.0, 'y': 28.6, 'series': 0}, {'x': 2012.0, 'y': 28.8, 'series': 0}], yAxis: 1}, {key: 'Becker (1997) - Equivalised disposable household income', type: 'scatter', values: [{'x': 1962.0, 'y': 29.2, 'series': 1}, {'x': 1969.0, 'y': 25.8, 'series': 1}, {'x': 1973.0, 'y': 24.81, 'series': 1}, {'x': 1978.0, 'y': 24.73, 'series': 1}, {'x': 1983.0, 'y': 25.02, 'series': 1}, {'x': 2012.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'SOEP - Equivalised disposable household income', type: 'scatter', values: [{'x': 1962.0, 'y': null, 'series': 0}, {'x': 1983.0, 'y': 24.7, 'series': 2}, {'x': 1984.0, 'y': 25.2, 'series': 2}, {'x': 1985.0, 'y': 24.0, 'series': 2}, {'x': 1986.0, 'y': 23.9, 'series': 2}, {'x': 1987.0, 'y': 23.6, 'series': 2}, {'x': 1988.0, 'y': 24.2, 'series': 2}, {'x': 1989.0, 'y': 24.5, 'series': 2}, {'x': 1990.0, 'y': 24.8, 'series': 2}, {'x': 1991.0, 'y': 24.8, 'series': 2}, {'x': 1992.0, 'y': 25.2, 'series': 2}, {'x': 1993.0, 'y': 25.3, 'series': 2}, {'x': 1994.0, 'y': 26.0, 'series': 2}, {'x': 1995.0, 'y': 25.5, 'series': 2}, {'x': 1996.0, 'y': 25.0, 'series': 2}, {'x': 1997.0, 'y': 25.0, 'series': 2}, {'x': 1998.0, 'y': 25.0, 'series': 2}, {'x': 1999.0, 'y': 24.9, 'series': 2}, {'x': 2000.0, 'y': 25.5, 'series': 2}, {'x': 2001.0, 'y': 25.7, 'series': 2}, {'x': 2002.0, 'y': 26.8, 'series': 2}, {'x': 2003.0, 'y': 26.9, 'series': 2}, {'x': 2004.0, 'y': 27.4, 'series': 2}, {'x': 2005.0, 'y': 28.8, 'series': 2}, {'x': 2006.0, 'y': 28.5, 'series': 2}, {'x': 2007.0, 'y': 28.6, 'series': 2}, {'x': 2008.0, 'y': 28.3, 'series': 2}, {'x': 2009.0, 'y': 28.3, 'series': 2}, {'x': 2010.0, 'y': 28.0, 'series': 2}, {'x': 2011.0, 'y': 28.6, 'series': 2}, {'x': 2012.0, 'y': 28.8, 'series': 2}], yAxis: 1}]; 
$scope.data1 = [{key: 'Top Income Shares', type: 'line', values: [{'x': 1900.0, 'y': 17.17, 'series': 0}, {'x': 1901.0, 'y': 16.94, 'series': 0}, {'x': 1902.0, 'y': 16.46, 'series': 0}, {'x': 1903.0, 'y': 16.38, 'series': 0}, {'x': 1904.0, 'y': 16.49, 'series': 0}, {'x': 1905.0, 'y': 16.81, 'series': 0}, {'x': 1906.0, 'y': 16.79, 'series': 0}, {'x': 1907.0, 'y': 16.64, 'series': 0}, {'x': 1908.0, 'y': 16.22, 'series': 0}, {'x': 1909.0, 'y': 16.03, 'series': 0}, {'x': 1910.0, 'y': 16.14, 'series': 0}, {'x': 1911.0, 'y': 16.03, 'series': 0}, {'x': 1912.0, 'y': 16.11, 'series': 0}, {'x': 1913.0, 'y': 16.71, 'series': 0}, {'x': 1914.0, 'y': 16.97, 'series': 0}, {'x': 1915.0, 'y': 18.74, 'series': 0}, {'x': 1916.0, 'y': 20.23, 'series': 0}, {'x': 1917.0, 'y': 21.27, 'series': 0}, {'x': 1918.0, 'y': 18.58, 'series': 0}, {'x': 1925.0, 'y': 10.22, 'series': 0}, {'x': 1926.0, 'y': 10.16, 'series': 0}, {'x': 1927.0, 'y': 10.42, 'series': 0}, {'x': 1928.0, 'y': 10.11, 'series': 0}, {'x': 1929.0, 'y': 10.09, 'series': 0}, {'x': 1932.0, 'y': 10.22, 'series': 0}, {'x': 1933.0, 'y': 9.87, 'series': 0}, {'x': 1934.0, 'y': 10.05, 'series': 0}, {'x': 1935.0, 'y': 10.95, 'series': 0}, {'x': 1936.0, 'y': 12.37, 'series': 0}, {'x': 1937.0, 'y': 13.56, 'series': 0}, {'x': 1938.0, 'y': 14.54, 'series': 0}, {'x': 1949.0, 'y': 8.72, 'series': 0}, {'x': 1950.0, 'y': 9.2, 'series': 0}, {'x': 1954.0, 'y': 8.66, 'series': 0}, {'x': 1957.0, 'y': 10.14, 'series': 0}, {'x': 1961.0, 'y': 11.87, 'series': 0}, {'x': 1965.0, 'y': 11.2, 'series': 0}, {'x': 1968.0, 'y': 10.25, 'series': 0}, {'x': 1971.0, 'y': 10.35, 'series': 0}, {'x': 1974.0, 'y': 9.24, 'series': 0}, {'x': 1977.0, 'y': 9.37, 'series': 0}, {'x': 1980.0, 'y': 9.84, 'series': 0}, {'x': 1981.0, 'y': 9.4, 'series': 0}, {'x': 1982.0, 'y': 9.2, 'series': 0}, {'x': 1983.0, 'y': 9.39, 'series': 0}, {'x': 1984.0, 'y': 9.43, 'series': 0}, {'x': 1985.0, 'y': 9.56, 'series': 0}, {'x': 1986.0, 'y': 9.97, 'series': 0}, {'x': 1987.0, 'y': 10.4, 'series': 0}, {'x': 1988.0, 'y': 11.28, 'series': 0}, {'x': 1989.0, 'y': 11.78, 'series': 0}, {'x': 1990.0, 'y': 11.45, 'series': 0}, {'x': 1991.0, 'y': 10.32, 'series': 0}, {'x': 1992.0, 'y': 9.63, 'series': 0}, {'x': 1993.0, 'y': 9.22, 'series': 0}, {'x': 1994.0, 'y': 8.93, 'series': 0}, {'x': 1995.0, 'y': 8.77, 'series': 0}, {'x': 1996.0, 'y': 9.54, 'series': 0}, {'x': 1997.0, 'y': 10.22, 'series': 0}, {'x': 1998.0, 'y': 10.98, 'series': 0}, {'x': 1999.0, 'y': 10.64, 'series': 0}, {'x': 2000.0, 'y': 10.47, 'series': 0}, {'x': 2001.0, 'y': 10.29, 'series': 0}, {'x': 2002.0, 'y': 10.08, 'series': 0}, {'x': 2003.0, 'y': 9.46, 'series': 0}, {'x': 2004.0, 'y': 10.59, 'series': 0}, {'x': 2005.0, 'y': 12.06, 'series': 0}, {'x': 2006.0, 'y': 12.73, 'series': 0}, {'x': 2007.0, 'y': 13.61, 'series': 0}, {'x': 2008.0, 'y': 13.45, 'series': 0}, {'x': 2009.0, 'y': 12.97, 'series': 0}, {'x': 2010.0, 'y': 12.86, 'series': 0}, {'x': 2011.0, 'y': 12.79, 'series': 0}, {'x': 2012.0, 'y': 12.58, 'series': 0}, {'x': 2013.0, 'y': 13.1, 'series': 0}, {'x': 2014.0, 'y': 13.25, 'series': 0}, {'x': 2015.0, 'y': 13.26, 'series': 0}, {'x': 2016.0, 'y': 13.25, 'series': 0}, {'x': 2017.0, 'y': 13.17, 'series': 0}, {'x': 2018.0, 'y': 12.94, 'series': 0}, {'x': 2019.0, 'y': 12.87, 'series': 0}], yAxis: 1}, {key: 'WID - Pre-tax national income (equal-split adult)', type: 'scatter', values: [{'x': 1900.0, 'y': 17.17, 'series': 1}, {'x': 1901.0, 'y': 16.94, 'series': 1}, {'x': 1902.0, 'y': 16.46, 'series': 1}, {'x': 1903.0, 'y': 16.38, 'series': 1}, {'x': 1904.0, 'y': 16.49, 'series': 1}, {'x': 1905.0, 'y': 16.81, 'series': 1}, {'x': 1906.0, 'y': 16.79, 'series': 1}, {'x': 1907.0, 'y': 16.64, 'series': 1}, {'x': 1908.0, 'y': 16.22, 'series': 1}, {'x': 1909.0, 'y': 16.03, 'series': 1}, {'x': 1910.0, 'y': 16.14, 'series': 1}, {'x': 1911.0, 'y': 16.03, 'series': 1}, {'x': 1912.0, 'y': 16.11, 'series': 1}, {'x': 1913.0, 'y': 16.71, 'series': 1}, {'x': 1914.0, 'y': 16.97, 'series': 1}, {'x': 1915.0, 'y': 18.74, 'series': 1}, {'x': 1916.0, 'y': 20.23, 'series': 1}, {'x': 1917.0, 'y': 21.27, 'series': 1}, {'x': 1918.0, 'y': 18.58, 'series': 1}, {'x': 1925.0, 'y': 10.22, 'series': 1}, {'x': 1926.0, 'y': 10.16, 'series': 1}, {'x': 1927.0, 'y': 10.42, 'series': 1}, {'x': 1928.0, 'y': 10.11, 'series': 1}, {'x': 1929.0, 'y': 10.09, 'series': 1}, {'x': 1932.0, 'y': 10.22, 'series': 1}, {'x': 1933.0, 'y': 9.87, 'series': 1}, {'x': 1934.0, 'y': 10.05, 'series': 1}, {'x': 1935.0, 'y': 10.95, 'series': 1}, {'x': 1936.0, 'y': 12.37, 'series': 1}, {'x': 1937.0, 'y': 13.56, 'series': 1}, {'x': 1938.0, 'y': 14.54, 'series': 1}, {'x': 1949.0, 'y': 8.72, 'series': 1}, {'x': 1950.0, 'y': 9.2, 'series': 1}, {'x': 1954.0, 'y': 8.66, 'series': 1}, {'x': 1957.0, 'y': 10.14, 'series': 1}, {'x': 1961.0, 'y': 11.87, 'series': 1}, {'x': 1965.0, 'y': 11.2, 'series': 1}, {'x': 1968.0, 'y': 10.25, 'series': 1}, {'x': 1971.0, 'y': 10.35, 'series': 1}, {'x': 1974.0, 'y': 9.24, 'series': 1}, {'x': 1977.0, 'y': 9.37, 'series': 1}, {'x': 1980.0, 'y': 9.84, 'series': 1}, {'x': 1981.0, 'y': 9.4, 'series': 1}, {'x': 1982.0, 'y': 9.2, 'series': 1}, {'x': 1983.0, 'y': 9.39, 'series': 1}, {'x': 1984.0, 'y': 9.43, 'series': 1}, {'x': 1985.0, 'y': 9.56, 'series': 1}, {'x': 1986.0, 'y': 9.97, 'series': 1}, {'x': 1987.0, 'y': 10.4, 'series': 1}, {'x': 1988.0, 'y': 11.28, 'series': 1}, {'x': 1989.0, 'y': 11.78, 'series': 1}, {'x': 1990.0, 'y': 11.45, 'series': 1}, {'x': 1991.0, 'y': 10.32, 'series': 1}, {'x': 1992.0, 'y': 9.63, 'series': 1}, {'x': 1993.0, 'y': 9.22, 'series': 1}, {'x': 1994.0, 'y': 8.93, 'series': 1}, {'x': 1995.0, 'y': 8.77, 'series': 1}, {'x': 1996.0, 'y': 9.54, 'series': 1}, {'x': 1997.0, 'y': 10.22, 'series': 1}, {'x': 1998.0, 'y': 10.98, 'series': 1}, {'x': 1999.0, 'y': 10.64, 'series': 1}, {'x': 2000.0, 'y': 10.47, 'series': 1}, {'x': 2001.0, 'y': 10.29, 'series': 1}, {'x': 2002.0, 'y': 10.08, 'series': 1}, {'x': 2003.0, 'y': 9.46, 'series': 1}, {'x': 2004.0, 'y': 10.59, 'series': 1}, {'x': 2005.0, 'y': 12.06, 'series': 1}, {'x': 2006.0, 'y': 12.73, 'series': 1}, {'x': 2007.0, 'y': 13.61, 'series': 1}, {'x': 2008.0, 'y': 13.45, 'series': 1}, {'x': 2009.0, 'y': 12.97, 'series': 1}, {'x': 2010.0, 'y': 12.86, 'series': 1}, {'x': 2011.0, 'y': 12.79, 'series': 1}, {'x': 2012.0, 'y': 12.58, 'series': 1}, {'x': 2013.0, 'y': 13.1, 'series': 1}, {'x': 2014.0, 'y': 13.25, 'series': 1}, {'x': 2015.0, 'y': 13.26, 'series': 1}, {'x': 2016.0, 'y': 13.25, 'series': 1}, {'x': 2017.0, 'y': 13.17, 'series': 1}, {'x': 2018.0, 'y': 12.94, 'series': 1}, {'x': 2019.0, 'y': 12.87, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [{key: 'Poverty', type: 'line', values: [{'x': 1962.0, 'y': 16.65714286, 'series': 0}, {'x': 1969.0, 'y': 11.15714286, 'series': 0}, {'x': 1973.0, 'y': 10.21428571, 'series': 0}, {'x': 1978.0, 'y': 10.21428571, 'series': 0}, {'x': 1983.0, 'y': 12.1, 'series': 0}, {'x': 1984.0, 'y': 12.6, 'series': 0}, {'x': 1985.0, 'y': 11.6, 'series': 0}, {'x': 1986.0, 'y': 11.0, 'series': 0}, {'x': 1987.0, 'y': 10.4, 'series': 0}, {'x': 1988.0, 'y': 11.5, 'series': 0}, {'x': 1989.0, 'y': 10.6, 'series': 0}, {'x': 1990.0, 'y': 11.2, 'series': 0}, {'x': 1991.0, 'y': 11.1, 'series': 0}, {'x': 1992.0, 'y': 11.9, 'series': 0}, {'x': 1993.0, 'y': 11.6, 'series': 0}, {'x': 1994.0, 'y': 12.8, 'series': 0}, {'x': 1995.0, 'y': 12.0, 'series': 0}, {'x': 1996.0, 'y': 10.8, 'series': 0}, {'x': 1997.0, 'y': 10.5, 'series': 0}, {'x': 1998.0, 'y': 10.4, 'series': 0}, {'x': 1999.0, 'y': 10.6, 'series': 0}, {'x': 2000.0, 'y': 11.5, 'series': 0}, {'x': 2001.0, 'y': 12.2, 'series': 0}, {'x': 2002.0, 'y': 13.0, 'series': 0}, {'x': 2003.0, 'y': 13.0, 'series': 0}, {'x': 2004.0, 'y': 13.9, 'series': 0}, {'x': 2005.0, 'y': 14.0, 'series': 0}, {'x': 2006.0, 'y': 14.0, 'series': 0}, {'x': 2007.0, 'y': 14.2, 'series': 0}, {'x': 2008.0, 'y': 14.5, 'series': 0}, {'x': 2009.0, 'y': 15.2, 'series': 0}, {'x': 2010.0, 'y': 14.2, 'series': 0}, {'x': 2011.0, 'y': 14.4, 'series': 0}, {'x': 2012.0, 'y': 14.4, 'series': 0}], yAxis: 1}, {key: 'Becker (1997) - Equivalised disposable household income', type: 'scatter', values: [{'x': 1962.0, 'y': 10.6, 'series': 1}, {'x': 1969.0, 'y': 7.1, 'series': 1}, {'x': 1973.0, 'y': 6.5, 'series': 1}, {'x': 1978.0, 'y': 6.5, 'series': 1}, {'x': 1983.0, 'y': 7.7, 'series': 1}, {'x': 1988.0, 'y': 8.8, 'series': 1}, {'x': 2012.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'SOEP - Equivalised disposable household income', type: 'scatter', values: [{'x': 1962.0, 'y': null, 'series': 0}, {'x': 1983.0, 'y': 12.1, 'series': 2}, {'x': 1984.0, 'y': 12.6, 'series': 2}, {'x': 1985.0, 'y': 11.6, 'series': 2}, {'x': 1986.0, 'y': 11.0, 'series': 2}, {'x': 1987.0, 'y': 10.4, 'series': 2}, {'x': 1988.0, 'y': 11.5, 'series': 2}, {'x': 1989.0, 'y': 10.6, 'series': 2}, {'x': 1990.0, 'y': 11.2, 'series': 2}, {'x': 1991.0, 'y': 11.1, 'series': 2}, {'x': 1992.0, 'y': 11.9, 'series': 2}, {'x': 1993.0, 'y': 11.6, 'series': 2}, {'x': 1994.0, 'y': 12.8, 'series': 2}, {'x': 1995.0, 'y': 12.0, 'series': 2}, {'x': 1996.0, 'y': 10.8, 'series': 2}, {'x': 1997.0, 'y': 10.5, 'series': 2}, {'x': 1998.0, 'y': 10.4, 'series': 2}, {'x': 1999.0, 'y': 10.6, 'series': 2}, {'x': 2000.0, 'y': 11.5, 'series': 2}, {'x': 2001.0, 'y': 12.2, 'series': 2}, {'x': 2002.0, 'y': 13.0, 'series': 2}, {'x': 2003.0, 'y': 13.0, 'series': 2}, {'x': 2004.0, 'y': 13.9, 'series': 2}, {'x': 2005.0, 'y': 14.0, 'series': 2}, {'x': 2006.0, 'y': 14.0, 'series': 2}, {'x': 2007.0, 'y': 14.2, 'series': 2}, {'x': 2008.0, 'y': 14.5, 'series': 2}, {'x': 2009.0, 'y': 15.2, 'series': 2}, {'x': 2010.0, 'y': 14.2, 'series': 2}, {'x': 2011.0, 'y': 14.4, 'series': 2}, {'x': 2012.0, 'y': 14.4, 'series': 2}], yAxis: 1}]; 
$scope.data3 = [{key: 'Earnings Dispersion', type: 'line', values: [{'x': 1949.0, 'y': 159.1678537, 'series': 0}, {'x': 1951.0, 'y': 164.0327848, 'series': 0}, {'x': 1957.0, 'y': 162.7636723, 'series': 0}, {'x': 1962.0, 'y': 163.821266, 'series': 0}, {'x': 1966.0, 'y': 163.6097473, 'series': 0}, {'x': 1972.0, 'y': 160.8600036, 'series': 0}, {'x': 1978.0, 'y': 162.9751911, 'series': 0}, {'x': 1990.0, 'y': 174.4458525, 'series': 0}, {'x': 1992.0, 'y': 174.4956, 'series': 0}, {'x': 1993.0, 'y': 177.8771, 'series': 0}, {'x': 1994.0, 'y': 171.2869, 'series': 0}, {'x': 1995.0, 'y': 174.926, 'series': 0}, {'x': 1996.0, 'y': 177.2727, 'series': 0}, {'x': 1997.0, 'y': 175.0, 'series': 0}, {'x': 1998.0, 'y': 174.7253, 'series': 0}, {'x': 1999.0, 'y': 178.2629, 'series': 0}, {'x': 2000.0, 'y': 177.5707, 'series': 0}, {'x': 2001.0, 'y': 173.928, 'series': 0}, {'x': 2002.0, 'y': 173.9788, 'series': 0}, {'x': 2003.0, 'y': 169.3867, 'series': 0}, {'x': 2004.0, 'y': 175.0, 'series': 0}, {'x': 2005.0, 'y': 171.9626, 'series': 0}, {'x': 2006.0, 'y': 177.8818, 'series': 0}, {'x': 2007.0, 'y': 177.5232, 'series': 0}, {'x': 2008.0, 'y': 178.5334, 'series': 0}, {'x': 2009.0, 'y': 178.8234, 'series': 0}, {'x': 2010.0, 'y': 178.5714, 'series': 0}, {'x': 2011.0, 'y': 186.0534, 'series': 0}, {'x': 2012.0, 'y': 181.248, 'series': 0}, {'x': 2013.0, 'y': 186.4869, 'series': 0}, {'x': 2014.0, 'y': 183.3333, 'series': 0}, {'x': 2015.0, 'y': 190.1639, 'series': 0}, {'x': 2016.0, 'y': 181.5754, 'series': 0}, {'x': 2017.0, 'y': 184.0303, 'series': 0}, {'x': 2018.0, 'y': 186.399, 'series': 0}, {'x': 2019.0, 'y': 184.5938, 'series': 0}], yAxis: 1}, {key: 'Atkinson (2008) - Gross individual earnings', type: 'scatter', values: [{'x': 1949.0, 'y': 150.5, 'series': 1}, {'x': 1951.0, 'y': 155.1, 'series': 1}, {'x': 1957.0, 'y': 153.9, 'series': 1}, {'x': 1962.0, 'y': 154.9, 'series': 1}, {'x': 1966.0, 'y': 154.7, 'series': 1}, {'x': 1972.0, 'y': 152.1, 'series': 1}, {'x': 1978.0, 'y': 154.1, 'series': 1}, {'x': 1990.0, 'y': 164.946, 'series': 1}, {'x': 1995.0, 'y': 165.4, 'series': 1}, {'x': 2019.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'OECD - Gross individual earnings', type: 'scatter', values: [{'x': 1949.0, 'y': null, 'series': 0}, {'x': 1992.0, 'y': 174.4956, 'series': 2}, {'x': 1993.0, 'y': 177.8771, 'series': 2}, {'x': 1994.0, 'y': 171.2869, 'series': 2}, {'x': 1995.0, 'y': 174.926, 'series': 2}, {'x': 1996.0, 'y': 177.2727, 'series': 2}, {'x': 1997.0, 'y': 175.0, 'series': 2}, {'x': 1998.0, 'y': 174.7253, 'series': 2}, {'x': 1999.0, 'y': 178.2629, 'series': 2}, {'x': 2000.0, 'y': 177.5707, 'series': 2}, {'x': 2001.0, 'y': 173.928, 'series': 2}, {'x': 2002.0, 'y': 173.9788, 'series': 2}, {'x': 2003.0, 'y': 169.3867, 'series': 2}, {'x': 2004.0, 'y': 175.0, 'series': 2}, {'x': 2005.0, 'y': 171.9626, 'series': 2}, {'x': 2006.0, 'y': 177.8818, 'series': 2}, {'x': 2007.0, 'y': 177.5232, 'series': 2}, {'x': 2008.0, 'y': 178.5334, 'series': 2}, {'x': 2009.0, 'y': 178.8234, 'series': 2}, {'x': 2010.0, 'y': 178.5714, 'series': 2}, {'x': 2011.0, 'y': 186.0534, 'series': 2}, {'x': 2012.0, 'y': 181.248, 'series': 2}, {'x': 2013.0, 'y': 186.4869, 'series': 2}, {'x': 2014.0, 'y': 183.3333, 'series': 2}, {'x': 2015.0, 'y': 190.1639, 'series': 2}, {'x': 2016.0, 'y': 181.5754, 'series': 2}, {'x': 2017.0, 'y': 184.0303, 'series': 2}, {'x': 2018.0, 'y': 186.399, 'series': 2}, {'x': 2019.0, 'y': 184.5938, 'series': 2}], yAxis: 1}]; 
$scope.data4 = [{key: 'Wealth Inequality', type: 'line', values: [{'x': 1902.0, 'y': 47.24, 'series': 0}, {'x': 1905.0, 'y': 47.66, 'series': 0}, {'x': 1908.0, 'y': 48.2, 'series': 0}, {'x': 1911.0, 'y': 47.21, 'series': 0}, {'x': 1913.0, 'y': 45.53, 'series': 0}, {'x': 1924.0, 'y': 41.38, 'series': 0}, {'x': 1927.0, 'y': 41.06, 'series': 0}, {'x': 1930.0, 'y': 42.39, 'series': 0}, {'x': 1934.0, 'y': 34.22, 'series': 0}, {'x': 1953.0, 'y': 24.58, 'series': 0}, {'x': 1957.0, 'y': 25.46, 'series': 0}, {'x': 1960.0, 'y': 31.69, 'series': 0}, {'x': 1963.0, 'y': 30.58, 'series': 0}, {'x': 1966.0, 'y': 27.74, 'series': 0}, {'x': 1969.0, 'y': 24.51, 'series': 0}, {'x': 1972.0, 'y': 21.45, 'series': 0}, {'x': 1974.0, 'y': 20.07, 'series': 0}, {'x': 1977.0, 'y': 21.14, 'series': 0}, {'x': 1980.0, 'y': 22.15, 'series': 0}, {'x': 1983.0, 'y': 22.73, 'series': 0}, {'x': 1986.0, 'y': 23.69, 'series': 0}, {'x': 1989.0, 'y': 22.95, 'series': 0}, {'x': 1993.0, 'y': 18.98, 'series': 0}, {'x': 1998.0, 'y': 21.99, 'series': 0}, {'x': 2003.0, 'y': 20.92, 'series': 0}, {'x': 2008.0, 'y': 23.16, 'series': 0}, {'x': 2013.0, 'y': 21.53, 'series': 0}, {'x': 2018.0, 'y': 22.86, 'series': 0}], yAxis: 1}, {key: 'Albers, Bartels and Schularick (2020) - Household net wealth', type: 'scatter', values: [{'x': 1902.0, 'y': 47.24, 'series': 1}, {'x': 1905.0, 'y': 47.66, 'series': 1}, {'x': 1908.0, 'y': 48.2, 'series': 1}, {'x': 1911.0, 'y': 47.21, 'series': 1}, {'x': 1913.0, 'y': 45.53, 'series': 1}, {'x': 1924.0, 'y': 41.38, 'series': 1}, {'x': 1927.0, 'y': 41.06, 'series': 1}, {'x': 1930.0, 'y': 42.39, 'series': 1}, {'x': 1934.0, 'y': 34.22, 'series': 1}, {'x': 1953.0, 'y': 24.58, 'series': 1}, {'x': 1957.0, 'y': 25.46, 'series': 1}, {'x': 1960.0, 'y': 31.69, 'series': 1}, {'x': 1963.0, 'y': 30.58, 'series': 1}, {'x': 1966.0, 'y': 27.74, 'series': 1}, {'x': 1969.0, 'y': 24.51, 'series': 1}, {'x': 1972.0, 'y': 21.45, 'series': 1}, {'x': 1974.0, 'y': 20.07, 'series': 1}, {'x': 1977.0, 'y': 21.14, 'series': 1}, {'x': 1980.0, 'y': 22.15, 'series': 1}, {'x': 1983.0, 'y': 22.73, 'series': 1}, {'x': 1986.0, 'y': 23.69, 'series': 1}, {'x': 1989.0, 'y': 22.95, 'series': 1}, {'x': 1993.0, 'y': 18.98, 'series': 1}, {'x': 1998.0, 'y': 21.99, 'series': 1}, {'x': 2003.0, 'y': 20.92, 'series': 1}, {'x': 2008.0, 'y': 23.16, 'series': 1}, {'x': 2013.0, 'y': 21.53, 'series': 1}, {'x': 2018.0, 'y': 22.86, 'series': 1}], yAxis: 1}]
});