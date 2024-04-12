# tax-calculator

#To run this code on local download all files as zip and execute index.html file.
<a href="https://r1414a.github.io/tax-calculator/" target=_blank>https://r1414a.github.io/tax-calculator/</a>

<h2>Test Cases:-</h2>

<h3><b>Test 1</b></h3>
on the very first load no error icon is show, they will be show when error occurs.
<br/>
<br/>
<img src="/test-cases/test-1.png" />


<h3><b>Test 2</b></h3>
for each label alongside there is an icon, and by hovering over it we can see what kind of info. user have to enter shown as tooltip.
<br/>
<br/>
<img src="/test-cases/test-2.png" />


<h3><b>Test 3</b></h3>
if user submit form without filling any info. the error icon will appear for all field in "this case" and by hovering over icon user can see what wrong he/she has done.
<br/>
<br/>
<img src="/test-cases/test-3.png" />


<h3><b>Test 4</b></h3>
Initially, for number fields on error tooltip message says something like "this field can't be empty, if no value put 0". It's clear message but evenafter user put some text value that error message get changed to "please enter only number".
<br/>
<br/>
<img src="/test-cases/test-4(1).png" />
<img src="/test-cases/test-4(2).png" />


<h3><b>Test 5</b></h3>
If user fill some fields with correct values and keep some fields empty or fill some wrong value and submit then error icon will only be shown alongside fields which have errors.
<br/>
<br/>
<img src="/test-cases/test-5.png" />

<h3><b>Test 6</b></h3>
if user tries to enter negative amount, this case is taken care in the code.

<h3><b>Test 7</b></h3>
Final result or modal is visible once user fill all values correctly, and we can see final amount in the modal.
1.annual-income=600000,extra-income=0,age<40,deductions=20000
<br/>
<br/>
<img src="/test-cases/test-6(1).png" />

<br/>

2.annual-income=4000000,extra-income=0,age>=40 but <60,deductions=100000
<br/>
<br/>
<img src="/test-cases/test-6(2).png" />
