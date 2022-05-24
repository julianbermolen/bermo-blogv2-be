const userCtrl = {};

const db = require('../database/conexion');

userCtrl.getPosts = async (req, res) => {
    
    let user = await db.query('SELECT * FROM posts',async (err,resp) => {
        if(err){
            console.log({"status":"error","msg":"Error de base de datos"})
        }else{
            res.json({"Posts":resp});
        }
    });

}

userCtrl.getPost = async (req,res) => {
    let user = await db.query('SELECT * FROM posts WHERE id=?',[req.params.id], async(err,resp) => {
        if(err){
            res.json(err);
        } else {
            res.json({"Post":resp});
        }
    })
}

userCtrl.savePosts = async (req,res) => {
    let id = null;
    let titulo = req.body.titulo;
    let file_name = req.body.file_name;
    let img_name = req.body.img_name;
    let created_at = req.body.created_at;
    let updated_at = req.body.updated_at;

    const newPost = {
        id,
        titulo,
        file_name,
        img_name,
        created_at,
        updated_at

    }

    let query = await db.query('INSERT INTO posts SET ?',[newPost], async (err,resp) => {
        if(err){
            console.log(err);
        } else {
            res.json("Guardado correctamente");
        }
    });


}


module.exports = userCtrl;