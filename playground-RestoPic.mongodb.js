use("RestoPic");

db.getCollection("Productos").insertMany([
    { 
        'nombre': 'Hamburgusa Sencilla',
        'categoria':'Hamburguesa',
        'descripcion':'320 gr Carne Molida, 2 panes Hamburguesa, 1 unidad Cebolla, 2 unidades Tomates, 100 gr Lechuga',
        'cantidad': 30,
        'Precio': 15.00,
    },

    {
        'nombre': 'Hamburgusa Doble',
        'categoria':'Hamburguesa',
        'descripcion':'640 gr Carne Molida, 2 panes Hamburguesa, 1 unidad Cebolla, 2 unidades Tomates, 100 gr Lechuga',
        'cantidad': 30,
        'Precio': 17.00,
    },

    {
        'nombre': 'Hamburgusa de Pollo',
        'categoria':'Hamburguesa',
        'descripcion':'320 gr Pollo Molido, 2 panes Hamburguesa, 1 unidad Cebolla, 2 unidades Tomates, 100 gr Lechuga',
        'cantidad': 30,
        'Precio': 15.00,
    },

    {
        'nombre': 'Hamburgusa de Pollo',
        'categoria':'Hamburguesa',
        'descripcion':'320 gr Pollo Molido, 2 panes Hamburguesa, 1 unidad Cebolla, 2 unidades Tomates, 100 gr Lechuga',
        'cantidad': 30,
        'Precio': 15.00,
    },

    {
        'nombre': 'Hamburgusa Vegetarian',
        'categoria':'Hamburguesa',
        'descripcion':'Hamburguesa compuesta por (zanahoria, berenjena, espinacas, tomate, entre otras), tofu y soja, algas en algunos casos, y con mucha sal.',
        'cantidad': 30,
        'Precio': 10.00,
    },

    {
        'nombre': 'Pizza de Peperoni',
        'categoria':'Pizza',
        'descripcion':'Tomate, Mozzarella, Quesos variados, Embutidos italianos, Embutidos picantes, Aceitunas, Champiñones.',
        'cantidad': 20,
        'Precio': 50.00,
    },

    {
        'nombre': 'Pizza Hawaiana',
        'categoria':'Pizza',
        'descripcion':'150 ml de salsa de tomate con orégano, 60 g de jamón cocido (3 lonchas), 2-3 rodajas de piña natural, 200 g de mozzarella fresca de búfala o de barra rallada.',
        'cantidad': 20,
        'Precio': 43.00,
    },

    {
        'nombre': 'Pizza de Salami y aceitunas',
        'categoria':'Pizza',
        'descripcion':'1 masa de pizza, Salsa de tomate al gusto, Queso mozzarella rallado al gusto, Salami al gusto, Aceitunas negras al gusto.',
        'cantidad': 20,
        'Precio': 47.00,
    },

    {
        'nombre': 'Pizza Margarita',
        'categoria':'Pizza',
        'descripcion':'220 g. de masa de pizza italiana, 90 g. de queso mozzarella, Hojas de albahaca fresca, 100 g. de salsa de tomate natural triturado Sal (al gusto), Una pizca de pimienta negra recién molida, Aceite de oliva virgen extra.',
        'cantidad': 20,
        'Precio': 45.00,
    },


])