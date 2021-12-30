const file = new XMLHttpRequest();
file.open("GET", "pollData/allimdbpolls.json");
file.send();
file.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var pollData = JSON.parse(file.responseText)
    var authors = pollData.authors
    var polls = pollData.polls

    var authorData = polls.reduce(function (r, e) {
      if (!r[e.authorid]) {
        r[e.authorid] = {
          author: "",
          polls: 0,
          votes: 0,
          features: 0
        }
      }
      r[e.authorid].author = e.author
      r[e.authorid].polls += 1
      r[e.authorid].votes += e.votes
      var f = e.featured.toLowerCase() == 'yes' ? f = 1 : f = 0
      r[e.authorid].features += f
      return r
    }, {})

    var authorlist = []
    for (var i = 0; i < authors.length; i++) {
      var authorname = polls.filter(obj => {
        return obj['authorid'] === authors[i].authorid
      })
      authorlist.push(authorname[0].author)
    }
    authorlist = authorlist.sort()

    $('#total-polls').html(pollData.totalpolls.toLocaleString())
    $('#total-authors').html(pollData.totalauthors.toLocaleString())
    $('#total-votes').html(pollData.totalvotes.toLocaleString())

    $('#poll-search').on('input', function () {
      var keywords = []
      var searchoptions = '';
      var filteredlist = []
      var imgurl = 'img/imdbpoll.png'
      if ($(this).val().length >= 2) {
        keywords = $('#poll-search').val().toLowerCase().split(" ")
        if ($('#search-filter').val() == 'poll') {
          for (var i = 0; i < polls.length; i++) {
            if (keywords.every(item => polls[i].title.toLowerCase().includes(item))) {
              filteredlist.push(polls[i])
              filteredlist = filteredlist.reverse()
            }
          }
          if (filteredlist.length != 0) {
            for (var i = 0; i < filteredlist.length; i++) {
              if (i < 5) {
                var avatar = authors.find(entry => entry.authorid == filteredlist[i].authorid).avatar
                if (avatar != "") {
                  imgurl = avatar
                }
                searchoptions += '<div class="card">' +
                  '<a class="card-body" href="' + filteredlist[i].url + '" target="_blank">' +
                  '<img src="' + imgurl + '">' +
                  '<div>' +
                  '<span><h6>' + filteredlist[i].title + '</h6>' +
                  '<pre>Poll by ' + filteredlist[i].author + '</pre></span>' +
                  '<pre class="text-end">' + filteredlist[i].date + '<br>' +
                  filteredlist[i].votes.toLocaleString() + ' votes</pre>' +
                  '</div></a></div>'
              }
            }
          } else {
            searchoptions = 'No poll found.'
          }
        } else if ($('#search-filter').val() == 'author') {
          for (const i in authorData) {
            if (Object.hasOwnProperty.call(authorData, i)) {
              const element = authorData[i];
              if (element.author.toLowerCase().includes($('#poll-search').val().toLowerCase())) {
                var avatar = authors.find(entry => entry.authorid == i).avatar
                if (avatar != "") {
                  imgurl = avatar
                }
                searchoptions += '<div class="card">' +
                  '<a class="card-body" href="user#' + i + '">' +
                  '<img src="' + imgurl + '"><h6>' + element.author + '</h6>' +
                  '<pre>Polls: ' + element.polls + ' | Votes: ' + element.votes + ' | Features: ' + element.features + '</pre></a></div>'
              }
            }
          }
        }
        $('#search-result').show()
        $('#search-result').html(searchoptions)
        if ($('#search-result').html() == 0) {
          $('#search-result').html('No author found.')
        }
      } else {
        $('#search-result').hide()
      }
    })

    var table = document.getElementById('allimdbpolls')
    var tablebody = table.getElementsByTagName('tbody')[0]
    var tablecaption = table.getElementsByTagName('caption')[0]

    for (var i = 0; i < polls.length; i++) {
      $(tablebody).append('<tr><td></td>' +
        '<td nowrap><a href="' + polls[i].url + '" target="_blank">' + polls[i].title + '</a></td>' +
        '<td><a href="user#' + polls[i].authorid + '">' + polls[i].author + '</a></td>' +
        '<td>' + polls[i].date + '</td>' +
        '<td>' + polls[i].votes.toLocaleString() + '</td>' +
        '<td>' + polls[i].featured + '</td>' +
        '<td>' + polls[i].status + '</td></tr>')
    }
    $(tablecaption).html('Data as of ' + pollData.lastupdated + ' (' + timelapse(pollData.rawdate) + ')')

    var authoroptions = yearoptions = '<option value="">All</option>';
    for (var i = 0; i < authorlist.length; i++) {
      authoroptions += '<option value="' + authorlist[i] + '">' + authorlist[i] + '</option>';
    }
    for (var i = 2013; i <= new Date().getFullYear(); i++) {
      yearoptions += "<option>" + i + "</option>";
    }
    $('#author-list').html(authoroptions)
    $('#year-filter').html(yearoptions)

    var leaderboard = document.getElementById('leaderboard')
    var lbbody = leaderboard.getElementsByTagName('tbody')[0]

    for (const i in authorData) {
      if (Object.hasOwnProperty.call(authorData, i)) {
        const element = authorData[i];
        var avatar = authors.find(entry => entry.authorid == i).avatar
        if (avatar == "") {
          avatar = 'img/imdbpoll.png'
        }
        $(lbbody).append('<tr><td></td>' +
          '<td><img src="' + avatar + '"></td>' +
          '<td nowrap>' + element.author + '</td>' +
          '<td>' + element.polls + '</td>' +
          '<td>' + element.votes.toLocaleString() + '</td>' +
          '<td>' + element.features + '</td></tr>')
      }
    }

    $(document).ready(function () {
      var polltable = $(table).DataTable({
        "order": [
          [4, "desc"]
        ],
        "lengthMenu": [
          [10, 25, 50, 100, 250],
          [10, 25, 50, 100, 250]
        ],
        "columnDefs": [{
          "targets": [0],
          "orderable": false
        }]
      });

      function pollranking() {
        var lbrow = document.querySelectorAll('#allimdbpolls tbody tr')
        var pagelength = document.getElementById('allimdbpolls_length').getElementsByTagName('select')[0].value
        var currentpage = $('#allimdbpolls_paginate .paginate_button.current').html()
        var startingrank = pagelength * currentpage - pagelength
        for (var i = 0; i < lbrow.length; i++) {
          if (lbrow[i].querySelectorAll('td')[0].classList.contains('dataTables_empty')) {} else {
            startingrank = startingrank + 1
            lbrow[i].querySelectorAll('td')[0].innerHTML = startingrank
          }
        }
      }

      function pollrankingbottom() {
        var pollrowtotal = polltable.rows({
          search: 'applied'
        }).count()
        var lbrow = document.querySelectorAll('#allimdbpolls tbody tr')
        var pagelength = document.getElementById('allimdbpolls_length').getElementsByTagName('select')[0].value
        var currentpage = $('#allimdbpolls_paginate .paginate_button.current').html()
        var startingrank = pagelength * currentpage - pagelength
        startingrank = pollrowtotal - startingrank
        for (var i = 0; i < lbrow.length; i++) {
          if (lbrow[i].querySelectorAll('td')[0].classList.contains('dataTables_empty')) {} else {
            lbrow[i].querySelectorAll('td')[0].innerHTML = startingrank--
          }
        }
      }

      $('#author-filter').on('change', function () {
        var selectedValue = $(this).val();
        polltable.columns(2).search(selectedValue).draw();
      });
      $('#year-filter').on('change', function () {
        var selectedValue = $(this).val();
        polltable.columns(3).search(selectedValue).draw();
      });
      $('#hp-filter').on('change', function () {
        var selectedValue = $(this).val();
        polltable.columns(5).search(selectedValue).draw();
      });
      $('#status-filter').on('change', function () {
        var selectedValue = $(this).val();
        polltable.columns(6).search(selectedValue).draw();
      });

      function tableTotal() {
        var row = document.querySelectorAll('#allimdbpolls tbody tr')
        var sumauthors = [];
        var sumvotes = 0;
        var sumhp = 0;
        for (var i = 0; i < row.length; i++) {
          if (row[i].querySelectorAll('td')[0].classList.contains('dataTables_empty')) {} else {
            sumauthors.push(row[i].querySelectorAll('td')[2].textContent)
            sumvotes += parseInt(row[i].querySelectorAll('td')[4].textContent.replace(',', ''))
            if ((row[i].querySelectorAll('td')[5].innerHTML).toLowerCase() == "yes") {
              sumhp = sumhp + 1
            }
          }
        }
        $('#sum-authors').html(sumauthors.filter(arrayUnique).length)
        $('#sum-votes').html(sumvotes.toLocaleString())
        $('#sum-features').html(sumhp)
      }

      tableTotal()
      pollranking()
      $('.custom-filter select,#allimdbpolls_length select,#author-filter').on('change', function () {
        tableTotal()
        if ($('#allimdbpolls thead .sorting').hasClass('sorting_desc')) {
          pollranking();
        } else {
          pollrankingbottom();
        }
      })
      $('#allimdbpolls_filter input').on('input', function () {
        tableTotal()
        if ($('#allimdbpolls thead .sorting').hasClass('sorting_desc')) {
          pollranking();
        } else {
          pollrankingbottom();
        }
      })
      $('#allimdbpolls thead .sorting,#allimdbpolls_paginate').on('click', function () {
        tableTotal()
        if ($('#allimdbpolls thead .sorting').hasClass('sorting_desc')) {
          pollranking();
        } else {
          pollrankingbottom();
        }
      })

      var lbtable = $(leaderboard).DataTable({
        "order": [
          [4, "desc"]
        ],
        "columnDefs": [{
          "targets": [0, 1, 2],
          "orderable": false
        }]
      });

      function ranking() {
        var lbrow = document.querySelectorAll('#leaderboard tbody tr')
        var pagelength = document.getElementById('leaderboard_length').getElementsByTagName('select')[0].value
        var currentpage = $('#leaderboard_paginate .paginate_button.current').html()
        var startingrank = pagelength * currentpage - pagelength
        for (var i = 0; i < lbrow.length; i++) {
          if (lbrow[i].querySelectorAll('td')[0].classList.contains('dataTables_empty')) {} else {
            startingrank = startingrank + 1
            lbrow[i].querySelectorAll('td')[0].innerHTML = startingrank
          }
        }
      }

      function rankingbottom() {
        lbrowtotal = lbtable.rows({
          search: 'applied'
        }).count()
        var lbrow = document.querySelectorAll('#leaderboard tbody tr')
        var pagelength = document.getElementById('leaderboard_length').getElementsByTagName('select')[0].value
        var currentpage = $('#leaderboard_paginate .paginate_button.current').html()
        var startingrank = pagelength * currentpage - pagelength
        startingrank = lbrowtotal - startingrank
        for (var i = 0; i < lbrow.length; i++) {
          if (lbrow[i].querySelectorAll('td')[0].classList.contains('dataTables_empty')) {} else {
            lbrow[i].querySelectorAll('td')[0].innerHTML = startingrank--
          }
        }
      }
      ranking();
      $('#leaderboard_length select').on('change', function () {
        if ($('#leaderboard thead .sorting').hasClass('sorting_desc')) {
          ranking();
        } else {
          rankingbottom();
        }
      })
      $('#leaderboard_filter input').on('input', function () {
        if ($('#leaderboard thead .sorting').hasClass('sorting_desc')) {
          ranking();
        } else {
          rankingbottom();
        }
      })
      $('#leaderboard thead .sorting,#leaderboard_paginate').on('click', function () {
        if ($('#leaderboard thead .sorting').hasClass('sorting_desc')) {
          ranking();
        } else {
          rankingbottom();
        }
      })

      lbtable.on('draw', function () {
        console.log('rows count:', lbtable.rows({
          search: 'applied'
        }).count());
      });


      $('.data-loader.loader-one').hide()
      $('main').show()

    });
  }
}

function arrayUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function timelapse(date) {
  var currentDateTime = new Date()
  var difference = Math.abs(currentDateTime - new Date(date))

  var mm = difference;
  var sec = Math.ceil(difference / (1000))
  var min = Math.ceil(difference / (1000 * 60))
  var hr = Math.round(difference / (1000 * 60 * 60))
  var day = Math.round(difference / (1000 * 60 * 60 * 24))
  var month = Math.round(difference / (1000 * 60 * 60 * 24 * 30))
  var year = Math.round(difference / (1000 * 60 * 60 * 24 * 30 * 12))

  difference = mm + ' milliseconds ago';
  if (sec >= 1 && sec < 60) {
    var text = (sec > 1) ? ' seconds ago' : ' second ago'
    difference = sec + text;
  } else if (min >= 1 && min < 60) {
    var text = (min > 1) ? ' minutes ago' : ' minute ago'
    difference = min + text;
  } else if (hr >= 1 && hr < 24) {
    var text = (hr > 1) ? ' hours ago' : ' hour ago'
    difference = hr + text
  } else if (day >= 1 && day < 30) {
    var text = (day > 1) ? ' days ago' : ' day ago'
    difference = day + text
  } else if (month >= 1 && month < 12) {
    var text = (month > 1) ? ' months ago' : ' month ago'
    difference = month + text
  } else if (year >= 1) {
    var text = (year > 1) ? ' years ago' : ' year ago'
    difference = year + text
  }
  return difference
}