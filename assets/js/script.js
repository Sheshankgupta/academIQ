window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navExpand").style.opacity = "0";
      document.getElementById("navCompact").style.pointerEvents = "none";
      document.getElementById("navCompact").style.opacity = "1";
      document.getElementById("navCompact").style.pointerEvents = "unset";
    } else {
    document.getElementById("navExpand").style.opacity = "1";
    document.getElementById("navCompact").style.pointerEvents = "unset";
    document.getElementById("navCompact").style.opacity = "0";
    document.getElementById("navCompact").style.pointerEvents = "none";
  }
}