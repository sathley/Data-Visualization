# Dataset Attributes Description

The data represents the encounters for some 40 patients before and after suffering a `Traumatic Brain Injury`. 

Each patient has 
* Gender
* Age
* Age group
* Age at which TBI occured
* Date and type of Injury

Then for each patient we have several encounters before and after the TBI. Each encounter information includes
* Encounter Date
* Days from TBI
* Symptom recorded
* Provider information

# Tasks Description

Two primary tasks are evident. Firstly, how have the diseases progressed over time for the patients. Have they been cured of certain symptoms while other symptoms have surfaced and stayed for prolonged periods. We would like to compare and contrast this information for all patients.

Secondly, the frequency of encounters themselves. Have the patients been more frequent with doctors visits. How has this frequency progressed over time.


# Mapping Tasks and data needs in encoding process

The dataset was processed using the Jupyter notebook attached with this file. All extraneous information was scrubbed off. The patients were sorted and filtered. 

Each row represents a patient. Each tile in the row represents an encounter.
The encounters have been aligned such that the centre column represents the time at which TBI occured for each patient. 
Each symptom has been encoded into a different color and luminescence has used to describe it's temporal characteristic.


# Critical Evaluation of Implementation

#### Does the design address *change* task; How would you modify the task to make it a *change* task if not?

Yes. As the succesive encounters have been layed out next to each other and the encounters have also been aligned for a common TBI column, the approach depicts change tasks effectively. 
Another approach could have been to encode different symptoms with textures instead of colors. The human eye is very good at identifying density of tiles.

#### How many items can the design show on a 24-inch monitor?

As this is an overview design all data fits well into the screen.
#### Does it use overview+detail technique?

No. This design only depicts an overview of the change tasks. 

#### Does it show "temporal" changes?

Yes. The successive changes in encounters for a patient oer time and also accross patients effectively shows temporal changes.

#### Whether or not it introduces clutter by comparing with all other designs?

No. As every encounter is given it's own real estate on the screen, there is no scope for everlaying visual components and hence cluter is at a minimum.

#### Is the design visually pleasing?

Yes. The choice in color encoding and the dark background make this a visually appealing design.