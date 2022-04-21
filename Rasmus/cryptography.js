const message = 'Test new encryption'

function encrypt(message) {
    const {createCipheriv, randomBytes} = require('crypto');
    
    const key = randomBytes(32);
    const iv = randomBytes(16);

    const cipher = createCipheriv('aes256', key, iv);

    const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
    console.log(`Encrypted message: ${encryptedMessage}`);

    var object = { 
        key: key, 
        iv: iv, 
        cipheredMessage: encryptedMessage
    }
    return object;
}

function decrypt(obj) {

    const {createDecipheriv} = require('crypto');

    const decipher = createDecipheriv('aes256', obj.key, obj.iv);
    const decryptedMessage = decipher.update(obj.cipheredMessage, 'hex', 'utf-8') + decipher.final('utf8');
    console.log(`Deciphered message: ${decryptedMessage.toString('utf-8')}`);
}


var obj = encrypt(message);
decrypt(obj);


/*
let ht = new hashTable();

he
*/