# Setup file template to upload data to MongoDB Atlas
mongoimport --uri 'mongodb+srv://sp72:Tummy@qkart-node.flbya.mongodb.net/qkart?retryWrites=true&w=majority' --drop --collection users --file data/export_qkart_users.json
mongoimport --uri 'mongodb+srv://sp72:Tummy@qkart-node.flbya.mongodb.net/qkart?retryWrites=true&w=majority' --drop --collection products --file data/export_qkart_products.json