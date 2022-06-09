const Database = require('../db/config')

module.exports={
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let isRoom = true
        while(isRoom){
             /* Cria o número da sala randomicamente */
            for(let i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() *10).toString() :
                roomId += Math.floor(Math.random() *10).toString()
            }

            /* Verificar se o numero da sala já existe */
            const roomsIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsIds.some(id => id === roomId)

            if(!roomsIds){
                /* Adiciona a nova sala no banco de dados */
                await db.run(`INSERT INTO rooms (
                    id, pass
                )VALUES(
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
        }
        await db.close()
        res.redirect(`/room/${roomId}`)
    }
}