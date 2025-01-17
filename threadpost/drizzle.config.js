const config = {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: './drizzle', // Output directory

    dbCredentials: {
        url: 'postgresql://threadpostai_owner:Mcto7zBxn1rd@ep-steep-glade-a53qoqzj.us-east-2.aws.neon.tech/threadpostai?sslmode=require',
        connectionString: 'postgresql://threadpostai_owner:Mcto7zBxn1rd@ep-steep-glade-a53qoqzj.us-east-2.aws.neon.tech/threadpostai?sslmode=require',
    },
};

export default config;