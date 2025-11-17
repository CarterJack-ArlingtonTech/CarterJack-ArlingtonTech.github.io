

# Encryption Activity Reflection





## Part 1: Key Exchange



My Key:
```

```

My Partner's Key:
```

-----BEGIN PUBLIC KEY-----


MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAzPHgLh1OGWyFjgizFgNh


ftWSPQEXFufIZOCxWuyO1JasGB7LVubjkoj+244Da5WxxUvHdAvoaTiL1IzFEVhC


l54NMJktImVzPU7+bmR9KWg8+zglHADdf3R89mqlupiUu0TTOEXLkGXzADZPOqtT


KqM7O+6vl7S96z8VHbLvcCAK08J4aUugWvcWTu+GPYthLCVmBA7AHoI3jqZn7Wmm


L4cdOSEeewJuhBtVcPTd8sX8Ti9H5o0wAZYrUawFOHMLtYhLawbkUH6UksQ3lR8T


q66iWlvD/VvxX7//Dl5bsMcf0iulv9z+pyluF0v+9rYRCo8/C0JKUCnsq56lGy4Y


YOdPvnySQa240bXDhX0CkBI0ebpmxsZqU4sw0Bfff5/o5glnH0oPbipBAWMFxdbK


d7Ko5GFaHl2FpRBv/lf//UKdFvKDme126rj4XqndO8eCl41fpqaqxdSqS998nund


7Ngix4bO8yqX4dzeHCApTt8oSdF2v36NJWF0MW3K56s1AgMBAAE=

-----END PUBLIC KEY-----
```


Our initial shared key:



## Part 2: Messaging



Complete this table with each of your messages. This should 

include the entire conversation - the messages that you sent

and the messages that you received.



(If you used something other than the caesar cipher here, describe what you did)



| Encoded Message | Decoded Message | Key |

| --------------- | --------------- | --- |

|                 |                 |     |

|                 |                 |     |

|                 |                 |     |

|                 |                 |     |





## Part 3: Connection to TCP/IP Model



### Application Layer: Turn your message into binary



Everything we've done in this activity takes place in the application layer. By the time the message leaves the application

layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary

looks like.



Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).



This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.



Select the first six characters from this message and copy them here:


yDpjmw


Using the ASCII table, convert these six characters to binary (if necessary,

include leading zeroes so that each character is 8 bits): 


01111001 01000100 01110000 01101010 01101101 01110111

### Transport Layer: Break your message into packets



Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.



    =========

    Packet 1:




    Source: [Jack]


    Destination: [Adrian]  

    Sequence: 1/3


    Data: [01111001] [01000100]

    =========

    Packet 2:




    Source: [Jack]


    Destination: [Adrian]

    Sequence: 2/3 


    Data: [01110000] [01101010]

    =========

    Packet 3:




    Source: [Jack]


    Destination: [Adrian]

    Sequence: 3/3


    Data: [01101101] [01110111]

    =========



## Part 4: Reflection Questions



- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

Symmetric encryption requires both parties to both have the same [key](#key-definition)





- Why is it important that this protocol uses a new key for each message?







- Why is it important that you never share your secret key?







- In the transport layer, do these messages use TCP or UDP? Why?







- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.







- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other

information can they still see?

## What is a key ~(In~ ~encryption)~

A key is a shared secret or known value between two parties that is used to encrypt a message, for example in a caesar cipher the key is the amount of spaces that the message is shifted by


Input
<div class="container">
<h1>Caesar Cipher Encryptor</h1>
        <label for="inputText">Enter text:</label>
        <textarea id="inputText" rows="5" cols="40" placeholder="Input"></textarea>

        <label for="shiftValue">key:</label>
        <input type="number" id="shiftValue" min="0" max="25" value="">

        <button id="encryptButton">Encrypt</button>

        <h2>Result:</h2>
        </div>
        <p id="outputText"></p>
        <script src="script.js"></script>