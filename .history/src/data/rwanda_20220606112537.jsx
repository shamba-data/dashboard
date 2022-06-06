export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        to: "home"
      }
    ]
  },

  {
    title: "Reports",
    links: [
      {
        name: "Food Security",
        to: "foodSecurity"
      },
      {
        name: "Food Availability",
        to: "foodAvailability"
      },
      {
        name: "Major Agriculture Players",
        to: "majorAgriculturePlayers"
      }
    ]
  },
  {
    title: "Custom Data Labelling",
    links: [
      {
        name: "Data Labelling",
        to: "dataLabelling"
      }
    ]
  }
];

export const countryData = [
  {
    title: "Introduction to Rwanda",
    text: `Rwanda is a landlocked country in the Great Lakes region of East Africa. Its 26,338 square kilometers are dominated by highlands,
         giving it the name “Land of A Thousand Hills”. The lowest altitude in the country is 950 m above the sea level and it is estimated that 
         90% of domestic cropland is on slopes ranging from 5% to 55%. Rwanda’s climate is conditioned by its landscape: the lower the altitude, 
         the warmer the temperature. The country experiences a long dry season from June to August with heavy rainfall between March and May.

        With 441 inhabitants per square kilometer, Rwanda had the second highest population density in Africa as of 2015. In the last 10 years 
        the population grew at a rate of 2.6%, and reached an estimated 11.61 million inhabitants in 2015.`
  },

  {
    title: "Agricultural sector general information",
    text: `Agriculture is the main economic activity in Rwanda with 70% of the population engaged in the sector, 
    and around 72% of the working population employed in agriculture. The period for cultivation can be divided 
    into the first cultivable season (from September to January) and the second cultivable season (from February to June).
     In the marshlands, where water is abundant, there is also a third agricultural season for the cultivation of rice and vegetables.

    The agricultural sector accounts for 33% of the national GDP . In general, Rwanda’s GDP has been growing at the rate of 7% since 2014.
     Tea and coffee are the major exports while plantains, cassava, potatoes, sweet potatoes, maize and beans are the most productive crops. 
     Rwanda exports dry beans, potatoes, maize, rice, cassava flour, maize flour, poultry and live animals within Eastern Africa.`
  }
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 }
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 }
  ]
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Coffee",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line"
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line"
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "March",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line"
  }
];
