
/**
 * This hook resend the desired amount from a payment received or a URI buy to the destinations saved in the namespace of the hooks account.
 * The hook accepts 10 destinations and it can distribute 10 parts to the desired accounts.
 * You can add destinations to the namespaces
 * Hook Parameters to Add destinations using Invoke
 * ADD: Xahau Address transformed  from rAddress To Account ID. You can use https://hooks.services/tools/raddress-to-accountid or https://transia-rnd.github.io/xrpl-hex-visualizer/ . To check if you are doing it right, address: rBnGX5KRERL2vMtZU2hDpF4osbhvichmvn will be translated to 6E7FE2948037180F3646CC248FAF2BCACD59893C
 * NU1: The number to identify the address and be able to delete it (from 00 to 13)
 * NU2: The number to identify the number amount and be able to send the desired proportion and also to delete it (from 00 to 13)

 * Hook Parameters to delete destinations using Invoke
 * DEL: Number (from 00 to 13)

 You can check the status of your namespace visiting https://xahau-jshooks-testnet.xrplwin.com/ checking your hook account

 * This is a small example, probably it's not the best way to code this Hook. Please, verify everything before using it.
 */

 import {sfAccount, sfDestination, sfAmount} from "sfcodes"
 import {ttPAYMENT, ttINVOKE, ttURITOKEN_BUY} from "tts"
 
 export const Hook = () => {
 
     // I create a 10 txn reserve for PREPARE_PAYMENT_SIMPLE
     etxn_reserve(10);

    //Check json Txn
    const txn = otxn_json() as Transaction
   
     // Declare the keywords for the Hook Params (It's needed to translate the string to hex string https://transia-rnd.github.io/xrpl-hex-visualizer/)
     
     //NU1 is 4E5531
     const num1_param = [0x4E, 0x55,0x31]
     //ADD is 414444
     const add_param = [0x41,0x44,0x44]

     //NU2 is 4E5532
     const num2_param = [0x4E, 0x55,0x32]
     //AMO is 414D4F
     const amo_param = [0x41,0x4D,0x4F]
  
     //DEL is 44454C
     const del_param = [0x44,0x45,0x4C]
     
 
     const account01 = state("00")
     const amount01 = state("01")
  
     const account02 = state("02")
     const amount02 = state("03")

     const account03 = state("04")
     const amount03 = state("05")

     const account04 = state("06")
     const amount04 = state("07")
  
     const account05 = state("08")
     const amount05 = state("09")

     const account06 = state("0A")
     const amount06 = state("0B")

     const account07 = state("0C")
     const amount07 = state("0D")

     const account08 = state("0E")
     const amount08 = state("0F")

     const account09 = state("10")
     const amount09 = state("11")

     const account10 = state("12")
     const amount10 = state("13")
 
     // Check destination of the original txn
     const account_field = otxn_field(sfDestination);
  
     // Check hook account
     const hook_accid = hook_account()

     // Check hook parameters
     const num1_buf = otxn_param(num1_param)
     const add_buf = otxn_param(add_param)

     const num2_buf = otxn_param(num2_param)
     const amo_buf = otxn_param(amo_param)
  
     const del_buf = otxn_param(del_param)

  
     // To know the type of origin txn
     const tt = otxn_type();
 
     // Check if hook_accid and account_field are the same
     const equal = JSON.stringify(hook_accid) == JSON.stringify(account_field) ? 1 : 0;
 
     if (!equal && tt == ttINVOKE && add_buf.length == 20 && (num1_buf.length == 1 || 2)  && (num2_buf.length == 1 || 2) && typeof del_buf.length === "undefined" && num1_buf >= 0 && num1_buf < 20)
     {
         state_set(add_buf, num1_buf)
         state_set(amo_buf, num2_buf)
         accept("Forwarder: Address and corresponding amount added.", 1)
     }
     if (!equal && tt == ttINVOKE && (del_buf.length == 1 || 2) && typeof add_buf.length === "undefined" && typeof num1_buf.length === "undefined" && typeof num2_buf.length === "undefined" && typeof amo_buf.length === "undefined" && del_buf >= 0 && del_buf < 20)
     {
         state_set(null, del_buf)
         accept("Forwarder: Address deleted.", 2)
     }
     if (!equal && tt != ttURITOKEN_BUY)
     {
         accept("Forwarder: Nothing to do", 3)
     }
     else
     {
 
         // fetch the sent Amount
         // Amounts can be 384 bits or 64 bits. If the Amount is an XAH value it will be 64 bits.
         const  amount_buffer = otxn_field(sfAmount)
         const drops_to_send = 0; // this will be the default
 
         // No XAH
        // If It's not XAH (other tokens), (Explanation: txn.Amount will be number type for XAH, object for IOUs)
        if (tt==ttPAYMENT && typeof txn.Amount.length === "undefined"){
            rollback("Highest: Not accepting IOUs or transaction type.", 3);
        } 
        // We keep the amount of XAH for later
        const drops_sent = txn.Amount

         // Minimum allowed value to make the Forwarder Hook resend the value
         if (drops_sent < 10)
         {
             accept("Forwarder: No minimum amount. Nothing to do", 5);
         }
         else
             {
                const prepared_txn10 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account10),
                    Amount: parseFloat((drops_sent / 10) * amount10)
                })
                const emit_result10=emit(prepared_txn10)

                const prepared_txn09 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account09),
                    Amount: parseFloat((drops_sent / 10) * amount09)
                })
                const emit_result09=emit(prepared_txn09)

                const prepared_txn08 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account08),
                    Amount: parseFloat((drops_sent / 10) * amount08)
                })
                const emit_result08=emit(prepared_txn08)

                const prepared_txn07 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account07),
                    Amount: parseFloat((drops_sent / 10) * amount07)
                })
                const emit_result07=emit(prepared_txn07)

                const prepared_txn06 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account06),
                    Amount: parseFloat((drops_sent / 10) * amount06)
                })
                const emit_result06=emit(prepared_txn06)

                const prepared_txn05 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account05),
                    Amount: parseFloat((drops_sent / 10) * amount05)
                })
                const emit_result05=emit(prepared_txn05)

                const prepared_txn04 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account04),
                    Amount: parseFloat((drops_sent / 10) * amount04)
                })
                const emit_result04=emit(prepared_txn04)

                const prepared_txn03 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account03),
                    Amount: parseFloat((drops_sent / 10) * amount03)
                })
                const emit_result03=emit(prepared_txn03)

                const prepared_txn02 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account02),
                    Amount: parseFloat((drops_sent / 10) * amount02)
                })
                const emit_result02=emit(prepared_txn02)

                const prepared_txn01 = prepare({
                    TransactionType: "Payment",
                    Destination: util_raddr(account01),
                    Amount: parseFloat((drops_sent / 10) * amount01)
                })
                const emit_result01=emit(prepared_txn01)
 
                 accept("Forwarder: Successful.", 7)
             }
                  
            accept("Success", 1)
     
            return 0
        }
     }
 }
 
