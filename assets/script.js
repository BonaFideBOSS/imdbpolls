const file = new XMLHttpRequest();
file.open("GET", "imdbpolls.txt");
file.send();
file.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(file.responseText)

    var totalVotes = mydata.totalvotes
    var lastUpdated = mydata.lastupdated
    var totalHomepagePolls = mydata.totalhomepagepolls

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
    f2.setAttribute("id", "totalvotes")
    var f3 = document.createElement('th')
    f3.setAttribute("id", "totalHomepagePolls")
    var foot1 = document.createTextNode('Total')
    var foot2 = document.createTextNode(totalVotes)
    var foot3 = document.createTextNode(totalHomepagePolls)
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
  }
}

function updateSubTotal() {
  var table = document.getElementById("imdbpolls");
  let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
    return total + parseFloat(row.cells[3].innerHTML);
  }, 0);
  console.log(subTotal)
}