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
        label: '',
        backgroundColor: '#ffc107',
        borderColor: '',
        data: [0, 0, 0, 0, 0, 0, 0, polls2019Aug, 0, 0, polls2019Nov, polls2019Dec],
      }]
    };
    const dataTwo = {
      labels: months,
      datasets: [{
        label: '',
        backgroundColor: '#0d6efd',
        borderColor: '',
        data: [polls2020Jan, polls2020Feb, polls2020Mar, polls2020Apr, polls2020May, polls2020Jun, polls2020Jul, polls2020Aug, polls2020Sep, polls2020Oct, polls2020Nov, polls2020Dec],
      }]
    };
    const dataThree = {
      labels: months,
      datasets: [{
        label: '',
        backgroundColor: '#dc3545',
        borderColor: '',
        data: [polls2021Jan, polls2021Feb, polls2021Mar, polls2021Apr, polls2021May, polls2021Jun, polls2021Jul, polls2021Aug, polls2021Sep, polls2021Oct, polls2021Nov, polls2021Dec],
      }]
    };
    const dataFour = {
      labels: months,
      datasets: [{
        label: '',
        backgroundColor: '#dc3545',
        borderColor: '',
        data: [polls2021Jan, polls2021Feb, polls2021Mar, polls2021Apr, polls2021May, polls2021Jun, polls2021Jul, polls2021Aug, polls2021Sep, polls2021Oct, polls2021Nov, polls2021Dec],
      }]
    };

    const monthChartOne = {
      type: 'bar',
      data: dataOne,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Polls Published in 2019",
            fullSize: true
          },
          legend: {
            display: false
          }
        }
      }
    };
    const monthChartTwo = {
      type: 'bar',
      data: dataTwo,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Polls Published in 2020"
          },
          legend: {
            display: false
          }
        }
      }
    };
    const monthChartThree = {
      type: 'bar',
      data: dataThree,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Polls Published in 2021"
          },
          legend: {
            display: false
          }
        }
      }
    };

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

var mydata = {
  "totalpolls": 292,
  "totalvotes": 194056,
  "totalhomepagepolls": 27,
  "lastupdated": "Thursday, December 16, 2021 - 01:39 EST",
  "polls": [{
      "url": "https://www.imdb.com/poll/2DlcNDRF1dk/",
      "title": "Best Gun-Fu Movie",
      "date": "2019/08/31",
      "homepage": "No",
      "votes": 1343
    },
    {
      "url": "https://www.imdb.com/poll/rqI7wwqCyp8/",
      "title": "Best Cinematographer",
      "date": "2019/11/24",
      "homepage": "No",
      "votes": 606
    },
    {
      "url": "https://www.imdb.com/poll/SJU5sPwXmto/",
      "title": "Most Badass Video Game Character",
      "date": "2019/11/28",
      "homepage": "No",
      "votes": 930
    },
    {
      "url": "https://www.imdb.com/poll/UqZJBwX2tsQ/",
      "title": "Face-Off: Ash vs. Jason vs. Freddy",
      "date": "2019/11/29",
      "homepage": "No",
      "votes": 278
    },
    {
      "url": "https://www.imdb.com/poll/_yVSfQNp94M/",
      "title": "Best Method Actor",
      "date": "2019/12/11",
      "homepage": "No",
      "votes": 1880
    },
    {
      "url": "https://www.imdb.com/poll/8Ipx2q4j-6o/",
      "title": "Face-Off: Star Wars Films vs. Star Wars Video Games",
      "date": "2019/12/13",
      "homepage": "No",
      "votes": 391
    },
    {
      "url": "https://www.imdb.com/poll/FPb0mz_cfbo/",
      "title": "Face-Off: Anime vs. Cartoons",
      "date": "2019/12/20",
      "homepage": "No",
      "votes": 384
    },
    {
      "url": "https://www.imdb.com/poll/1JmJmBAZjsc/",
      "title": "MCU Duos",
      "date": "2019/12/22",
      "homepage": "No",
      "votes": 478
    },
    {
      "url": "https://www.imdb.com/poll/l1EOk_Cu0qI/",
      "title": "Zack Snyder Movies",
      "date": "2020/01/06",
      "homepage": "No",
      "votes": 1526
    },
    {
      "url": "https://www.imdb.com/poll/6pogmqByt4w/",
      "title": "Fight for Freedom",
      "date": "2020/01/12",
      "homepage": "No",
      "votes": 672
    },
    {
      "url": "https://www.imdb.com/poll/ZrIUh6dFHmw/",
      "title": "Oscars 2020 \u2014 Best Cinematography",
      "date": "2020/01/18",
      "homepage": "No",
      "votes": 1141
    },
    {
      "url": "https://www.imdb.com/poll/Ncq7J8UpTMc/",
      "title": "Most Anticipated Video Game of 2020",
      "date": "2020/01/20",
      "homepage": "Yes",
      "votes": 24258
    },
    {
      "url": "https://www.imdb.com/poll/FV3w5VHueko/",
      "title": "Battle of the Dark Lords",
      "date": "2020/01/24",
      "homepage": "No",
      "votes": 418
    },
    {
      "url": "https://www.imdb.com/poll/sTfArjVEbG4/",
      "title": "I'm a Reviewer!",
      "date": "2020/01/28",
      "homepage": "No",
      "votes": 498
    },
    {
      "url": "https://www.imdb.com/poll/UWOai_-tSyU/",
      "title": "What Language Do You Speak?",
      "date": "2020/01/30",
      "homepage": "No",
      "votes": 604
    },
    {
      "url": "https://www.imdb.com/poll/KNzYYUAUk4Q/",
      "title": "Oscars 2020 \u2014 Best Motion Picture",
      "date": "2020/01/31",
      "homepage": "No",
      "votes": 979
    },
    {
      "url": "https://www.imdb.com/poll/uQt6dvXEjgs/",
      "title": "The Game Awards \u2014 Favorite Game of the Year",
      "date": "2020/02/03",
      "homepage": "No",
      "votes": 573
    },
    {
      "url": "https://www.imdb.com/poll/5mjHIkPLWiM/",
      "title": "Face-Off: Newton vs. Einstein",
      "date": "2020/02/05",
      "homepage": "No",
      "votes": 330
    },
    {
      "url": "https://www.imdb.com/poll/TE8PLBHK7bc/",
      "title": "IMDb Top 250 War Film",
      "date": "2020/02/08",
      "homepage": "No",
      "votes": 1678
    },
    {
      "url": "https://www.imdb.com/poll/2o3z6OPmDpU/",
      "title": "Celebrating Valentine's Day With Valentine",
      "date": "2020/02/13",
      "homepage": "No",
      "votes": 301
    },
    {
      "url": "https://www.imdb.com/poll/4w_mJDMJQKQ/",
      "title": "Oscars: Making History",
      "date": "2020/02/16",
      "homepage": "No",
      "votes": 482
    },
    {
      "url": "https://www.imdb.com/poll/IYPDHtJGXUo/",
      "title": "I, Me, and Myself",
      "date": "2020/02/19",
      "homepage": "No",
      "votes": 390
    },
    {
      "url": "https://www.imdb.com/poll/O0d14OL7-EA/",
      "title": "MCU Superheroes",
      "date": "2020/02/24",
      "homepage": "No",
      "votes": 655
    },
    {
      "url": "https://www.imdb.com/poll/XaAw6hYyigU/",
      "title": "Favorite Willem Dafoe Film",
      "date": "2020/02/25",
      "homepage": "No",
      "votes": 999
    },
    {
      "url": "https://www.imdb.com/poll/wdCK-AU5wlQ/",
      "title": "DCCU Superheroes",
      "date": "2020/02/26",
      "homepage": "No",
      "votes": 489
    },
    {
      "url": "https://www.imdb.com/poll/g4JNkpEwR5c/",
      "title": "Favorite Jim Carrey Film",
      "date": "2020/02/29",
      "homepage": "No",
      "votes": 886
    },
    {
      "url": "https://www.imdb.com/poll/KXWdPWehiBk/",
      "title": "Posters: Solo Portraits",
      "date": "2020/03/03",
      "homepage": "Yes",
      "votes": 1277
    },
    {
      "url": "https://www.imdb.com/poll/HTZWqWXbtg0/",
      "title": "Talk Show Games by Jimmy Fallon",
      "date": "2020/03/07",
      "homepage": "No",
      "votes": 164
    },
    {
      "url": "https://www.imdb.com/poll/pNcuH-YbjUs/",
      "title": "Billion-Dollar Films in the IMDb Top 250",
      "date": "2020/03/11",
      "homepage": "Yes",
      "votes": 5795
    },
    {
      "url": "https://www.imdb.com/poll/bGUoguxv-1w/",
      "title": "Posters: Solo Portraits \u2014 Part II",
      "date": "2020/03/12",
      "homepage": "No",
      "votes": 436
    },
    {
      "url": "https://www.imdb.com/poll/biIYsvS4lu4/",
      "title": "Face-Off: Charlie Chaplin vs. Rowan Atkinson",
      "date": "2020/03/13",
      "homepage": "No",
      "votes": 341
    },
    {
      "url": "https://www.imdb.com/poll/OCFupN9LbSg/",
      "title": "Most Anticipated TV Show of 2020",
      "date": "2020/03/15",
      "homepage": "No",
      "votes": 1939
    },
    {
      "url": "https://www.imdb.com/poll/9jn4gSHZQsc/",
      "title": "Posters: Duo Portraits",
      "date": "2020/03/17",
      "homepage": "No",
      "votes": 361
    },
    {
      "url": "https://www.imdb.com/poll/2LtmhG-jEOA/",
      "title": "Posters: One-Eyed Portraits",
      "date": "2020/03/18",
      "homepage": "No",
      "votes": 722
    },
    {
      "url": "https://www.imdb.com/poll/qRg7_PkEBBA/",
      "title": "Favorite Character Poster \u2014 'Emma.'",
      "date": "2020/03/22",
      "homepage": "No",
      "votes": 194
    },
    {
      "url": "https://www.imdb.com/poll/QQX810xz48Q/",
      "title": "D.I.C.E. Awards \u2014 Favorite Game of the Year",
      "date": "2020/03/25",
      "homepage": "No",
      "votes": 312
    },
    {
      "url": "https://www.imdb.com/poll/bsCTyx17NKM/",
      "title": "Highest-Rated Films by IMDb Top 1000 Voters",
      "date": "2020/03/26",
      "homepage": "No",
      "votes": 688
    },
    {
      "url": "https://www.imdb.com/poll/AtwGNM0ifSo/",
      "title": "Indian Films With Most Votes",
      "date": "2020/03/29",
      "homepage": "Yes",
      "votes": 8125
    },
    {
      "url": "https://www.imdb.com/poll/_SslGnFyo8A/",
      "title": "Best Psychopathy Film",
      "date": "2020/04/02",
      "homepage": "No",
      "votes": 851
    },
    {
      "url": "https://www.imdb.com/poll/rCXCNCI7x4s/",
      "title": "Face-Off: Witcher vs. Witcher",
      "date": "2020/04/03",
      "homepage": "No",
      "votes": 400
    },
    {
      "url": "https://www.imdb.com/poll/BOD97VJlRSc/",
      "title": "BAFTA Games Awards \u2014 Favorite Game of the Year",
      "date": "2020/04/04",
      "homepage": "No",
      "votes": 453
    },
    {
      "url": "https://www.imdb.com/poll/moOF1hW_wAw/",
      "title": "The King of Cocaine",
      "date": "2020/04/06",
      "homepage": "No",
      "votes": 255
    },
    {
      "url": "https://www.imdb.com/poll/VpedUMANajA/",
      "title": "IMDb's Favorite Long Takes",
      "date": "2020/04/07",
      "homepage": "No",
      "votes": 470
    },
    {
      "url": "https://www.imdb.com/poll/03z3KNyfvko/",
      "title": "One-Shot Films",
      "date": "2020/04/09",
      "homepage": "No",
      "votes": 677
    },
    {
      "url": "https://www.imdb.com/poll/8ZfgOHGCt9Y/",
      "title": "Golden Joystick Awards \u2014 Favorite Game of the Year",
      "date": "2020/04/11",
      "homepage": "No",
      "votes": 315
    },
    {
      "url": "https://www.imdb.com/poll/ra_WcOntmoU/",
      "title": "IMDb Top 250 Places",
      "date": "2020/04/15",
      "homepage": "Yes",
      "votes": 1988
    },
    {
      "url": "https://www.imdb.com/poll/-OKegLOaAwk/",
      "title": "GDC Awards \u2014 Favorite Game of the Year",
      "date": "2020/04/19",
      "homepage": "No",
      "votes": 333
    },
    {
      "url": "https://www.imdb.com/poll/fOl7z3IafE8/",
      "title": "Highest-Rated Indian Films",
      "date": "2020/04/22",
      "homepage": "No",
      "votes": 993
    },
    {
      "url": "https://www.imdb.com/poll/XnMRFTEbpsY/",
      "title": "Posters: Trio Portraits",
      "date": "2020/04/27",
      "homepage": "No",
      "votes": 398
    },
    {
      "url": "https://www.imdb.com/poll/U48iAdaixnk/",
      "title": "IMDb Poll Board: Top 10 International Films",
      "date": "2020/04/28",
      "homepage": "No",
      "votes": 407
    },
    {
      "url": "https://www.imdb.com/poll/m6_3j-6GURU/",
      "title": "Favorite Irrfan Khan Film",
      "date": "2020/04/30",
      "homepage": "Yes",
      "votes": 1522
    },
    {
      "url": "https://www.imdb.com/poll/vJt0bLNv7dw/",
      "title": "Favorite Rishi Kapoor Film",
      "date": "2020/05/02",
      "homepage": "No",
      "votes": 155
    },
    {
      "url": "https://www.imdb.com/poll/Mz2qUKsThE4/",
      "title": "Japanese Films With Most Votes",
      "date": "2020/05/05",
      "homepage": "No",
      "votes": 1551
    },
    {
      "url": "https://www.imdb.com/poll/xyVbRiqGb-Q/",
      "title": "School Subjects",
      "date": "2020/05/09",
      "homepage": "No",
      "votes": 346
    },
    {
      "url": "https://www.imdb.com/poll/AMWyXJJI6PQ/",
      "title": "Happy Mother's Day!",
      "date": "2020/05/10",
      "homepage": "No",
      "votes": 371
    },
    {
      "url": "https://www.imdb.com/poll/wp3hdbtqirE/",
      "title": "IMDb Top 250 Numerical Titles",
      "date": "2020/05/12",
      "homepage": "No",
      "votes": 443
    },
    {
      "url": "https://www.imdb.com/poll/DIPA7uKHvhQ/",
      "title": "Posters: Foursome Portraits",
      "date": "2020/05/18",
      "homepage": "No",
      "votes": 298
    },
    {
      "url": "https://www.imdb.com/poll/C-huL3e1Z04/",
      "title": "Best Gunslinger Film",
      "date": "2020/05/19",
      "homepage": "No",
      "votes": 569
    },
    {
      "url": "https://www.imdb.com/poll/eT16qSo-9TQ/",
      "title": "Fred Willard - The Comedy Legend",
      "date": "2020/05/21",
      "homepage": "Yes",
      "votes": 817
    },
    {
      "url": "https://www.imdb.com/poll/1rtG0_fEK9Q/",
      "title": "Face-Off: Justice League vs. The Avengers",
      "date": "2020/05/22",
      "homepage": "No",
      "votes": 373
    },
    {
      "url": "https://www.imdb.com/poll/qZgn6SFiTPo/",
      "title": "Horror Films by New Line Cinema",
      "date": "2020/05/25",
      "homepage": "No",
      "votes": 613
    },
    {
      "url": "https://www.imdb.com/poll/7ozV5uewSZg/",
      "title": "Favorite Mark Ruffalo Film",
      "date": "2020/05/26",
      "homepage": "No",
      "votes": 731
    },
    {
      "url": "https://www.imdb.com/poll/ur7P0KOkt_4/",
      "title": "2020 Filmfare Winners",
      "date": "2020/05/27",
      "homepage": "No",
      "votes": 203
    },
    {
      "url": "https://www.imdb.com/poll/I2GmKerI7bo/",
      "title": "Best of IMDb",
      "date": "2020/05/29",
      "homepage": "No",
      "votes": 163
    },
    {
      "url": "https://www.imdb.com/poll/56I8mB6TuOs/",
      "title": "Elon Musk Cameos",
      "date": "2020/05/30",
      "homepage": "No",
      "votes": 217
    },
    {
      "url": "https://www.imdb.com/poll/rsqdqXt9cyU/",
      "title": "Movies Coming to Disney+ in Summer 2020",
      "date": "2020/06/01",
      "homepage": "No",
      "votes": 327
    },
    {
      "url": "https://www.imdb.com/poll/uTNvEHIhPOQ/",
      "title": "Khans of Bollywood",
      "date": "2020/06/03",
      "homepage": "No",
      "votes": 382
    },
    {
      "url": "https://www.imdb.com/poll/2Evej72Qq3Q/",
      "title": "Highest-Grossing Comedy Films",
      "date": "2020/06/04",
      "homepage": "No",
      "votes": 504
    },
    {
      "url": "https://www.imdb.com/poll/MB_9VPjzesQ/",
      "title": "Popular LGBTQ+ Films",
      "date": "2020/06/08",
      "homepage": "Yes",
      "votes": 2123
    },
    {
      "url": "https://www.imdb.com/poll/YLL1bB6W1wk/",
      "title": "BLM: Black Lives Matter",
      "date": "2020/06/16",
      "homepage": "No",
      "votes": 431
    },
    {
      "url": "https://www.imdb.com/poll/3HNHBfHUhlw/",
      "title": "Sushant Singh Rajput - A Rising Star",
      "date": "2020/06/17",
      "homepage": "No",
      "votes": 1348
    },
    {
      "url": "https://www.imdb.com/poll/f_jqo7Bh69Y/",
      "title": "Face-Off: \"The Big Bang Theory\" vs. \"Young Sheldon\"",
      "date": "2020/06/19",
      "homepage": "No",
      "votes": 222
    },
    {
      "url": "https://www.imdb.com/poll/d4qllR82L8k/",
      "title": "The Best Horror Movies of the 1980s",
      "date": "2020/06/20",
      "homepage": "No",
      "votes": 713
    },
    {
      "url": "https://www.imdb.com/poll/pIsEB30TmNM/",
      "title": "Happy Father's Day!",
      "date": "2020/06/21",
      "homepage": "No",
      "votes": 285
    },
    {
      "url": "https://www.imdb.com/poll/En-SeDECHXg/",
      "title": "A Tribute to Ian Holm",
      "date": "2020/06/24",
      "homepage": "No",
      "votes": 306
    },
    {
      "url": "https://www.imdb.com/poll/I6x5q6RU8NE/",
      "title": "Face-Off: Superman vs. Shazam",
      "date": "2020/06/26",
      "homepage": "No",
      "votes": 304
    },
    {
      "url": "https://www.imdb.com/poll/20bsgaBCryw/",
      "title": "Dog Days of Summer",
      "date": "2020/06/27",
      "homepage": "No",
      "votes": 535
    },
    {
      "url": "https://www.imdb.com/poll/810t1rTPWtQ/",
      "title": "Non-R-Rated Films With One Million Votes",
      "date": "2020/06/29",
      "homepage": "No",
      "votes": 484
    },
    {
      "url": "https://www.imdb.com/poll/HZIurRNWNJg/",
      "title": "Roger Deakins' Finest Works",
      "date": "2020/07/01",
      "homepage": "No",
      "votes": 364
    },
    {
      "url": "https://www.imdb.com/poll/hISkwN4zuwM/",
      "title": "Multiple Oscar-Winning Cinematographers",
      "date": "2020/07/02",
      "homepage": "No",
      "votes": 241
    },
    {
      "url": "https://www.imdb.com/poll/5fSnMKGk930/",
      "title": "Top Rated Movies Not in the IMDb Top 250",
      "date": "2020/07/05",
      "homepage": "No",
      "votes": 704
    },
    {
      "url": "https://www.imdb.com/poll/PBLKZvriXgA/",
      "title": "BAFTA Games Awards 2020 \u2014 Video Games With Multiple Nominations",
      "date": "2020/07/07",
      "homepage": "No",
      "votes": 148
    },
    {
      "url": "https://www.imdb.com/poll/DsiitWxPJHM/",
      "title": "Ennio Morricone - The Legendary Maestro",
      "date": "2020/07/07",
      "homepage": "Yes",
      "votes": 1070
    },
    {
      "url": "https://www.imdb.com/poll/cj-cCo8IVEo/",
      "title": "35 Oldest Popular TV Shows",
      "date": "2020/07/08",
      "homepage": "No",
      "votes": 447
    },
    {
      "url": "https://www.imdb.com/poll/FtD20r0zx3s/",
      "title": "Multiple Oscar-Winning Composers ",
      "date": "2020/07/09",
      "homepage": "No",
      "votes": 318
    },
    {
      "url": "https://www.imdb.com/poll/5wAPBFEeVZM/",
      "title": "Patrick Stewart in Films and Television",
      "date": "2020/07/13",
      "homepage": "No",
      "votes": 347
    },
    {
      "url": "https://www.imdb.com/poll/hW80dI8tbs8/",
      "title": "Who Should Be the Next Superman?",
      "date": "2020/07/15",
      "homepage": "No",
      "votes": 671
    },
    {
      "url": "https://www.imdb.com/poll/Lt1UJKuW_sw/",
      "title": "IMDb Top 250 Movies With Multiple Directors",
      "date": "2020/07/16",
      "homepage": "No",
      "votes": 562
    },
    {
      "url": "https://www.imdb.com/poll/uKVkev68UQM/",
      "title": "What Month Is It?",
      "date": "2020/07/19",
      "homepage": "No",
      "votes": 250
    },
    {
      "url": "https://www.imdb.com/poll/RQXdetkEA-c/",
      "title": "Top Rated Movies on IMDb TV",
      "date": "2020/07/21",
      "homepage": "Yes",
      "votes": 1432
    },
    {
      "url": "https://www.imdb.com/poll/Rkv1yOIWw-4/",
      "title": "Highest-Grossing Drama Films",
      "date": "2020/07/22",
      "homepage": "No",
      "votes": 510
    },
    {
      "url": "https://www.imdb.com/poll/-sYU43C_QL8/",
      "title": "Multiple Oscar-Winning Songwriters",
      "date": "2020/07/23",
      "homepage": "No",
      "votes": 189
    },
    {
      "url": "https://www.imdb.com/poll/SmgJaaGDITM/",
      "title": "Happy Parents' Day!",
      "date": "2020/07/26",
      "homepage": "No",
      "votes": 260
    },
    {
      "url": "https://www.imdb.com/poll/Zn_GnLPusL4/",
      "title": "Rotten Tomatoes: Top Mystery & Suspense Movies",
      "date": "2020/07/28",
      "homepage": "No",
      "votes": 536
    },
    {
      "url": "https://www.imdb.com/poll/ExkLSdBXWJ0/",
      "title": "IGN's Top 25 Best Superhero Movies",
      "date": "2020/07/29",
      "homepage": "No",
      "votes": 1096
    },
    {
      "url": "https://www.imdb.com/poll/tPT9bTDuAG4/",
      "title": "Emmys 2020 \u2014 Shows With Most Major Nominations",
      "date": "2020/08/02",
      "homepage": "No",
      "votes": 649
    },
    {
      "url": "https://www.imdb.com/poll/RuP6KKxAQn4/",
      "title": "Martin Sheen Filmography",
      "date": "2020/08/03",
      "homepage": "No",
      "votes": 297
    },
    {
      "url": "https://www.imdb.com/poll/cqmkMhwdQcI/",
      "title": "IGN's 25 Best '90s Movies",
      "date": "2020/08/04",
      "homepage": "No",
      "votes": 1493
    },
    {
      "url": "https://www.imdb.com/poll/bemnC2EPFjg/",
      "title": "Movies Where the Villain Kills the Hero",
      "date": "2020/08/05",
      "homepage": "No",
      "votes": 842
    },
    {
      "url": "https://www.imdb.com/poll/HMQMuIBlG5Y/",
      "title": "IMDb Top 250 Indian TV Shows",
      "date": "2020/08/06",
      "homepage": "No",
      "votes": 1467
    },
    {
      "url": "https://www.imdb.com/poll/9ImEUYWJAEY/",
      "title": "The Greatest Sword Shows on Television",
      "date": "2020/08/09",
      "homepage": "No",
      "votes": 498
    },
    {
      "url": "https://www.imdb.com/poll/2_BGF3uxOe0/",
      "title": "IMDb Top 250 Disney Movies",
      "date": "2020/08/10",
      "homepage": "No",
      "votes": 803
    },
    {
      "url": "https://www.imdb.com/poll/vZmtlRri62E/",
      "title": "Movies That Were Worse Than Expected: 2019",
      "date": "2020/08/16",
      "homepage": "No",
      "votes": 671
    },
    {
      "url": "https://www.imdb.com/poll/BSF1mZnc_hI/",
      "title": "Emmys 2020 \u2014 Outstanding Supporting Actor in a Drama Series",
      "date": "2020/08/17",
      "homepage": "No",
      "votes": 219
    },
    {
      "url": "https://www.imdb.com/poll/tbyeRJO7V4E/",
      "title": "Emmys 2020 \u2014 Outstanding Supporting Actress in a Drama Series",
      "date": "2020/08/18",
      "homepage": "No",
      "votes": 273
    },
    {
      "url": "https://www.imdb.com/poll/JPUWJnaR1mI/",
      "title": "Emmys 2020 \u2014 Outstanding Lead Actor in a Comedy Series",
      "date": "2020/08/19",
      "homepage": "No",
      "votes": 238
    },
    {
      "url": "https://www.imdb.com/poll/sRmeOt3A0Vw/",
      "title": "Emmys 2020 \u2014 Outstanding Writing for a Nonfiction Program",
      "date": "2020/08/23",
      "homepage": "No",
      "votes": 135
    },
    {
      "url": "https://www.imdb.com/poll/lCBPIMTfGLA/",
      "title": "Favorite Chadwick Boseman Movie",
      "date": "2020/09/01",
      "homepage": "No",
      "votes": 526
    },
    {
      "url": "https://www.imdb.com/poll/JpLcY3zVI90/",
      "title": "Tom Clancy Video Games",
      "date": "2020/09/02",
      "homepage": "No",
      "votes": 150
    },
    {
      "url": "https://www.imdb.com/poll/7mYiIx_uAyI/",
      "title": "Favorite 'Tenet' Poster",
      "date": "2020/09/03",
      "homepage": "No",
      "votes": 361
    },
    {
      "url": "https://www.imdb.com/poll/ikzVajoH3lw/",
      "title": "Emmys 2020 \u2014 Outstanding Documentary or Nonfiction Series",
      "date": "2020/09/05",
      "homepage": "No",
      "votes": 140
    },
    {
      "url": "https://www.imdb.com/poll/8TFqAVVbAK4/",
      "title": "Top Rated TV Shows on IMDb TV",
      "date": "2020/09/06",
      "homepage": "No",
      "votes": 361
    },
    {
      "url": "https://www.imdb.com/poll/lN1pQ3eV8uE/",
      "title": "The Greatest Black & White Films of All Time",
      "date": "2020/09/07",
      "homepage": "No",
      "votes": 458
    },
    {
      "url": "https://www.imdb.com/poll/S8Hc7cvycg8/",
      "title": "IGN's Top 35 TV Shows of All Time",
      "date": "2020/09/09",
      "homepage": "No",
      "votes": 606
    },
    {
      "url": "https://www.imdb.com/poll/ApKpC-b1648/",
      "title": "Emmys 2020 \u2014 Outstanding Animated Program",
      "date": "2020/09/10",
      "homepage": "Yes",
      "votes": 861
    },
    {
      "url": "https://www.imdb.com/poll/fMV5oVQ-lIw/",
      "title": "Emmys 2020 \u2014 Original Dramatic Score Nominees",
      "date": "2020/09/12",
      "homepage": "No",
      "votes": 228
    },
    {
      "url": "https://www.imdb.com/poll/GCsleqXHXxA/",
      "title": "Emmys 2020 \u2014 Outstanding Special Visual Effects",
      "date": "2020/09/13",
      "homepage": "No",
      "votes": 246
    },
    {
      "url": "https://www.imdb.com/poll/OWyd-SupFFE/",
      "title": "Emmys 2020 \u2014 Outstanding Writing for a Limited Series, Movie or Dramatic Special",
      "date": "2020/09/14",
      "homepage": "No",
      "votes": 167
    },
    {
      "url": "https://www.imdb.com/poll/QLzbtBLysbw/",
      "title": "Rotten Tomatoes: Top Art House & International Movies",
      "date": "2020/09/14",
      "homepage": "No",
      "votes": 332
    },
    {
      "url": "https://www.imdb.com/poll/-DTm43jGTbw/",
      "title": "Top Rated Movies With Razzie Nominations",
      "date": "2020/09/17",
      "homepage": "No",
      "votes": 547
    },
    {
      "url": "https://www.imdb.com/poll/tggccnL_NsY/",
      "title": "IGN's Top 25 Sci-Fi Movies",
      "date": "2020/09/23",
      "homepage": "No",
      "votes": 555
    },
    {
      "url": "https://www.imdb.com/poll/hR1rGT9Q9Aw/",
      "title": "Rotten Tomatoes: Top Sci-Fi & Fantasy Movies",
      "date": "2020/09/23",
      "homepage": "No",
      "votes": 594
    },
    {
      "url": "https://www.imdb.com/poll/VLBh1_mjTSM/",
      "title": "IMDb Poll Board: Top 5 Superhero Movies",
      "date": "2020/09/26",
      "homepage": "No",
      "votes": 457
    },
    {
      "url": "https://www.imdb.com/poll/Q3b7rtJdtpQ/",
      "title": "Rotten Tomatoes: Top Classic Movies",
      "date": "2020/09/29",
      "homepage": "No",
      "votes": 630
    },
    {
      "url": "https://www.imdb.com/poll/I-jKzTCWoQM/",
      "title": "Best Vine Star",
      "date": "2020/09/29",
      "homepage": "No",
      "votes": 126
    },
    {
      "url": "https://www.imdb.com/poll/dsvrrywTgJo/",
      "title": "Best Western Movie Director",
      "date": "2020/10/03",
      "homepage": "No",
      "votes": 411
    },
    {
      "url": "https://www.imdb.com/poll/lvApsUZPwms/",
      "title": "Favorite Character Poster \u2014 'Mulan'",
      "date": "2020/10/05",
      "homepage": "No",
      "votes": 184
    },
    {
      "url": "https://www.imdb.com/poll/JtMWLWgybYI/",
      "title": "35 Oldest Popular Films",
      "date": "2020/10/05",
      "homepage": "No",
      "votes": 388
    },
    {
      "url": "https://www.imdb.com/poll/yF2gmJjX0ko/",
      "title": "The Best Multiple Perspective Movies",
      "date": "2020/10/06",
      "homepage": "No",
      "votes": 652
    },
    {
      "url": "https://www.imdb.com/poll/IB0umeLUP-A/",
      "title": "Top 30 Movies of the Last 30 Years",
      "date": "2020/10/08",
      "homepage": "No",
      "votes": 542
    },
    {
      "url": "https://www.imdb.com/poll/TWFR7nEzQtY/",
      "title": "Favorite Rajkumar Hirani Movie",
      "date": "2020/10/09",
      "homepage": "No",
      "votes": 122
    },
    {
      "url": "https://www.imdb.com/poll/PjibIGXVyH4/",
      "title": "IMDb Top 250 Historical Films",
      "date": "2020/10/11",
      "homepage": "No",
      "votes": 726
    },
    {
      "url": "https://www.imdb.com/poll/sZ6ya3wDUdk/",
      "title": "The Highest-Paid Actors of 2020",
      "date": "2020/10/12",
      "homepage": "No",
      "votes": 439
    },
    {
      "url": "https://www.imdb.com/poll/dDqExltUITY/",
      "title": "Scare in Style: The Best Action-Horror Movies",
      "date": "2020/10/13",
      "homepage": "Yes",
      "votes": 1391
    },
    {
      "url": "https://www.imdb.com/poll/SMyiBcTxceI/",
      "title": "Face-Off: John Wick vs. Neo",
      "date": "2020/10/16",
      "homepage": "No",
      "votes": 304
    },
    {
      "url": "https://www.imdb.com/poll/10LKQ4eIHrA/",
      "title": "Col Needham's Top 30 Movies From the Last 30 Years",
      "date": "2020/10/17",
      "homepage": "No",
      "votes": 547
    },
    {
      "url": "https://www.imdb.com/poll/wsUh3DE_m7E/",
      "title": "IMDb Top 250 Movies With Average Metascores",
      "date": "2020/10/20",
      "homepage": "No",
      "votes": 696
    },
    {
      "url": "https://www.imdb.com/poll/mE6QpZ1T6GY/",
      "title": "Badass Fictional Characters With a Beard",
      "date": "2020/10/24",
      "homepage": "No",
      "votes": 462
    },
    {
      "url": "https://www.imdb.com/poll/INuo541BSMo/",
      "title": "Horror Films by A24",
      "date": "2020/10/26",
      "homepage": "No",
      "votes": 574
    },
    {
      "url": "https://www.imdb.com/poll/TB3KlpVXgN4/",
      "title": "Rotten Tomatoes: Top Horror Movies",
      "date": "2020/10/27",
      "homepage": "No",
      "votes": 623
    },
    {
      "url": "https://www.imdb.com/poll/j-tYfvPZZJw/",
      "title": "The Best Horror Movies of All Time",
      "date": "2020/10/28",
      "homepage": "Yes",
      "votes": 2431
    },
    {
      "url": "https://www.imdb.com/poll/EaoyLFWJr5E/",
      "title": "Shah Rukh Khan - The King of Romance",
      "date": "2020/11/02",
      "homepage": "No",
      "votes": 214
    },
    {
      "url": "https://www.imdb.com/poll/QB4aTJ2O63M/",
      "title": "Golden Globe Winning Best Pictures in the IMDb Top 250",
      "date": "2020/11/04",
      "homepage": "No",
      "votes": 465
    },
    {
      "url": "https://www.imdb.com/poll/CJB_-0lRoDs/",
      "title": "Best of Bong Joon-ho and Song Kang-ho",
      "date": "2020/11/05",
      "homepage": "No",
      "votes": 245
    },
    {
      "url": "https://www.imdb.com/poll/a-XKFErLTa8/",
      "title": "Best Indian Director",
      "date": "2020/11/08",
      "homepage": "No",
      "votes": 279
    },
    {
      "url": "https://www.imdb.com/poll/anUXiqadm1Q/",
      "title": "Most Rated Video Games Since 1990",
      "date": "2020/11/11",
      "homepage": "No",
      "votes": 500
    },
    {
      "url": "https://www.imdb.com/poll/02qAANbPqyg/",
      "title": "Face-Off: Goku vs. Saitama",
      "date": "2020/11/13",
      "homepage": "No",
      "votes": 176
    },
    {
      "url": "https://www.imdb.com/poll/1wpIPRbKHdI/",
      "title": "IMDb Poll Board: Top 10 Video Games",
      "date": "2020/11/14",
      "homepage": "No",
      "votes": 331
    },
    {
      "url": "https://www.imdb.com/poll/Q3TPqz1iWzw/",
      "title": "Lowest Rated Movies of the 2010s",
      "date": "2020/11/15",
      "homepage": "No",
      "votes": 428
    },
    {
      "url": "https://www.imdb.com/poll/g7W7w1Vwlu0/",
      "title": "Rotten Tomatoes: Top Drama Movies",
      "date": "2020/11/17",
      "homepage": "No",
      "votes": 376
    },
    {
      "url": "https://www.imdb.com/poll/5abZHe0FTfc/",
      "title": "Rotten Tomatoes: Top Musical & Performing Arts Movies",
      "date": "2020/11/17",
      "homepage": "No",
      "votes": 254
    },
    {
      "url": "https://www.imdb.com/poll/qAhVl92HsBY/",
      "title": "IGN's Top 25 Horror Movies",
      "date": "2020/11/18",
      "homepage": "No",
      "votes": 392
    },
    {
      "url": "https://www.imdb.com/poll/H6H9tw-3S4U/",
      "title": "TV Shows at 20 in 2020",
      "date": "2020/11/23",
      "homepage": "Yes",
      "votes": 947
    },
    {
      "url": "https://www.imdb.com/poll/tm8KGRWKYVU/",
      "title": "Top Rated Films From A to Z",
      "date": "2020/11/23",
      "homepage": "No",
      "votes": 1085
    },
    {
      "url": "https://www.imdb.com/poll/iUYJHthsHfY/",
      "title": "Rotten Tomatoes: Top Kids & Family Movies",
      "date": "2020/11/26",
      "homepage": "No",
      "votes": 546
    },
    {
      "url": "https://www.imdb.com/poll/gYwm57Mc9lk/",
      "title": "Favorite Ed Harris Film",
      "date": "2020/11/28",
      "homepage": "No",
      "votes": 394
    },
    {
      "url": "https://www.imdb.com/poll/NluHC2DaWPI/",
      "title": "Robert Richardson's Magnificent Films",
      "date": "2020/11/30",
      "homepage": "No",
      "votes": 264
    },
    {
      "url": "https://www.imdb.com/poll/b6yNYo22v38/",
      "title": "Rotten Tomatoes: Top Sports & Fitness Movies",
      "date": "2020/11/30",
      "homepage": "No",
      "votes": 246
    },
    {
      "url": "https://www.imdb.com/poll/6IPrZq7R0cg/",
      "title": "The Game Awards 2020 \u2014 Game of the Year",
      "date": "2020/12/06",
      "homepage": "No",
      "votes": 265
    },
    {
      "url": "https://www.imdb.com/poll/Hed6I7KK-o8/",
      "title": "IGN's Top 25 Action Movies",
      "date": "2020/12/07",
      "homepage": "No",
      "votes": 715
    },
    {
      "url": "https://www.imdb.com/poll/kduEE0vtgt0/",
      "title": "Most Viewed Trailers of 2020",
      "date": "2020/12/08",
      "homepage": "No",
      "votes": 639
    },
    {
      "url": "https://www.imdb.com/poll/np8KDvM3YM8/",
      "title": "Col Needham\u2019s Best Movies of 2020",
      "date": "2020/12/09",
      "homepage": "No",
      "votes": 451
    },
    {
      "url": "https://www.imdb.com/poll/E0-mNlpY2U0/",
      "title": "Top 10 Breakout Stars of 2020",
      "date": "2020/12/13",
      "homepage": "Yes",
      "votes": 1185
    },
    {
      "url": "https://www.imdb.com/poll/4T1KtVrx338/",
      "title": "Movies Set in Ancient India",
      "date": "2020/12/21",
      "homepage": "No",
      "votes": 140
    },
    {
      "url": "https://www.imdb.com/poll/GqB0BLMTaUk/",
      "title": "IGN's Top 25 Holiday Movies",
      "date": "2020/12/23",
      "homepage": "No",
      "votes": 396
    },
    {
      "url": "https://www.imdb.com/poll/5Oxt8E012so/",
      "title": "Face-Off: Henry Fonda - Good vs. Bad",
      "date": "2020/12/25",
      "homepage": "No",
      "votes": 228
    },
    {
      "url": "https://www.imdb.com/poll/kCwNy2NEF64/",
      "title": "The Rise of Timoth\u00e9e Chalamet",
      "date": "2020/12/27",
      "homepage": "No",
      "votes": 271
    },
    {
      "url": "https://www.imdb.com/poll/ibfGPYUkHmw/",
      "title": "The End of Entertainment",
      "date": "2020/12/29",
      "homepage": "No",
      "votes": 507
    },
    {
      "url": "https://www.imdb.com/poll/Yr2W-DGCH38/",
      "title": "Most Anticipated TV Show of 2021",
      "date": "2020/12/29",
      "homepage": "Yes",
      "votes": 6515
    },
    {
      "url": "https://www.imdb.com/poll/z_VRJTSk_Ic/",
      "title": "2020 in the IMDb Top 250",
      "date": "2020/12/31",
      "homepage": "No",
      "votes": 465
    },
    {
      "url": "https://www.imdb.com/poll/m3rHz80F1vI/",
      "title": "25 Most Rated Movies of 2020",
      "date": "2021/01/04",
      "homepage": "No",
      "votes": 1399
    },
    {
      "url": "https://www.imdb.com/poll/fg6_TtoEnjI/",
      "title": "The Best TV Episodes of 2020",
      "date": "2021/01/05",
      "homepage": "No",
      "votes": 503
    },
    {
      "url": "https://www.imdb.com/poll/cNLxDWerwC4/",
      "title": "Face-Off: 'Gangs of New York' vs. 'Gangs of Wasseypur'",
      "date": "2021/01/08",
      "homepage": "No",
      "votes": 170
    },
    {
      "url": "https://www.imdb.com/poll/lDKys_UQK5E/",
      "title": "The Best Documentaries of 2020",
      "date": "2021/01/10",
      "homepage": "No",
      "votes": 336
    },
    {
      "url": "https://www.imdb.com/poll/cF7sWoNjKDs/",
      "title": "Most Anticipated Superhero Movie of 2021 and Beyond",
      "date": "2021/01/11",
      "homepage": "No",
      "votes": 1261
    },
    {
      "url": "https://www.imdb.com/poll/M-aB2_wDUhM/",
      "title": "2020 in the IMDb Top 250 TV",
      "date": "2021/01/12",
      "homepage": "No",
      "votes": 478
    },
    {
      "url": "https://www.imdb.com/poll/22Zj7xImEFU/",
      "title": "IMDb Top 250 Family Movies",
      "date": "2021/01/13",
      "homepage": "No",
      "votes": 514
    },
    {
      "url": "https://www.imdb.com/poll/axXMDmL6IV0/",
      "title": "Face-Off: Bong Joon-ho's English Movies",
      "date": "2021/01/14",
      "homepage": "No",
      "votes": 209
    },
    {
      "url": "https://www.imdb.com/poll/g8e_1d3PFwk/",
      "title": "The Best 2020 Netflix Original Movies",
      "date": "2021/01/18",
      "homepage": "No",
      "votes": 717
    },
    {
      "url": "https://www.imdb.com/poll/fKDh4a86a-E/",
      "title": "IMDb Top 250 Romance Movies",
      "date": "2021/01/18",
      "homepage": "No",
      "votes": 611
    },
    {
      "url": "https://www.imdb.com/poll/SH7MB0Wu1jY/",
      "title": "25 Highest-Grossing Movies of 2020",
      "date": "2021/01/20",
      "homepage": "No",
      "votes": 589
    },
    {
      "url": "https://www.imdb.com/poll/1ukDNrpQS9E/",
      "title": "Most Anticipated Video Game of 2021",
      "date": "2021/01/21",
      "homepage": "Yes",
      "votes": 1664
    },
    {
      "url": "https://www.imdb.com/poll/nvfqbTBg5h4/",
      "title": "Face-Off: 'Memento' vs. 'Inception' vs. 'Tenet'",
      "date": "2021/01/22",
      "homepage": "No",
      "votes": 525
    },
    {
      "url": "https://www.imdb.com/poll/tb0ZfMR7Ndc/",
      "title": "TV Shows at 10 in 2021",
      "date": "2021/01/25",
      "homepage": "No",
      "votes": 521
    },
    {
      "url": "https://www.imdb.com/poll/sVBawtGBTVI/",
      "title": "David Fincher Movies of the 21st Century",
      "date": "2021/01/25",
      "homepage": "No",
      "votes": 432
    },
    {
      "url": "https://www.imdb.com/poll/q_ieFtwNuPE/",
      "title": "Face-Off: Thanos vs. Apocalypse",
      "date": "2021/01/28",
      "homepage": "No",
      "votes": 262
    },
    {
      "url": "https://www.imdb.com/poll/3cM80wlZyw4/",
      "title": "The Best 2020 Netflix Original Series",
      "date": "2021/02/01",
      "homepage": "No",
      "votes": 1057
    },
    {
      "url": "https://www.imdb.com/poll/WkcHsyNX0i4/",
      "title": "Favorite Multiplayer Video Game",
      "date": "2021/02/01",
      "homepage": "No",
      "votes": 367
    },
    {
      "url": "https://www.imdb.com/poll/5J0UWuNDn-w/",
      "title": "R.I.P. Hal Holbrook (1925-2021)",
      "date": "2021/02/03",
      "homepage": "No",
      "votes": 264
    },
    {
      "url": "https://www.imdb.com/poll/ybZUG-AF4o4/",
      "title": "The Best Animated Videos",
      "date": "2021/02/04",
      "homepage": "No",
      "votes": 253
    },
    {
      "url": "https://www.imdb.com/poll/pK3_ZWaZi14/",
      "title": "Prime Video India Original Series",
      "date": "2021/02/08",
      "homepage": "No",
      "votes": 183
    },
    {
      "url": "https://www.imdb.com/poll/VsvpAoVWgg0/",
      "title": "Golden Globes 2021 \u2014 Best Limited Series or Television Film",
      "date": "2021/02/11",
      "homepage": "No",
      "votes": 353
    },
    {
      "url": "https://www.imdb.com/poll/iZGQl0In_0c/",
      "title": "Golden Globes 2021 \u2014 Best Drama Series",
      "date": "2021/02/13",
      "homepage": "No",
      "votes": 323
    },
    {
      "url": "https://www.imdb.com/poll/3DNZRTX2DeU/",
      "title": "IMDb Poll Board: Happy Valentine's Day!",
      "date": "2021/02/14",
      "homepage": "No",
      "votes": 373
    },
    {
      "url": "https://www.imdb.com/poll/LPaK5MJsSvw/",
      "title": "Golden Globes 2021 \u2014 Best Musical/Comedy Series",
      "date": "2021/02/15",
      "homepage": "Yes",
      "votes": 610
    },
    {
      "url": "https://www.imdb.com/poll/KcNp0Cy8I6Q/",
      "title": "The Best History Movies of the 2010s",
      "date": "2021/02/15",
      "homepage": "No",
      "votes": 436
    },
    {
      "url": "https://www.imdb.com/poll/1oZhW02R_Ys/",
      "title": "Movie Stars in Video Games",
      "date": "2021/02/17",
      "homepage": "No",
      "votes": 321
    },
    {
      "url": "https://www.imdb.com/poll/hHZbLDAyYKY/",
      "title": "Golden Globes 2021 \u2014 Best Foreign Language Film",
      "date": "2021/02/18",
      "homepage": "No",
      "votes": 253
    },
    {
      "url": "https://www.imdb.com/poll/8_Sn87OMgwY/",
      "title": "Golden Globes 2021 \u2014 Best Performance by an Actress in a Drama Series",
      "date": "2021/02/21",
      "homepage": "No",
      "votes": 255
    },
    {
      "url": "https://www.imdb.com/poll/E9PWtSFd43Y/",
      "title": "Golden Globes 2021 \u2014 Best Supporting Actor in a Motion Picture",
      "date": "2021/02/22",
      "homepage": "No",
      "votes": 226
    },
    {
      "url": "https://www.imdb.com/poll/p9BXmz-OdW4/",
      "title": "Golden Globes 2021 \u2014 Best Supporting Actress in a Motion Picture",
      "date": "2021/02/22",
      "homepage": "No",
      "votes": 319
    },
    {
      "url": "https://www.imdb.com/poll/7uNwZ23nFuA/",
      "title": "Golden Globes 2021 \u2014 Best Director",
      "date": "2021/02/24",
      "homepage": "No",
      "votes": 309
    },
    {
      "url": "https://www.imdb.com/poll/rDIzKc6wxMc/",
      "title": "12 Scariest Horror Movies in Black Cinema",
      "date": "2021/02/25",
      "homepage": "No",
      "votes": 274
    },
    {
      "url": "https://www.imdb.com/poll/zLQ2qrXyk-4/",
      "title": "Golden Globes 2021 \u2014 Best Original Score",
      "date": "2021/02/25",
      "homepage": "No",
      "votes": 227
    },
    {
      "url": "https://www.imdb.com/poll/-utON8HjI-8/",
      "title": "Face-Off: 'Coco' vs. 'Soul'",
      "date": "2021/02/25",
      "homepage": "No",
      "votes": 350
    },
    {
      "url": "https://www.imdb.com/poll/yR3SFce5V-k/",
      "title": "Golden Globes 2021 \u2014 Best Performance by an Actor in a Drama Series",
      "date": "2021/02/25",
      "homepage": "No",
      "votes": 307
    },
    {
      "url": "https://www.imdb.com/poll/ebTPIQoBczI/",
      "title": "Favorite Superhero TV Show of 2020",
      "date": "2021/03/01",
      "homepage": "No",
      "votes": 406
    },
    {
      "url": "https://www.imdb.com/poll/I_RGW7_0i4s/",
      "title": "Most Golden Globe Wins - Motion Picture Performances",
      "date": "2021/03/03",
      "homepage": "No",
      "votes": 466
    },
    {
      "url": "https://www.imdb.com/poll/xDgPbVHdDqw/",
      "title": "Golden Globes 2021 \u2014 Films and Shows With Multiple Wins",
      "date": "2021/03/04",
      "homepage": "No",
      "votes": 356
    },
    {
      "url": "https://www.imdb.com/poll/PO3RPLZAMZ0/",
      "title": "Favorite Bollywood Actor - Female",
      "date": "2021/03/08",
      "homepage": "No",
      "votes": 211
    },
    {
      "url": "https://www.imdb.com/poll/iSrsxbMyGGI/",
      "title": "Multiple Golden Globe Winning Directors",
      "date": "2021/03/08",
      "homepage": "No",
      "votes": 331
    },
    {
      "url": "https://www.imdb.com/poll/SeqZsj8rMVA/",
      "title": "BAFTA 2021 \u2014 Films With Multiple Nominations",
      "date": "2021/03/11",
      "homepage": "Yes",
      "votes": 604
    },
    {
      "url": "https://www.imdb.com/poll/MHRDPLX-OEA/",
      "title": "BAFTA 2021 \u2014 Best Film",
      "date": "2021/03/15",
      "homepage": "No",
      "votes": 307
    },
    {
      "url": "https://www.imdb.com/poll/ZHtnoz7E7lw/",
      "title": "The Best International War Movies",
      "date": "2021/03/15",
      "homepage": "No",
      "votes": 384
    },
    {
      "url": "https://www.imdb.com/poll/Ie7O6xv0noU/",
      "title": "Bald Supervillains",
      "date": "2021/03/17",
      "homepage": "No",
      "votes": 403
    },
    {
      "url": "https://www.imdb.com/poll/ktftayX6LPU/",
      "title": "Face-Off: Mr. Bean: Movie vs. TV Show",
      "date": "2021/03/19",
      "homepage": "No",
      "votes": 224
    },
    {
      "url": "https://www.imdb.com/poll/qtROu6XCycc/",
      "title": "Favorite Poster From the Snyder Cut",
      "date": "2021/03/21",
      "homepage": "No",
      "votes": 309
    },
    {
      "url": "https://www.imdb.com/poll/-E9-cJU5Nao/",
      "title": "Korean Films With Most Votes",
      "date": "2021/03/22",
      "homepage": "No",
      "votes": 779
    },
    {
      "url": "https://www.imdb.com/poll/DYwQTug-zTk/",
      "title": "The Best Superhero Video Games",
      "date": "2021/03/23",
      "homepage": "No",
      "votes": 286
    },
    {
      "url": "https://www.imdb.com/poll/U_0Rw0mW8Eo/",
      "title": "Favorite Movie From the DCAMU",
      "date": "2021/03/25",
      "homepage": "No",
      "votes": 191
    },
    {
      "url": "https://www.imdb.com/poll/CtjpoKHRuXQ/",
      "title": "Best Original Score Winners (2000s-2010s)",
      "date": "2021/03/29",
      "homepage": "No",
      "votes": 341
    },
    {
      "url": "https://www.imdb.com/poll/OJ0r3__cCgQ/",
      "title": "The Most Binged TV Shows of 2020",
      "date": "2021/03/31",
      "homepage": "Yes",
      "votes": 1607
    },
    {
      "url": "https://www.imdb.com/poll/pw9ePAlp8l8/",
      "title": "TV Shows at 20 in 2021",
      "date": "2021/04/05",
      "homepage": "No",
      "votes": 320
    },
    {
      "url": "https://www.imdb.com/poll/8S4uAebV0Dg/",
      "title": "Best Score Winners (1980s-1990s)",
      "date": "2021/04/06",
      "homepage": "No",
      "votes": 284
    },
    {
      "url": "https://www.imdb.com/poll/rbjHTPxCgvU/",
      "title": "Best Score Winners of the 1970s",
      "date": "2021/04/07",
      "homepage": "No",
      "votes": 241
    },
    {
      "url": "https://www.imdb.com/poll/ja5FXNXcYgo/",
      "title": "Best Score Winners of the 1960s",
      "date": "2021/04/08",
      "homepage": "No",
      "votes": 227
    },
    {
      "url": "https://www.imdb.com/poll/p7ab0_cytzA/",
      "title": "Best Score Winners of the 1950s",
      "date": "2021/04/11",
      "homepage": "No",
      "votes": 170
    },
    {
      "url": "https://www.imdb.com/poll/ksWtH8_b-8w/",
      "title": "Best Score Winners (1930s-1940s)",
      "date": "2021/04/12",
      "homepage": "No",
      "votes": 174
    },
    {
      "url": "https://www.imdb.com/poll/pb5Wuiu0PII/",
      "title": "Favorite 2020 TV Poster",
      "date": "2021/04/14",
      "homepage": "No",
      "votes": 395
    },
    {
      "url": "https://www.imdb.com/poll/O6UXEfFLZyM/",
      "title": "Celebrities Named Daniel",
      "date": "2021/04/17",
      "homepage": "No",
      "votes": 315
    },
    {
      "url": "https://www.imdb.com/poll/sE4Udeek8vE/",
      "title": "Oscar-Nominated Animated Movies for Best Score",
      "date": "2021/04/21",
      "homepage": "No",
      "votes": 275
    },
    {
      "url": "https://www.imdb.com/poll/ekhRgPME0Lo/",
      "title": "The Best Miniseries of 2020",
      "date": "2021/04/24",
      "homepage": "No",
      "votes": 349
    },
    {
      "url": "https://www.imdb.com/poll/ocNaGl1NRd4/",
      "title": "Favorite 2020 Movie Poster",
      "date": "2021/04/26",
      "homepage": "No",
      "votes": 436
    },
    {
      "url": "https://www.imdb.com/poll/H_X3o5CjJ0k/",
      "title": "IMDb Top 250 Films With Most Oscars",
      "date": "2021/05/01",
      "homepage": "No",
      "votes": 338
    },
    {
      "url": "https://www.imdb.com/poll/PJf41GYJyIA/",
      "title": "The Best First-Person Shooter Video Games",
      "date": "2021/05/09",
      "homepage": "No",
      "votes": 288
    },
    {
      "url": "https://www.imdb.com/poll/KuUvw7hKGRk/",
      "title": "The Best Drama Movies of the 2010s",
      "date": "2021/05/13",
      "homepage": "No",
      "votes": 935
    },
    {
      "url": "https://www.imdb.com/poll/pcWbGU4Wkqk/",
      "title": "Best of Cillian Murphy",
      "date": "2021/05/24",
      "homepage": "No",
      "votes": 421
    },
    {
      "url": "https://www.imdb.com/poll/GXgWwxa8mOA/",
      "title": "Face-Off: Baahubali: 'The Beginning' vs. 'The Conclusion'",
      "date": "2021/05/28",
      "homepage": "No",
      "votes": 88
    },
    {
      "url": "https://www.imdb.com/poll/SpEIi-Kup1E/",
      "title": "Oscar Winning Comic Book Movies",
      "date": "2021/05/30",
      "homepage": "Yes",
      "votes": 1074
    },
    {
      "url": "https://www.imdb.com/poll/PrLBLo1asP0/",
      "title": "Favorite Colin Farrell Movie",
      "date": "2021/05/31",
      "homepage": "No",
      "votes": 396
    },
    {
      "url": "https://www.imdb.com/poll/qfvwxJ0fUGg/",
      "title": "The Best Movies of 2020",
      "date": "2021/06/03",
      "homepage": "No",
      "votes": 841
    },
    {
      "url": "https://www.imdb.com/poll/O0wY99gYyXU/",
      "title": "The Best South Indian Movies",
      "date": "2021/06/07",
      "homepage": "No",
      "votes": 298
    },
    {
      "url": "https://www.imdb.com/poll/RLrTri_sh0Q/",
      "title": "Favorite Natalie Portman Movie",
      "date": "2021/06/08",
      "homepage": "Yes",
      "votes": 1490
    },
    {
      "url": "https://www.imdb.com/poll/yGfiXFfVYDw/",
      "title": "Favorite SnyderVerse Movie",
      "date": "2021/06/11",
      "homepage": "No",
      "votes": 308
    },
    {
      "url": "https://www.imdb.com/poll/N6l37ZWXOg0/",
      "title": "Favorite Chris Evans Movie",
      "date": "2021/06/13",
      "homepage": "No",
      "votes": 381
    },
    {
      "url": "https://www.imdb.com/poll/Lm2wKZBZPCI/",
      "title": "The Best Action Movies of the 2010s",
      "date": "2021/06/14",
      "homepage": "No",
      "votes": 602
    },
    {
      "url": "https://www.imdb.com/poll/Z-tXdCqVbTs/",
      "title": "Multiple Oscar-Winning Screenwriters",
      "date": "2021/06/16",
      "homepage": "No",
      "votes": 252
    },
    {
      "url": "https://www.imdb.com/poll/sQHFhZzSOIg/",
      "title": "Favorite Steven Spielberg Movie Poster",
      "date": "2021/06/17",
      "homepage": "No",
      "votes": 412
    },
    {
      "url": "https://www.imdb.com/poll/JOXiO3sOKaA/",
      "title": "Best Indian Revenge Movie",
      "date": "2021/06/21",
      "homepage": "No",
      "votes": 146
    },
    {
      "url": "https://www.imdb.com/poll/ooQZwYVaeHA/",
      "title": "IMDb Poll Board: Favorite Movie Starting With \"A\"",
      "date": "2021/06/23",
      "homepage": "No",
      "votes": 387
    },
    {
      "url": "https://www.imdb.com/poll/DFqXY5dvLkM/",
      "title": "Rotten Tomatoes: Top Animated Movies",
      "date": "2021/06/26",
      "homepage": "No",
      "votes": 384
    },
    {
      "url": "https://www.imdb.com/poll/lt-OEdVDq2o/",
      "title": "Favorite 'Fast & Furious' Poster",
      "date": "2021/06/27",
      "homepage": "No",
      "votes": 214
    },
    {
      "url": "https://www.imdb.com/poll/VmG2PFx4byU/",
      "title": "The Best International Crime Movies",
      "date": "2021/07/05",
      "homepage": "No",
      "votes": 270
    },
    {
      "url": "https://www.imdb.com/poll/LajPwBDWL3Y/",
      "title": "IMDb Top 250 Films With Most Golden Globes",
      "date": "2021/07/05",
      "homepage": "No",
      "votes": 290
    },
    {
      "url": "https://www.imdb.com/poll/xbqVEsQEk6k/",
      "title": "Film Within a Film",
      "date": "2021/07/06",
      "homepage": "No",
      "votes": 365
    },
    {
      "url": "https://www.imdb.com/poll/VJXDWWesc3w/",
      "title": "Favorite Movie Poster \u2014 'Black Widow'",
      "date": "2021/07/11",
      "homepage": "No",
      "votes": 274
    },
    {
      "url": "https://www.imdb.com/poll/kQrC3kSlmJY/",
      "title": "Leonardo DiCaprio's Favorite Films",
      "date": "2021/07/12",
      "homepage": "No",
      "votes": 391
    },
    {
      "url": "https://www.imdb.com/poll/9a0hbtkg-0s/",
      "title": "Most Anticipated Upcoming Movies Based on a Book",
      "date": "2021/07/15",
      "homepage": "Yes",
      "votes": 1762
    },
    {
      "url": "https://www.imdb.com/poll/AiD1YCj1Ci8/",
      "title": "Superheroes in Black",
      "date": "2021/07/20",
      "homepage": "No",
      "votes": 305
    },
    {
      "url": "https://www.imdb.com/poll/hDzhhtM_clQ/",
      "title": "Face-Off: 'Lucy' vs. 'Ghost in the Shell' vs. 'Black Widow'",
      "date": "2021/07/23",
      "homepage": "No",
      "votes": 256
    },
    {
      "url": "https://www.imdb.com/poll/dzjM0Q3o1l8/",
      "title": "IMDb Top 250 Superhero TV Shows",
      "date": "2021/07/25",
      "homepage": "No",
      "votes": 315
    },
    {
      "url": "https://www.imdb.com/poll/bTpjGsHLEs8/",
      "title": "The Best Adventure Movies of the 2010s",
      "date": "2021/07/26",
      "homepage": "No",
      "votes": 437
    },
    {
      "url": "https://www.imdb.com/poll/2pkUCzvZVWY/",
      "title": "Sci-Fi Movies That Need a Sequel",
      "date": "2021/08/02",
      "homepage": "Yes",
      "votes": 1535
    },
    {
      "url": "https://www.imdb.com/poll/BX7yifzMo5Y/",
      "title": "Face-Off: Snowpiercer: Movie vs. TV Show",
      "date": "2021/08/06",
      "homepage": "No",
      "votes": 163
    },
    {
      "url": "https://www.imdb.com/poll/oUJTOWgO1tI/",
      "title": "Favorite Character Poster \u2014 'The Suicide Squad'",
      "date": "2021/08/10",
      "homepage": "No",
      "votes": 226
    },
    {
      "url": "https://www.imdb.com/poll/24SVzpIGhg8/",
      "title": "Movies & Shows With Tom Hardy and Cillian Murphy",
      "date": "2021/08/13",
      "homepage": "No",
      "votes": 319
    },
    {
      "url": "https://www.imdb.com/poll/tJ8KGliwIP0/",
      "title": "Face-Off: 'Black Widow' vs. 'The Suicide Squad'",
      "date": "2021/08/27",
      "homepage": "No",
      "votes": 275
    },
    {
      "url": "https://www.imdb.com/poll/P4p_pgt2qDo/",
      "title": "Favorite Tommy Lee Jones Film",
      "date": "2021/09/13",
      "homepage": "No",
      "votes": 306
    },
    {
      "url": "https://www.imdb.com/poll/MIiZHK_psc4/",
      "title": "The Best Female Superhero Movies",
      "date": "2021/09/19",
      "homepage": "No",
      "votes": 470
    },
    {
      "url": "https://www.imdb.com/poll/ibiTiJO_HwE/",
      "title": "Favorite Movie Poster \u2014 'Dune'",
      "date": "2021/09/22",
      "homepage": "No",
      "votes": 290
    },
    {
      "url": "https://www.imdb.com/poll/Rhkww_BeUVM/",
      "title": "What Is the Hardest Video Game of All Time?",
      "date": "2021/09/23",
      "homepage": "No",
      "votes": 148
    },
    {
      "url": "https://www.imdb.com/poll/tls8u3D1pOo/",
      "title": "IMDb Poll Board: Top 5 Action Movies",
      "date": "2021/09/25",
      "homepage": "No",
      "votes": 401
    },
    {
      "url": "https://www.imdb.com/poll/9PlQAbPQY2g/",
      "title": "Movies at 50 in 2021",
      "date": "2021/09/25",
      "homepage": "Yes",
      "votes": 1173
    },
    {
      "url": "https://www.imdb.com/poll/aw-e5DZ_OD4/",
      "title": "IMDb Poll Board: Favorite Movie Starting With \"B\"",
      "date": "2021/10/02",
      "homepage": "No",
      "votes": 345
    },
    {
      "url": "https://www.imdb.com/poll/laeNLiHzv5s/",
      "title": "R-Rated Films With One Million Votes",
      "date": "2021/10/07",
      "homepage": "No",
      "votes": 407
    },
    {
      "url": "https://www.imdb.com/poll/C1pUv512J1g/",
      "title": "Deadliest Games in Films and Shows",
      "date": "2021/10/09",
      "homepage": "No",
      "votes": 426
    },
    {
      "url": "https://www.imdb.com/poll/zXxbwzC3LCE/",
      "title": "Movies at 10 in 2021",
      "date": "2021/10/17",
      "homepage": "No",
      "votes": 406
    },
    {
      "url": "https://www.imdb.com/poll/DrmPliGFPLU/",
      "title": "IMDb Top 250 Sport Movies",
      "date": "2021/10/21",
      "homepage": "No",
      "votes": 285
    },
    {
      "url": "https://www.imdb.com/poll/IwS3mwvfHiQ/",
      "title": "Face-Off: 'Arrival' vs. 'Blade Runner 2049' vs. 'Dune'",
      "date": "2021/10/22",
      "homepage": "No",
      "votes": 346
    },
    {
      "url": "https://www.imdb.com/poll/2eu3K6leI9Q/",
      "title": "Movies at 20 in 2021",
      "date": "2021/10/24",
      "homepage": "No",
      "votes": 429
    },
    {
      "url": "https://www.imdb.com/poll/cfpwI92g5wo/",
      "title": "Favorite Spider-Man Video Game",
      "date": "2021/11/01",
      "homepage": "No",
      "votes": 182
    },
    {
      "url": "https://www.imdb.com/poll/VrULzcCfbfU/",
      "title": "Best Christopher Nolan Movie Soundtrack",
      "date": "2021/11/08",
      "homepage": "No",
      "votes": 308
    },
    {
      "url": "https://www.imdb.com/poll/5t10J0fZKA8/",
      "title": "Favorite \"BB Ki Vines\" Character",
      "date": "2021/11/15",
      "homepage": "No",
      "votes": 93
    },
    {
      "url": "https://www.imdb.com/poll/dS8RxijKq9M/",
      "title": "The Best Thriller Movies of the 2010s",
      "date": "2021/11/18",
      "homepage": "Yes",
      "votes": 1136
    },
    {
      "url": "https://www.imdb.com/poll/qeACMqljWC0/",
      "title": "Most Anticipated TV Show of 2022",
      "date": "2021/11/27",
      "homepage": "No",
      "votes": 298
    },
    {
      "url": "https://www.imdb.com/poll/ZUMJW_Gnga4/",
      "title": "Far Cry Video Games",
      "date": "2021/12/01",
      "homepage": "No",
      "votes": 98
    },
    {
      "url": "https://www.imdb.com/poll/wxAod_IdpM0/",
      "title": "Abracadabra",
      "date": "2021/12/06",
      "homepage": "No",
      "votes": 149
    },
    {
      "url": "https://www.imdb.com/poll/sZ6XuF5bF_g/",
      "title": "The Best Dystopian Movies",
      "date": "2021/12/08",
      "homepage": "No",
      "votes": 397
    },
    {
      "url": "https://www.imdb.com/poll/zIdChpZ08vM/",
      "title": "Most Anticipated Animated Movie of 2022",
      "date": "2021/12/09",
      "homepage": "Yes",
      "votes": 644
    },
    {
      "url": "https://www.imdb.com/poll/vVyatxh4gKo/",
      "title": "Best Disney Biopic",
      "date": "2021/12/11",
      "homepage": "No",
      "votes": 185
    },
    {
      "url": "https://www.imdb.com/poll/rVOmEZ4WV10/",
      "title": "Most-Viewed Trailers of 2021",
      "date": "2021/12/14",
      "homepage": "No",
      "votes": 164
    },
    {
      "url": "https://www.imdb.com/poll/64hwPBdkv_Q/",
      "title": "Col Needham's Best Movies of 2021",
      "date": "2021/12/16",
      "homepage": "No",
      "votes": 5
    }
  ]
}
const test = []
for (var i = 0; i < mydata.polls.length; i++) {
  var year = mydata.polls[i].date.split('/')[0]
  var month = mydata.polls[i].date.split('/')[1]
  var day = mydata.polls[i].date.split('/')[2]
  if (year == 2021) {
    test.push(month)
  }
}
const counts = {};
test.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log();