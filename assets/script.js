const file = new XMLHttpRequest();
file.open("GET", "imdbpolls.json");
file.send();
file.onreadystatechange = function () {
  var pollyears = []
  var polls2019 = 0
  var polls2019Months = []
  var polls2020 = 0
  var polls2020Months = []
  var polls2021 = 0
  var polls2021Months = []

  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(file.responseText)

    var totalPolls = mydata.totalpolls
    var totalVotes = mydata.totalvotes
    var lastUpdated = mydata.lastupdated
    var totalHomepagePolls = mydata.totalhomepagepolls
    var highestVote = 0
    var highestVotedPoll;
    var highestVotedPollURL;
    var lowestVote = Number.MAX_VALUE;
    var lowestVotedPoll;
    var lowestVotedPollURL;
    var onek = 0
    var fivek = 0
    var tenk = 0
    var firstpolldate = new Date()
    var lastpolldate = new Date(0);

    $('#cardtotalpolls').html(totalPolls)
    $('#cardtotalvotes').html(totalVotes)
    $('#cardtotalhp').html(totalHomepagePolls)
    $('#avgvotes').html(Math.round(totalVotes / totalPolls))

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

    var dates = []
    for (var i = 0; i < mydata.polls.length; i++) {

      dates.push(mydata.polls[i].date)
      if (new Date(firstpolldate) > new Date(mydata.polls[i].date)) {
        firstpolldate = mydata.polls[i].date
        $('#firstpolldate').html(new Date(firstpolldate).toDateString())
      }
      if (new Date(lastpolldate) < new Date(mydata.polls[i].date)) {
        lastpolldate = mydata.polls[i].date
        $('#lastpolldate').html(new Date(lastpolldate).toDateString())
        var latestPoll = mydata.polls[i];
        $('#latest-poll .card-header span').html(new Date(latestPoll.date).toDateString())
        $('#latest-poll .card-title').html(latestPoll.title)
        $('#latest-poll .card-text span').html(latestPoll.votes)
        $('#latest-poll a').attr("href", latestPoll.url)
      }
      const oneDay = 24 * 60 * 60 * 1000;
      var pollingdays = Math.round(Math.abs((new Date(firstpolldate) - new Date(lastpolldate)) / oneDay));
      $('#avgvotesdaily').html(Math.round(totalVotes / pollingdays))

      if (mydata.polls[i].votes >= 1000) {
        onek = onek + 1
      }
      if (mydata.polls[i].votes >= 5000) {
        fivek = fivek + 1
      }
      if (mydata.polls[i].votes >= 10000) {
        tenk = tenk + 1
      }
      var mf = 1;
      var m = 0;
      var mostpollitem;
      for (var i = 0; i < dates.length; i++) {
        for (var j = i; j < dates.length; j++) {
          if (dates[i] == dates[j])
            m++;
          if (mf < m) {
            mf = m;
            mostpollitem = dates[i];
          }
        }
        m = 0;
      }
      if (highestVote < mydata.polls[i].votes) {
        highestVote = mydata.polls[i].votes
        highestVotedPoll = mydata.polls[i].title
        highestVotedPollURL = mydata.polls[i].url
      }
      if (lowestVote >= mydata.polls[i].votes) {
        lowestVote = mydata.polls[i].votes
        lowestVotedPoll = mydata.polls[i].title
        lowestVotedPollURL = mydata.polls[i].url
      }
      $('#mostpollsinaday').html(mf)
      $('#daywithmostpolls').html(new Date(mostpollitem).toDateString())
      $('#1kvotes').html(onek)
      $('#5kvotes').html(fivek)
      $('#10kvotes').html(tenk)
      $('#maxvotes').html(highestVote)
      $('#minvotes').html(lowestVote)
      $('#highestvotedpoll .card-title').html(highestVotedPoll)
      $('#highestvotedpoll .card-header a').attr("href", highestVotedPollURL)
      $('#lowestvotedpoll .card-title').html(lowestVotedPoll)
      $('#lowestvotedpoll .card-header a').attr("href", lowestVotedPollURL)

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

      var row = document.createElement('tr')
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
        link.target = '_blank'
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
    var foot1 = document.createTextNode('Total')
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
        ],
        "lengthMenu": [
          [10, 25, 50, 100, -1],
          [10, 25, 50, 100, "All"]
        ]
      });

      var select = document.querySelectorAll('#imdbpolls_length select')
      var search = document.querySelectorAll('#imdbpolls_filter input')
      var sorting = document.querySelectorAll('#imdbpolls thead .sorting')
      var paginate = document.querySelectorAll('#imdbpolls_paginate')

      tableTotal()
      $(select).on('change', function () {
        tableTotal()
      })
      $(search).on('input', function () {
        tableTotal()
      })
      $(sorting).on('click', function () {
        tableTotal()
      })
      $(paginate).on('click', function () {
        tableTotal()
      })

      function tableTotal() {
        var row = document.querySelectorAll('#imdbpolls tbody tr')
        var votesresult = 0;
        var hpresult = 0;
        for (var i = 0; i < row.length; i++) {
          if (row[i].querySelectorAll('td')[0].classList.contains('dataTables_empty')) {} else {
            votesresult += parseInt(row[i].querySelectorAll('td')[3].innerHTML)
            if ((row[i].querySelectorAll('td')[4].innerHTML).toLowerCase() == "yes") {
              hpresult = hpresult + 1
            }
          }
        }
        $('#tabletotalvotes').html(votesresult)
        $('#tabletotalHomepagePolls').html(hpresult)
      }
    });


    // ====================================================
    // ==================== STATISTICS ====================
    // ====================================================
    //Default Settings
    //Chart.defaults.elements.bar.borderWidth = 0;
    Chart.defaults.plugins.tooltip.displayColors = false;
    Chart.defaults.plugins.tooltip.intersect = false;
    Chart.defaults.plugins.tooltip.padding = '10';
    Chart.defaults.plugins.tooltip.footerMarginTop = 15;

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

    // ===== MILESTONES =====
    var m1 = Math.ceil(totalPolls / 50) * 50;
    $('#m1Text').html(((totalPolls / m1) * 100).toFixed(2) + '%')
    const milestoneOne = {
      labels: ['Polls Published', 'Polls needed to reach next milestone'],
      datasets: [{
        backgroundColor: ['#0dcaf0', '#212529'],
        borderWidth: '0',
        data: [totalPolls, (m1 - totalPolls)],
      }]
    };
    var m2 = Math.ceil(totalVotes / 50000) * 50000;
    $('#m2Text').html(((totalVotes / m2) * 100).toFixed(2) + '%')
    const milestoneTwo = {
      labels: ['Votes Gained', 'Votes needed to reach next milestone'],
      datasets: [{
        backgroundColor: ['#0dcaf0', '#212529'],
        borderWidth: '0',
        data: [totalVotes, (m2 - totalVotes)],
      }]
    };
    var m3 = Math.ceil(totalHomepagePolls / 10) * 10;
    $('#m3Text').html(((totalHomepagePolls / m3) * 100).toFixed(2) + '%')
    const milestoneThree = {
      labels: ['Featured Polls', 'More features needed'],
      datasets: [{
        backgroundColor: ['#0dcaf0', '#212529'],
        borderWidth: '0',
        data: [totalHomepagePolls, (m3 - totalHomepagePolls)],
      }]
    };
    var m4 = Math.ceil(highestVote / 5000) * 5000;
    $('#m4Text').html(((highestVote / m4) * 100).toFixed(2) + '%')
    const milestoneFour = {
      labels: ['Highest Vote', 'Votes needed to reach next milestone'],
      datasets: [{
        backgroundColor: ['#0dcaf0', '#212529'],
        borderWidth: '0',
        data: [highestVote, (m4 - highestVote)],
      }]
    };

    const milestoneChartOne = {
      type: 'doughnut',
      data: milestoneOne,
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              footer: function () {
                return 'Next Milestone: ' + m1
              },
            }
          }
        }
      }
    };
    const milestoneChartTwo = {
      type: 'doughnut',
      data: milestoneTwo,
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              footer: function () {
                return 'Next Milestone: ' + m2
              },
            }
          }
        }
      }
    };
    const milestoneChartThree = {
      type: 'doughnut',
      data: milestoneThree,
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              footer: function () {
                return 'Next Milestone: ' + m3
              },
            }
          }
        }
      }
    };
    const milestoneChartFour = {
      type: 'doughnut',
      data: milestoneFour,
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              footer: function () {
                return 'Next Milestone: ' + m4 + '\nHighest Voted Poll: ' + highestVotedPoll
              },
            }
          }
        }
      }
    };
    // ===== STATISTICS =====
    const dataOne = {
      labels: Object.keys(pollineachyear),
      datasets: [{
        backgroundColor: 'rgb(25, 135, 84,.5)',
        borderColor: '#198754',
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
      type: 'line',
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
      document.getElementById('milestoneOne'),
      milestoneChartOne
    );
    new Chart(
      document.getElementById('milestoneTwo'),
      milestoneChartTwo
    );
    new Chart(
      document.getElementById('milestoneThree'),
      milestoneChartThree
    );
    new Chart(
      document.getElementById('milestoneFour'),
      milestoneChartFour
    );
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