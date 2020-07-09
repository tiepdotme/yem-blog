---
layout: null
sitemap: false
---

{% assign counter = 0 %}
var documents = [{% for page in site.pages %}{% if page.url contains '.xml' or page.url contains 'assets' or page.url contains 'category' or page.url contains 'tag' %}{% else %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endif %}{% endfor %}{% for page in site.without-plugin %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endfor %}{% for page in site.posts %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.date | date: "%Y/%m/%d" }} - {{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }{% if forloop.last %}{% else %}, {% endif %}{% endfor %}];
var idx=lunr(function(){this.ref("id"),this.field("title"),this.field("body"),documents.forEach(function(e){this.add(e)},this)}),lunSearchResult=document.getElementById("lunrsearchresults"),body=document.querySelector("body");function lunr_search(e){if(lunSearchResult.innerHTML="<ul></ul>",e){lunSearchResult.innerHTML="<p>Search results for '"+e+"'</p>"+lunSearchResult.innerHTML;var l=idx.search(e);if(l.length>0)for(var s=0;s<l.length;s++){var t=l[s].ref,r=documents[t].url,n=documents[t].title,a=documents[t].body.substring(0,160)+"...";document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML=document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML+"<li class='lunrsearchresult'><a href='"+r+"'><span class='title'>"+n+"</span><span class='body'>"+a+"</span><span class='url'>"+r+"</span></a></li>"}else document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML="<li class='lunrsearchresult'>No results found...</li>"}return!1}function lunr_search(e){if(lunSearchResult.style.display="block",document.querySelector("body").classList.add("modal-open"),lunSearchResult.innerHTML='<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>',e){document.getElementById("modtit").innerHTML="<h5 class='modal-title'>Search results for '"+e+"'</h5>"+document.getElementById("modtit").innerHTML;var l=idx.search(e);if(l.length>0)for(var s=0;s<l.length;s++){var t=l[s].ref,r=documents[t].url,n=documents[t].title,a=documents[t].body.substring(0,160)+"...";document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML=document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML+"<li class='lunrsearchresult'><a href='"+r+"'><span class='title'>"+n+"</span><small><span class='body'>"+a+"</span><span class='url'>"+r+"</span></small></a></li>"}else document.querySelectorAll("#lunrsearchresults ul")[0].innerHTML="<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>"}return!1}document.addEventListener("click",function(e){"btnx"===e.target.id&&(lunSearchResult.style.display="none",body.classList.remove("modal-open"))});
