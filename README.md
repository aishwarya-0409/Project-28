# MatterJSBoilerPlate
MatterJSBoilerPlate

Specific Tasks to Complete the Project:

Download images fromhere and add them in your project
Create a blueprint for the tree, on which the mangoes will hang.
Create a blueprint for the Ground, on which the tree stands.
Create a blueprint for the stone class
Create a stone object from the blueprint. 
Add a boy image in the sketch.js.
Adjust the position of the stone in the boy's hand.
Create a Mango class.
This class should have a circular body and a Mango image sprite
The Mango Body can have the following options:

Create multiple Mango objects (mango1, mango2, mango3, etc.) at different positions on the tree.
Add an elastic constraint between the hand of the boy and the stone body
Add the mouseDragged and mouseReleased events in the sketch.js to launch the stone towards the mangoes on the tree.
.Update the fly() method to set the BodyA to null.
.Create a detectCollision function in sketch.js and write conditions set mangoes isStatic as false, whenever stone collides with them. (See Hints)
Call this detectCollision function in draw(). 
Add a condition to setPosition of stone again at the start position when SPACE key is pressed. 
Create an attach() function in launcher.js to set the BodyA to body.
.Make sure the project works before you submit it
* Refer to the images given above for reference.

Submitting the Project:
Upload your completed project to your own github account.
Create a new repository named “Project 28”
Upload working code to this github repository.
Enable Github pages for the repository
Copy the link to the github pages link in the Student Dashboard
Hints:
Create detectCollision function using below block of code:

After creating multiple mango objects, call display() for each mango object separately in draw(). 

Experiment with the stiffness of the constraint which gives a good response and launch.
There is a fair chance that values less than 0.01 (e.g. 0.004) are good choices.
