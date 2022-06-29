javascript: (function () {
  let currentUrl = window.location.href;
  let currentUrlPath = window.location.pathname;
  let siBaseUrl =
    "https://my2.siteimprove.com/QualityAssurance/1112165/Overview/Search?SearchIn=Url&Query=";
  if (currentUrl.includes("gov.uk")) {
    let siLink = siBaseUrl + currentUrlPath.replace(/\//g, "%2F");
    location = siLink;
  } else {
    let siUrl = prompt("Enter a url to search for in siteimprove:\r\ne.g. '/contact-dfe'", "");
    let slug = siUrl.replace(/\//g, "%2F");
    if (slug)
      location =
        "https://my2.siteimprove.com/QualityAssurance/1112165/Overview/Search?SearchIn=Url&Query=" +
        escape(slug);
  }
})();
