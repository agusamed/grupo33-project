const { runDatabase } = require("./client");

const getUserByEmail = async (email) => {
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .findOne({ email: email }))
};

const getUserById = async (id) => {
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .findOne({ id: id }))
};

const saveUser = async (user) => {
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .insertOne(user))
}

const updateTeacherCourse = async (id, created) => {
    await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .updateOne({ id }, { $unset: { created: "" } }))
    await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .updateOne({ id }, { $set: { created: created } }))
}

const updateUserHires = async (id, hired) => {
    var myquery = { id };
    var newvalues = { $set: { hired: hired } };
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .updateOne(myquery, newvalues))
}

const updateUserRates = async (id, rates) => {
    var myquery = { id };
    var unset = {$unset: {rates: "" }}
    var newvalues = { $set: { rates: rates } };
    await runDatabase(async (client) => await client.db('agusdb')
        .collection('classes')
        .updateOne(myquery, unset));
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('classes')
        .updateOne(myquery, newvalues))
}

const updateUserAverage = async (id, averageRate) => {
    var myquery = { id };
    var unset = {$unset: {averageRate: "" }}
    var newvalues = { $set: { averageRate: averageRate } };
    await runDatabase(async (client) => await client.db('agusdb')
        .collection('classes')
        .updateOne(myquery, unset));
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('classes')
        .updateOne(myquery, newvalues))
}

const saveClass = async (_class) => {
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('classes')
        .insertOne(_class))
}

const getClassById = async (id) => {
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('classes')
        .findOne({ id: id }))
};

const getClasses = async () => {
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('classes').find({}).toArray()
    )
};

const genOTP = async (id, otp) => {
    var myquery = { id };
    var newvalues = { $set: { otp: otp } };
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .updateOne(myquery, newvalues))
}

const updatePassword = async (id, password) => {
    var myquery = { id };
    var unset = {$unset: {otp: "" }}
    var newvalues = { $set: { password: password } };
    await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .updateOne(myquery, unset));
    return await runDatabase(async (client) => await client.db('agusdb')
        .collection('users')
        .updateOne(myquery, newvalues))
}

module.exports = {
    getUserByEmail,
    getUserById,
    saveUser,
    updateUserHires,
    updateUserRates,
    updateUserAverage,
    saveClass,
    updateTeacherCourse,
    getClassById,
    getClasses,
    genOTP,
    updatePassword
}