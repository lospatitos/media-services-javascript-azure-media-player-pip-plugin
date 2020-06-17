---
page_type: sample
languages:
- javascript
- html
- css
products:
- azure
description: "This plugin adds Picture in Picture control onto your Azure Media Player."
---


# Media Services: Picture in Picture Plugin for Azure Media Player

## Getting Started
Include the plugin CSS/javascript*after* the AMP script in the `<head>` of your html page:

```<link href="pip.css" rel="stylesheet">```<br />
```<script src="pip.js"></script>```

<b>important: this sample plugin's video id is azuremediaplayer and is hardcoded in the pip.js in the following line: ```var elements = document.getElementById("azuremediaplayer").getElementsByClassName(className);```<br/>
if you change the video id in your own code, be sure you update it in the javascript file as well. </b>

See example.html for how to enable the plugin 
## Options
Plugin currently does not accept input options see below: 

    plugins: {
    
    	pip: {}
    
    }
