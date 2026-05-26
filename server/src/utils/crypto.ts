import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey";

export const encryptData = (data: string) => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (cipherText: string) => {
    try {
        if (!cipherText) return "";
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Decryption error:", error);
        return "";
    }
};