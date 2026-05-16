import CryptoJS from 'crypto-js';

const SECRET_KEY = 'frontend-secret-key'; // In a real app, use import.meta.env.VITE_CRYPTO_KEY

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Helper to encrypt all string fields in an object
export const encryptObject = <T extends Record<string, any>>(obj: T): T => {
  const encryptedObj = { ...obj };
  for (const key in encryptedObj) {
    if (typeof encryptedObj[key] === 'string' && key !== '_id' && key !== 'createdAt' && key !== 'updatedAt' && key !== '__v') {
      encryptedObj[key] = encryptData(encryptedObj[key]) as any;
    }
  }
  return encryptedObj;
};

// Helper to decrypt all string fields in an object
export const decryptObject = <T extends Record<string, any>>(obj: T): T => {
  const decryptedObj = { ...obj };
  for (const key in decryptedObj) {
    if (typeof decryptedObj[key] === 'string' && key !== '_id' && key !== 'createdAt' && key !== 'updatedAt' && key !== '__v') {
      try {
        const decrypted = decryptData(decryptedObj[key]);
        if (decrypted) {
          decryptedObj[key] = decrypted as any;
        }
      } catch (error) {
        // If decryption fails, keep original value (might not be encrypted)
        console.error(`Failed to decrypt field ${key}:`, error);
      }
    }
  }
  return decryptedObj;
};
