var pollyears = []
var polls2019 = 0
var polls2019Months = []
var polls2020 = 0
var polls2020Months = []
var polls2021 = 0
var polls2021Months = []

const file = new XMLHttpRequest();
file.open("GET", "imdbpolls.json");
file.send();
file.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(file.responseText)

    var totalPolls = mydata.totalpolls
    var totalVotes = mydata.totalvotes
    var lastUpdated = mydata.lastupdated
    var totalHomepagePolls = mydata.totalhomepagepolls

    $('#cardtotalpolls').html(totalPolls)
    $('#cardtotalvotes').html(totalVotes)
    $('#cardtotalhp').html(totalHomepagePolls)

    var table = document.getElementById('imdbpolls')
    var tableHeader = document.createElement('thead')
    var header = document.createElement('tr')
    var h1 = document.createElement('th')
    var h2 = document.createElement('th')
    var h3 = document.createElement('th')
    var h4 = document.createElement('th')
    var h5 = document.createElement('th')
    var title1 = document.createTextNode('#')
    var title2 = document.createTextNode('Title')
    var title3 = document.createTextNode('Date')
    var title4 = document.createTextNode('Votes')
    var title5 = document.createTextNode('Homepage')
    h1.appendChild(title1)
    h2.appendChild(title2)
    h3.appendChild(title3)
    h4.appendChild(title4)
    h5.appendChild(title5)
    header.appendChild(h1)
    header.appendChild(h2)
    header.appendChild(h3)
    header.appendChild(h4)
    header.appendChild(h5)
    tableHeader.appendChild(header)

    var tableBody = document.createElement('tbody')

    for (var i = 0; i < mydata.polls.length; i++) {
      var row = document.createElement('tr')

      var year = mydata.polls[i].date.split('/')[0]
      var month = mydata.polls[i].date.split('/')[1].replace(/^0+/, '')
      var day = mydata.polls[i].date.split('/')[2].replace(/^0+/, '')
      pollyears.push(year)
      if (year == 2019) {
        polls2019Months.push(month)
      } else if (year == 2020) {
        polls2020Months.push(month)
      } else if (year == 2021) {
        polls2021Months.push(month)
      }

      for (var j = 0; j < 1; j++) {
        var cell1 = document.createElement('td')
        var cell2 = document.createElement('td')
        var cell3 = document.createElement('td')
        var cell4 = document.createElement('td')
        var cell5 = document.createElement('td')

        var rank = document.createTextNode(i + 1)
        var link = document.createElement('a')
        var title = document.createTextNode(mydata.polls[i].title)
        link.appendChild(title)
        link.href = mydata.polls[i].url
        var date = document.createTextNode(mydata.polls[i].date)
        var votes = document.createTextNode(mydata.polls[i].votes)
        var homepage = document.createTextNode(mydata.polls[i].homepage)

        cell1.appendChild(rank)
        cell2.appendChild(link)
        cell3.appendChild(date)
        cell4.appendChild(votes)
        cell5.appendChild(homepage)
        row.appendChild(cell1)
        row.appendChild(cell2)
        row.appendChild(cell3)
        row.appendChild(cell4)
        row.appendChild(cell5)
      }
      tableBody.appendChild(row)
    }

    var tableFooter = document.createElement('tfoot')
    var footer = document.createElement('tr')
    var f1 = document.createElement('th')
    f1.setAttribute("colspan", "3")
    var f2 = document.createElement('th')
    f2.setAttribute("id", "tabletotalvotes")
    var f3 = document.createElement('th')
    f3.setAttribute("id", "tabletotalHomepagePolls")
    var foot1 = document.createTextNode('')
    var foot2 = document.createTextNode('')
    var foot3 = document.createTextNode('')
    f1.appendChild(foot1)
    f2.appendChild(foot2)
    f3.appendChild(foot3)
    footer.appendChild(f1)
    footer.appendChild(f2)
    footer.appendChild(f3)
    tableFooter.appendChild(footer)

    var tableCaption = document.createElement('caption')
    var caption = document.createTextNode('Data as of ' + lastUpdated)
    tableCaption.appendChild(caption)
    table.appendChild(tableHeader)
    table.appendChild(tableBody)
    table.appendChild(tableFooter)
    table.appendChild(tableCaption)

    $(document).ready(function () {
      $(table).DataTable({
        "order": [
          [3, "desc"]
        ]
      });
    });


    // ====================================================
    // ==================== STATISTICS ====================
    // ====================================================
    const monthsOne = {};
    const monthsTwo = {};
    const monthsThree = {};
    const pollineachyear = {};
    polls2019Months.forEach(function (x) {
      monthsOne[x] = (monthsOne[x] || 0) + 1;
    });
    polls2020Months.forEach(function (x) {
      monthsTwo[x] = (monthsTwo[x] || 0) + 1;
    });
    polls2021Months.forEach(function (x) {
      monthsThree[x] = (monthsThree[x] || 0) + 1;
    });
    pollyears.forEach(function (x) {
      pollineachyear[x] = (pollineachyear[x] || 0) + 1;
    });

    Chart.defaults.elements.bar.borderWidth = 0;

    const dataOne = {
      labels: Object.keys(pollineachyear),
      datasets: [{
        backgroundColor: ['#ffc107', '#0d6efd', '#dc3545'],
        borderWidth: '0',
        data: Object.values(pollineachyear),
      }]
    };
    const dataTwo = {
      labels: monthsChecker(Object.keys(monthsOne)),
      datasets: [{
        backgroundColor: '#ffc107',
        data: Object.values(monthsOne),
      }]
    };
    const dataThree = {
      labels: monthsChecker(Object.keys(monthsTwo)),
      datasets: [{
        backgroundColor: '#0d6efd',
        data: Object.values(monthsTwo),
      }]
    };
    const dataFour = {
      labels: monthsChecker(Object.keys(monthsThree)),
      datasets: [{
        backgroundColor: '#dc3545',
        data: Object.values(monthsThree),
      }]
    };

    const yearChart = {
      type: 'pie',
      data: dataOne,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Polls Published Each Year",
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        }
      }
    };
    const monthChartOne = {
      type: 'bar',
      data: dataTwo,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Polls Published in 2019",
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        }
      }
    };
    const monthChartTwo = {
      type: 'bar',
      data: dataThree,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Polls Published in 2020",
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        }
      }
    };
    const monthChartThree = {
      type: 'bar',
      data: dataFour,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Polls Published in 2021",
            font: {
              size: 16
            }
          },
          legend: {
            display: false
          }
        }
      }
    };

    new Chart(
      document.getElementById('YearChart'),
      yearChart
    );
    new Chart(
      document.getElementById('MonthChartOne'),
      monthChartOne
    );
    new Chart(
      document.getElementById('MonthChartTwo'),
      monthChartTwo
    );
    new Chart(
      document.getElementById('MonthChartThree'),
      monthChartThree
    );
  }
}

function monthsChecker(months) {
  const monthsArray = []
  for (var i = 0; i < months.length; i++) {
    switch (months[i]) {
      case '1':
        monthsArray.push('Jan')
        break;
      case '2':
        monthsArray.push('Feb')
        break;
      case '3':
        monthsArray.push('Mar')
        break;
      case '4':
        monthsArray.push('Apr')
        break;
      case '5':
        monthsArray.push('May')
        break;
      case '6':
        monthsArray.push('Jun')
        break;
      case '7':
        monthsArray.push('Jul')
        break;
      case '8':
        monthsArray.push('Aug')
        break;
      case '9':
        monthsArray.push('Sep')
        break;
      case '10':
        monthsArray.push('Oct')
        break;
      case '11':
        monthsArray.push('Nov')
        break;
      case '12':
        monthsArray.push('Dec')
        break;
      default:
        break;
    }
  }
  return monthsArray
}