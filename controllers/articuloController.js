const models = require("../models");

exports.add = async (req, res, next) => {
  try {
    const registro = await models.Articulo.create(req.body);
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).send({
      message: "Error >>> ",
    });
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const registro = await models.Articulo.findAll({
      include:[ {
        model: models.Categoria,
        as: 'categoria',
        attributes: ["nombre"]
      },
    ]
    });
    if (registro) {
      res.status(200).json(registro);
    } else {
      res.status(404).send({ message: "No hay cateogrias en DB" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error >>> ",
    });
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const registro = await models.Articulo.update(
      {
        categoriaId: req.body.categoria,
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).send({ message: "Error" });
    next(error);
  }
};

exports.activate = async (req, res, next) => {
  try {
    const registro = await models.Articulo.update(
      { estado: 1 },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).send({ message: "Error" });
    next(error);
  }
};

exports.deactivate = async (req, res, next) => {
  try {
    const registro = await models.Articulo.update(
      { estado: 0 },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).send({ message: "Error" });
    next(error);
  }
};
