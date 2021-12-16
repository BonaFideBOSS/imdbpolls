var polls2019 = 0
var polls2019Aug = 0
var polls2019Nov = 0
var polls2019Dec = 0
var polls2020 = 0
var polls2020Jan = 0
var polls2020Feb = 0
var polls2020Mar = 0
var polls2020Apr = 0
var polls2020May = 0
var polls2020Jun = 0
var polls2020Jul = 0
var polls2020Aug = 0
var polls2020Sep = 0
var polls2020Oct = 0
var polls2020Nov = 0
var polls2020Dec = 0
var polls2021 = 0
var polls2021Jan = 0
var polls2021Feb = 0
var polls2021Mar = 0
var polls2021Apr = 0
var polls2021May = 0
var polls2021Jun = 0
var polls2021Jul = 0
var polls2021Aug = 0
var polls2021Sep = 0
var polls2021Oct = 0
var polls2021Nov = 0
var polls2021Dec = 0

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
      var month = mydata.polls[i].date.split('/')[1]
      var day = mydata.polls[i].date.split('/')[2]
      if (year == 2019) {
        polls2019 = polls2019 + 1
        if (month == 08) {
          polls2019Aug = polls2019Aug + 1
        } else if (month == 11) {
          polls2019Nov = polls2019Nov + 1
        } else if (month == 12) {
          polls2019Dec = polls2019Dec + 1
        }
      } else if (year == 2020) {
        if (month == 01) {
          polls2020Jan = polls2020Jan + 1
        } else if (month == 02) {
          polls2020Feb = polls2020Feb + 1
        } else if (month == 03) {
          polls2020Mar = polls2020Mar + 1
        } else if (month == 04) {
          polls2020Apr = polls2020Apr + 1
        } else if (month == 05) {
          polls2020May = polls2020May + 1
        } else if (month == 06) {
          polls2020Jun = polls2020Jun + 1
        } else if (month == 07) {
          polls2020Jul = polls2020Jul + 1
        } else if (month == 08) {
          polls2020Aug = polls2020Aug + 1
        } else if (month == 09) {
          polls2020Sep = polls2020Sep + 1
        } else if (month == 10) {
          polls2020Oct = polls2020Oct + 1
        } else if (month == 11) {
          polls2020Nov = polls2020Nov + 1
        } else if (month == 12) {
          polls2020Dec = polls2020Dec + 1
        }
      } else if (year == 2021) {
        if (month == 01) {
          polls2021Jan = polls2021Jan + 1
        } else if (month == 02) {
          polls2021Feb = polls2021Feb + 1
        } else if (month == 03) {
          polls2021Mar = polls2021Mar + 1
        } else if (month == 04) {
          polls2021Apr = polls2021Apr + 1
        } else if (month == 05) {
          polls2021May = polls2021May + 1
        } else if (month == 06) {
          polls2021Jun = polls2021Jun + 1
        } else if (month == 07) {
          polls2021Jul = polls2021Jul + 1
        } else if (month == 08) {
          polls2021Aug = polls2021Aug + 1
        } else if (month == 09) {
          polls2021Sep = polls2021Sep + 1
        } else if (month == 10) {
          polls2021Oct = polls2021Oct + 1
        } else if (month == 11) {
          polls2021Nov = polls2021Nov + 1
        } else if (month == 12) {
          polls2021Dec = polls2021Dec + 1
        }
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
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const dataOne = {
      labels: months,
      datasets: [{
        label: 'Polls Published in 2019',
        backgroundColor: '#ffc107',
        borderColor: '',
        data: [0, 0, 0, 0, 0, 0, 0, polls2019Aug, 0, 0, polls2019Nov, polls2019Dec],
      }]
    };
    const dataTwo = {
      labels: months,
      datasets: [{
        label: 'Polls Published in 2020',
        backgroundColor: '#0d6efd',
        borderColor: '',
        data: [polls2020Jan, polls2020Feb, polls2020Mar, polls2020Apr, polls2020May, polls2020Jun, polls2020Jul, polls2020Aug, polls2020Sep, polls2020Oct, polls2020Nov, polls2020Dec],
      }]
    };
    const dataThree = {
      labels: months,
      datasets: [{
        label: 'Polls Published in 2021',
        backgroundColor: '#dc3545',
        borderColor: '',
        data: [polls2021Jan, polls2021Feb, polls2021Mar, polls2021Apr, polls2021May, polls2021Jun, polls2021Jul, polls2021Aug, polls2021Sep, polls2021Oct, polls2021Nov, polls2021Dec],
      }]
    };

    const chartOne = {
      type: 'bar',
      data: dataOne,
      options: {}
    };
    const chartTwo = {
      type: 'bar',
      data: dataTwo,
      options: {}
    };
    const chartThree = {
      type: 'bar',
      data: dataThree,
      options: {}
    };

    new Chart(
      document.getElementById('chartOne'),
      chartOne
    );
    new Chart(
      document.getElementById('chartTwo'),
      chartTwo
    );
    new Chart(
      document.getElementById('chartThree'),
      chartThree
    );
  }
}