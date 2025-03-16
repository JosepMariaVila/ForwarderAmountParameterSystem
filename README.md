
## Xahau Forwarder Amount Parameters System
This is a example to demonstrate the use of a working hook in Xahau testnet. The hook is programmed in javascript. It is recommended for educational purposes only. The creator is not responsible for any problems it may cause.

**Please use new accounts to test this hook and test everything beforehand on Testnet. I am not responsible for any losses. Create your own code if you are not sure.**

## What does the Forwarder Hook do?

The hook is installed on an account (salary distributor). Once installed, every time the account receives a payment (from the boss) through a Payment or URITokenBuy transaction type, it will be distributed among the accounts stored (employees) in the account namespace. If there are no accounts in the namespace, it will do nothing.

## Attention

This hook or other installed hooks could change the expected result. So it is important to pre-test this and other hooks on Testnet before using it on Mainnet.

## How to install the Forwarder Hook on Testnet?

Follow the step by step tutorial I created to install this hook using the Xahau Hooks Builder: 

https://youtu.be/JF_xMS-4WCE

## How to add addresses?

The hook allows up to 20 addresses to which the amounts received can be distributed in equal parts. They will be registered with an identifier from 00 to 13 (in uint8 format, so 20 addressess), tool to check the numbers:

- https://transia-rnd.github.io/xrpl-hex-visualizer/

The addresses must be converted to Account ID. To do this you can use the following tool:

- https://hooks.services/tools/raddress-to-accountid 

**Visual representation of the namespace or address book:**

|identifier|address|
|-----------|-------|
|00|address01 translated to AccountID|
|01|amount01 ...|
|02|address02 translated to AccountID|
|03|amount02 translated to AccountID|
|04|address03 translated to AccountID|
|05|amount03 translated to AccountID|
|06|address04 translated to AccountID|
|07|amount04 translated to AccountID|
|08|address05 translated to AccountID|
|09|amount05 translated to AccountID|
|0A|address06 translated to AccountID|
|0B|amount06 translated to AccountID|
|0C|address07 translated to AccountID|
|0D|amount07 translated to AccountID|
|0E|address08 translated to AccountID|
|0F|amount08 translated to AccountID|
|10|address09 translated to AccountID|
|11|amount09 translated to AccountID|
|12|address10 translated to AccountID|
|13|amount10 translated to AccountID|

To add an account and the desired amount we must create an Invoke transaction from the hook account and add the following Hook parameters and values:

NU1 with a position we want between 00 to 13 
ADD with the AccountID
NU2 with a position we want between 00 to 13
AMO with the multiplier number we want for that acccount

**Example:**

- NU1: 00
- ADD: D53F733E54B866B9FBDB85762071832B03A56C76
- NU2: 01
- AMO: 01

We need to change ADD and NU1 and NU2 keywords to hex. ADD = 414444 and NU1 = 4E554D and NU2 = 
Also, we need to translate address account rLSYATPWj9UECGBEeVpxwEN16CuEREK3uR to AccountID D53F733E54B866B9FBDB85762071832B03A56C76

- 414444: D53F733E54B866B9FBDB85762071832B03A56C76
- 4E554D: 00

## How to delete addresses?

To delete you have to create an Invoke transaction from the hook account and use as parameter DEL and the position between 00 to 13 (uint8 format) as value. In case there is any address registered with that identifier, it will delete it.

DEL and the position we want to delete between 00 to 13 (uint8 format)

## Video Tutorial Resources

Follow this video tutorial and use the following links to learn how to use this hook on Xahau Testnet using the Hooks Builder: 

https://youtu.be/JF_xMS-4WCE

Links to follow the tutorial:

https://github.com/JosepMariaVila/xahau-forwarder-hook-business-1-boss-20-employees

https://github.com/JosepMariaVila/xahau-forwarder-hook-business-1-boss-20-employees/blob/main/forwarder-hook.c

https://hooks-builder.xrpl.org/develop

https://hooks.services/tools/raddress-to-accountid

https://transia-rnd.github.io/xrpl-hex-visualizer/

https://xahau-testnet.xrplwin.com/account/rhoPokgLXa8PFVoEaKT76E8n87U58qhatp

## Credit

This hook was originally created by @[ekiserrepe](https://x.com/ekiserrepe). You can find more of his projects on [ekiserrepe.com](https://www.ekiserrepe.com)
