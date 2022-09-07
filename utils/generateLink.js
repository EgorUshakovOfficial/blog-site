import crypto from 'crypto'; 
const generateLink = ext => {
    const randomName = crypto.randomBytes(16).toString("hex") + ext;
    const link = `http://localhost:4000/images/${randomName}`;
    return { randomName, link }; 
}

export { generateLink }; 