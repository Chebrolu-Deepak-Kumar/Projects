Download the ipynb file and the dataset.

Install necessary libraries:
	-->pip install matplotlib
	-->pip install numpy
	-->pip install pandas
	-->pip install seaborn

Data Loading and Visualization:
	-->Load the dataset using pandas and change the dataset path accordingly.
	-->Use Scatterplot to visualize the data.	

Program Structure:
Computing Cost Function:
	-->Objective of linear regression is to minimize the cost function.
				i=1
		J(θ)=(1/2m)∑    (hθ(x(i))−y(i))2
				m  
	-->where  hθ(x)  is the hypothesis and given by the linear model
		hθ(x)=θTx=θ0+θ1x1

Gradient Descent:
	-->Minimize the cost function  J(θ)  by updating the below equation and repeat unitil convergence
				  i=1
		θj:=θj−α(1/m)∑   (hθ(x(i))−y(i))x(i)j  (simultaneously update θj for all j).
				  m

Convergence Plotting:
	-->Plot J(θ) against the number of iterations of gradient descent: 

Training Data with Linear Regression Fit:
	-->Training the dataset using the regression model

Inference using optimized θ values:
	--> hθ(x)=θTx

Predict profits based on population.

Run the code.


