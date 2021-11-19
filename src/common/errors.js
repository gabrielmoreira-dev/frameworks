exports.serverError = {
    status: 500,
    msg: 'Ocorreu um erro no sistema'
}

exports.reqError = {
    status: 400,
    msg: 'Parâmetro obrigatório não informado'
}

exports.parameterError = (par) => {
    return {
        status: 400,
        msg: `Parâmetro obrigatório não informado: ${par}`
    }
}

exports.authError = {
    status: 401,
    msg: 'Usuário não informado'
}