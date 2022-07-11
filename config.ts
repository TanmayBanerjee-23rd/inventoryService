const config = {
    dev: {
        DB_URI: "mongodb://localhost:27017/inventory"
    }
};

export default config[ process.env.ENV || "dev" ];