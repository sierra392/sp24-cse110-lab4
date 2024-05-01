# Part 2
1. 3 will be printed in the console log because i is declared with the var keyword, meaning it exists in the scope of the entire function, and line 12 prints the value of i, which is 3 at line 12. 
2. 150.0 will be printed in the console log because discountedPrice was declared with the var keyword, making the variable accesible throughout the entire function (even outside the for loop), and the value of discountedPrice at line 13 will be 150.0. **Will this be an error? because you are declaring discountedPrice multiple times**
3. 150 will be printed in the console log because finalPrice was declared with the var keyword, making the variable accesible htroughout the entire function as the scope is the entire function, and the value of finalPrice at line 14 will be 150. 
4. [50, 100, 150] will be returned because it was created as an empty array and had each altered price value pushed into it during each iteration of the for loop, the discounted is returned meaning an array containting numbers that represented discounted prices is returned. 
5. This will cause an error because line 12 attempts to use the variable i outside of its scope, i was declared with the let keyword, so it's scope only exists within the for loop it was defined. 
6. This will cause an error because line 13 attempts to use the variable discountedPrice outside of its scope, discountedPrice was declared with the let keyword, so it's scope only exists within the for loop it was defined and line 13 is outside that for loop. 
7. 150 will be printed in the console log because finalPrice was declared with the let keyword inside the discountPrices function and not within a nested code block, so its scope is the discountPrices function making it accesible to be printed in line 14. 
8. [50, 100, 150] will be returned because discounted was declared with the let keyword inside the discountPrices function and not within a nested code block, so its scope is the discountPrices function making it accesible to be returned. Additionally it is accessible within the for loop and it is not a constant so values can be added to the discounted array at each iteration. **Double Check**
9. This will cause an error because line 12 attempts to use the variable i outside of its scope, i was declared with the let keyword, so it's scope only exists within the for loop it was defined. **Double Check (would it also be an error because tries to modify modify const discounted)?** 
10. 3 would be printed at line 12 to the console log because line 12 doesn't itself cause an error (the length variable was declared with the const keyword in the discountedPrices function making its scope the discountedPrices function) but earlier in the code (line 8) the variable discounted which was declated with a const keyword was attempted to be modified so that would cause an error **would that cause an error?**
11. This code causes an error because in line 8 the program attempts to modify the discounted variable even through it was declared with the const keyword, meaning it cannot be modified. Then the function attempts to return the variable it attempted to modify, which is an error **Is this where it errors?**
12. 
    - A: student.name
    - B: student['Grad Year']
    - C: student.greeting()
    - D: student['Favorite Teacher'].name
    - E: student.courseload[0]
13.  
    - A: **'32'** because 3 is a string so the int 2 is converted to a string and concatenated to the 3. 
    - B: **1** because when you subtract a string from a number you get a number. 
    - C: **3** beacuse null gets converted to 0, then you just at 3 + 0
    - D: **'3null'** because the null is converted to a string when you add it to a string, and the two strings then get concatenated together
    - E: **4** because true gets converted to 1, then you just add 1 + 3
    - F: **0** because the false will have a numeric conversion to 0 and the null will also have a numeric conversion to 0, then adding the two you get 0.
    - G: **NaN** because undefined converts to NaN (or not a number) in arithmetic conversions and the result of adding a number and not a number is NaN.
    - H: **NaN** because undefined converts to NaN (or not a number) in arithmetic conversions and the result of subtracting a number and not a number is NaN.
14.  
    - A: **True** because 2 gets evaluated as a number and 2 is greater than 1. 
    - B: **False** because the two strings are compared lexographically and 12 is less than 2 lexographically. 
    - C: **True** because type conversion is applied before the comparison, so the string '2' is converted to the int 2 and then two two values are seen as equal.
    - D: **False** because the two values are compared without type conversion and a string cannot be equal to an int. 
    - E: **False** because true will be converted to 1, and 1 isn't equal to 2. 
    - F: **True** because you are comparing true to the boolean conversion of 2 (which is true since it is a number greater than 0).
15. The difference between === and == is that === does an exact comparion of the values, in other words it doesn't apply any conversions before comparing, whereas == will apply a conversion if possible, then evaluate the comparison. 
16.  (done in separate file)
17.  The result of the function call to modifyArray will be a new array with elements that are twice the value as those in the array passed to the first parameter of function. In this case the array [2, 4, 6] will be returned. This is because the function has a for loop that will iterate over the length of the array that is passed as a parameter and at each iteration, a value will be pushed to the new array that is the return value of the doSomething function which takes as an argument the value of the original array at the corresponing index, and since doSomething doubles its parameter, this will cause the new array that is returned to have values that are double that of the original. 
18.  (done in separate file)
19.  The output on the console log will be 1 2 3 4 (each number on its own line in the output). This is because first 1 will be printed, then after waiting one second the number 2 will be printed, then after waiting 0 seconds (so immediately), 3 will be printed, and finally 4 will be printed. 