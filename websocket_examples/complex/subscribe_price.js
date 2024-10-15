#!/usr/bin/env node


var WebSocketClient = require('websocket').client;
const util = require("util")
const config = require("../config")
const CHAIN= config.CHAIN
const TOKEN = config.TOKEN

var client = new WebSocketClient();

client.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', async function (connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });

    msg = {
        "type": "SUBSCRIBE_PRICE",
        "data": {
            "queryType": "complex",
            "query": `
            (address = 8z15U1okYPAWXAMV3Y7qM9eyTi2q3dT7HbkmBJXpYPUn AND chartType = 1m AND currency = pair) OR 
            (address = BBtnnU6VqeJh3xi16cZmCk8Lmxp4iXzQYvzA8S3usK7k AND chartType = 1m AND currency = pair) OR 
            (address = 39bs8jwdmdqtrn5g2D8Z7rMFyA5Jkag6diD7DYW2whWJ AND chartType = 1m AND currency = pair) OR 
            (address = Dn25LxNMJWtBZV1uHCY2GY7wjtYX55bQkTtiEdnGwNz5 AND chartType = 1m AND currency = pair) OR 
            (address = FEeuMha4JUz55RNJZ4NTBqRrPtMJ4h8DgPHZ2PYoccnW AND chartType = 1m AND currency = pair) OR 
            (address = 7rM6awRt22ctKhwHeKrtDErqK5QbnyirjQH3CXLSiJfQ AND chartType = 1m AND currency = pair) OR 
            (address = 9c9rdk1Wue6rQejVMsC5ijXeZ545oEYKwhZhJEGvcGg1 AND chartType = 1m AND currency = pair) OR 
            (address = 63FV4jhyQq6BNb7XgoeptXvd1wk7NXkMgjaLDhtkN5eD AND chartType = 1m AND currency = pair) OR 
            (address = 9EGnKFhHMY3H6r2PLAAJDJEifxLPwQC1sbQ9GADDUiQ3 AND chartType = 1m AND currency = pair) OR 
            (address = FgukBey7xV9ghNCLPxVPys1RfStbmSUBCskpQHu8BgWL AND chartType = 1m AND currency = pair) OR 
            (address = 2kCskohXGkbToziTWYuE6bfRQW8vsByBhrwrLJYCWaYp AND chartType = 1m AND currency = pair) OR 
            (address = GE33UAgHBpaBNyyZ719wkanTtG42qiWmL1hJqJZ3DApH AND chartType = 1m AND currency = pair) OR 
            (address = 9tsGhjNQDmTMnYPTm3iFk4gtJG7d655FVWseqtJxLRff AND chartType = 1m AND currency = pair) OR 
            (address = GvDBhjocyfDZuGWqkm4ZU89W2YXaVLadWDUXeJHr9h8s AND chartType = 1m AND currency = pair) OR 
            (address = 6UYRJsENt1qqT1h37nEQ5tfmbUdT5RjCpfQL2t1C32mH AND chartType = 1m AND currency = pair) OR 
            (address = CQqoajngXMUZvgGcneYspRTb22ZZQVedrhsSzrtHq3Ji AND chartType = 1m AND currency = pair) OR 
            (address = HjSeuLQ7ZXs8vYFnzvJ9WqeZzPMvSxAszwum5tgHMmJ6 AND chartType = 1m AND currency = pair) OR 
            (address = 8ymcg4A3ByKgRW5BFrTnPv3p73qZ6Kp7GjeqtXGRYrNd AND chartType = 1m AND currency = pair) OR 
            (address = FyG5fdipxktUumZSpmxmkXBZn8ixxhuQqoi5NA3v5jep AND chartType = 1m AND currency = pair) OR 
            (address = BUhaJbWEuDi5tLFkdUmd2HMH3xbZ7unj7YNqFjKsrRLy AND chartType = 1m AND currency = pair) OR 
            (address = A9DKbvytf8DSsEV5fWHHDqEVdaUdog3ZZQkjbC8MiXVK AND chartType = 1m AND currency = pair) OR 
            (address = Fdt2EZ2ziWHERdjQoxzXQReM9t5BhhqGUWLLZPU7Ft6T AND chartType = 1m AND currency = pair) OR 
            (address = 3BedM2n6gV7iM6JF3QND2QW7UHezy4Voz6zfUjBQtEEG AND chartType = 1m AND currency = pair) OR 
            (address = EZem4qCSrJCoqwmc6SAPtUD6mUep2C8YNxnNSu4Z3KzS AND chartType = 1m AND currency = pair) OR 
            (address = HvLs13m8KKwaM7VJzyzHNDNfGovWG2QkeuCdFA5bnVfJ AND chartType = 1m AND currency = pair) OR 
            (address = CgvE7ELwhzYC3d9fgk4atHj3CrxmtMHTLgkUNgUdVGwd AND chartType = 1m AND currency = pair) OR 
            (address = 928Yieos7gMrT58EL867qDahWhpxNmyiABwttF6fCpUp AND chartType = 1m AND currency = pair) OR 
            (address = 87ETjj5uJPMv2HvQBZpKgY2psRNyCVmeasepPpnjC7QY AND chartType = 1m AND currency = pair) OR 
            (address = CUJsaytWzaVWakKuyomNcQs61cKuRCrZs8rWAQhvRQpc AND chartType = 1m AND currency = pair) OR 
            (address = 6kDJJgix4WrrnzYinsmZZAQ6t64bfQCKYiphhfMrWnwj AND chartType = 1m AND currency = pair) OR 
            (address = 8GPLBCoaVtbR7uRUMveiERX4SFan17c3xMqPVwfYAxr1 AND chartType = 1m AND currency = pair) OR 
            (address = 7E9bgNu7orJz8vrEEZpAczC9q5iNEXhgaGKtD8JFErSh AND chartType = 1m AND currency = pair) OR 
            (address = 5aCRLM5FG6iSxttTRzdHAV4XhdxD2y6fgdyFJNQnryxy AND chartType = 1m AND currency = pair) OR 
            (address = Gdfw4vxng4uFdxYkJyaBBvLfSKx729612TEKuyz6SpNg AND chartType = 1m AND currency = pair) OR 
            (address = 8anqM6nS8xhyDayQzh19TMoznWVLC1Zkxgdsm5Y86CiW AND chartType = 1m AND currency = pair) OR 
            (address = 7hFxCH5ZWVcj6Pcy4jJ7GDZNwBydMAKMUFimtcUQjuTU AND chartType = 1m AND currency = pair) OR 
            (address = EcAppxPEU9xrjVTBf6fQWjBYG98eePMjehkKbSseQdFX AND chartType = 1m AND currency = pair) OR 
            (address = HMmw4up1t2bZZvSbwQmZyGeFM6FFLyN6E8vVe7QrUTYd AND chartType = 1m AND currency = pair) OR 
            (address = Ft2bozwinxxNzZ4f4LBJxLG9RtStCCdbs9WYpeqZJ1EU AND chartType = 1m AND currency = pair) OR 
            (address = 6QdoN4o1oDGsnHN8eeAC3WVk9R7rVBpfGxSW4UQfs9J3 AND chartType = 1m AND currency = pair) OR 
            (address = mZNgARb71ZxJyHCCDDr6arCVg42WhxkxyfbmULvakzM AND chartType = 1m AND currency = pair) OR 
            (address = Cbf1zry7S1yWHvxGwskPTtWLTXCvHn53nDB2dUANaoW8 AND chartType = 1m AND currency = pair) OR 
            (address = EfpKdhcMLXK7MCGhebrb3oM3RynHp3LGCbD9fF9XGFKJ AND chartType = 1m AND currency = pair) OR 
            (address = Ff62M8rBZ1Uzv3hpPsR3CTjhiAR9zwFkHKt15gYgDTr4 AND chartType = 1m AND currency = pair) OR 
            (address = 8QjwGYqRu2Ndk76Ca1ouMbbeJNTEjULSQd5NhZpUvweU AND chartType = 1m AND currency = pair) OR 
            (address = 8eTvwJkFNpvznsjd3FSQn52Z9VGPBf5HAm2DEhrrAds1 AND chartType = 1m AND currency = pair) OR 
            (address = Hukm1s2D7L76aPrL3cKsyUF2xUnEuqKu7EhD5B4zpfon AND chartType = 1m AND currency = pair) OR 
            (address = 8P6xB2wZDU7VUUqEErRCJXptPg1Rt3h7fHWp8ahxMz9L AND chartType = 1m AND currency = pair) OR 
            (address = 2ZKiAhqmAqifhC86ACygPb5p3wPJKmhvTY1YMuVPnyXF AND chartType = 1m AND currency = pair) OR 
            (address = DKDLEzy5FyKtADZ52jyPBZNhF2QF75Ah1ZZXsdobtG3h AND chartType = 1m AND currency = pair) OR 
            (address = 3rwvMjXjGeZwGuvbtFUJZ4h7HGAzXd4j2vyduohfGW4W AND chartType = 1m AND currency = pair) OR 
            (address = 79aHGA3Cc3haDiWYp6BorCZNUqPyEUHNsmYy2pYbYg2S AND chartType = 1m AND currency = pair) OR 
            (address = 7WwQ1NL3vsJaNTrDHsoRn55yUWieCRYCVqe1vziFZpJM AND chartType = 1m AND currency = pair) OR 
            (address = EwW11k6cn2zjiCg8xxKpNpaApEp1FivD6HopzbZg6Y3B AND chartType = 1m AND currency = pair) OR 
            (address = 6yZcy2NnRDQTqF4jS4JATpovJiy64CTmsAEPBdXB9miE AND chartType = 1m AND currency = pair) OR 
            (address = D8Y9kGSnSKYg5PxxQ9LzD9xSr1gjuvCmXYgmBmCSmYH8 AND chartType = 1m AND currency = pair) OR 
            (address = DRE9MRDmRNEKEFyFS2xp9SJGW7PfR92RF3QmEBEEJXEf AND chartType = 1m AND currency = pair) OR 
            (address = 8Yex55e8vaZ1sBVcX7MYRjn5y6CL7WhHAJbTSnf5raQc AND chartType = 1m AND currency = pair) OR 
            (address = Cs3EhuErHqcvHnaY2sMnxu1zh4fcRkbML79FpX1qdcb AND chartType = 1m AND currency = pair) OR 
            (address = GSWNukXeYGThmvjNxs9kHFisixXPHu6SH3vrpPDAYWNk AND chartType = 1m AND currency = pair) OR 
            (address = BJdMnggCsDGMRWqaDcoy7fa4QkWPfLGFAMxcmUKahCQd AND chartType = 1m AND currency = pair) OR 
            (address = HLkVhiaqv2XDgu9GbWNPhAhnHbmhaooio63ND6V2zcJi AND chartType = 1m AND currency = pair) OR 
            (address = 8E6t4KzRAFMbewdm3Ae2Tw9F3Tnpw7dfUVJBT8xH1VKY AND chartType = 1m AND currency = pair) OR 
            (address = C1CQQCb9X2sxce6oaXNMz12F2FUuGVJeUmae589C3idQ AND chartType = 1m AND currency = pair) OR 
            (address = H3Pwi8vPRchDodiUamSn1RAmvCiVQuiNsGS22cksZZz3 AND chartType = 1m AND currency = pair) OR 
            (address = BEgCfCxhTQYt82HvyNdopVihk8s2SiXks2hapCeD8pAH AND chartType = 1m AND currency = pair) OR 
            (address = 6xwU9THfPtKLaHBqt3coniopNfAhPp3wYKmbpwthcaCa AND chartType = 1m AND currency = pair) OR 
            (address = 51A4KxRcn6xbircvihaFcujNJ7BSDNfX21EqiePRa3jf AND chartType = 1m AND currency = pair) OR 
            (address = Csfpb7RhGN2vcA72RFvVVfU4sfHYxqBQFNY3PVtpmij3 AND chartType = 1m AND currency = pair) OR 
            (address = J9a8aYyY9jdtTZSDLPuc6DydsXur1AYrofzsSv7Nzm2F AND chartType = 1m AND currency = pair) OR 
            (address = CK6BpZDay1uvoYsspLq4ezeDA7FLUfpQWon9ZedY7WaY AND chartType = 1m AND currency = pair) OR 
            (address = 6xVNTt8aKfcywhgNx5PVz6U4tjEPMU8Azz3dvcfg2mv2 AND chartType = 1m AND currency = pair) OR 
            (address = 6L5iEUxazYdsNG7uLmAMwbpCWT9BaSNNeHiq5FtZHQmF AND chartType = 1m AND currency = pair) OR 
            (address = xBa4G6JT1DmTXvE4L7s8DqYuxR781k2ZBUd1DUgmpTa AND chartType = 1m AND currency = pair) OR 
            (address = 3gvd73esnx8gns28BgwH1imCNB4eSmNbUeNsXzuD86mZ AND chartType = 1m AND currency = pair) OR 
            (address = BuutidDBtrEcoaDYBndqLG1SBDy4GGafDVp5GcQ8xvca AND chartType = 1m AND currency = pair) OR 
            (address = 9Hbr4TU6Pmsh6gnuUubLMLabpGDe1bcnwoQego1YcEL4 AND chartType = 1m AND currency = pair) OR 
            (address = CC2JGRD6ufpseoJLTJ3TWLaJS9eYK5rnzYQu3c9fuf1r AND chartType = 1m AND currency = pair) OR 
            (address = 9o2n4P3cJcH7EiC94FZX54DbM5hpYsMHaaAyEocDPPAJ AND chartType = 1m AND currency = pair) OR 
            (address = 5YrSY7qctLDQsTgVjcYCcMsz7P8fKCdiqGLeYMxc3ue7 AND chartType = 1m AND currency = pair) OR 
            (address = HM5rAd83Wc3ZMcZ3hyT8sue1Wwk6Adweu5qepgoNXSK6 AND chartType = 1m AND currency = pair) OR 
            (address = AZYggdGYx7k2tX5Tc41rcwb9buXQ6deAMPeGytwLqyqW AND chartType = 1m AND currency = pair) OR 
            (address = 8j5TGvfL1Yxhf2UUfBnVqiehS7p6FSqkevSb1vwGshzH AND chartType = 1m AND currency = pair) OR 
            (address = 8uSewoGP6XiQoHy3jpnwkiJvNEac8iUcTMkDMDMfKkWJ AND chartType = 1m AND currency = pair) OR 
            (address = BxSq5UDWDrYwUcKgQB9Rs9eBdfVEVyUh7A6xxDta4NSJ AND chartType = 1m AND currency = pair) OR 
            (address = 9K8sEZpkxDeHqf9Sq1eRzc8UDtLU4widRrYFR381crrU AND chartType = 1m AND currency = pair) OR 
            (address = 6n3a9oAT49oi3MZgYPFJi3MknR2cAmPSe4EM9AWEWYJC AND chartType = 1m AND currency = pair) OR 
            (address = BwBxzqCktUHaNMMcWMeisTobvmb6uMj9t7yMq9GWYi22 AND chartType = 1m AND currency = pair) OR 
            (address = 9dBMyt9mttNiNL51u9eJMdJBW2TseiwW8MofCENAtjPo AND chartType = 1m AND currency = pair) OR 
            (address = HvKkoVqMtjN8rp99xkiymyJLBQGL2iKbEaTpdR4ErNG2 AND chartType = 1m AND currency = pair) OR 
            (address = 5zJusjYiXm1pHHBWGUZP6ttcyMkpz4RTv6YZmp27mGVz AND chartType = 1m AND currency = pair) OR 
            (address = 8pjr6yDpbPPh12KzAFEVm35S5jA7eTnBastejU9qASPr AND chartType = 1m AND currency = pair) OR 
            (address = ECyoSiCSEgFHLFYpbUWUpgnN9NyciCj12jidwevEmwvi AND chartType = 1m AND currency = pair) OR 
            (address = 9US126WzJxGf7hc4NZtfk7gEYvQvkLf8hrtYgrxFRtdt AND chartType = 1m AND currency = pair) OR 
            (address = HMNnzDLAeFJx1JeVvY7tMDS1R8sZVf6xDmB4DUqmUoiN AND chartType = 1m AND currency = pair) OR 
            (address = C2L72NYJrWR3kQb6DsT7zMKEhZHX78GFUreEgtMvNHyi AND chartType = 1m AND currency = pair) OR 
            (address = HtTCaK61DjJLYQnWJu8Dfq2KEGZJNrTM3M1hT8sWsAYU AND chartType = 1m AND currency = pair) OR 
            (address = 6btaEBWeGTucPsuXrSBmbdmqdR6S7MaBV4RkzbipHEYu AND chartType = 1m AND currency = pair) OR 
            (address = 6HfaJiUuTXFZEfmdkQSNbvfe6i95Nh2wUVJ5dWMf7gtw AND chartType = 1m AND currency = pair) OR 
            (address = Ty7EVJTxWG87pNiVUhGw5aa9uyLh3eApvUiQ5xXZSYP AND chartType = 1m AND currency = pair)
            `
        }
    }

    connection.send(JSON.stringify(msg))
});

client.connect(util.format(`wss://public-api.birdeye.so/socket/${CHAIN}?x-api-key=${TOKEN}`), 'echo-protocol', "https://birdeye.so");
