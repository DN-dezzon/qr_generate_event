const db = require('./utils/database').pool;

const findDetails = async (id, res) => {
    const length = 0;
    query = "SELECT * FROM persons WHERE acc_no = ?";
    values = [id];
    db.query(query, values, (err, result) => {
        console.log(result.length);
        length = result.length;
    });
    return length;
}

const getAll = async (reg, res) => {
   try{ console.log("zzzz")
    const conn = await db.getConnection();
    const [result, fields1] = await conn.query('SELECT * FROM persons'); 
    return res.json({ success: true,result}); 
}catch(err){console.log(err)}
}

module.exports = {
    findDetails,
    getAll
};
