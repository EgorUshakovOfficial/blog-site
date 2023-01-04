import crypto from 'crypto';

const generateLink = ext => {
    const randomName = crypto.randomBytes(16).toString("hex") + ext ;
    const link = `${process.env.HOST}/images/${randomName}`;
    return { randomName, link };
}

export { generateLink };