# Devtools Part 2
1. The bug is that the input passed to the variables num1 and num2 are strings rather than numbers, so when you add the two values you concatenate the two strings instead of doing arithmetic. 
2. I would fix it by converting num1 and num2 to numbers, which is possible by placing those values in the Number() function. 