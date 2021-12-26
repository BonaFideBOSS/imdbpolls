const file = new XMLHttpRequest();
file.open("GET", "pollData/allimdbpolls.json");
file.send();
file.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var pollData = JSON.parse(file.responseText)
    var authors = pollData.authors
    var polls = pollData.polls

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

    var table = document.getElementById('allimdbpolls')
    var tablebody = table.getElementsByTagName('tbody')[0]

    for (var i = 0; i < polls.length; i++) {
      $(tablebody).append('<tr><td>' + (i + 1) + '</td>' +
        '<td nowrap><a href="' + polls[i].url + '" target=""_blank>' + polls[i].title + '</a></td>' +
        '<td><a href="/user#' + polls[i].authorid + '" target="_blank">' + polls[i].author + '</a></td>' +
        '<td>' + polls[i].date + '</td>' +
        '<td>' + polls[i].votes.toLocaleString() + '</td>' +
        '<td>' + polls[i].featured + '</td></tr>')
    }

    var authoroptions = yearoptions = '<option value="">All</option>';
    for (var i = 0; i < authorlist.length; i++) {
      authoroptions += '<option value="' + authorlist[i] + '">' + authorlist[i] + '</option>';
    }
    for (var i = 2013; i <= new Date().getFullYear(); i++) {
      yearoptions += "<option>" + i + "</option>";
    }
    $('#author-list').html(authoroptions)
    $('#year-filter').html(yearoptions)

    $(document).ready(function () {
      var polltable = $(table).DataTable({
        "order": [
          [4, "desc"]
        ],
        "lengthMenu": [
          [10, 25, 50, 100, 250],
          [10, 25, 50, 100, 250]
        ]
      });

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
        $('#sum-votes').html(sumvotes)
        $('#sum-features').html(sumhp)
      }
      tableTotal()
      $('.custom-filter select,#allimdbpolls_length select').on('change', function () {
        tableTotal()
      })
      $('#allimdbpolls_filter input,.custom-filter input').on('input', function () {
        tableTotal()
      })
      $('#allimdbpolls thead .sorting,#allimdbpolls_paginate').on('click', function () {
        tableTotal()
      })

      $('.data-loader.loader-one').hide()
      $('main').show()

    });
  }
}

function arrayUnique(value, index, self) {
  return self.indexOf(value) === index;
}