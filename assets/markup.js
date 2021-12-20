(function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

var toastTrigger = document.getElementById('share-btn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

var userinput = document.getElementById('userinput')
var livepreview = document.getElementById('livepreview')

$(userinput).on('input', function () {
  markdown();
});

function markdown() {
  text = userinput.value
  var marked = text.replaceAll('\n', '<br>')
  marked = marked.replaceAll('[b]', '<b>')
  marked = marked.replaceAll('[/b]', '</b>')
  marked = marked.replaceAll('[i]', '<i>')
  marked = marked.replaceAll('[/i]', '</i>')
  marked = marked.replaceAll('[u]', '<u>')
  marked = marked.replaceAll('[/u]', '</u>')
  marked = marked.replaceAll('[quote]', '<blockquote><hr>')
  marked = marked.replaceAll('[/quote]', '<hr></blockquote>')
  marked = marked.replaceAll('<br>- ', '<li>')
  marked = marked.replaceAll('[red]', '<font color="red">')
  marked = marked.replaceAll('[/red]', '</font>')
  marked = marked.replaceAll('[blue]', '<font color="blue">')
  marked = marked.replaceAll('[/blue]', '</font>')
  marked = marked.replaceAll('[green]', '<font color="green">')
  marked = marked.replaceAll('[/green]', '</font>')
  marked = marked.replaceAll('[orange]', '<font color="orange">')
  marked = marked.replaceAll('[/orange]', '</font>')
  marked = marked.replaceAll('[yellow]', '<font color="yellow">')
  marked = marked.replaceAll('[/yellow]', '</font>')
  marked = marked.replaceAll('[purple]', '<font color="purple">')
  marked = marked.replaceAll('[/purple]', '</font>')
  marked = marked.replaceAll('[spoiler]', '<span class="spoiler"><span>')
  marked = marked.replaceAll('[/spoiler]', '</span></span>')

  marked = marked.replaceAll('[url]', '<a class="markuplink">')
  marked = marked.replaceAll('[/url]', '</a>')

  urls = marked.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)
  var markuplink = document.querySelectorAll('.markuplink')
  for (var i = 0; i < markuplink.length; i++) {
    markuplink[i].setAttribute('href', urls[i])
  }

  livepreview.innerHTML = marked
}