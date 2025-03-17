![forwarder hoook amount parameters system](https://github.com/user-attachments/assets/8be30588-ab29-4cbe-a991-086227ffd404)

<br>

## Forwarder Hook Amount Parameter System
This is a example to demonstrate the use of a working hook in Xahau testnet. The hook is programmed in javascript. It is recommended for educational purposes only. The creator is not responsible for any problems it may cause.

**Please use new accounts to test this hook and test everything beforehand on Testnet. I am not responsible for any losses. Create your own code if you are not sure.**

<br>

## What does the Forwarder Amount Parameter System Hook do?

The hook is installed on an account (salary distributor). Once installed, every time the account receives a payment through a Payment or URITokenBuy transaction type, it will be distributed to the corresponding accounts and amounts both stored in the namespaces.

<br>

## How to add addresses and amounts-parts?

The hook allows up to 10 addresses to which the amounts received can be distributed in the different desired amounts-parts.

Addresses must be converted to Account ID. To do this you can use the following tool:

- https://hooks.services/tools/raddress-to-accountid

The total amount the hook receives is divided by 10, so we have 10 parts which can be distributed as set in the AMO parameter to the 10 different beneficiary accounts. 

Numbers corresponding to the desired number of parts have to be in Hex format as follows, from 0 to 10 (it can be 0 if we don't want to send any amount to certain account): 00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 0A.

You can modifiy the amount of parts sent to each beneficiary modifiying the hook parameter AMO performing an invoke transaction wit the desired number-parts: 

If the amount to send to a beneficiary is 0 parts out of 10, set in the invoke transaction the parameter AMO to 00.

If the amount to send to a beneficiary is 1 part out of 10, set in the invoke transaction the parameter AMO to 01.

If the amount to send to a beneficiary are 2 parts out of 10, set in the invoke transaction the parameter AMO to 02.

If the amount to send to a beneficiary are 3 parts out of 10, set in the invoke transaction the parameter AMO to 03.

If the amount to send to a beneficiary are 4 parts out of 10, set in the invoke transaction the parameter AMO to 04.

If the amount to send to a beneficiary are 5 parts out of 10, set in the invoke transaction the parameter AMO to 05.

If the amount to send to a beneficiary are 6 parts out of 10, set in the invoke transaction the parameter AMO to 06.

If the amount to send to a beneficiary are 7 parts out of 10, set in the invoke transaction the parameter AMO to 07.

If the amount to send to a beneficiary are 8 parts out of 10, set in the invoke transaction the parameter AMO to 08.

If the amount to send to a beneficiary are 9 parts out of 10, set in the invoke transaction the parameter AMO to 09.

If the amount to send to a beneficiary are 10 parts out of 10, set in the invoke transaction the parameter AMO to 0A. 

<br>

**EXAMPLE: Monday-Friday payments** 

<br>

**On Monday the hook receives 100 XAH and it has set in the parameters the following distribution:**

Account 1: 3 parts. So 30 XAH. The hook has the parameter AMO set to 03 regarding Acc]ount 1.

Account 2: 2 parts. So 20 XAH. The hook has the parameter AMO set to 02 regarding Account 2.

Account 3: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 3.

Account 4: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 4.

Account 5: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 5.

Account 6: 4 parts. So 40 XAH. The hook has the parameter AMO set to 04 regarding Account 6.

Account 7: 1 part. So 10 XAH. The hook has the parameter AMO set to 01 regarding Account 7.

Account 8: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 8.

Account 9: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 9.

Account 10: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 10.

<br>

**On Friday we will receive another payment, 1000 XAH, but we want to distribute it differently, so we perform an invoke transaction and set the parameters as desired:**

Account 1: 5 parts. So 500 XAH. The hook has the parameter AMO set to 05 regarding Account 1.

Account 2: 1 parts. So 100 XAH. The hook has the parameter AMO set to 01 regarding Account 2.

Account 3: 1 parts. So 100 XAH. The hook has the parameter AMO set to 01 regarding Account 3.

Account 4: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 4.

Account 5: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 5.

Account 6: 1 parts. So 100 XAH. The hook has the parameter AMO set to 01 regarding Account 6.

Account 7: 1 part. So 100 XAH. The hook has the parameter AMO set to 01 regarding Account 7.

Account 8: 1 parts. So 1000 XAH. The hook has the parameter AMO set to 01 regarding Account 8.

Account 9: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 9.

Account 10: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 10.

<br>

**Visual representation of the namespace or address book:**

|identifier|address or amount-part|
|----------|----------|
|00|address01 translated to AccountID|
|01|amount01: a number-part from 1 to 10 in hex| 
|||
|02|address02 translated to AccountID|
|03|amount02 a number-part from 1 to 10 in hex|
|||
|04|address03 translated to AccountID|
|05|amount03 a number-part from 1 to 10 in hex|
|||
|06|address04 translated to AccountID|
|07|amount04 a number-part from 1 to 10 in hex|
|||
|08|address05 translated to AccountID|
|09|amount05 a number-part from 1 to 10 in hex|
|||
|0A|address06 translated to AccountID|
|0B|amount06 a number-part from 1 to 10 in hex|
|||
|0C|address07 translated to AccountID|
|0D|amount07 a number-part from 1 to 10 in hex|
|||
|0E|address08 translated to AccountID|
|0F|amount08a number-part from 1 to 10 in hex|
|||
|10|address09 translated to AccountID|
|11|amount09 a number-part from 1 to 10 in hex|
|||
|12|address10 translated to AccountID|
|13|amount10 a number-part from 1 to 10 in hex|

<br>

To add an account in the hook we must create an Invoke transaction for each beneficiary from the hook account and add the following 4 Hook parameters and the corresponding values:

<br>

Parameter 1: **NU1** 

Value: a position between 00 to 13 (00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 0A, 0B, 0C, 0D, 0E, 0F, 10, 11, 12 or 13, ususally take numbers in order as needed). 

<br>

Parameter 2: **ADD** 

Value: the desired AccountID

<br>

Parameter 3: **NU2**

Value: a position between 00 to 13 (00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 0A, 0B, 0C, 0D, 0E, 0F, 10, 11, 12 or 13, chose a number not already in use, go in order). 

<br>

Parameter 4: **AMO**

Value: the desired amount-part this account has to receive, it can be any of the following from 0 to 10 in Hex format: 00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 0A.

<br>

**EXAMPLES: Store addresses and amounts in state by parameters**

<br>

Beneficiary 1:
- NU1: 00
- ADD: D53F733E54B866B9FBDB85762071832B03A56C76 (the desired beneficiary raddres converted to AccountID)
- NU2: 01
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)

Note that it is needed to convert NU1, ADD, NU2 and AMO to hex. NU1 = 4E5531, ADD = 414444, NU2= 4E5532 and AMO = 414D4F, but using JS Hooks Builder the code does it for you, so no need to convert those to hex if you use JS Hook Builder. In the terminal it will look like this:
- 4E5531: 00
- 414444: D53F733E54B866B9FBDB85762071832B03A56C76
- 4E5532: 01
- 414D4F: 01
  
<br>

Beneficiary 2:
- NU1: 02
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 03
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Beneficiary 3:
- NU1: 04
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 05
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Beneficiary 4:
- NU1: 06
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 07
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Beneficiary 5:
- NU1: 08
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 09
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)

<br>

Beneficiary 6:
- NU1: 0A
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 0B
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Beneficiary 7:
- NU1: 0C
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 0D
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Beneficiary 8:
- NU1: 0E
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 0F
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Beneficiary 9:
- NU1: 10
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 11
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Beneficiary 10:
- NU1: 12
- ADD: (the desired beneficiary raddres converted to AccountID)
- NU2: 13
- AMO: 01 (the desired amount of parts to send, in this case 1 part out of 10)
  
<br>

Have in mind that the total amount of parts of all accounts combined always has to be 10.

<br>

## How to modify amounts-parts?

You can send an invoke transaction with a different amount-part as value and it will overwrite the current corresponding hook state. So no need to first delete the state and then store the new data in it, you can just send an invoke transaction wit the new desired amount and it will overwrite it.

<br>

## How to delete addresses and/or amounts-parts?

To delete a hook state you have to create an Invoke transaction from the hook account and use as parameter DEL and the position between 00 to 13 as the value to be deleted (1 invoke transation for each element to delte):

<br>

**EXAMPLES: Delete states**

<br>

To delete Beneficiary 1 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 00.
1 invoke transaction with parameter: DEL, pointing to position: 01.

<br>

To delete Beneficiary 2 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 02.
1 invoke transaction with parameter: DEL, pointing to position: 03.

<br>

To delete Beneficiary 3 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 04.
1 invoke transaction with parameter: DEL, pointing to position: 05.

<br>

To delete Beneficiary 4 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 06.
1 invoke transaction with parameter: DEL, pointing to position: 07.

<br>

To delete Beneficiary 5 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 08.
1 invoke transaction with parameter: DEL, pointing to position: 09.

<br>

To delete Beneficiary 6 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 0A.
1 invoke transaction with parameter: DEL, pointing to position: 0B.

<br>

To delete Beneficiary 7 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 0C.
1 invoke transaction with parameter: DEL, pointing to position: 0D.
<br>

To delete Beneficiary 8 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 0E.
1 invoke transaction with parameter: DEL, pointing to position: 0F.

<br>

To delete Beneficiary 9 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 10.
1 invoke transaction with parameter: DEL, pointing to position: 11.

<br>

To delete Beneficiary 10 adresss and amount-part:
1 invoke transaction with parameter: DEL, pointing to position: 12.
1 invoke transaction with parameter: DEL, pointing to position: 13.

<br>

## Hook example on the JS Hooks Xahau network

https://xahau-jshooks-testnet.xrplwin.com/account/rU6Pgd7NhR12uthsVQ7LJFXXicmL2Y6YPE

<br>

## Links

https://jshooks-builder.xahau.network/develop

https://hooks.services/tools/raddress-to-accountid

https://transia-rnd.github.io/xrpl-hex-visualizer/

https://xahau-jshooks-testnet.xrplwin.com/

<br>

## Credit

This hook was originally created by @[ekiserrepe](https://x.com/ekiserrepe). You can find more of his projects on [ekiserrepe.com](https://www.ekiserrepe.com)
