import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10)

export function hashPassword(password) {
    const hashPassword = bcrypt.hashSync(password, salt)
    return hashPassword
}

export function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}