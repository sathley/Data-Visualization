# Assignment 04 Proposed Design

## Group Members

* Harsh Vashistha
* Anudeep Nallamothu
* Sushant Chaudhari
* Sushant Athley

## Problem Statement

EHR records show different patients with a history of recorded diseases/issues. The task here is that we need to find out if there exist any correlation between different diseases over time. But the timeline for the records of patients vary vastly. Data records provided for patients also includes attributes of `Days_From1stTBI` and `Age_Group` of the patient along with a record of encounter with the disease. The Attribute `Days_From1stTBI` provides a normalized timeline for each patient with `Age_Group` being a property of patient record.

To show the progression of disease we propose the following solution to above problem:

All diseases will be laid out in a 4x4 grid.  A total 16 diseases are present in the dataset which acts as nodes in the grid. 
Each patient is then a point on the grid jumping from one node to another with continuous progression of `Days_From1stTBI` from lowest to highest.
This progression is shown in the form of interaction/animation with a counter iterating over `Days_From1stTBI`, from minimum-value to maximum-value. Thus, making each point (patient) trace a path on the grid of diseases as the counter progresses.
To highlight how fast the progression is occuring, a tail is added to each patient's point which fades away with time, and hence, traces the path and direction of patient's disease progressions.
This tail will be translucent and of the same color to avoid clutter, but when laid out over one another, (which can happen when patients are progressing on same disease paths), they will strengthen each other to show a more opaque color. Hence, a strong relationship is highlighted by tails overlaid on each other on the disease paths of different patients.
Color buckets can be used to depict `Age_Groups` of each patient on the grid. 

*Note:* Color will only affect color of patient's point. Tails will still be kept of same color to avoid clutter and play a part in highlighting of the path.

A simple sketch is attached for a single patient to depict how a path might look like. The thick line in the sketch is a patient with it's tail. It is frozen at some point in the middle of `Days_From1stTBI` counter progression from low to high value. In actual solution this point will move along the trail it is following to show patient's disease with a sense of direction.

Image: ![Alt](https://github.com/sathley/Data-Visualization/blob/master/Assignment%2004/design/scan.pdf)