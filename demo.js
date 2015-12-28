var NumOfZipCodes = 40;

var NumOfItems = 15;

var twoDimArr = [];



var products = ['Microsoft Surface Book', 'Lenovo ThinkPad W540', 'MSI GT80 Titan SLI',
    'Alienware 15 (with Graphics Amplifier)', 'Gigabyte P37X', 'Apple MacBook Air',
    'HP Pavilion x360 13', 'Dell XPS 13', 'Lenovo ThinkPad X250', 'Lenovo ThinkPad T450s',
    'Toshiba Satellite C55DT', 'Asus Transformer Book T100HA', 'Apple MacBook (2015)',
    'HP Spectre x360', 'Lenovo Yoga 900', 'Microsoft Surface Book', 'Dell Chromebook 13',
    'Asus Chromebook Flip C100', 'Apple iMac with Retina 5K Display', 'Asus Zen AiO Pro Z240IC',
    'Origin Genesis (2015)', 'HP Envy Phoenix', 'MSI 24GE Gaming All-in-One',
    'Lenovo ThinkCentre M83 Tiny in One', 'Dell OptiPlex 9020 Micro', 'Zotac Zbox Magnus EN970',
    'Acer Revo RL85', 'Intel Compute Stick', 'Apple iMac with Retina 5K Display (2015)',
    'Microsoft Surface Pro 4', 'Samsung Galaxy Tab S2 8.0', 'Lenovo Tab 2 A10', 'Dell Venue 10 7000',
    'Apple iPad Pro', 'Asus ZenPad S 8.0', 'Amazon Fire', 'Lenovo Yoga Tablet 2 (8-Inch Windows)',
    'Microsoft Surface Pro 4', 'Amazon Kindle Paperwhite (2015)', "	HP's Instant Ink Line",
    'Canon Maxify iB4020', 'Epson SureColor P800', 'Epson WorkForce Pro WF-5690', 'Epson WorkForce ET-4550 EcoTank',
    'Canon Color ImageClass MF820Cdn', 'OKI B412dn Monochrome Printer', 'OKI MB492 Multifunction Printer',
    'Brother MFC-J6520DW', 'Seagate Backup Plus Desktop Drive (8TB)', 'Seagate Wireless (500GB)',
    'Seagate Backup Plus (4TB)', 'Samsung SSD 850 EVO (2TB)', 'Intel SSD 750 Series', 'Crucial MX200',
    'Seagate Personal Cloud (2-Bay)','QNAP TS-469L', 'D-Link AC3200 Ultra Wi-Fi Router (DIR-890L/R)',
    'Corsair Strafe', 'Logitech G910 Orion Spark', 'Corsair Gaming K65 RGB', 'Roccat Tyon',
    'Cougar 600M Gaming Mouse', 'Logitech MX Master', 'Logitech MX Anywhere 2', 'Dell UltraSharp U3415W',
    'Acer H257HU', 'BenQ XL2730Z', 'Lenovo ThinkPad Stack ', 'Apple iPhone 6s', 'Google Nexus 6P',
    'Apple iPhone, 6s Plus', 'Pebble Time', 'Marshall Kilburn', 'Sennheiser HD 598', 'Olympus Toug,  TG-4',
    'Samsung NX1', 'Olympus PEN E-PL6', 'Canon E, S Rebel T6s', 'Roku 4', 'Nvidia Shield'
];

 

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

for (var i=0; i<NumOfZipCodes; i++) {
    twoDimArr[i] = [];
    for (var j=0; j< NumOfItems; j++) {
        twoDimArr[i][j] = Math.round( getRandomArbitrary(0,1) * 100 );
    }
}
var zipcodes = [];
for (i = 0; i< 20000; i++) {
    zipcodes.push(90000+i);
}

var products_selection = products.slice(0,NumOfItems);
var zipcodes_selection = zipcodes.slice(0,NumOfZipCodes);

var data_arr = [];
for (i = 0; i< twoDimArr.length; i++) {
    //data_arr[i] = [];
    for (j = 0; j< twoDimArr[i].length; j++) {
        console.log(i,j,twoDimArr[i][j]);
        data_arr.push([i , j , twoDimArr[i][j]])
    }
}
console.log(twoDimArr);

    $('#container').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Product Supply per zip code'
        },

        xAxis: {
            categories: zipcodes_selection
        },

        yAxis: {
            categories: products_selection,
            title: null
        },

        colorAxis: {
            //min: 0,
            //minColor: '#FFFFFF',
            //maxColor: Highcharts.getOptions().colors[0]
            stops: [
                [0, '#CC0000'],
                [0.5, '#EEEEEE'],
                [1, '#006600']
            ]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.point.value + ' '+ this.series.yAxis.categories[this.point.y]+'  '+
                    '</b> items <br> available in area with zip code: <b>' + this.series.xAxis.categories[this.point.x] + '</b> ';
            }
        },

        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            //data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
            data : data_arr,
            dataLabels: {
                enabled: false,
                color: '#000000'
            }
        }]

    });
