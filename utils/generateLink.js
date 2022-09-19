import crypto from 'crypto'; 
const generateLink = ext => {
    const randomName = crypto.randomBytes(16).toString("hex") + ext ;
    const link = `"https://blog-site1234.herokuapp.com/images/${randomName}`;
    return { randomName, link }; 
}

export { generateLink }; 