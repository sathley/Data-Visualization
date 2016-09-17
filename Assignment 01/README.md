# Data-Visualization
## Homework 01

I decided to pick the first dataset of fractional anisotropy values of a brain scan. I found it interesting as this would allow for numeric as well as spatial charting.

> "Diffusion Tensor Imaging is a cutting edge imaging technique that provides quantitative information with which to visualize and study connectivity and continuity of neural pathways in the central and peripheral nervous systems in vivo." (Basser et al. 2000).


### Visualization 01

This is the simplest visualization technique applied to the dataset.The values are plotted on a grid and the size of a point is the FA value observed at that region in the brain.

This visualization instantly depicts the density and structure of the brain tissue. There is clear defininiton showing the cerebrum and corpus callosum. 

The legend shows a gradient of FA values ranging from 0 to 1. 


Side note : I decided to go with PlottableJS for these visualizations. PlottableJS provides a convenient abstraction over D3JS. For a javascript novice, it brings down the learning curve by hiding away the nitty-gritties of the more complex D3js.

<p data-height="265" data-theme-id="0" data-slug-hash="GjpmXN" data-default-tab="js,result" data-user="sathley90" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/sathley90/pen/GjpmXN/">Diffusion Tensor Imaging 01</a> by Sushant Athley (<a href="http://codepen.io/sathley90">@sathley90</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Visualization 02

This is the second technique applied to the dataset. We switched to a `white on black` color scheme to create better contrast while viewing the small and intricate details inside the brain.

<p data-height="265" data-theme-id="0" data-slug-hash="PGPmdp" data-default-tab="js,result" data-user="sathley90" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/sathley90/pen/PGPmdp/">Diffusion Tensor Imaging 02</a> by Sushant Athley (<a href="http://codepen.io/sathley90">@sathley90</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Visualization 03

For the third visualization, I decided to try a numeric approach to the data. Here is a pie chart that shows the breakup of the observed FA values. This helps in showing whether there are any unusual characteristics in the brain scan. 

<p data-height="265" data-theme-id="0" data-slug-hash="LRpyoV" data-default-tab="js,result" data-user="sathley90" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/sathley90/pen/LRpyoV/">Diffusion Tensor Imaging 03</a> by Sushant Athley (<a href="http://codepen.io/sathley90">@sathley90</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Visualization 04

For the fourth and final visualization, I decided to go with a good'ol bar chart. This is a different spin on the 3rd visualization technique. This kind of visualization can help in detecting unusual brain tissue characteristics. For the color scheme, I have kept things rather ho-hum.


<p data-height="265" data-theme-id="0" data-slug-hash="ORyABL" data-default-tab="js,result" data-user="sathley90" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/sathley90/pen/ORyABL/">Diffusion Tensor Imaging 04</a> by Sushant Athley (<a href="http://codepen.io/sathley90">@sathley90</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>