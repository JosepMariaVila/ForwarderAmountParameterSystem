
## Xahau Forwarder Amount Parameters System
This is a example to demonstrate the use of a working hook in Xahau testnet. The hook is programmed in javascript. It is recommended for educational purposes only. The creator is not responsible for any problems it may cause.

**Please use new accounts to test this hook and test everything beforehand on Testnet. I am not responsible for any losses. Create your own code if you are not sure.**

## What does the Forwarder Amount Parameters System Hook do?

The hook is installed on an account (salary distributor). Once installed, every time the account receives a payment (from the boss) through a Payment or URITokenBuy transaction type, it will be distributed in the corresponding amounts stored in the namespaces among the accounts stored (employees) also in the namespaces. If there are no accounts in the namespace, it will do nothing.

## Attention

This hook or other installed hooks could change the expected result. So it is important to pre-test this and other hooks on Testnet before using it on Mainnet.

## How to install the Forwarder Hook on Testnet?

Follow the step by step tutorial I created to install this hook using the Xahau Hooks Builder: 

https://youtu.be/JF_xMS-4WCE

## How to add addresses?

The hook allows up to 10 addresses to which the amounts received can be distributed in desired different amounts.

The addresses must be converted to Account ID. To do this you can use the following tool:

- https://hooks.services/tools/raddress-to-accountid

The total amount the hook receives is divided by 10, so we have 10 parts which can be distributed as desired to the 10 different beneficiary accounts. You can modifiy the amount of parts sent to each beneficiary modifiying the hook parameters performing an invoke transaction as follows: 

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

Example: 
On Monday the hook receives 100 XAH and it has set in the parameters the following distribution:
Account 1: 3 parts. So 30 XAH. The hook has the parameter AMO set to 03 regarding Account 1.
Account 2: 2 parts. So 20 XAH. The hook has the parameter AMO set to 02 regarding Account 2.
Account 3: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 3.
Account 4: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 4.
Account 5: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 5.
Account 6: 4 parts. So 40 XAH. The hook has the parameter AMO set to 04 regarding Account 6.
Account 7: 1 part. So 10 XAH. The hook has the parameter AMO set to 01 regarding Account 7.
Account 8: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 8.
Account 9: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 9.
Account 10: 0 parts. So 0 XAH. The hook has the parameter AMO set to 00 regarding Account 10.

On Fridat we will receive another payment, 1000 XAH, but we want to distribute it differently, so we perform an invoke transaction and set the parameters as desired:
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


**Visual representation of the namespace or address book:**

|identifier|address|
|identifier|amount-part|
|-----------|-------|
|00|address01 translated to AccountID|
|01|amount01: a number-part from 1 to 10 in hex| 

|02|address02 translated to AccountID|
|03|amount02 a number-part from 1 to 10 in hex|

|04|address03 translated to AccountID|
|05|amount03 a number-part from 1 to 10 in hex|

|06|address04 translated to AccountID|
|07|amount04 a number-part from 1 to 10 in hex|

|08|address05 translated to AccountID|
|09|amount05 a number-part from 1 to 10 in hex|

|0A|address06 translated to AccountID|
|0B|amount06 a number-part from 1 to 10 in hex|

|0C|address07 translated to AccountID|
|0D|amount07 a number-part from 1 to 10 in hex|

|0E|address08 translated to AccountID|
|0F|amount08a number-part from 1 to 10 in hex|

|10|address09 translated to AccountID|
|11|amount09 a number-part from 1 to 10 in hex|

|12|address10 translated to AccountID|
|13|amount10 a number-part from 1 to 10 in hex|

To add an account and the desired amount we must create an Invoke transaction from the hook account and add the following Hook parameters and values:

NU1 with a position we want between 00 to 13 
ADD with the AccountID
NU2 with a position we want between 00 to 13
AMO with the multiplier number we want for that acccount

**Examples:**
Beneficiary 1:
Invoke transaction with the following parameters:
- NU1: 00
- ADD: D53F733E54B866B9FBDB85762071832B03A56C76
- NU2: 01
- AMO: 01 (the desired amount of parts to send)

We need to change NU1, ADD, NU2 and AMO to hex. NU1 = 4E5531, ADD = 414444, NU2= 4E5532 and AMO = 414D4F
Also, we need to translate address account rLSYATPWj9UECGBEeVpxwEN16CuEREK3uR to AccountID D53F733E54B866B9FBDB85762071832B03A56C76

- 4E5531: 00
- 414444: D53F733E54B866B9FBDB85762071832B03A56C76
- 4E5532: 01
- 414D4F: 01 (?)

## How to delete addresses?

To delete you have to create an Invoke transaction from the hook account and use as parameter DEL and the position between 00 to 13 (uint8 format) as value. In case there is any address registered with that identifier, it will delete it.

DEL and the position we want to delete between 00 to 13 (uint8 format)


Links to follow the tutorial:

https://github.com/JosepMariaVila/xahau-forwarder-hook-business-1-boss-20-employees

https://github.com/JosepMariaVila/xahau-forwarder-hook-business-1-boss-20-employees/blob/main/forwarder-hook.c

https://hooks-builder.xrpl.org/develop

https://hooks.services/tools/raddress-to-accountid

https://transia-rnd.github.io/xrpl-hex-visualizer/

https://xahau-testnet.xrplwin.com/account/rhoPokgLXa8PFVoEaKT76E8n87U58qhatp

## Credit

This hook was originally created by @[ekiserrepe](https://x.com/ekiserrepe). You can find more of his projects on [ekiserrepe.com](https://www.ekiserrepe.com)
