const uuid = require("uuid");
const {
    saveClass,
    updateTeacherCourse,
    getClasses,
    getClassById,
    getUserById,
    updateUserHires,
    updateUserRates,
    updateUserAverage } = require('../repository');

/**
 *  {
    name,
    duration,
    frequency,
    cost,
}
 */
const createClass = async (req, res) => {
    try {
        //update teacher created classes
        let foundUser = await getUserById(req.body.teacher);
        if (foundUser) {
            const classToCreate = req.body
            classToCreate.id = uuid.v4()
            if (foundUser.created === undefined) foundUser.created = []
            foundUser.created.push(classToCreate.id)
            //save class
            await saveClass(classToCreate);
            //update teacher courses
            await updateTeacherCourse(foundUser.id, foundUser.created)
            res.send({ message: "ok" });
        }

    } catch {
        res.send({ message: "error" });
    }
}

const getHiredClasses = async (req, res) => {
    try {
        //recibe el id del usuario y retorna el nombre de las clases contratadas
        let foundUser = await getUserById(req.query.id);
        if (foundUser) {
            res.send({ hired: foundUser.hired });
        } else {
            res.send({ message: "no se encontro nusuario cone se nombre" });
        }
    } catch {
        res.send("Internal server error");
    }
}

/**
 * { userId, classId}
 */
const hireClass = async (req, res) => {
    try {
        let foundUser = await getUserById(req.body.userId);
        //se podria chequear que ya no tenga contratada la clase..
        if (foundUser) {
            if (foundUser.hired === undefined) foundUser.hired = []
            foundUser.hired.push(req.body.classId)
            await updateUserHires(foundUser.id, foundUser.hired)
            res.send({ message: "se dio de alta en el curso" });
        } else {
            res.send({ message: "no se encontro usuario asociado a ese nombre" });
        }
    } catch {
        res.send("Internal server error");
    }
}

/**
 * { email, className, rate}
 */
const rateClass = async (req, res) => {
    try {
        let foundClass = await getClassById(req.body.classId);
        if (foundClass) {
            let foundRate = '';
            console.log(req.body.userId)
            foundRate = foundClass.rates.find((data) => req.body.userId == data.userId)
            console.log(foundRate)
            if (foundRate) {
                console.log('entro si foundRate tiene algo');
                foundRate.rate = Number(req.body.rate);
                await updateUserRates(foundClass.id, foundRate)
                console.log(foundClass.rates);
            } else {
                console.log('voy por el else');
                rate = Number(req.body.rate)
                foundClass.rates.push({ userId: req.body.userId, rate: rate })
                console.log(foundClass.rates)
                await updateUserRates(foundClass.id, foundClass.rates)
            }
            let totalRate = foundClass.rates.reduce((sum, value) => (sum + value.rate), 0)
            totalRate = totalRate / foundClass.rates.length;
            totalRate;
            await updateUserAverage(foundClass.id, totalRate)
            console.log(foundClass)
            res.send({ message: "califico correctamente esta clase" });
        } else {
            res.send({ message: "no se encontro ninguna clase que se llame asi" });
        }
    } catch {
        res.send("Internal server error");
    }
}

const obtainClasses = async (req, res) => {

    const { id, role, type } = req.query

    if (role === 'student') {
        let foundUser = await getUserById(id);
        let classes = []
        if (foundUser) {
            let allClases = await getClasses();
            //match classes that user has hired
            if (allClases)
                allClases.forEach((data) => {
                    if (foundUser.hired?.includes(data.id) && data.state === 'active' && type === 'exclusive' && checkFilters(data, req.query)) {
                        //caso solo las que contrate
                        classes.push(data)
                    } else if (!foundUser.hired?.includes(data.id) && data.state === 'active' && type !== 'exclusive' && checkFilters(data, req.query)) {
                        //todo lo que este activo y no he contratado
                        classes.push(data)
                    }

                });
        }
        res.send(classes);
    } else if (role === 'teacher') {
        let foundUser = await getUserById(id);
        let classes = []
        if (foundUser) {
            let allClases = await getClasses();
            //match classes that user has created
            if (allClases)
                allClases.forEach((data) => {
                    if (foundUser.created?.includes(data.id)
                        && data.state === 'active' && type === 'exclusive' && checkFilters(data, req.query)) {
                        //case exclusive: only class created by me and active
                        classes.push(data)
                    } else if (foundUser.created?.includes(data.id) && type !== 'exclusive' && checkFilters(data, req.query)) {
                        //all classes that user creates no matter state
                        classes.push(data)
                    }

                });
        }
        res.send(classes);
    } else {
        //usuario no loggeado mostramos todos los cursos activos
        let classes = []
        let allClases = await getClasses();
        allClases.forEach((data) => {
            if (data.state === 'active' && checkFilters(data, req.query))
                classes.push(data)
        })
        res.send(classes);
    }
}

const checkFilters = (data, query) => {
    const { typeClass, topic, frequency, rate } = query
    //console.log(query)
    let filtersOk = true

    if (typeClass !== 'undefined' && typeClass !== data.typeClass) filtersOk = false
    if (topic !== 'undefined' && topic !== data.topic) filtersOk = false
    if (frequency !== 'undefined' && frequency !== data.frequency) filtersOk = false
    if (rate !== 'undefined' && +rate !== data.averageRate) filtersOk = false

    if (!typeClass && !topic && !frequency && !rate) filtersOk = true
    //console.log(data.topic + ' ' + rate + ' ' + data.topic + ' ' + filtersOk)
    return filtersOk
}


module.exports = { createClass, rateClass, hireClass, getHiredClasses, obtainClasses }