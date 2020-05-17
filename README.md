# AjaxHandler
## Now make Ajax Calls in just one line of Code
**AjaxHandler is a library to simplify and reduce the amount of code which needs to be written in order to make an AjaxCall**
### Importing Script:
Just paste this line before closing the body tag of html file.
```js
<script src="https://cdn.jsdelivr.net/gh/TheAndroCoder/AjaxHandler/AjaxHandler.js"></script>
```
### Usage:
```js
new AjaxHandler(url,type,data,response_type).call(data=>{
  console.log(data);
});
// For POST Request with some data and response_type=json
new AjaxHandler('/login','POST',{mobile:mobile,password:password},'json').call(data=>{
  console.log(data);
});
```
