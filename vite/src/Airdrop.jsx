import { useConnection,useWallet }  from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
export function Airdrop(){
const wallet  = useWallet();
const {connection} =  useConnection();
    function reqAirdrop(){
        const publickey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        connection.requestAirdrop(publickey,amount * LAMPORTS_PER_SOL);
    }
return <div>
<input type="number" id="amount" placeholder="Amount.."/>
<button onClick={reqAirdrop}>request airdrop</button>
</div>
};