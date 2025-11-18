

# Encryption Activity Reflection





## Part 1: Key Exchange



My Key: 5
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC2b2ZbrtZp+F8J0QjW9dtyZ5Cfv3JpWY3s+G0LPWLmEQqtZFduWV++XuVwJuKVSzK7jgIcYHOYF9oOrVLMbtcUmZJsRtpRU/nH/tUxqwkvtv5qECkZQByFSoJpwtbdHXmdQ/Gkcr+7dCzGS2sEHSHUJvPRqgonU2X1rb6U89SiTlnGwFvuNqzLLYuEh0A8f2+lqfPPVvN+gu5xuZBqJcPKhkJ/o8K3XhZuwhZipL6nZo3xiz1FAq76W23G8K57pFgnRv2znXWS0l3dOZYMwxTFsGXesrvaDyE7ZIi9j5X7UIjRRkyzLYVxpHdbGAKYguaf4TmyBV5ejqt3N2dn2ZZOgToCuWljRML2CIoX6cQ0XzmAswLChms/B1mqJDNYcJBhAeqOA5/zVXid9urPPmwvubrZbH16Db2PT8+Jbcjbeqt0VnWLP/WllR7jQBKsPCVTbXw2LdHkOf/LPYSqXxRD7Zqa0jxFFumQv4sOaRcZnRUIuLiaeCaqd2D9D2gw/gk=

```

My Partner's Key: 4
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCyFymhzqOC1xNkTSBE7+5OYBi7OiL5var0DD1g89ybG4xj+Z3hYC5xEsp7dHqAiCQ+trvpAHq0fe9fW+aFgcBW1uPnv8gHMvK5bIqRLgWyynZKN2X8GFnFKXNtw3faZGeEWKJ7+kclY10ke7zcWl6rdWe3CNtWNHaO44qY76ZFqbsCd4b2on1a0ukYK5GM1QKRfKJegPAp+53fnd8tHBDXpEb9ke/vdmrsgmnD6sejw4vVChvaH533bpcusWshEGUAFoWw9rCieUUgIkGKubjZtD/zEWLQR+KqSvr1mmojdb3gQ53pHj11SFMiA0bTIaViV7CbbnCeO6a2zpRN/fVDaGCiOQqe1GWVvthRGhXCmIxW+0k5BHWiahUpYVAlVXjjhdGzzwykQCDk2SyNaekIY5C/on9ZylMUDjcXe+3OgSzRLK37FcdOSkvuQVYQ1gqlnFJ6ZrAjf7umJKEht8X/qZfw9nArpaLXG3UwLcnRoyXIhQo71mFBRnQR07WimG8=
```


Our initial shared key: 9



## Part 2: Messaging



Complete this table with each of your messages. This should 

include the entire conversation - the messages that you sent

and the messages that you received.



(If you used something other than the caesar cipher here, describe what you did)



| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| qnvvx | hello |  9  |
|Mn Ofhp mtb fwj dtz ytifd?|Hi Jack how are you today?|5|
|U'y iadduqp mnagf sqffuzs yk bdavqof pazq uz ftq zqjf 26:18 eqoazpe, ngf aftqdiueq yk pmk tme sazq iqxx. U efuxx tmhq za upqm itk ftq pqodkbfuaz imezf iadwuzs. Tai purruogxf iuxx ftq gzuf ftdqq fqef nq?
|I'm worried about getting my project done in the next 26:18 seconds, but otherwise my day has gone well. I still have no idea why the decryption wasnt working. How difficult will the unit three test be?
|22|
|Tjp xvi adidnc ocz kmjezxo wt 8vh ojhjmmjr!
|You can finish the project by 8am tomorrow!|21|





## Part 3: Connection to TCP/IP Model



### Application Layer: Turn your message into binary



Everything we've done in this activity takes place in the application layer. By the time the message leaves the application

layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary

looks like.



Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).



This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.



Select the first six characters from this message and copy them here:


<kbd>yDpjmw</kbd>


Using the ASCII table, convert these six characters to binary (if necessary,

include leading zeroes so that each character is 8 bits): 


<kbd>01111001 01000100 01110000 01101010 01101101 01110111</kbd>

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

~This~ ~is~ ~from~ ~before~


## Part 4: Reflection Questions



- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

    Symmetric encryption requires both parties to both have the same [key](#key-definition) whereas with assymetric encryption, both parties generate two keys each. A public key which is uploaded to a publically available place, and a private key which should never be shared with anyone. From this point forward if one party wanted to sent an encrypted message to the other, they would encrypt the message with the other users public key and then post 





- Why is it important that this protocol uses a new key for each message?

    It is important that we never reuse keys and make a new one for each message, because even if an attacker figured out your key for one message they would not be able to decrypt any of the other messages that you send.






- Why is it important that you never share your secret key?

    It is important not to share your private key, because if someone else has it they can decrypt messages sent to you, or even sign messages with your key. One example of an action someone could take after accessing your private key would be to push commits to your Github repository, because Github uses private and public keys to verify the identity of anyone who attempts to push commits to you repository.





- In the transport layer, do these messages use TCP or UDP? Why?

     Because of the use of encryption in this use case, TCP would be used to ensure that transmitted data is not lost or otherwise altered during transport, as with encrypted messages one switched bit will make it impossible to decrypt the message with the key. UDP which does not check for errors in transmitted data and is used for applications such as calls and live video transmission, and would not be reliable enough for an encrypted message which places the accuracy of data over transmission speeds.






- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.

    **Internet Layer** In the internet layer, the TCP Segments and UDP Datagrams are organized into IP packets. This layer is in charge of adressing IP adresses and routing packets across different networks. It determmines the path that the packets take and routes them by assigning headers.

    **Link Layer** The Link Layer is responsible for physical device addresses (MAC adresses), and physically transmitting data between connected devices on a network. It handles the use of different mediums such as fiber optic cables, ethernet, and wifi.





- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see? 

    Even if the protocol successfully encrypts the **content** of the message, an adversary in the middle could still see the headers of the packet (which are unable to be encrypted without retaining functionality) as well as the sender of the message and the recipent. They can also see the size of the packet and the port numbers which along with a knowledge of internet protocols would enable the adversary to identify the type of file being sent. 

## What is a key ~(In~ ~encryption)~

A key is a shared secret or known value between two parties that is used to encrypt a message, for example in a caesar cipher the key is the amount of spaces that the message is shifted by.