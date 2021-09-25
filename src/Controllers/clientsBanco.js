import connect from "../command/connections";
// la importo pero no la usando por que los datos son locales

export const getDatosCliete = async (req, res) => {

    try {
        let fs = require('fs');
        //esto es llamar a la conexion pero no lo estoy usando
        // const connection = await connect();
        fs.readFile("src/data/data.json",
            ((err, contenido) => {


                const data = JSON.parse(contenido);

                res.status(200).json({
                    success: true,
                    message: "data success",
                    data: data
                });

            }))

    } catch (error) {
        console.log('Algo ha ido  mal:' + error.message);
    }
}
