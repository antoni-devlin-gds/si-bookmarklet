# si-bookmarklet

Adding this script into a bookmark will allow you to drop straight into the Search Page in SI. Only tested in Chrome.

## Usage

Make the bookmarklet by pasting the following minified javascript into the url field of a new bookmark. The full javacsript is available in [bookmark.js](https://github.com/antoni-devlin-gds/si-bookmarklet/blob/main/bookmark.js) in this repo.

```javascript
javascript:!function(){let b=window.location.href,c=window.location.pathname;if(b.includes("gov.uk"))location="https://my2.siteimprove.com/QualityAssurance/1112165/Overview/Search?SearchIn=Url&Query="+c.replace(/\//g,"%2F");else{let a=prompt("Enter a url to search for in siteimprove:\r\ne.g. '/contact-dfe'","").replace(/\//g,"%2F");a&&(location="https://my2.siteimprove.com/QualityAssurance/1112165/Overview/Search?SearchIn=Url&Query="+escape(a))}}()
```

### On a Gov.uk page

If you click the bookmark on a Gov.uk page, the script will automatically take you to SI in a new tab.

### On a non-Gov.uk page

If you click the bookmark on a page that doesn't have 'gov.uk' in the url, the script will prompt you for a url before taking you to SI in a new tab.
