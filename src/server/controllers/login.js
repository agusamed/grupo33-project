const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const uuid = require("uuid");
const { getUserByEmail, saveUser, genOTP, updatePassword } = require('../repository');

/**
 * {email, password}
 */
const loginUser = async (req, res) => {
    try {
        let foundUser = await getUserByEmail(req.body.email)
        //console.log(foundUser)
        if (foundUser) {

            let submittedPass = req.body.password;
            let storedPass = foundUser.password;
            //console.log(bcrypt.hashSync(submittedPass, 10))
            //console.log(storedPass)

            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
            if (passwordMatch) {
                res.send({
                    logged: true, message: "usuario loggeado correctamente",
                    id: foundUser.id,
                    name: foundUser.name,
                    surname: foundUser.surname,
                    role: foundUser.role,
                    email: foundUser.email
                });
            } else {
                res.send({ logged: false, message: "email o contraseña invalidos" });
            }
        }
        else {

            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            await bcrypt.compare(req.body.password, fakePass);
            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
        }
    } catch {
        res.send("Internal server error");
    }
}


const registrationUser = async (req, res) => {
    try {
        let foundUser = await getUserByEmail(req.body.email);
        if (!foundUser) {
            let hashPassword = await bcrypt.hash(req.body.password, 10);
            let newUser = {
                id: uuid.v4(),
                role: req.body.role,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: hashPassword,
                phoneNumber: req.body.phoneNumber
            };
            await saveUser(newUser)
            res.send({ register: true, message: 'El usuario se ha registrado correctamente' });
        } else {
            res.send({ register: false, statusCode: 500, message: 'El usuario ya se encuentra registrado' });
        }
    } catch {
        res.send("Internal server error");
    }
}

const sendOTP = async (req, res) => {
    try {
        let foundUser = await getUserByEmail(req.body.email);
        if (foundUser) {
            let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, digits: true, lowerCaseAlphabets: false });
            foundUser.otp = otp;
            console.log('Data from User', foundUser);
            await genOTP(foundUser.id, otp)

            res.send({ sended: true, message: 'Se ha enviado correctamente' });
        } else {
            res.send({ sended: false, statusCode: 500, message: 'Revise el email ' });
        }
    } catch {
        res.send("Internal server error");
    }
}

const resetPassword = async (req, res) => {
    try {
        let foundUser = await getUserByEmail(req.body.email);
        console.log(foundUser)
        if (foundUser) {
            console.log('entro al primer if')
            if (foundUser.otp == req.body.otp) {
                console.log('entro al 2do if')
                let hashPassword = await bcrypt.hash(req.body.password, 10);

                foundUser.password = hashPassword;
                foundUser.otp = '';
                console.log('User changed', foundUser);
                await updatePassword(foundUser.id, hashPassword);
                res.send({ reset: true, message: 'El cambio se ha realizado exitosamente' });
            } else {
                res.send({ reset: false, statusCode: 500, message: 'No se ha podido realizar el cambio' });
            }
        }
    } catch {
        res.send("Internal server error");
    }
}

module.exports = { loginUser, registrationUser, resetPassword, sendOTP }